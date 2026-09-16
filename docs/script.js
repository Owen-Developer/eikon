

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
        "The Final Plague Announced",
        "The Passover and the Exodus",
        "The Feast of Unleavened Bread",
        "The Consecration of the Firstborn",
        "The Pillar of Cloud and Fire",
        "The Provision of Manna",
        "Water from the Rock",
        "The Ten Commandments Given",
        "The Covenant Confirmed",
        "Instructions for Worship",
        "Laws Concerning Servants and Property",
        "The Covenant Confirmed",
        "The Sabbath and Annual Festivals",
        "The Angel and the Conquest of Canaan",
        "Instructions for the Tabernacle",
        "The Tabernacle Curtains",
        "The Tabernacle Framework",
        "The Tabernacle Altar",
        "The Priestly Garments",
        "The Priestly Consecration",
        "The Sabbath Commanded",
        "The Golden Calf",
        "Moses Intercedes for Israel",
        "The Covenant Renewed",
        "The Tabernacle Contributions",
        "The Tabernacle Completed",
        "The Priestly Garments Completed",
        "The Tabernacle Set Up",
        "The Tabernacle Dedicated",
        "The Glory of the Lord Fills the Tabernacle",
        ]
    },

    {
        "name": "Leviticus",
        "headings": [
        "The Burnt Offering",
        "The Grain Offering",
        "The Peace Offering",
        "The Sin Offering",
        "The Guilt Offering",
        "The Priests' Duties and Offerings", 
        "The Ordination of Aaron and His Sons", 
        "The Consecration of the Priests", 
        "The Death of Nadab and Abihu", 
        "Clean and Unclean Animals",
        "Clean and Unclean Animals",
        "Purification After Childbirth",
        "Laws Concerning Skin Diseases",
        "Cleansing from Skin Diseases",
        "Bodily Discharges",
        "The Day of Atonement",
        "Laws Concerning Sacrifices",
        "Laws Concerning Sexual Purity",
        "The Holiness of God's People",
        "Punishments for Blasphemy and Other Sins",
        "The Holiness of the Priests",
        "The Regulations for Offerings",
        "The Appointed Festivals",
        "The Sabbath Year and Jubilee",
        "Blessings for Obedience and Warnings for Disobedience",
        "Blessings for Obedience and Warnings for Disobedience",
        "Laws Concerning Vows and Dedications",
        ]
    },

    {
        "name": "Numbers",
        "headings": [
        "The Census of Israel",
        "The Arrangement of the Camps",
        "The Duties of the Levites",
        "The Purity of the Camp",
        "The Nazirite Vow and Priestly Blessing",
        "The Offerings of the Leaders",
        "The Dedication of the Levites",
        "The Passover Celebrated",
        "The Cloud Over the Tabernacle",
        "The Silver Trumpets and the Departure from Sinai",
        "The People Complain and God Sends Quail",
        "Miriam and Aaron Oppose Moses",
        "The Twelve Spies and the Rebellion",
        "The Israelites' Rebellion and Judgment",
        "Laws for Offerings and the Sabbath",
        "Korah's Rebellion",
        "Aaron's Staff Buds",
        "Duties of the Priests and Levites",
        "The Water from the Rock",
        "The Death of Aaron",
        "The Bronze Serpent and Victories",
        "Balak Summons Balaam",
        "Balaam Blesses Israel",
        "Balaam's Final Oracles",
        "Israel's Sin with Baal of Peor",
        "The Second Census of Israel",
        "The Daughters of Zelophehad",
        "Joshua Commissioned as Moses' Successor",
        "The Daily Offerings",
        "Laws Concerning Vows",
        "The Defeat of Midian",
        "The Settlement of the Transjordan Tribes",
        "The Journey from Egypt to Moab",
        "Cities of Refuge and the Levites",
        "The Inheritance of Zelophehad's Daughters",
        "The Inheritance of Zelophehad's Daughters",
        ]
    },

    {
        "name": "Deuteronomy",
        "headings": [
        "The Previous Journey Recounted",
        "Moses Appoints Leaders and Judges",
        "Israel's Rebellion at Kadesh-barnea",
        "The Conquest of the Amorite Kings",
        "The Ten Commandments Repeated",
        "The Greatest Commandment",
        "A Chosen People",
        "The Lord's Chosen Place of Worship",
        "The Wilderness Years Remembered",
        "The Covenant Renewed",
        "Love and Obey the Lord",
        "The One Place of Worship",
        "Warnings Against Idolatry",
        "Clean and Unclean Foods",
        "The Year of Release",
        "The Passover and the Feast of Unleavened Bread",
        "Laws Concerning Judges and Kings",
        "Laws Concerning Priests and Prophets",
        "Cities of Refuge and Laws of Justice",
        "Laws Concerning Warfare",
        "Laws Concerning Family and Justice",
        "Laws Concerning the Protection of the Vulnerable",
        "The Levirate Marriage",
        "Weights, Measures, and Remembering Amalek",
        "The Firstfruits and Tithes",
        "The Covenant Renewed at Mount Ebal",
        "The Covenant Renewed in Moab",
        "The Choice Between Life and Death",
        "Joshua Commissioned to Lead Israel",
        "The Song of Moses",
        "The Song of Moses",
        "Moses' Final Blessing",
        "The Death of Moses",
        "Moses' Final Blessing",
        "The Death of Moses",
        ]
    },

    {
        "name": "Joshua",
        "headings": [
        "The Lord Commissions Joshua",
        "Rahab and the Two Spies",
        "Israel Crosses the Jordan",
        "The Memorial Stones",
        "The Commander of the Lord's Army",
        "The Fall of Jericho",
        "The Sin of Achan",
        "The Covenant Renewed at Mount Ebal",
        "The Southern Campaign",
        "The Conquest of the Northern Kings",
        "The Northern Campaign",
        "The Kings Defeated by Moses and Joshua",
        "The Land Yet to Be Conquered",
        "The Land Allotted to Caleb",
        "The Allotment of the Land of Canaan",
        "The Allotment of Ephraim",
        "The Allotment of Manasseh",
        "The Tabernacle Set Up at Shiloh",
        "The Cities of Refuge",
        "The Levitical Cities",
        "The Levitical Cities",
        "The Altar of Witness",
        "Joshua's Final Exhortation",
        "Joshua's Farewell and the Covenant Renewed",
        ]
    },

    {
        "name": "Judges",
        "headings": [
        "Israel Fails to Complete the Conquest",
        "The Angel of the Lord at Bokim",
        "Israel's Disobedience and the Judges",
        "Othniel, Ehud, and Shamgar",
        "Deborah and Barak",
        "Gideon Called by God",
        "Gideon's Signs and the Defeat of Midian",
        "Gideon and the Ephraimites",
        "Abimelech's Rise and Fall",
        "Tola, Jair, Jephthah, and Ibzan",
        "Jephthah's Vow and Victory",
        "Jephthah and Ephraim",
        "Samson's Birth Foretold",
        "Samson's Marriage and Riddle",
        "Samson's Vengeance on the Philistines",
        "Samson and Delilah",
        "Israel's War with Benjamin",
        "The Battle Against Benjamin",
        "The Wives for the Benjaminites",
        "Israel's Idolatry and Its Consequences",
        "The Wives for the Benjaminites",
        ]
    },

    {
        "name": "Ruth",
        "headings": [
        "Naomi and Ruth Return to Bethlehem",
        "Ruth Gleans in Boaz's Field",
        "Ruth and Boaz at the Threshing Floor",
        "Boaz Redeems Ruth"
        ]
    },

    {
        "name": "1 Samuel",
        "headings": [
          "Samuel's Birth and Dedication",
          "Hannah's Prayer and Samuel's Service",
          "The Lord Calls Samuel",
          "The Ark Captured by the Philistines",
          "The Ark Among the Philistines",
          "The Ark Returned to Israel",
          "Samuel Leads Israel to Repentance",
          "Israel Demands a King",
          "Saul Anointed as King",
          "Saul Proclaimed King",
          "Saul Rescues Jabesh-gilead",
          "Samuel's Farewell Address",
          "Saul's War with the Philistines",
          "Jonathan's Victory and Saul's Rash Oath",
          "Saul Rejected as King",
          "David Anointed as King",
          "David and Goliath",
          "Saul's Jealousy of David",
          "Jonathan's Covenant with David",
          "David Flees from Saul",
          "David at Nob",
          "David Flees from Saul",
          "David Spares Saul",
          "David, Nabal, and Abigail",
          "David and Saul at the Camp",
                    "David Spares Saul Again",
          "David Among the Philistines",
          "Saul and the Medium at Endor",
          "David Dismissed by the Philistines",
          "David's Victory over the Amalekites",
                    "Saul and His Sons Die in Battle"
        ]
    },

    {
        "name": "2 Samuel",
        "headings": [
          "David Hears of Saul's Death",
          "David Anointed King of Judah",
          "David Grows Stronger",
          "David Captures Jerusalem",
          "David Anointed King over All Israel",
          "The Ark Brought to Jerusalem",
          "God's Covenant with David",
          "David's Victories",
          "David's Kindness to Mephibosheth",
          "David Defeats the Ammonites and Syrians",
          "David and Bathsheba",
          "Nathan Rebukes David",
          "Amnon and Tamar",
          "Absalom's Return",
          "Absalom's Conspiracy",
          "David and Ziba",
          "David Flees from Jerusalem",
          "David Receives Counsel",
          "Joab Rebukes David",
          "Sheba's Rebellion",
          "The Gibeonites Avenged",
          "David's Mighty Men",
          "David's Song of Praise",
          "David's Census and the Plague",
        ]
    },

    {
        "name": "1 Kings",
        "headings": [
          "Solomon Anointed King",
          "David's Final Days and Solomon's Accession",
          "Solomon's Reign Established",
          "Solomon Asks for Wisdom",
          "Solomon's Officials and Prosperity",
          "Solomon Builds the Temple",
          "Solomon Builds His Palace",
          "Solomon's Palace and Temple Furnishings",
          "The Ark Brought into the Temple",
          "Solomon's Dedication of the Temple",
          "Solomon's Foreign Wives and Idolatry",
          "Jeroboam's Rebellion",
          "Rehoboam's Reign and the Divided Kingdom",
          "Jeroboam's Idolatry and Judgment",
          "Abijah's Reign and War with Jeroboam",
          "Baasha Conspires Against Nadab",
          "Elah's Reign and Zimri's Revolt",
          "Omri Reigns in Israel",
          "Ahab Reigns in Israel",
          "Elijah Announces the Drought",
          "Naboth's Vineyard",
          "Ahab's Defeat and Death",
        ]
    },

    {
        "name": "2 Kings",
        "headings": [
          "Elijah Taken Up to Heaven",
          "The Moabite Rebellion",
          "Elisha and the Widow's Oil",
          "The Shunammite Woman's Son",
          "Naaman Healed of Leprosy",
          "Elisha and the Floating Ax Head",
          "The Siege of Samaria",
          "The Siege Is Lifted",
          "Jehu Anointed King of Israel",
          "Jehu Destroys the House of Ahab",
          "Athaliah Reigns in Judah",
          "Joash Repairs the Temple",
          "Joash's Reign and Death",
          "Jehoahaz Reigns in Israel",
          "Jeroboam II Reigns in Israel",
          "Ahaziah's Reign in Judah",
          "Jehoash Reigns in Israel",
          "Amaziah Reigns in Judah",
          "The Fall of Samaria",
          "Hezekiah Reigns in Judah",
          "Manasseh's Reign and Idolatry",
          "Amon's Reign and Death",
          "Josiah's Reign and the Book of the Law",
          "Josiah's Reforms and the Passover",
          "The Fall of Jerusalem",
        ]
    },

    {
        "name": "1 Chronicles",
        "headings": [
          "The Genealogy from Adam to Abraham",
          "The Descendants of Israel",
          "The Descendants of Judah",
          "The Descendants of David",
          "The Descendants of Reuben, Gad, and Manasseh",
          "The Genealogy of Levi",
          "The Genealogy of Issachar, Benjamin, Naphtali, Manasseh, Ephraim, and Asher",
          "The Genealogy of Benjamin",
          "The First Inhabitants of Jerusalem",
          "Saul's Family and Death",
          "David's Mighty Men",
          "David's Warriors Gather at Hebron",
          "David Brings the Ark to Jerusalem",
          "David Prepares to Bring the Ark to Jerusalem",
          "David Brings the Ark into Jerusalem",
          "David's Psalm of Praise",
          "God's Covenant with David",
          "David's Victories",
          "David's Census",
          "David Prepares for the Temple",
          "David's Preparations for the Temple",
          "The Divisions of the Levites",
          "The Divisions of the Priests",
          "The Divisions of the Gatekeepers",
          "The Divisions of the Musicians",
          "The Gatekeepers",
          "The Military Divisions",
          "David Charges Solomon to Build the Temple",
          "David's Offerings and Death",
        ]
    },

    {
        "name": "2 Chronicles",
        "headings": [
          "Solomon Asks for Wisdom",
          "Solomon Prepares to Build the Temple",
          "Solomon Begins Building the Temple",
          "The Temple's Furnishings",
          "The Ark Brought into the Temple",
          "Solomon's Prayer of Dedication",
          "The Lord Appears to Solomon",
          "Solomon's Achievements and Prosperity",
          "The Queen of Sheba Visits Solomon",
          "Rehoboam's Reign and the Division of the Kingdom",
          "Rehoboam Strengthens Judah",
          "Shemaiah's Prophecy and Shishak's Invasion",
          "Abijah's Reign and Victory over Jeroboam",
          "Asa's Reforms and Victory",
          "Asa's Covenant with the Lord",
          "Asa's Alliance with Syria",
          "Jehoshaphat's Reign and Reforms",
          "Jehoshaphat's Alliance with Ahab",
          "Jehoshaphat Appoints Judges",
          "Jehoshaphat's Victory over Moab and Ammon",
          "Jehoram's Reign in Judah",
          "Ahaziah's Reign in Judah",
          "Joash Reigns in Judah",
          "Amaziah's Reign in Judah",
          "Uzziah Reigns in Judah",
          "Uzziah's Reign and Pride",
          "Jotham Reigns in Judah",
          "Ahaz Reigns in Judah",
          "Hezekiah Reigns in Judah",
          "Hezekiah Purifies the Temple",
          "Hezekiah Organizes Worship",
          "Hezekiah's Reforms and Prosperity",
          "Sennacherib Invades Judah",
          "Manasseh's Repentance and Reforms",
          "Josiah's Reign and Reforms",
          "The Fall of Jerusalem and the Exile",
        ]
    },

    {
        "name": "Ezra",
        "headings": [
      "Cyrus's Decree to Rebuild the Temple",
      "The Exiles Return to Jerusalem",
      "The Altar and Temple Foundations Restored",
      "Opposition to the Rebuilding of the Temple",
      "The Temple Work Resumed",
"The Decree of Darius",
      "Ezra Comes to Jerusalem",
      "List of the Family Heads Returning With Ezra",
      "Ezra's Prayer About Intermarriage",
      "The People's Confession of Sin",
        ]
    },

    {
        "name": "Nehemiah",
        "headings": [
      "Nehemiah's Prayer",
      "Artaxerxes Sends Nehemiah to Jerusalem",
      "Builders of the Wall",
      "Opposition to the Rebuilding",
      "Nehemiah Helps the Poor",
      "The Wall Is Finished",
      "The List of the Exiles Who Returned",
      "Ezra Reads the Law",
      "The Israelites Confess Their Sins",
      "The People Who Sealed the Covenant",
    
"The People Occupy Jerusalem",          "The Priests and Levites",          "Nehemiah Reforms the Community"
        ]
    },

    {
        "name": "Esther",
        "headings": [
"Queen Vashti Refuses the King",          "Esther Becomes Queen",          "Mordecai Uncovers a Plot",          "Haman Plots Against the Jews",          "Esther Invites the King and Haman",
"Mordecai Is Honored",          "Haman Is Hanged",          "The Jews Prepare to Defend Themselves",          "The Jews Triumph Over Their Enemies",          "The Feast of Purim Instituted"
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