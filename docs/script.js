

let url = "";
let currentBook = "John";
let currentChapterIdx = 0;
let currentLanguage = "Greek";

const chapterHeadings = [
    {
        "name": "Genesis",
        "headings": [
        "The Creation",
        "Adam and Eve",
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
        "Abraham Intercedes for Sodom",
        "The Destruction of Sodom and Gomorrah",
        "Abraham and Abimelech",
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
        "Moses' Final Instructions",
        "Moses' Final Words",
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

    {
        "name": "Job",
        "headings": [
  "Job's Character and Testing",
  "Job's First Trial",
  "Job's Lament",
  "Eliphaz Speaks",
  "Eliphaz Continues His Speech",
    "Job Responds to Eliphaz",
  "Bildad Speaks",
  "Job Responds to Bildad",
  "Job Continues His Response",
  "Job Questions God's Justice",
    "Zophar Speaks",
  "Job Responds to His Friends",
  "Job Continues His Response",
  "Job's Hope in God",
  "Eliphaz Speaks Again",
    "Job Responds to His Friends",
  "Job's Confidence in His Redeemer",
  "Bildad Speaks of the Wicked",
  "Job Responds to Bildad",
  "Zophar Speaks of the Wicked",
    "Job Questions the Prosperity of the Wicked",
  "Eliphaz Accuses Job of Sin",
  "Job Longs to Present His Case Before God",
  "Job Describes the Wicked",
  "Bildad Speaks of God's Greatness",
    "Job Describes God's Greatness",
  "Job's Final Defense",
  "Job Remembers His Former Honor",
  "Job's Present Suffering",
  "Job's Final Appeal",
    "Job's Final Appeal",
  "Elihu Speaks",
  "Elihu Declares God's Justice",
  "Elihu Rebukes Job",
  "Elihu Continues His Speech",
    "Elihu Proclaims God's Greatness",
  "Elihu Describes God's Wonders",
  "God Speaks to Job",
  "God Questions Job About Creation",
  "God Describes His Power",
    "God Describes Leviathan",
  "Job Repents and Is Restored"
        ]
    },

    {
        "name": "Psalm",
        "headings": [
  "The Way of the Righteous and the Wicked", 
  "The Reign of God's Anointed King", 
  "A Prayer for Protection Against Enemies", 
  "A Prayer for Help and Guidance", 
  "A Prayer for God's Favor",
    "A Prayer for Mercy",
  "The Lord Is a Righteous Judge",
  "God's Glory and Human Dignity",
  "A Prayer for Justice",
  "The Lord Is a Refuge for the Oppressed",
    "The Lord Tests the Righteous",
  "A Prayer Against Deceitful People",
  "A Prayer of Trust in God's Mercy",
  "The Fool Says There Is No God",
  "The Character of Those Who Dwell With God",
    "The Joy of God's Presence",
  "A Prayer for Protection",
  "The King of Glory",
  "A Prayer for Victory",
  "Thanksgiving for Victory",
    "The King Rejoices in God's Strength",
  "The Suffering Servant's Cry",
  "The Lord Is My Shepherd",
  "The King of Glory Enters",
  "A Prayer for Guidance and Forgiveness",
    "A Prayer of Integrity and Trust",
  "The Lord Is My Light and Salvation",
  "A Prayer for Help",
  "A Call to Worship the Lord",
  "Thanksgiving for Deliverance",
    "A Prayer of Trust in God",
  "The Joy of Forgiveness",
  "Praise to the Creator",
  "A Prayer for Deliverance",
  "The Goodness of God",
    "The Wickedness of Man and the Love of God",
  "Do Not Fret Because of Evildoers",
  "The Suffering of the Righteous",
  "A Prayer for God's Help",
  "A Prayer of Patience and Trust",
    "Blessed Are Those Who Care for the Poor",
  "A Longing for God",
  "A Prayer for Deliverance",
  "A Song of Praise to God",
  "A Royal Wedding Song",
    "God Is Our Refuge and Strength",
  "The Lord Is King Over All the Earth",
  "The Glory of Mount Zion",
  "The Folly of Trusting in Riches",
  "A Call to True Worship",
    "A Prayer for Forgiveness",
  "The Wickedness of the Proud",
  "Trust in God's Unfailing Love",
  "The Foolishness of the Wicked",
  "A Prayer for Deliverance from Enemies",
    "A Prayer for Protection from Enemies",
  "A Prayer for Deliverance from the Wicked",
  "A Prayer for Refuge in God",
  "A Prayer for God's Mercy",
  "A Prayer for Victory and Deliverance",
    "A Prayer for Protection",
  "A Prayer for God's Justice",
  "Rest in God Alone",
  "Praise for God's Blessings",
  "A Song of Praise for God's Goodness",
    "A Call to Praise God",
  "God's Universal Reign",
  "A Song of Triumph",
  "A Prayer for Deliverance",
  "A Prayer for God's Help",
    "A Prayer for God's Protection in Old Age",
  "The Reign of the Righteous King",
  "The Prosperity of the Wicked",
  "A Prayer for the Sanctuary",
  "God Is the Judge",
    "God Is Known in Judah",
  "A Call to Remember God's Works",
  "God's Faithfulness to Israel",
  "A Prayer for Restoration",
  "The Shepherd of Israel",
    "A Call to Celebrate God's Faithfulness",
  "God Judges the Rulers",
  "A Prayer Against Israel's Enemies",
  "The Joy of Dwelling in God's House",
  "A Prayer for Restoration and Peace",
    "A Prayer for God's Mercy",
  "The Glory of Zion",
  "A Prayer of Lament",
  "God's Covenant with David",
  "A Prayer for God's Mercy and Guidance",
    "He Who Dwells in the Shelter of the Most High",
  "A Song of Praise for God's Faithfulness",
  "The Majesty of the Lord",
  "The Lord Reigns in Majesty",
  "A Call to Worship and Obey God",
    "Sing to the Lord a New Song",
  "The Lord Reigns in Righteousness",
  "The Lord Is King",
  "A Call to Worship the Lord",
  "A Psalm of Thanksgiving",
    "A Vow of Integrity",
  "The Eternal Love of the Lord",
  "A Prayer for Restoration",
  "The Lord's Faithfulness to His People",
  "Remembering God's Covenant with Abraham",
    "God's Mercy and Israel's Rebellion",
  "Thanksgiving for God's Deliverance",
  "A Call to Give Thanks to the Lord",
  "The Lord Is Exalted in Zion",
  "The Lord's Anointed King",
    "Praise for God's Great Works",
  "The Blessings of the Righteous",
  "The Majesty and Mercy of God",
  "God's Deliverance of Israel",
    "The Glory of God Over Idols",
  "Thanksgiving for Deliverance",
  "A Song of Love and Gratitude",
  "Praise for God's Faithfulness",
  "A Prayer for Deliverance",
  "A Song of Ascents",
    "The Lord Watches Over His People",
  "A Song of Ascents",
  "The Lord Builds the House",
  "A Song of Ascents",
  "Those Who Trust in the Lord",
    "The Lord Has Done Great Things",
  "Unless the Lord Builds the House",
  "Children Are a Heritage from the Lord",
  "Blessed Are Those Who Fear the Lord",
  "Out of the Depths I Cry to You",
    "A Prayer of Humility and Contentment",
  "The Lord's Chosen Dwelling Place",
  "The Blessing of Unity",
  "A Call to Praise the Lord",
  "Praise for God's Greatness and Love",
    "God's Steadfast Love Endures Forever",
  "By the Rivers of Babylon",
  "The Lord's Greatness and Faithfulness",
  "A Prayer for God's Protection",
  "A Prayer for Deliverance from the Wicked",
    "A Prayer for Protection from Sin",
  "A Prayer for Deliverance from Persecution",
  "A Prayer for Mercy and Guidance",
  "A Prayer for Victory and Blessing",
  "A Psalm of Praise to God",
    "Praise the Lord, O My Soul",
  "Praise the Lord for His Goodness",
  "Praise the Lord, O Jerusalem",
  "Praise the Lord for His Greatness",
  "Let Everything Praise the Lord"
        ]
    },

    {
        "name": "Song of Solomon",
        "headings": [
"Longing for the Beloved",
"The Bridegroom and His Bride",
"Seeking and Finding the Beloved",
"The Beauty of the Beloved",
"Love Awakens",
"Love's Unfailing Strength",
"The Beloved's Garden",
"Love's Delight and Devotion",
        ]
    },

    {
        "name": "Proverbs",
        "headings": [
  "The Purpose of Proverbs",
  "The Beginning of Wisdom",
  "Trust in the Lord",
  "The Path of Wisdom",
  "Warning Against Adultery",
    "Warnings Against Folly",
  "The Call of Wisdom",
  "Warning Against Adultery",
  "The Way of Wisdom",
  "The Proverbs of Solomon",
    "The Righteous and the Wicked",
  "The Value of Wisdom",
  "The Wise and the Foolish",
  "A Gentle Answer Turns Away Wrath",
  "A Wise Son Makes a Glad Father",
    "The Lord's Sovereignty",
  "The Lord Tests the Heart",
  "The Value of Wisdom",
  "Better Is a Little With Righteousness",
  "Wine Is a Mocker",
    "The Lord Examines the Heart",
  "A Good Name Is Better Than Riches",
  "Train Up a Child",
  "Do Not Rob the Poor",
  "These Also Are Proverbs of Solomon",
    "The Fool and His Folly",
  "Boasting About Tomorrow",
  "The Way of the Wicked",
  "Sayings of Agur",
  "The Words of King Lemuel",
    "The Virtuous Woman"
        ]
    },

    {
        "name": "Ecclesiastes",
        "headings": [
  "Everything Is Meaningless",
  "The Vanity of Pleasure and Wisdom",
  "A Time for Everything",
  "The Vanity of Oppression and Toil",
  "Approaching God with Reverence",
    "The Vanity of Riches and Life",
  "The Value of Wisdom",
  "The Contrast Between Wisdom and Folly",
  "Wisdom and Folly in Leadership",
  "Wisdom for Life",
    "Cast Your Bread Upon the Waters",
  "Remember Your Creator in Youth"
        ]
    },

    {
        "name": "Isiah",
        "headings": [
  "The Rebellion of God's People",
  "The Mountain of the Lord",
  "Judgment on Jerusalem and Judah",
  "The Branch of the Lord",
  "The Song of the Vineyard",
    "Isaiah's Vision and Calling",
  "The Sign of Immanuel",
  "The Coming of the Great Light",
  "The Lord's Anger Against Israel",
  "The Lord's Judgment on Assyria",
    "The Branch from Jesse",
  "Songs of Praise and Salvation",
  "The Lord's Judgment on Babylon",
  "The Fall of the King of Babylon",
  "The Judgment on Moab",
    "The Judgment on Moab",
  "The Judgment on Damascus and Israel",
  "The Judgment on Cush",
  "The Judgment on Egypt",
  "Isaiah Walks Barefoot as a Sign",
    "The Fall of Babylon",
  "The Valley of Vision",
  "The Judgment on Shebna",
  "The Judgment on Tyre",
  "A Song of Praise for God's Salvation",
    "A Song of Trust in God",
  "The Lord's Judgment and Restoration",
  "Woe to Ephraim and Jerusalem",
  "The Judgment on Jerusalem",
  "Woe to the Rebellious Nation",
    "Woe to Those Who Rely on Egypt",
  "The Righteous King",
  "The Spirit Poured Out on God's People",
  "The Judgment of the Nations",
  "The Joy of the Redeemed",
    "Sennacherib Threatens Jerusalem",
  "Hezekiah Prays for Deliverance",
  "Hezekiah's Illness and Recovery",
  "Hezekiah Shows His Treasures",
  "Comfort for God's People",
    "God Helps Israel",
  "The Servant of the Lord",
  "Israel's Redemption",
  "The Creator and Redeemer",
  "God's Sovereignty and Salvation",
    "Babylon's Idols and the Living God",
  "The Fall of Babylon Foretold",
  "Israel's Stubbornness and God's Promise",
  "The Servant of the Lord",
  "The Servant's Obedience and Trust",
    "Comfort for God's People",
  "The Lord's Salvation and Righteousness",
  "The Lord's Redeemed People",
  "The Suffering Servant Exalted",
  "An Invitation to Abundant Life",
    "Salvation for All People",
  "Israel's Sin and Redemption",
  "The Sins of God's People",
  "The Redeemer Comes to Zion",
  "The Glory of Zion",
    "The Year of the Lord's Favor",
  "The Glory of Zion",
  "The Day of Vengeance",
  "God's Mercy and Judgment",
  "The New Heavens and New Earth",
    "The Lord's Judgment and the Glory of Zion"
        ]
    },

    {
        "name": "Jeremiah",
        "headings": [
  "The Call of Jeremiah",
  "Judgment on Judah",
  "Israel's Unfaithfulness",
  "The Coming Judgment",
  "Jerusalem's Sin and Rebellion",
    "The Coming Destruction of Jerusalem",
  "The Temple Sermon",
  "Judgment and Mourning",
  "The Covenant Is Broken",
  "The Folly of Idolatry",
    "The Broken Covenant",
  "Jeremiah Questions God's Justice",
  "The Sign of the Linen Waistband",
  "The Drought and the People's Sin",
  "The Lord Rejects Intercession",
    "The Coming Judgment and Exile",
  "The Sin of Judah",
  "The Potter and the Clay",
  "Jeremiah's Prayer Against His Enemies",
  "The Broken Pot and the Coming Judgment",
    "The Lord Rejects Zedekiah's Request",
  "The Righteous King",
  "The Coming Judgment on Judah",
  "The Two Baskets of Figs",
  "The Seventy Years of Captivity",
    "Jeremiah Threatened with Death",
  "The Yoke of Babylon",
  "Hananiah's False Prophecy",
  "Jeremiah's Letter to the Exiles",
  "The Restoration of Israel",
    "The New Covenant",
  "Jeremiah Buys a Field",
  "The Promise of Restoration",
  "Zedekiah Breaks the Covenant",
  "The Obedience of the Rechabites",
    "Jehoiakim Burns Jeremiah's Scroll",
  "The Siege of Jerusalem",
  "Jeremiah in the Courtyard Prison",
  "The Fall of Jerusalem",
  "Jeremiah Freed by Nebuzaradan",
    "The Assassination of Gedaliah",
  "Jeremiah's Warning Against Going to Egypt",
  "Johanan Takes the Remnant to Egypt",
  "Judgment on the Jews in Egypt",
  "God's Promise to Baruch",
    "The Judgment on Egypt",
  "The Judgment on the Philistines",
  "The Judgment on Moab",
  "Judgment on the Nations",
  "The Judgment on Babylon",
    "The Fall of Babylon",
  "The Fall of Jerusalem"
        ]
    },

    {
        "name": "Lamentations",
        "headings": [
  "The Suffering of Jerusalem",
  "The Lord's Anger Against Jerusalem",
  "Hope in God's Faithfulness",
  "The Siege and Fall of Jerusalem",
  "A Prayer for Restoration"
        ]
    },

    {
        "name": "Ezekiel",
        "headings": [
  "Ezekiel's Vision of the Living Creatures",
  "Ezekiel's Call to Be a Prophet",
  "The Siege of Jerusalem Portrayed",
  "The Sign of the Barley Bread",
  "Judgment Against Jerusalem",
    "Judgment Against the Mountains of Israel",
  "The End Has Come",
  "The Glory of the Lord Departs",
  "The Vision of the Abominations",
  "The Cherubim and the Glory of the Lord",
    "Judgment on the Wicked Leaders",
  "Ezekiel's Exile Symbol",
  "False Prophets Condemned",
  "Idolatry and Judgment",
  "Jerusalem as a Useless Vine",
    "Jerusalem's Unfaithfulness",
  "The Parable of the Two Eagles",
  "The Soul Who Sins Shall Die",
  "A History of Israel's Rebellion",
  "The Lord's Judgment Against Israel",
    "The Sword of the Lord",
  "The Sins of Jerusalem",
  "The Two Adulterous Sisters",
  "The Boiling Pot",
  "Judgment on the Nations",
    "The Judgment Against Tyre",
  "Lament Over Tyre",
  "The Prince of Tyre",
  "The Judgment Against Sidon",
  "The Judgment Against Egypt",
    "Pharaoh Like a Great Cedar",
  "A Lament Over Pharaoh",
  "A Lament Over Pharaoh and Egypt",
  "The Watchman of Israel",
  "Judgment Against the Shepherds of Israel",
    "The Restoration of Israel",
  "The Valley of Dry Bones",
  "The Defeat of Gog",
  "The Glory of God Returns",
  "The Vision of the Temple",
    "The Inner Temple",
  "The Temple Chambers",
  "The Temple Area",
  "The River Flowing from the Temple",
  "The Sacred Offerings",
    "The Prince's Worship and Offerings",
  "The Tribal Allotments",
  "The New Name of the City"
        ]
    },

    {
        "name": "Daniel",
        "headings": [
  "Daniel and His Friends in Babylon",
  "Nebuchadnezzar's Dream",
  "The Fiery Furnace",
  "Nebuchadnezzar's Humiliation",
  "The Writing on the Wall",
    "Daniel in the Lions' Den",
  "Daniel's Vision of Four Beasts",
  "Daniel's Vision of the Ram and the Goat",
  "Daniel's Prayer for Jerusalem",
  "Daniel's Vision of the Heavenly Messenger",
    "The Kings of the North and the South",
  "The Time of the End"
        ]
    },

    {
        "name": "Hosea",
        "headings": [
  "Hosea's Marriage to Gomer",
  "Israel's Unfaithfulness",
  "Israel's Judgment and Restoration",
  "The Lord's Charges Against Israel",
  "Judgment Against Israel and Judah",
    "Israel's Unfaithfulness and God's Desire for Mercy",
  "Israel's Corruption and Idolatry",
  "Israel Reaps the Consequences of Sin",
  "Israel's Idolatry and Judgment",
  "Israel's Empty Vine and Coming Judgment",
    "God's Love for Israel",
  "Israel's Sin and God's Faithfulness",
  "Israel's Guilt and Coming Judgment",
  "A Call to Repentance and Restoration"
        ]
    },

    {
        "name": "Joel",
        "headings": [
  "The Plague of Locusts",
  "The Day of the Lord",
  "The Outpouring of God's Spirit"
        ]
    },

    {
        "name": "Amos",
        "headings": [
  "Judgment on the Nations",
  "Judgment on Israel",
  "A Lament for Israel",
  "The Coming Judgment",
  "Seek the Lord and Live",
    "Woe to Those at Ease in Zion",
  "The Visions of Amos",
  "The Basket of Summer Fruit",
  "The Restoration of Israel"
        ]
    },

    {
        "name": "Obadiah",
        "headings": [
  "The Judgment of Edom"
        ]
    },

    {
        "name": "Jonah",
        "headings": [
  "Jonah Flees from the Lord",
  "Jonah's Prayer from the Fish",
  "Jonah Preaches to Nineveh",
  "Jonah's Anger and God's Mercy"
        ]
    },

    {
        "name": "Micah",
        "headings": [
  "Judgment Against Samaria and Jerusalem",
  "Woe to the Oppressors",
  "Leaders Condemned",
  "The Mountain of the Lord",
  "The Ruler from Bethlehem",
    "The Lord's Case Against Israel",
  "A Prayer for God's Mercy"
        ]
    },

    {
        "name": "Nahum",
        "headings": [
  "The Lord's Wrath Against Nineveh",
  "The Siege of Nineveh",
  "The Fall of Nineveh"
        ]
    },

    {
        "name": "Habakkuk",
        "headings": [
  "Habakkuk's First Complaint",
  "Habakkuk's Second Complaint",
  "Habakkuk's Prayer of Trust"
        ]
    },

    {
        "name": "Zephaniah",
        "headings": [
  "The Day of the Lord",
  "Judgment on the Nations",
  "The Restoration of God's People"
        ]
    },

    {
        "name": "Haggai",
        "headings": [
  "The Call to Rebuild the Temple",
  "The Glory of the New Temple"
        ]
    },

    {
        "name": "Zechariah",
        "headings": [
  "The Call to Return to the Lord",
  "The Four Horns and Four Craftsmen",
  "The Man with the Measuring Line",
  "The Vision of Joshua the High Priest",
  "The Gold Lampstand and Two Olive Trees",
    "The Vision of the Four Chariots",
  "The Crown for Joshua",
  "The Call to Justice and Mercy",
  "The Coming Salvation of Zion",
  "The Coming King and the Restoration of Israel",
    "The Rejected Shepherd",
  "The Future Glory of Jerusalem",
  "The Fountain for Sin and Impurity",
  "The Lord Comes and Reigns"
        ]
    },

    {
        "name": "Malachi",
        "headings": [
  "God's Love for Israel",
  "The Priests' Corruption",
  "The Priests' Unfaithfulness",
  "The Day of the Lord"
        ]
    },

    //////////////////////////////////////

    {
        "name": "Matthew",
        "headings": [
"The Genealogy and Birth of Jesus",

"The Birth of Jesus and the Flight to Egypt",

"John the Baptist Prepares the Way",

"Jesus Is Tempted in the Wilderness",

"Jesus Begins His Ministry and Teaches the Crowd",

"The Sermon on the Mount",

"Jesus Heals and Calls His Disciples",

"Jesus Sends Out the Twelve",

"John the Baptist and the Invitation of Jesus",

"Jesus Sends Out the Twelve and Faces Opposition",

"The Ministry and Message of Jesus",

"Jesus and the Pharisees",

"Parables of the Kingdom",

"Jesus Performs Miracles",

"Jesus Feeds the Five Thousand and Walks on Water",

"The Confession of Peter and the Transfiguration",

"Jesus Teaches About Humility and Forgiveness",

"Jesus Teaches About Marriage and Eternal Life",

"Jesus Teaches About Greatness and Grace",

"Jesus Enters Jerusalem and Teaches About Servanthood",

"The Triumphal Entry and Jesus Cleanses the Temple",

"Jesus Teaches in the Temple",

"Parables and Warnings Against the Pharisees",

"Jesus Teaches About the Destruction of the Temple",

"The Olivet Discourse and the Coming of the Son of Man",

"The Last Supper and Jesus Is Arrested",

"Jesus Is Tried and Crucified",

"The Resurrection and the Great Commission",

        ]
    },

    {
        "name": "Mark",
        "headings": [
"The Beginning of the Gospel of Jesus Christ",

"Jesus Heals and Teaches with Authority",

"Jesus Heals the Paralytic and Calls Levi",

"Parables and Miracles of Jesus",

"Jesus Delivers the Demon-Possessed Man",
"The Rejection of Jesus and the Sending of the Twelve",

"Jesus Feeds the Five Thousand and Walks on Water",

"Jesus Teaches About True Cleanliness",

"Jesus Heals and Feeds the Four Thousand",

"Jesus Teaches About Discipleship and Greatness",
"The Triumphal Entry and Cleansing of the Temple",

"Jesus Teaches in the Temple",

"Parables and Teachings About the Kingdom",

"Jesus Predicts the Destruction of the Temple",

"Jesus Is Anointed, Betrayed, and Arrested",
"The Resurrection of Jesus and the Great Commission",

        ]
    },

    {
        "name": "Luke",
        "headings": [
"Gabriel Announces the Birth of Jesus",

"The Birth and Childhood of Jesus",

"John the Baptist Prepares the Way",

"Jesus Is Tempted and Begins His Ministry",

"Jesus Calls His Disciples and Performs Miracles",
"Jesus Teaches the Crowd and Chooses the Twelve",

"Jesus Teaches and Performs Miracles",

"Jesus Sends Out the Twelve and Feeds the Five Thousand",

"Jesus Reveals His Glory and Teaches His Disciples",

"Jesus Sends Out the Seventy-Two and Teaches About Love",
"Jesus Teaches His Disciples to Pray",

"Jesus Warns Against Hypocrisy and Greed",

"Jesus Teaches About Readiness and Repentance",

"Jesus Heals on the Sabbath and Teaches About the Kingdom",

"Parables of the Lost and Found",
"Jesus Teaches About Wealth and Faithfulness",

"Jesus Teaches About Forgiveness and Faith",

"Jesus Heals Ten Lepers and Teaches About the Kingdom",

"Jesus Teaches About Prayer and Eternal Life",

"Jesus Enters Jerusalem and Teaches in the Temple",
"The Triumphal Entry and Jesus Teaches in the Temple",

"Jesus Teaches About the Destruction of Jerusalem",

"Jesus Is Betrayed, Tried, and Crucified",

"The Resurrection and the Road to Emmaus",
        ]
    },

    {
        "name": "John",
        "headings": [
"The Word Becomes Flesh",

"Jesus Performs His First Miracles",

"Jesus Teaches Nicodemus About New Birth",

"Jesus and the Samaritan Woman",

"Jesus Heals the Official's Son",
"The Feeding of the Five Thousand and the Bread of Life",

"Jesus Teaches at the Feast of Booths",

"Jesus Forgives the Adulterous Woman and Reveals His Identity",

"Jesus Heals a Man Born Blind",

"Jesus the Good Shepherd",
"Lazarus Is Raised from the Dead",

"Jesus Is Anointed and Enters Jerusalem",

"Jesus Teaches About His Death and Unbelief",

"Jesus Washes His Disciples' Feet",

"Jesus Teaches About the Vine and His Love",
"Jesus Teaches About the Holy Spirit",

"Jesus Prays for Himself, His Disciples, and All Believers",

"Jesus Is Arrested and Tried",

"Jesus Is Crucified and Buried",

"Jesus Rises from the Dead",
"Jesus Appears to His Disciples and Restores Peter",

        ]
    },

    {
        "name": "Acts",
        "headings": [
"Jesus Ascends and the Disciples Await the Holy Spirit",

"The Holy Spirit Comes at Pentecost",

"Peter Heals a Lame Man and Preaches to the Crowd",

"Peter and John Face Opposition",

"Ananias and Sapphira and the Apostles Face Persecution",
"The Seven Servants and Stephen's Ministry",

"Stephen's Martyrdom and the Scattering of Believers",

"Philip Proclaims Christ in Samaria",

"Saul Encounters Jesus and Begins to Preach",

"Peter Preaches to Cornelius and the Gentiles",
"The Gospel Spreads to the Gentiles",

"Peter Is Rescued and Herod Is Struck Down",

"Paul and Barnabas Begin Their First Missionary Journey",

"Paul and Barnabas Preach and Face Opposition",

"The Jerusalem Council on Gentile Believers",
"Paul's Second Missionary Journey Begins",

"Paul Preaches in Athens and Corinth",

"Paul's Ministry in Ephesus",

"Paul Travels Through Macedonia and Raises Eutychus",

"Paul's Farewell to the Ephesian Elders",
"Paul Arrives in Jerusalem and Is Arrested",

"Paul Gives His Testimony to the Crowd",

"Paul Before the Sanhedrin",

"Paul Is Taken to Caesarea",

"Paul's Trial Before Governor Felix",
"Paul's Defense Before King Agrippa",

"Paul's Journey to Rome and Shipwreck",

"Paul Proclaims the Kingdom in Rome",

        ]
    },

    {
        "name": "Romans",
        "headings": [
"Paul's Greeting and the Righteousness of God",

"God's Judgment on Sin",

"God's Righteousness Through Faith",

"Justified by Faith Like Abraham",

"Peace with God Through Jesus Christ",
"Dead to Sin and Alive to God",

"Released from the Law and United with Christ",

"Life Through the Spirit",

"God's Sovereign Purpose for Israel",

"Salvation Through Faith in Christ",
"God's Mercy and the Remnant of Israel",

"Living Sacrifices and Serving Others",

"Submitting to Governing Authorities and Loving Others",

"Do Not Judge Your Brother",

"Living to Please Others and Glorify God",
"Paul's Greetings and Final Exhortations",

        ]
    },

    {
        "name": "1 Corinthians",
        "headings": [
"Christ the Power and Wisdom of God",

"God's Wisdom Revealed Through the Spirit",

"Servants of Christ and Stewards of God's Mysteries",

"Paul's Example and Warning Against Pride",

"Discipline for Immorality in the Church",
"Do Not Take Your Brothers to Court",

"Marriage and Singleness",

"Food Offered to Idols and Christian Freedom",

"Paul's Rights as an Apostle",

"Warnings from Israel's History",
"Order in Worship and the Lord's Supper",

"Spiritual Gifts and the Body of Christ",

"Love Is the Greatest Gift",

"Prophecy and Speaking in the Church",

"The Resurrection of Christ and the Hope of Believers",
"Paul's Final Instructions and Farewell",

        ]
    },

    {
        "name": "2 Corinthians",
        "headings": [
"Comfort in Suffering and Paul's Ministry",

"Forgiveness and the Triumph of Christ",

"Ministers of the New Covenant",

"Treasure in Jars of Clay",

"Living by Faith and Reconciled to God",
"Do Not Be Unequally Yoked",

"Godly Grief and Joyful Repentance",

"Generosity and Giving",

"Paul Defends His Apostleship",

"Paul's Authority and Spiritual Warfare",
"Paul's Suffering and Defense of His Apostleship",

"Paul's Vision and Weakness",

"Final Warnings and Exhortations",

        ]
    },

    {
        "name": "Galatians",
        "headings": [
"Paul's Gospel and Apostleship",

"Justification by Faith and Not by Works",

"Faith in Christ and the Promise of the Spirit",

"Freedom in Christ and the Law",

"Walking by the Spirit and Bearing Fruit",
"Doing Good to All and Boasting in the Cross",

        ]
    },

    {
        "name": "Ephesians",
        "headings": [
"Every Spiritual Blessing in Christ",

"Made Alive by Grace Through Faith",

"The Mystery of Christ and the Unity of the Church",

"Walk in Love and Live as Children of Light",

"Wives, Husbands, Children, and Spiritual Warfare",
"Children, Servants, and the Armor of God",

        ]
    },

    {
        "name": "Philippians",
        "headings": [
"Paul's Joy and Prayer in Suffering",

"Christ's Humility and the Call to Shine",

"Knowing Christ and Pressing Toward the Goal",

"Rejoice in the Lord and Be Content",

        ]
    },

    {
        "name": "Colossians",
        "headings": [
"Christ Is Supreme and the Head of the Church",

"Alive with Christ and Free from Human Traditions",

"Set Your Minds on Things Above",
"Devote Yourselves to Prayer and Walk in Wisdom",

        ]
    },

    {
        "name": "1 Thessalonians",
        "headings": [
"The Thessalonians' Faith and Example",

"Paul's Ministry Among the Thessalonians",

"Timothy's Report and Paul's Encouragement",

"Living to Please God and the Coming of Christ",

"Living in the Light of Christ's Return",

        ]
    },

    {
        "name": "2 Thessalonians",
        "headings": [
"Thanksgiving for Faith and Perseverance",

"Christ's Return and the Man of Lawlessness",

"Prayer, Work, and Standing Firm in the Lord",

        ]
    },

    {
        "name": "1 Timothy",
        "headings": [
"Guard the Gospel and Fight the Good Fight",

"Prayer and God's Desire for All People",

"Qualifications for Church Leaders",

"Warnings About False Teachers",

"Instructions for Various Groups in the Church",

"Godliness, Contentment, and the Love of Money",

        ]
    },

    {
        "name": "2 Timothy",
        "headings": [
"Guard the Good Deposit",

"Endure Hardship as a Good Soldier of Christ",

"Godliness and the Truth in the Last Days",

"Preach the Word and Finish the Race",

        ]
    },

    {
        "name": "Titus",
        "headings": [
"Appoint Elders and Guard Against False Teachers",

"Teach Sound Doctrine and Live Godly Lives",

"Saved by Grace and Devoted to Good Works",

        ]
    },

    {
        "name": "Philemon",
        "headings": [
"Paul Appeals for Onesimus",

        ]
    },

    {
        "name": "Hebrews",
        "headings": [
"The Son Is Greater Than the Angels",

"Jesus Is Greater Than Moses",

"Enter God's Rest Through Faith",

"Jesus the Great High Priest",

"Jesus the Source of Eternal Salvation",
"Press On to Maturity and the Hope of God's Promise",

"Jesus the Eternal High Priest",

"The New Covenant and the Heavenly Sanctuary",

"Christ's Sacrifice Once for All",

"Draw Near to God and Hold Fast to Faith",
"Faith and the Heroes of the Old Testament",

"Run the Race and Look to Jesus",

"Final Exhortations and Blessings",

        ]
    },

    {
        "name": "James",
        "headings": [
"Trials, Wisdom, and Hearing God's Word",

"Faith Shown by Works and Love",

"Controlling the Tongue and Seeking God's Wisdom",

"Humility, Submission to God, and Patience",

"Prayer, Suffering, and Restoring the Wandering",

        ]
    },

    {
        "name": "1 Peter",
        "headings": [
"Living Hope and Holiness Through Christ",

"Living as God's Holy People",

"Submission and Following Christ's Example",

"Living for God in a Hostile World",

"Humility and Standing Firm in Faith",

        ]
    },

    {
        "name": "2 Peter",
        "headings": [
"Growing in Grace and the Knowledge of Christ",

"False Teachers and the Judgment of God",

"The Day of the Lord and God's Promise",

        ]
    },

    {
        "name": "1 John",
        "headings": [
"Walking in the Light and Confessing Sin",

"Knowing God Through Obedience and Love",

"Children of God and the Test of Righteousness",

"Testing the Spirits and Living in God's Love",

"Faith in Jesus Christ and Eternal Life",

        ]
    },

    {
        "name": "2 John",
        "headings": [
"Walking in Truth and Love",

        ]
    },

    {
        "name": "3 John",
        "headings": [
"Walking Faithfully and Supporting God's Workers",

        ]
    },

    {
        "name": "Jude",
        "headings": [
"Contend for the Faith and Beware of False Teachers",

        ]
    },

    {
        "name": "Revelation",
        "headings": [
"Jesus Reveals Himself to John",

"Messages to the Seven Churches",

"The Throne of God in Heaven",

"The Lamb and the Seven-Sealed Scroll",

"The Lamb Opens the First Six Seals",
"The Seals and the Great Multitude",

"The Seventh Seal and the Seven Trumpets",

"The Seven Trumpets and the Two Witnesses",

"The Dragon, the Beasts, and the Lamb",

"The Seven Angels and the Seven Bowls",
"The Two Witnesses and the Seventh Trumpet",

"The Woman, the Dragon, and the Beasts",

"The Lamb and the 144,000",

"The Harvest of the Earth",

"The Seven Bowls of God's Wrath",
"The Seven Bowls of God's Wrath",

"The Fall of Babylon the Great",

"The Rider on the White Horse",

"The Thousand Years and the Final Judgment",

"The Defeat of Satan and the Great White Throne",
"The New Heaven, the New Earth, and the New Jerusalem",

"The River of Life and the Return of Christ",

        ]
    },


];

const translations = [
    {
        "name": "ASV",
        "id": "12"
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
];
let currentTranslation = translations[0];

// 



document.querySelector(".bib-left-open").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.add("bib-left-show");
});
document.querySelector(".bib-right-open").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.add("bib-right-show");
    document.querySelector(".bib-opt").style.right = "392px";
});
document.querySelector("i.bib-left-xmark").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.remove("bib-left-show");
});
document.querySelector("i.bib-right-close").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.remove("bib-right-show");
    document.querySelector(".bib-opt").style.right = "55px";
});
document.querySelector(".bib-header-settings").addEventListener("click", () => {
    document.querySelector(".bib-opt").style.opacity = "1";
    document.querySelector(".bib-opt").style.pointerEvents = "auto";
});
function focusBible(){
	if(document.querySelector(".bib-mid-open").style.opacity == "0"){
		document.querySelectorAll(".bib-header-focus i")[0].classList.remove("none");
		document.querySelectorAll(".bib-header-focus i")[1].classList.add("none");
		document.querySelectorAll(".bib-mid-open").forEach(btn => {
			btn.style.opacity = "1";
			btn.style.pointerEvents = "auto";
			btn.click();
		});
		document.querySelector(".bib-opt-range").value = 1;
		document.querySelector(".bib-opt-range").dispatchEvent(new Event('change', { bubbles: true })); 
	} else {
		document.querySelectorAll(".bib-header-focus i")[0].classList.add("none");
		document.querySelectorAll(".bib-header-focus i")[1].classList.remove("none");
		document.querySelectorAll(".bib-mid-open").forEach(btn => {
			btn.style.opacity = "0";
			btn.style.pointerEvents = "none";
		});
		document.querySelector(".bib-left-xmark").click();
		document.querySelector(".bib-right-close").click();
		document.querySelector(".bib-opt-range").value = 1.2;
		document.querySelector(".bib-opt-range").dispatchEvent(new Event('change', { bubbles: true })); 
	}
}
document.querySelector("i.bib-opt-close").addEventListener("click", () => {
    document.querySelector(".bib-opt").style.opacity = "0";
    document.querySelector(".bib-opt").style.pointerEvents = "none";
});
document.querySelector("i.bib-book-chev").addEventListener("click", () => {
    if(document.querySelector("i.bib-book-chev").style.transform != "rotate(-180deg)"){
		document.querySelectorAll(".bib-left-search input")[1].focus();
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
		document.querySelectorAll(".bib-left-search input")[0].focus();
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
    document.querySelectorAll(".p, .nb, .d, .q1, .q2").forEach(verse => verse.style.fontSize = Number(20 * document.querySelector(".bib-opt-range").value) + "px");
    document.querySelectorAll(".s1, .s2").forEach(subheading => subheading.style.fontSize = Number(22 * document.querySelector(".bib-opt-range").value) + "px");
});
document.querySelector(".bib-opt-family").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-family").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        if(idx == 0){
            //document.querySelectorAll("div, span").forEach(el => el.classList.remove("font-sans"));
            document.querySelectorAll(".p, .nb, .d, .q1, .q2, .s1, .s2, .bib-mid-title").forEach(el => el.classList.remove("font-sans"));
        } else {
            //document.querySelectorAll("div, span").forEach(el => el.classList.add("font-sans"));
            document.querySelectorAll(".p, .nb, .d, .q1, .q2, .s1, .s2, .bib-mid-title").forEach(el => el.classList.add("font-sans"));
        }
    });
});
document.querySelector(".bib-opt-spacing").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-spacing").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        document.querySelectorAll(".p, .nb, .d, .q1, .q2").forEach(verse => verse.style.lineHeight = 1 + (.3 * idx));
    });
});
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
function resetBibleText(){
	document.querySelector(".bib-opt-range").dispatchEvent(new Event('change', { bubbles: true })); 
	document.querySelector(".bib-opt-family .bib-opt-btn-active").click();
	document.querySelector(".bib-opt-spacing .bib-opt-btn-active").click();
	document.querySelector(".bib-opt-theme .bib-opt-col-active").click();
}
document.querySelectorAll(".bib-right-btn span").forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		document.querySelectorAll(".bib-right-col").forEach(other => other.classList.add("none"));
		document.querySelectorAll(".bib-right-col")[idx].classList.remove("none");
		document.querySelectorAll(".bib-right-btn span").forEach(other => other.classList.remove("bib-right-btn-active"));
		btn.classList.add("bib-right-btn-active");

		if(idx == 1){
			setVerseAdding();
			document.querySelector(".bib-right-verse-add").classList.add("inactive-el");
		} else if(idx == 2){
			setVerseRelated();
			document.querySelector(".bib-right-rel-add").classList.add("inactive-el");
		} else if(idx == 3){
            setVerseLang();
			document.querySelector(".bib-right-lang-add").classList.add("inactive-el");
        } else {
			resetVerseColor();
		}
	});
});

