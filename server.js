const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();
const cors = require('cors');
const crypto = require('crypto');
const e = require('express');
const OpenAI = require('openai');
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/*
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
db.query('SELECT 1', (err, results) => {
    if (err) console.error('Error running query:', err);
    else console.log('Database is working');
});

const store = new MySQLStore({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT 
});

app.use(session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, 
        secure: false,       // HTTPS only
        sameSite: "lax"    // allow cross-site cookies
    }
}));
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, "docs")));




/*//////////////////////// REUSABLE FUNCTIONS /////////////////////////*/
function getBookSlug(fullName){
    const bibleBooks = [
  { name: "Genesis", id: "GEN" },
  { name: "Exodus", id: "EXO" },
  { name: "Leviticus", id: "LEV" },
  { name: "Numbers", id: "NUM" },
  { name: "Deuteronomy", id: "DEU" },
  { name: "Joshua", id: "JOS" },
  { name: "Judges", id: "JDG" },
  { name: "Ruth", id: "RUT" },
  { name: "1 Samuel", id: "1SA" },
  { name: "2 Samuel", id: "2SA" },
  { name: "1 Kings", id: "1KI" },
  { name: "2 Kings", id: "2KI" },
  { name: "1 Chronicles", id: "1CH" },
  { name: "2 Chronicles", id: "2CH" },
  { name: "Ezra", id: "EZR" },
  { name: "Nehemiah", id: "NEH" },
  { name: "Esther", id: "EST" },
  { name: "Job", id: "JOB" },
  { name: "Psalm", id: "PSA" },
  { name: "Proverbs", id: "PRO" },
  { name: "Ecclesiastes", id: "ECC" },
  { name: "Song of Solomon", id: "SNG" },
  { name: "Isaiah", id: "ISA" },
  { name: "Jeremiah", id: "JER" },
  { name: "Lamentations", id: "LAM" },
  { name: "Ezekiel", id: "EZK" },
  { name: "Daniel", id: "DAN" },
  { name: "Hosea", id: "HOS" },
  { name: "Joel", id: "JOL" },
  { name: "Amos", id: "AMO" },
  { name: "Obadiah", id: "OBA" },
  { name: "Jonah", id: "JON" },
  { name: "Micah", id: "MIC" },
  { name: "Nahum", id: "NAM" },
  { name: "Habakkuk", id: "HAB" },
  { name: "Zephaniah", id: "ZEP" },
  { name: "Haggai", id: "HAG" },
  { name: "Zechariah", id: "ZEC" },
  { name: "Malachi", id: "MAL" },

  { name: "Matthew", id: "MAT" },
  { name: "Mark", id: "MRK" },
  { name: "Luke", id: "LUK" },
  { name: "John", id: "JHN" },
  { name: "Acts", id: "ACT" },
  { name: "Romans", id: "ROM" },
  { name: "1 Corinthians", id: "1CO" },
  { name: "2 Corinthians", id: "2CO" },
  { name: "Galatians", id: "GAL" },
  { name: "Ephesians", id: "EPH" },
  { name: "Philippians", id: "PHP" },
  { name: "Colossians", id: "COL" },
  { name: "1 Thessalonians", id: "1TH" },
  { name: "2 Thessalonians", id: "2TH" },
  { name: "1 Timothy", id: "1TI" },
  { name: "2 Timothy", id: "2TI" },
  { name: "Titus", id: "TIT" },
  { name: "Philemon", id: "PHM" },
  { name: "Hebrews", id: "HEB" },
  { name: "James", id: "JAS" },
  { name: "1 Peter", id: "1PE" },
  { name: "2 Peter", id: "2PE" },
  { name: "1 John", id: "1JN" },
  { name: "2 John", id: "2JN" },
  { name: "3 John", id: "3JN" },
  { name: "Jude", id: "JUD" },
  { name: "Revelation", id: "REV" }
];

    return bibleBooks.find(book => book.name == fullName).id;
}






