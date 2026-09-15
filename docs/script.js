

let url = "";
let currentBook = "Genesis";
let currentChapterIdx = 0;

const chapterHeadings = [
    {
        "name": "Genesis",
        "headings": [
        "The Creation",
        "The Fall of Man",
        "Cain and Abel",
        "The Generations of Adam",
        "The Wickedness of Man",
            "The Flood",
            "The Floodwaters",
            "The Covenant with Noah",
            "The Nations from Noah",
            "The Tower of Babel",
        "The Tower of Babel",
        "The Call of Abram",
        "Abram in Egypt",
        "Abram and Lot Separate",
        "God's Covenant with Abram",
                "The Birth of Ishmael",
        "The Covenant of Circumcision",
        "The Destruction of Sodom and Gomorrah",
        "Abraham and Abimelech",
        "The Birth of Isaac",
                "The Birth of Isaac",
        "The Binding of Isaac",
        "The Burial of Sarah",
        "Isaac and Rebekah",
        "Jacob and Esau",
                "Isaac and Abimelech",
        "Jacob Receives Isaac's Blessing",
        "Jacob's Ladder",
        "Jacob Marries Leah and Rachel",
        "Jacob's Children and Prosperity",
                "Jacob Flees from Laban",
        "Jacob and Laban's Covenant",
        "Jacob Wrestles with God",
        "Jacob and Esau Reconcile",
        "Dinah and Shechem",
                "The Generations of Esau",
        "Joseph's Dreams",
        "Judah and Tamar",
        "Joseph Sold into Egypt",
        "Joseph in Potiphar's House",
                "Joseph Interprets Pharaoh's Dreams",
        "Joseph's Brothers Go to Egypt",
        "Joseph's Brothers Return to Egypt",
        "Joseph Reveals Himself",
        "Joseph's Brothers Return to Canaan",
                "Jacob Goes to Egypt",
        "Jacob Blesses Pharaoh and His Sons",
        "Jacob Blesses His Sons",
        "The Death of Jacob",
        "The Death of Joseph",
        ]
    },

    {
        "name": "Exodus",
        "headings": [
    "The Israelites Oppressed in Egypt",
    "The Birth of Moses",
    "Moses and the Burning Bush",
    "Moses Performs Signs",
    "Moses Returns to Egypt",
        "God Renews His Covenant",
    "The Miraculous Staff",
    "The Ten Plagues Begin",
    "The Plague of Frogs",
    "The Plague of Flies",
        ]
    },


];

const translations = [
    {
        "name": "ASV",
        "id": "12"
    },
    {
        "name": "MSB",
        "id": "4754"
    },
    {
        "name": "WEBUS",
        "id": "206"
    },
    {
        "name": "BSB",
        "id": "3034"
    },
    {
        "name": "GNV",
        "id": "2163"
    },
]
let currentTranslation = translations[0];