async function getVerse(translation, book, chapter, verses){
    const dataToSend = { translation: translation, book: book, chapter: chapter, verses: verses };
    try {
        const response = await fetch(url + `/api/get-verses`, {
            method: 'POST',
            credentials: 'include',
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
        
        return data.verse;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

async function loadBible(){
    loadComments();
    document.querySelector(".bib-mid-mid").style.opacity = "0";
    let isNewBook = false;
    if(document.querySelector(".bib-book-txt").textContent != currentBook) isNewBook = true;
    if(isNewBook) document.querySelector(".bib-left-col").innerHTML = "";
    document.querySelector(".bib-book-txt").textContent = currentBook;
    document.querySelector(".bib-chap-txt").textContent = "Loading...";

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
        document.querySelector(".bib-chap-txt").textContent = amountOfChapters + " Chapters";
        document.querySelector(".bib-header-mid-txt").textContent = currentBook + " " + Number(currentChapterIdx + 1);
        document.querySelector(".bib-mid-mid").style.opacity = "1";
        if(chapterHeadings.indexOf(chapterHeadings.find(heading => heading.name == currentBook)) < 39){
            currentLanguage = "Hebrew";
            document.querySelector(".bib-right-lang-add").innerHTML = `View Hebrew <i class="fa-solid fa-magnifying-glass"></i>`;
        } else {
            currentLanguage = "Greek";
            document.querySelector(".bib-right-lang-add").innerHTML = `View Greek <i class="fa-solid fa-magnifying-glass"></i>`;
        }
        document.querySelector(".bib-right-btn-greek").textContent = currentLanguage;

        document.querySelector(".bib-left-col").innerHTML = "";
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
        if(isNewBook){
            document.querySelector(".bib-left-col").scrollTop = 0;
        }

		resetBibleText();
        resetChapterArrows();
        document.querySelector(".bib-right-btn-active").click();
        document.querySelector(".bib-mid").scrollTop = 0;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

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

function addNote(){
	let newNote = document.createElement("div");
	newNote.classList.add("bib-note");
	newNote.innerHTML = `
		<i class="fa-solid fa-xmark bib-note-xmark"></i>
		<textarea placeholder="Enter Heading..." class="bib-note-head-area" spellcheck="false"></textarea>
		<textarea placeholder="Type here..." class="bib-note-txt-area" spellcheck="false"></textarea>
		<div class="bib-note-time">Today <span></span> ${getTime()}</div>
	`;
	document.querySelector(".bib-right-note-col").insertBefore(newNote, document.querySelector(".bib-note"));

	newNote.querySelector("i.bib-note-xmark").addEventListener("click", () => {
		document.querySelector(".bib-right-note-col").removeChild(newNote);
	});

	newNote.querySelector(".bib-note-txt-area").addEventListener("scroll", () => {
		newNote.querySelector(".bib-note-txt-area").style.resize = "vertical";
	});
}

function resetVerseColor(){
	document.querySelectorAll(".yv-vlbl").forEach(num => {
		num.classList.remove("bib-verse-idx-highlighted");
		num.classList.remove("bib-verse-idx-active");
	});
}

function setVerseAdding(){
	document.querySelectorAll(".yv-vlbl").forEach(num => {
		num.classList.add("bib-verse-idx-highlighted");
		num.classList.remove("bib-verse-idx-active");

		num.onclick = () => {
			if(num.classList.contains("bib-verse-idx-active")){
				num.classList.remove("bib-verse-idx-active");
			} else {
				num.classList.add("bib-verse-idx-active");
			}
			resetVerseBtn();
		}
	});
}
function resetVerseBtn(){
	if(document.querySelector(".bib-verse-idx-active")){
		document.querySelector(".bib-right-verse-add").classList.remove("inactive-el");
	} else {
		document.querySelector(".bib-right-verse-add").classList.add("inactive-el");
	}
}
async function addVerse(){
	let verseIdxs = [];
	let verseStr = "";
	document.querySelectorAll(".bib-verse-idx-active").forEach(num => {
		verseIdxs.push(num.textContent);

		if(verseStr == ""){
			verseStr = num.textContent;
		} else if(Number(num.textContent) == Number(verseStr[verseStr.length - 1]) + 1){
			if(verseStr[verseStr.length - 2] == "-"){
				verseStr = verseStr.slice(0, -1) + num.textContent;
			} else {
				verseStr += "-" + num.textContent;
			}
		} else {
			verseStr += ", " + num.textContent;
		}
	});

    let fullVerse = await getVerse(currentTranslation.id, getBookSlug(currentBook), currentChapterIdx + 1, verseIdxs);

    let newVerse = document.createElement("div");
    newVerse.classList.add("bib-verse");
    newVerse.innerHTML = `
    <i class="fa-solid fa-xmark bib-verse-xmark"></i>
        <div class="bib-verse-head">${currentBook} ${currentChapterIdx + 1}:${verseStr}</div>
        <div class="bib-verse-txt">${fullVerse}</div>
        <div class="bib-verse-time">Today <span></span> ${getTime()}</div>
    `;
    document.querySelector(".bib-right-verse-col").insertBefore(newVerse, document.querySelector(".bib-verse"));

    newVerse.querySelector("i.bib-verse-xmark").addEventListener("click", () => {
        document.querySelector(".bib-right-verse-col").removeChild(newVerse);
    });
}

function setVerseRelated(){
	document.querySelectorAll(".yv-vlbl").forEach(num => {
		num.classList.add("bib-verse-idx-highlighted");
		num.classList.remove("bib-verse-idx-active");

		num.onclick = () => {
			document.querySelectorAll(".yv-vlbl").forEach(other => other.classList.remove("bib-verse-idx-active"));
			num.classList.add("bib-verse-idx-active");
			resetRelBtn();
		}
	});
    getReferences();
}
function resetRelBtn(){
	if(document.querySelector(".bib-verse-idx-active")){
		document.querySelector(".bib-right-rel-add").classList.remove("inactive-el");
	} else {
		document.querySelector(".bib-right-rel-add").classList.add("inactive-el");
	}
}
async function getReferences(){
	let baseScripture = `${currentBook} ${currentChapterIdx + 1}`;
	if(document.querySelector(".bib-verse-idx-active")) baseScripture += ": " + document.querySelector(".bib-verse-idx-active").textContent;
    document.querySelector(".bib-rel-desc").textContent = "Loading...";
    document.querySelectorAll(".bib-rel").forEach(rel => document.querySelector(".bib-right-rel-col").removeChild(rel));

	let sampleFormat = [
		{
			"book": "Genesis",
			"chapter": 1,
			"verses": "1"
		},
		{
			"book": "Genesis",
			"chapter": 1,
			"verses": "10-15"
		},
		{
			"book": "Genesis",
			"chapter": 1,
			"verses": "25"
		}
	]

	let prompt = `
You are an AI assistant for a Christian Bible study app.

Your task is to find exactly 6 strong biblical cross-references for ${baseScripture}.

A cross-reference should have a clear and meaningful connection to the passage, such as:
Closely related biblical teaching or theme
A passage that helps explain or illuminate the meaning
Parallel passage or event
Direct quotation or allusion
Prophecy and fulfillment

Prioritize strong, direct connections over merely sharing similar words or vague themes.

Try to use references from different books in the bible, or atleast different chapters if it is possible.

For each cross-reference, return accurate Bible book, chapter, and verse references.

Return ONLY valid JSON in exactly this format:
${sampleFormat}

Do not include markdown, explanations, commentary, or text outside the JSON.
	`;
	
    const dataToSend = { prompt: prompt, translation: currentTranslation.id };
    try {
        const response = await fetch(url + `/api/get-references`, {
            method: 'POST',
            credentials: 'include',
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

		let references = data.data.references;

		references.forEach(ref => {
			let newRef = document.createElement("div");
			newRef.classList.add("bib-rel");
			newRef.innerHTML = `
				<div class="bib-rel-head">${ref.book} ${ref.chapter}:${ref.verses}</div>
				<div class="bib-rel-txt">${ref.verseTxt}</div>
			`;
			document.querySelector(".bib-right-rel-col").insertBefore(newRef, document.querySelector(".bib-rel"));
		});
        document.querySelector(".bib-rel-desc").textContent = "Scripture related to " + baseScripture;

	} catch (error) {
        console.error('Error posting data:', error);
    }
}

function setVerseLang(){
	document.querySelectorAll(".yv-vlbl").forEach(num => {
		num.classList.add("bib-verse-idx-highlighted");
		num.classList.remove("bib-verse-idx-active");

		num.onclick = () => {
			document.querySelectorAll(".yv-vlbl").forEach(other => other.classList.remove("bib-verse-idx-active"));
			num.classList.add("bib-verse-idx-active");
			resetLangBtn();
		}
	});
}
function resetLangBtn(){
	if(document.querySelector(".bib-verse-idx-active")){
		document.querySelector(".bib-right-lang-add").classList.remove("inactive-el");
	} else {
		document.querySelector(".bib-right-lang-add").classList.add("inactive-el");
	}
}
async function getGreekVerse(){
    let engVerse = await getVerse(currentTranslation.id, getBookSlug(currentBook), currentChapterIdx + 1, [document.querySelector(".bib-verse-idx-active").textContent]);

	let baseScripture = `${currentBook} ${currentChapterIdx + 1}`;
	if(document.querySelector(".bib-verse-idx-active")) baseScripture += ": " + document.querySelector(".bib-verse-idx-active").textContent;
    document.querySelector(".bib-lang-load").textContent = "Loading...";
    document.querySelector(".bib-lang-eng").innerHTML = "";
    document.querySelector(".bib-lang-greek").innerHTML = "";
    document.querySelector(".bib-right-lang-col").classList.remove("none");
    document.querySelector(".bib-lang-content").classList.add("none");
    document.querySelector(".bib-lang-content-load").classList.add("none");

    // not showing hebrew text, + takes to long to show loading text

    let prompt = `
You are a Greek New Testament text retrieval assistant.

Given the English Bible verse and its Scripture reference below, return ONLY the corresponding original Koine Greek text of that verse.

Scripture reference: ${baseScripture}
English verse: ${engVerse}

Return your response in exactly this JSON format:
{"original": "..."}

Rules:
- Return only the Greek text of the specified verse.
- Do not translate, explain, paraphrase, or add commentary.
- Preserve the original Greek wording and accents.
- Do not include the verse reference.
- Do not include Markdown or code fences.
- Return valid JSON only.
    `;
    if(currentLanguage == "Hebrew"){
        prompt = `
You are a Hebrew Old Testament text retrieval assistant.

Given the English Bible verse and its Scripture reference below, return ONLY the corresponding original Hebrew text of that verse.

Scripture reference: ${baseScripture}
English verse: ${engVerse}

Return your response in exactly this JSON format:
{"original": "..."}

Rules:
- Return only the Hebrew text of the specified verse.
- Do not translate, explain, paraphrase, or add commentary.
- Preserve the original Hebrew wording and accents.
- Do not include the verse reference.
- Do not include Markdown or code fences.
- Return valid JSON only.
        `;
    }

    const dataToSend = { prompt: prompt };
    try {
        const response = await fetch(url + `/api/get-greek-verse`, {
            method: 'POST',
            credentials: 'include',
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

        document.querySelector(".bib-lang-load").textContent = baseScripture;
        engVerse.split(" ").forEach(word => {
            document.querySelector(".bib-lang-eng").innerHTML += `<span>${word}</span>`;
        });
        document.querySelector(".bib-lang-greek").textContent = data.original;

        document.querySelectorAll(".bib-lang-eng span").forEach(word => {
            word.addEventListener("click", () => {
                analyseGreekWord(word.textContent, baseScripture, engVerse);
            });
        });

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function analyseGreekWord(engWord, scripture, verse){
    document.querySelector(".bib-lang-content-load").classList.remove("none");
    document.querySelector(".bib-lang-content").classList.add("none");

    let responseFormat = {
        "lemma": "",
        "transliteration": "",
        "english": "",
        "definition": "",
        "strongs": "",
        "parsing": "",
        "occurrences": [
            {
                "book": "Genesis",
                "chapter": 1,
                "verse": 1
            },
        ]
    }
    
    let prompt = `
You are a Koine Greek New Testament word-study assistant.

I will provide you with:

* The English word: ${engWord}
* The Bible verse/reference: ${scripture}
* The whole english verse: ${verse}

Your task is to return accurate lexical and grammatical information about **that specific Greek word**.

You must provide:

1. **Lemma** — The exact Greek lemma corresponding to the word as it appears in the supplied verse.
2. **Transliteration** — A standard scholarly transliteration of the Greek lemma.
3. **English** — The most appropriate English equivalent(s) for the lemma in general.
4. **Definition** — A concise lexical definition of the lemma in Koine Greek/New Testament usage.
5. **Strong’s** — The Strong's Greek number corresponding to the lemma, including the G prefix where appropriate (e.g. G26).
6. **Parsing** — The grammatical parsing of the specific form appearing in the supplied verse, using full descriptions such as:
   * Noun, Nominative, Singular, Masculine
   * Verb, Aorist, Active, Indicative, 3rd Person Singular
   * Adjective, Nominative, Singular, Feminine
   * Preposition
   * Conjunction
   * Article, Nominative, Singular, Masculine
7. Occurences — A list of the other New Testament verses where this **same lemma** occurs.

Important rules for NT occurrences:

* List references where the Greek lemma itself occurs, not merely verses containing an English translation that could correspond to it.
* Do not include the supplied verse in the list.
* Do not invent or guess references.
* If the lemma occurs many times, return all occurrences that can be established reliably.
* If the exact occurrence data cannot be established with confidence, return an empty array rather than fabricating references.
* Preserve the distinction between the lemma and different Greek words that may have similar English translations.

Important rules for the supplied word:

* Use the supplied **Lemma** as the primary lexical identifier.
* Use the Greek form appearing in the verse to determine the **Parsing**.
* Do not confuse the lemma with a related word, cognate, synonym, or inflected form of a different lemma.
* Strong's should correspond to the supplied lemma.

Return the result ONLY in the JSON format provided in ${responseFormat}. Do not include markdown, explanations outside the JSON, or additional fields.
    `;
    if(currentLanguage == "Hebrew"){
        prompt = `
You are a Hebrew Old Testament word-study assistant.

I will provide you with:

* The English word: ${engWord}
* The Bible verse/reference: ${scripture}
* The whole english verse: ${verse}

Your task is to return accurate lexical and grammatical information about **that specific Hebrew word**.

You must provide:

1. **Lemma** — The exact Hebrew lemma corresponding to the word as it appears in the supplied verse.
2. **Transliteration** — A standard scholarly transliteration of the Hebrew lemma.
3. **English** — The most appropriate English equivalent(s) for the lemma in general.
4. **Definition** — A concise lexical definition of the lemma in Hebrew/OT usage.
5. **Strong’s** — The Strong's Hebrew number corresponding to the lemma, including the H prefix where appropriate.
6. **Parsing** — The grammatical parsing of the specific form appearing in the supplied verse, using full descriptions such as:
* Noun, Masculine, Singular, Absolute
* Noun, Masculine, Singular, Construct
* Verb, Qal, Perfect, 3rd Person, Masculine, Singular
* Verb, Qal, Imperfect, 3rd Person, Masculine, Singular
* Verb, Piel, Perfect, 3rd Person, Masculine, Singular
* Adjective, Masculine, Singular, Absolute
* Preposition
* Conjunction
* Definite Article
* Pronoun, 3rd Person, Masculine, Singular
* Adverb
* Particle
7. Occurences — A list of the other Old Testament verses where this **same lemma** occurs.

Important rules for OT occurrences:

* List references where the Hebrew lemma itself occurs, not merely verses containing an English translation that could correspond to it.
* Do not include the supplied verse in the list.
* Do not invent or guess references.
* If the lemma occurs many times, return all occurrences that can be established reliably.
* If the exact occurrence data cannot be established with confidence, return an empty array rather than fabricating references.
* Preserve the distinction between the lemma and different Hebrew words that may have similar English translations.

Important rules for the supplied word:

* Use the supplied **Lemma** as the primary lexical identifier.
* Determine the parsing from the actual Hebrew form occurring in the supplied verse
* Do not confuse the lemma with a related word, cognate, synonym, or inflected form of a different lemma.
* Strong's should correspond to the supplied lemma.

Return the result ONLY in the JSON format provided in ${responseFormat}. Do not include markdown, explanations outside the JSON, or additional fields.
    `;
    }

    const dataToSend = { prompt: prompt };
    try {
        const response = await fetch(url + `/api/analyse-greek-word`, {
            method: 'POST',
            credentials: 'include',
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
        let analysis = data.analysis;

        document.querySelector(".bib-lang-content").classList.remove("none");
        document.querySelector(".bib-lang-ul").innerHTML = `
            <div class="bib-lang-li">
                <div>Lemma:</div>
                <span>${analysis.lemma}</span>
            </div>
            <div class="bib-lang-li">
                <div>Transliteration:</div>
                <span>${analysis.transliteration}</span>
            </div>
            <div class="bib-lang-li">
                <div>English:</div>
                <span>${analysis.english}</span>
            </div>
            <div class="bib-lang-li">
                <div>Definition:</div>
                <span>${analysis.definition}</span>
            </div>
            <div class="bib-lang-li">
                <div>Strong’s:</div>
                <span>${analysis.strongs}</span>
            </div>
            <div class="bib-lang-li">
                <div>Parsing:</div>
                <span>${analysis.parsing}</span>
            </div>
        `;

        document.querySelector(".bib-lang-content-load").classList.add("none");

        document.querySelector(".bib-lang-label").innerHTML = `NT Occurrences (${analysis.occurrences.length})`;
        document.querySelector(".bib-lang-occ-col").innerHTML = "";
        for(const verse of analysis.occurrences){
            let newOcc = document.createElement("div");
            newOcc.classList.add("bib-lang-occ");
            let occVerse = await getVerse(currentTranslation.id, getBookSlug(verse.book), verse.chapter, [verse.verse]);
            newOcc.innerHTML = `
                <div class="bib-lang-head">${verse.book} ${verse.chapter}:${verse.verse}</div>
                <div class="bib-lang-txt">${occVerse}</div>
            `;
            document.querySelector(".bib-lang-occ-col").appendChild(newOcc);
        }

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

async function loadComments(){
    const dataToSend = { book: currentBook, chapter: currentChapterIdx + 1 };
    try {
        const response = await fetch(url + `/api/load-comments`, {
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

        let comments = data.comments;

        for(const comment of comments){
            let newComment = document.createElement("div");
            newComment.classList.add("bib-chat-com");
    
            let pfpStr = await getPfp(comment.user_id);
    
            let replies = comments.filter(reply => reply.parent_id == comment.id);
    
            newComment.innerHTML = `
                <div class="bib-com-pfp">
                    <img src="${pfpStr}" />
                </div>
    
                <div class="bib-com-right">
                    <div class="bib-com-name">${comment.username}</div>
                    <div class="bib-com-date">${comment.comment_date}, ${comment.time}</div>
                    <div class="bib-com-text">${comment.text}</div>
                    <div class="bib-com-reply-btn">View Reples (<span>${replies.length}}</span>) <i class="fa-solid fa-chevron-down"></i></div>
    
                    <div class="bib-com-col">
    
                    </div>
                </div>
            `;
    
            replies.forEach(reply => {
                let newReply = document.createElement("div");
                newReply.classList.add("bib-chat-com");
    
                // continue here, it needs to be made repeatable for replies of replies etc ***
            });
    
            document.querySelector(".bib-chat-col").appendChild(newComment);
        }


    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function getPfp(userId){
    const dataToSend = { userId: userId };
    try {
        const response = await fetch(url + `/api/get-pfp`, {
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

        console.log(data.pfp);

        return data.pfp;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}



/*////////// AUTO //////////*/
function getTime(){
    const now = new Date();
    let timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    if(Number(timeString.slice(0, 2)) > 12){
        timeString = String(Number(Number(timeString.slice(0, 2)) - 12)) + timeString.slice(2) + "pm";
    } else if(Number(timeString.slice(0, 2)) == 12){
        timeString = timeString + "pm";
    } else {
        timeString = timeString + "am";
    }
    return timeString;
}