/*///////////////////////// APIS ROUTES /////////////////////////*/
app.post("/api/bible", async (req, res) => {
    let { translation, book, chapterIdx } = req.body;

    const bookResponse = await fetch(
        `https://api.youversion.com/v1/bibles/${translation}/books/${book}/chapters`,
        {
            headers: {
                "X-YVP-App-Key": process.env.YOUVERSION_KEY
            }
        }
    );
    const wholeBook = await bookResponse.json();

    const response = await fetch(
        `https://api.youversion.com/v1/bibles/${translation}/passages/${book}.${chapterIdx}?format=html&include_headings=true`,
        {
            headers: {
                "X-YVP-App-Key": process.env.YOUVERSION_KEY
            }
        }
    );
    const chapter = await response.json();

    return res.json({ chapter: chapter, amountOfChapters: wholeBook.data.length });
});

app.post("/api/get-verses", async (req, res) => {
    const { translation, book, chapter, verses } = req.body;

    let wholeVerse = "";
    for(const verse of verses){
        const response = await fetch(
            `https://api.youversion.com/v1/bibles/${translation}/passages/${book}.${chapter}.${verse}`,
            {
                headers: {
                    "X-YVP-App-Key": process.env.YOUVERSION_KEY
                }
            }
        );
        const data = await response.json();

        wholeVerse += data.content + " ";
    }

    return res.json({ verse: wholeVerse });
});

app.post("/api/get-references", async (req, res) => {
    const { prompt, translation } = req.body;

    const response = await openaiClient.responses.create({
        model: "gpt-4.1-mini",
        input: prompt,
        text: {
            format: {
                type: "json_schema",
                name: "cross_references",
                strict: true,
                schema: {
                    type: "object",
                    properties: {
                        references: {
                            type: "array",
                            minItems: 5,
                            maxItems: 5,
                            items: {
                                type: "object",
                                properties: {
                                    book: {
                                        type: "string"
                                    },
                                    chapter: {
                                        type: "integer"
                                    },
                                    verses: {
                                        type: "string"
                                    }
                                },
                                required: ["book", "chapter", "verses"],
                                additionalProperties: false
                            }
                        }
                    },
                    required: ["references"],
                    additionalProperties: false
                }
            }
        }
    });

    let result = JSON.parse(response.output_text);

    for(const ref of result.references){
        const response = await fetch(
            `https://api.youversion.com/v1/bibles/${translation}/passages/${getBookSlug(ref.book)}.${ref.chapter}.${ref.verses}`,
            {
                headers: {
                    "X-YVP-App-Key": process.env.YOUVERSION_KEY
                }
            }
        );
        const data = await response.json();

        ref.verseTxt = data.content;
    }

    return res.json({ data: result });
});

app.post("/api/get-greek-verse", async (req, res) => {
    const { prompt } = req.body;

    const response = await openaiClient.responses.create({
        model: "gpt-4.1-mini",
        input: prompt,
        text: {
            format: {
                type: "json_object"
            }
        }
    });

    return res.json({ greek: JSON.parse(response.output_text).greek });
});

app.post("/api/analyse-greek-word", async (req, res)=> {
    const { prompt } = req.body;

    const responseFormat = {
        type: "json_schema",
        name: "greek_word_info",
        strict: true,
        schema: {
            type: "object",
            properties: {
                transliteration: {
                    type: "string"
                },
                english: {
                    type: "string"
                },
                definition: {
                    type: "string"
                },
                strongs: {
                    type: "string"
                },
                parsing: {
                    type: "string"
                },
                occurrences: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            book: {
                                type: "string"
                            },
                            chapter: {
                                type: "integer"
                            },
                            verse: {
                                type: "integer"
                            }
                        },
                        required: [
                            "book",
                            "chapter",
                            "verse"
                        ],
                        additionalProperties: false
                    }
                }
            },
            required: [
                "transliteration",
                "english",
                "definition",
                "strongs",
                "parsing",
                "occurrences"
            ],
            additionalProperties: false
        }
    };

    /*
    const response = await openaiClient.responses.create({
        model: "gpt-4.1-mini",
        input: prompt,
        text: {
            format: responseFormat
        }
    });
    let analysis = JSON.parse(response.output_text);
    */

    let analysis = responseFormat;

    return res.json({ analysis: analysis });
});





app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});