document.querySelector(".bib-left-open").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.add("bib-left-show");
});
document.querySelector(".bib-right-open").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.add("bib-right-show");
});
document.querySelector("i.bib-left-xmark").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.remove("bib-left-show");
    document.querySelector(".bib-opt").style.right = "352px";
});
document.querySelector("i.bib-right-close").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.remove("bib-right-show");
    document.querySelector(".bib-opt").style.right = "55px";
});
document.querySelector(".bib-header-settings").addEventListener("click", () => {
    document.querySelector(".bib-opt").style.opacity = "1";
    document.querySelector(".bib-opt").style.pointerEvents = "auto";
});
document.querySelector("i.bib-opt-close").addEventListener("click", () => {
    document.querySelector(".bib-opt").style.opacity = "0";
    document.querySelector(".bib-opt").style.pointerEvents = "none";
});
document.querySelector("i.bib-book-chev").addEventListener("click", () => {
    if(document.querySelector("i.bib-book-chev").style.transform != "rotate(-180deg)"){
        document.querySelector(".bib-left-drop").style.opacity = "1";
        document.querySelector(".bib-left-drop").style.pointerEvents = "auto";
        document.querySelector("i.bib-book-chev").style.transform = "rotate(-180deg)";
    } else {
        document.querySelector(".bib-left-drop").style.opacity = "0";
        document.querySelector(".bib-left-drop").style.pointerEvents = "none";
        document.querySelector("i.bib-book-chev").style.transform = "rotate(0deg)";
    }
});
document.querySelector("i.bib-mid-down").addEventListener("click", () => {
    if(document.querySelector("i.bib-mid-down").style.transform != "rotate(-180deg)"){
        document.querySelector(".bib-header-drop").style.opacity = "1";
        document.querySelector(".bib-header-drop").style.pointerEvents = "auto";
        document.querySelector("i.bib-mid-down").style.transform = "rotate(-180deg)";
    } else {
        document.querySelector(".bib-header-drop").style.opacity = "0";
        document.querySelector(".bib-header-drop").style.pointerEvents = "none";
        document.querySelector("i.bib-mid-down").style.transform = "rotate(0deg)";
    }
});
document.querySelectorAll(".bib-left-search input").forEach((input, idx) => {
    input.addEventListener("input", () => {
        document.querySelectorAll(".bib-left-drop-ul")[idx].querySelectorAll(".bib-left-drop-li").forEach(li => {
            li.classList.add("none");
            if(li.textContent.toLowerCase().includes(input.value.toLowerCase())){
                li.classList.remove("none");
            }

            if(input.value == ""){
                li.classList.remove("none");
            }
        });
    });
});
document.querySelector(".bib-opt-range").addEventListener("change", () => {
    document.querySelector(".bib-mid-title").style.fontSize = Number(46 * document.querySelector(".bib-opt-range").value) + "px";
    document.querySelectorAll(".p, .d, .q1, .q2").forEach(verse => verse.style.fontSize = Number(20 * document.querySelector(".bib-opt-range").value) + "px");
    document.querySelector(".s1").style.fontSize = Number(22 * document.querySelector(".bib-opt-range").value) + "px";
});
document.querySelector(".bib-opt-family").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-family").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        if(idx == 0){
            //document.querySelectorAll("div, span").forEach(el => el.classList.remove("font-sans"));
            document.querySelectorAll(".p, .d, .q1, .q2, .s1, .bib-mid-title").forEach(el => el.classList.remove("font-sans"));
        } else {
            //document.querySelectorAll("div, span").forEach(el => el.classList.add("font-sans"));
            document.querySelectorAll(".p, .d, .q1, .q2, .s1, .bib-mid-title").forEach(el => el.classList.add("font-sans"));
        }
    });
});
document.querySelector(".bib-opt-spacing").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-spacing").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        document.querySelectorAll(".p, .d, .q1, .q2").forEach(verse => verse.style.lineHeight = 1.25 + (.25 * idx));
    });
});
document.addEventListener("click", (e) => {
    document.querySelectorAll(".bib-book-drop").forEach((drop, idx) => {
        if(!drop.contains(e.target) && !e.target.classList.contains("drop-chev")){
            drop.style.opacity = "0";
            drop.style.pointerEvents = "none";
            document.querySelectorAll(".drop-chev")[idx].style.transform = "rotate(0deg)";
        }
    });

    if(document.querySelector(".bib-opt").style.opacity == "1" && !document.querySelector(".bib-opt").contains(e.target) && !e.target.classList.contains("bib-header-settings")){
        console.log("w");
        document.querySelector(".bib-opt").style.opacity = "0";
        document.querySelector(".bib-opt").style.pointerEvents = "none";
    }
});

