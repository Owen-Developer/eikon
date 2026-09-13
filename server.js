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




////////////////////////// REUSABLE FUNCTIONS //////////////////////////






////////////////////////// APIS ROUTES //////////////////////////
app.post("/api/bible", async (req, res) => {
    let { translation, book, chapter } = req.body;

    const response = await fetch(
        `https://api.youversion.com/v1/bibles/${translation}/passages/${book}.${chapter}?format=html&include_headings=true`,
        {
            headers: {
                "X-YVP-App-Key": process.env.YOUVERSION_KEY
            }
        }
    );
    const data = await response.json();

    return res.json({ data: data });
});





app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});