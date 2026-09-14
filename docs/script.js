

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
            "The Call of Abram",
            "Abram in Egypt",
            "Abram and Lot Separate",
            "God's Covenant with Abram",
            "The Birth of Ishmael",
            "The Covenant of Circumcision",
            "The Three Visitors",
            "Sodom and Gomorrah Destroyed",
            "Abraham and Abimelech",
            "The Birth of Isaac"
        ]
    },

    {
        "name": "Exodus",
        "headings": [
            "The Israelites Oppressed in Egypt",
            "The Birth of Moses",
            "The Burning Bush",
            "Moses Returns to Egypt",
            "Bricks Without Straw",
            "God Promises Deliverance",
            "The Genealogy of Moses and Aaron",
            "Moses and Aaron Before Pharaoh",
            "The Plagues Begin",
            "The Plagues of Egypt",
            "The Passover",
            "The Exodus from Egypt",
            "The Crossing of the Red Sea",
            "The Song of Moses and Miriam",
            "Bitter Water Made Sweet",
            "Manna and Quail",
            "Water from the Rock",
            "The Battle with Amalek",
            "Jethro's Advice",
            "The Covenant at Sinai",
            "The Ten Commandments",
            "Laws Concerning Servants and Violence",
            "Laws Concerning Property and Justice",
            "Laws Concerning Worship and Festivals",
            "The Covenant Confirmed",
            "Instructions for the Tabernacle",
            "The Ark, Table, and Lampstand",
            "The Tabernacle",
            "The Altar and Courtyard",
            "The Priestly Garments",
            "The Priests Consecrated",
            "The Bronze Altar and Other Furnishings",
            "The Sabbath and the Tablets",
            "The Golden Calf",
            "Moses Intercedes for Israel",
            "The Covenant Renewed",
            "The Sabbath and Offerings",
            "The Tabernacle Constructed",
            "The Tabernacle Furnishings",
            "The Priestly Garments Made",
            "The Tabernacle Completed",
            "The Glory of the Lord"
        ]
    },
    {
        "name": "Leviticus",
        "headings": [
            "The Burnt Offering",
            "The Grain Offering",
            "The Fellowship Offering",
            "The Sin Offering",
            "The Guilt Offering",
            "The Priests' Duties",
            "The Priestly Ordination",
            "Aaron's First Offerings",
            "Nadab and Abihu",
            "Clean and Unclean Animals",
            "Laws Concerning Childbirth",
            "Laws Concerning Skin Diseases",
            "Cleansing from Skin Diseases",
            "Laws Concerning Bodily Discharges",
            "The Day of Atonement",
            "The Place of Sacrifice",
            "Forbidden Sexual Practices",
            "Various Laws of Holiness",
            "Punishments for Sin",
            "The Holiness of the Priests",
            "Sacred Offerings",
            "The Appointed Festivals",
            "The Lamp and the Bread",
            "The Blasphemer and the Law of Justice",
            "The Sabbath Year and the Year of Jubilee",
            "Redemption of Property and Slaves",
            "Blessings for Obedience and Penalties for Disobedience"
        ]
    },

    {
        "name": "Numbers",
        "headings": [
            "The Census of Israel",
            "The Arrangement of the Camp",
            "The Levites and Their Duties",
            "The Duties of the Kohathites",
            "Purity in the Camp",
            "The Nazirite Vow and Priestly Blessing",
            "Offerings of the Tribal Leaders",
            "The Levites Dedicated to God",
            "The Second Passover",
            "The Cloud Over the Tabernacle",
            "The Silver Trumpets",
            "The Israelites Leave Sinai",
            "The People Complain",
            "Miriam and Aaron Oppose Moses",
            "The Twelve Spies",
            "Israel's Rebellion and Judgment",
            "Korah's Rebellion",
            "Aaron's Staff Buds",
            "The Duties of the Priests and Levites",
            "The Red Heifer",
            "The Death of Miriam and Moses Strikes the Rock",
            "The Bronze Serpent",
            "Israel's Journey and Battles",
            "Balak Summons Balaam",
            "Balaam's Donkey",
            "Balaam's First Oracles",
            "Balaam's Second Oracles",
            "Balaam's Final Oracles",
            "Israel's Sin at Peor",
            "The Second Census",
            "Joshua Appointed as Moses' Successor",
            "Daily and Festival Offerings",
            "Offerings for the Appointed Festivals",
            "Vows and Promises",
            "The Defeat of Midian",
            "The Tribes East of the Jordan"
        ]
    },

    {
        "name": "Deuteronomy",
        "headings": [
            "Moses Reviews Israel's Journey",
            "The Ten Commandments Repeated",
            "Love the Lord Your God",
            "Israel Chosen as God's People",
            "Remember the Lord in the Wilderness",
            "The People's Rebellion",
            "The Lord's Holy People",
            "Remember the Lord's Provision",
            "Israel's Rebellion at Horeb",
            "The Great Commandment",
            "The Place of Worship",
            "Avoiding Idolatry",
            "Clean and Unclean Food",
            "Tithes and the Poor",
            "The Sabbath Year",
            "The Passover and Festivals",
            "Judges and Justice",
            "Worship and the King",
            "Priests, Prophets, and Divination",
            "Cities of Refuge",
            "Laws of Warfare",
            "Family and Community Laws",
            "Various Laws",
            "The Levirate Marriage",
            "The Amalekites",
            "Firstfruits and Covenant Renewal",
            "Blessings and Curses",
            "The Covenant Renewed in Moab",
            "Choose Life",
            "Joshua Commissioned",
            "The Song of Moses",
            "Moses Blesses the Tribes",
            "The Death of Moses",
            "No Prophet Like Moses"
        ]
    },

    {
        "name": "Joshua",
        "headings": [
            "Joshua Commissioned",
            "Rahab and the Spies",
            "Crossing the Jordan",
            "The Memorial Stones",
            "The Covenant Renewed at Gilgal",
            "The Fall of Jericho",
            "Achan's Sin",
            "The Defeat of Ai",
            "The Covenant with the Gibeonites",
            "The Sun Stands Still",
            "The Southern Kings Defeated",
            "The Northern Kings Defeated",
            "The Land East of the Jordan",
            "The Land West of the Jordan",
            "Caleb Receives Hebron",
            "The Land of Judah",
            "The Land of Ephraim and Manasseh",
            "The Remaining Land Divided",
            "The Cities of Refuge",
            "The Levitical Cities",
            "The Eastern Tribes Return Home",
            "Joshua's Farewell",
            "The Covenant at Shechem",
            "The Death of Joshua"
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
    document.querySelectorAll(".bib-verse").forEach(verse => verse.style.fontSize = Number(20 * document.querySelector(".bib-opt-range").value) + "px");
    document.querySelector(".bib-mid-head").style.fontSize = Number(22 * document.querySelector(".bib-opt-range").value) + "px";
    document.querySelectorAll(".bib-mid-heading").forEach(verse => verse.style.fontSize = Number(22 * document.querySelector(".bib-opt-range").value) + "px");
});
document.querySelector(".bib-opt-family").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-family").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        if(idx == 0){
            //document.querySelectorAll("div, span").forEach(el => el.classList.remove("font-sans"));
            document.querySelectorAll(".bib-verse, .bib-mid-heading, .bib-mid-head, .bib-mid-title").forEach(el => el.classList.remove("font-sans"));
        } else {
            //document.querySelectorAll("div, span").forEach(el => el.classList.add("font-sans"));
            document.querySelectorAll(".bib-verse, .bib-mid-heading, .bib-mid-head, .bib-mid-title").forEach(el => el.classList.add("font-sans"));
        }
    });
});
document.querySelector(".bib-opt-spacing").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-spacing").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        document.querySelectorAll(".bib-verse").forEach(verse => verse.style.lineHeight = 1.25 + (.25 * idx));
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