async function loadBible(){
    const dataToSend = { translation: currentTranslation.id, book: getBookSlug(currentBook), chapterIdx: currentChapterIdx + 1 };
    try {
        const response = await fetch(url + `/api/bible`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dataToSend), 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return;
        }

        const data = await response.json();
        let chapter = data.chapter;
        let amountOfChapters = data.amountOfChapters;

        document.querySelector(".bib-mid-title").innerHTML = currentBook + " " + Number(currentChapterIdx + 1) + "<span></span>";
        document.querySelector(".bib-txt").innerHTML = chapter.content;
        document.querySelector(".bib-book-txt").textContent = currentBook;
        document.querySelector(".bib-chap-txt").textContent = Number(currentChapterIdx + 1) + " Chapters";
        document.querySelector(".bib-header-mid-txt").textContent = currentBook + " " + Number(currentChapterIdx + 1);

        document.querySelectorAll(".bib-left-box").forEach(box => {
            document.querySelector(".bib-left-col").removeChild(box);
        });

        chapterHeadings.find(book => book.name == currentBook).headings.forEach((heading, idx) => {
            let newBox = document.createElement("div");
            newBox.classList.add("bib-left-box");
            newBox.innerHTML = `
                <span>${idx + 1}</span>
                <div>${heading}</div>
            `;
            if(idx == currentChapterIdx){
                newBox.classList.add("bib-left-box-active");
            }
            document.querySelector(".bib-left-col").appendChild(newBox);

            newBox.addEventListener("click", () => {
                currentChapterIdx = idx;
                loadBible();
            });
        });

        resetChapterArrows();

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
loadBible();

document.querySelectorAll(".bib-left-drop-li").forEach(li => {
    li.addEventListener("click", () => {
        currentBook = li.textContent;
        currentChapterIdx = 0;
        loadBible();

        document.querySelectorAll(".drop-chev").forEach(chev => {
            chev.click();
        });
    });
});

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
  { name: "Psalms", id: "PSA" },
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

function resetChapterArrows(){
    document.querySelectorAll(".bib-mid-chev").forEach((arrow, idx) => {
        arrow.classList.remove("inactive-el");
        
        if(idx == 0 && currentChapterIdx == 0){
            arrow.classList.add("inactive-el");
        }

        if(idx ==  1 && currentChapterIdx == chapterHeadings.find(book => book.name == currentBook).headings.length - 1){
            arrow.classList.add("inactive-el");
        }
    });
}

document.querySelectorAll(".bib-mid-chev").forEach((chev, idx) => {
    chev.addEventListener("click", () => {
        if(idx == 0){
            currentChapterIdx--;
        } else {
            currentChapterIdx++;
        }
        loadBible();
    });
});

function initializeTranslations(){
    translations.forEach(tran => {
        let newPill = document.createElement("div");
        newPill.classList.add("bib-opt-pill");
        newPill.innerHTML = tran.name;

        document.querySelector(".bib-opt-tran").appendChild(newPill);

        newPill.addEventListener("click", () => {
            document.querySelectorAll(".bib-opt-pill").forEach(other => {
                other.classList.remove("bib-opt-pill-active");
            });
            newPill.classList.add("bib-opt-pill-active");

            currentTranslation = tran;
            loadBible();
        });
    });

    document.querySelector(".bib-opt-pill").click();
}
initializeTranslations();

document.querySelectorAll(".bib-opt-theme .bib-opt-col").forEach((col, idx) => {
    col.addEventListener("click", () => {
        document.querySelectorAll(".bib-opt-theme .bib-opt-col").forEach(other => other.classList.remove("bib-opt-col-active"));
    
        col.classList.add("bib-opt-col-active");

        document.querySelectorAll("*").forEach(el => {
            el.classList.remove("light-theme");
            el.classList.remove("sepia-theme");
            el.classList.remove("dark-theme");

            if(idx == 0){
                el.classList.add("light-theme");
            } else if(idx == 1){
                el.classList.add("sepia-theme");
            } else if(idx == 2){
                el.classList.add("dark-theme");
            }
        });
    });

    if(idx == 1){
        col.click();
    }
});