

let currentBook = "Genesis";
let currentChapterIdx = 0;
let currentLanguage = "Hebrew";
let currentAllComments;
let currentAudio;
let currentAudioBook = currentBook;
let currentAudioChapter = currentChapterIdx;
let currentTestament = "OT";

const psalmSubscriptions = [
    3, 4, 5, 6, 7, 8, 9, 12, 13, 18, 19, 20, 21, 22, 30, 31, 34, 36, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 53, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 67, 68, 69, 70, 75, 76, 77, 80, 81, 83, 84, 85, 88, 89, 92, 102, 108, 140, 142
]
const psalmDoubleSubscriptions = [
    51, 52, 54, 60
]


document.querySelector(".bib-left-open").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.add("bib-left-show");
});
document.querySelector(".bib-right-open").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.add("bib-right-show");
    document.querySelector(".bib-opt").style.right = "392px";
});
function initializeSideNavs(){
    document.querySelectorAll(".bib-right, .bib-left").forEach(wrapper => {
        wrapper.classList.remove("bib-right-show");
        wrapper.classList.remove("bib-left-show");
    });
    if(window.innerWidth > 1440){
        document.querySelector(".bib-right").classList.add("bib-right-show");
        document.querySelector(".bib-left").classList.add("bib-left-show");  
    }
}
initializeSideNavs();

document.querySelector("i.bib-left-xmark").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.remove("bib-left-show");
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "none";
    document.querySelector(".bib-mobile-shadow").style.opacity = "0";
});
document.querySelector("i.bib-right-close").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.remove("bib-right-show");
    document.querySelector(".bib-opt").style.right = "55px";
    document.querySelector(".bib-right-btn span").click();
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "none";
    document.querySelector(".bib-mobile-shadow").style.opacity = "0";
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
    document.querySelector(".bib-mobile-shadow").style.opacity = "0";
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "none";
});
document.querySelector(".bib-book-book").addEventListener("click", () => {
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
document.querySelector(".bib-header-mid-mid").addEventListener("click", () => {
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
    let fontSizes = [46, 20, 24];
    if(window.innerWidth <= 1440){
        fontSizes = [40, 16, 20];
    }

    document.querySelector(".bib-mid-title").style.fontSize = Number(fontSizes[0] * document.querySelector(".bib-opt-range").value) + "px";
    document.querySelectorAll(".p, .nb, .d, .q1, .q2").forEach(verse => verse.style.fontSize = Number(fontSizes[1] * document.querySelector(".bib-opt-range").value) + "px");
    document.querySelectorAll(".s1, .s2").forEach(subheading => subheading.style.fontSize = Number(fontSizes[2] * document.querySelector(".bib-opt-range").value) + "px");

    saveSettings();
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

        saveSettings();
    });
});
document.querySelector(".bib-opt-spacing").querySelectorAll(".bib-opt-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        document.querySelector(".bib-opt-spacing").querySelector(".bib-opt-btn-active")?.classList.remove("bib-opt-btn-active");
        btn.classList.add("bib-opt-btn-active");
        document.querySelectorAll(".p, .nb, .d, .q1, .q2").forEach(verse => verse.style.lineHeight = 1 + (.3 * idx));
        saveSettings();
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

        saveSettings();
    });

    if(idx == 1){
        //col.click();
    }
});
function initializeTranslations(){
    translations.forEach(tran => {
        let newPill = document.createElement("div");
        newPill.classList.add("bib-opt-pill");
        newPill.innerHTML = tran.name;

        document.querySelector(".bib-opt-tran").appendChild(newPill);

        newPill.addEventListener("click", async () => {
            document.querySelectorAll(".bib-opt-pill").forEach(other => {
                other.classList.remove("bib-opt-pill-active");
            });
            newPill.classList.add("bib-opt-pill-active");

            currentTranslation = tran;
            let wasShown = document.querySelector(".bib-opt").style.opacity == "1";
            if(localStorage.getItem("bibleSaveData")){
                currentBook = JSON.parse(localStorage.getItem("bibleSaveData")).book;
                currentChapterIdx = JSON.parse(localStorage.getItem("bibleSaveData")).chapter;
            }
            saveSettings();
            await loadBible();
            if(wasShown){
                document.querySelector(".bib-opt").style.opacity = "1";
                document.querySelector(".bib-opt").style.pointerEvents = "auto";
                document.querySelector(".bib-mobile-shadow").style.opacity = "1";
                document.querySelector(".bib-mobile-shadow").style.pointerEvents = "auto";
            }
        });
    });
}
initializeTranslations();
document.addEventListener("click", (e) => {
    document.querySelectorAll(".bib-book-drop").forEach((drop, idx) => {
        if(!drop.contains(e.target) && !e.target.classList.contains("drop-chev") && !e.target.parentElement.classList.contains("drop-chev")){
            drop.style.opacity = "0";
            drop.style.pointerEvents = "none";
            document.querySelectorAll("i.drop-chev")[idx].style.transform = "rotate(0deg)";
        }
    });

    if(document.querySelector(".bib-opt").style.opacity == "1" && !document.querySelector(".bib-opt").contains(e.target) && !e.target.classList.contains("bib-header-settings") && !e.target.classList.contains("bib-bottom-settings")){
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
		} else if(idx == 3){
            setVerseLang();
			document.querySelector(".bib-right-lang-add").classList.add("inactive-el");
        } else {
			resetVerseColor();
            if(idx == 4){
                initializeAi();
            }
		}
	});
});

async function loadBible(){
    loadComments();
    displayNotes();
    document.querySelector(".bib-mid-mid").style.opacity = "0";
    let isNewBook = false;
    if(document.querySelector(".bib-book-txt").textContent != currentBook) isNewBook = true;
    if(isNewBook) document.querySelector(".bib-left-col").innerHTML = "";
    document.querySelector(".bib-book-txt").textContent = currentBook;
    document.querySelector(".bib-chap-txt").textContent = "Loading...";

    const dataToSend = { translation: currentTranslation.id, book: getBookSlug(currentBook), chapterIdx: currentChapterIdx + 1 };
    try {
        const response = await fetch(url + `/api/load-bible`, {
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
            currentTestament = "OT";
            document.querySelector(".bib-right-lang-add").innerHTML = `View Hebrew <i class="fa-solid fa-magnifying-glass"></i>`;
        } else {
            currentLanguage = "Greek";
            currentTestament = "NT";
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

        let bibleSaveData = {
            "book": currentBook,
            "chapter": currentChapterIdx,
        }
        localStorage.setItem("bibleSaveData", JSON.stringify(bibleSaveData));

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

function resetChapterArrows(){
    document.querySelectorAll(".bib-mid-chev").forEach((arrow, idx) => {
        arrow.classList.remove("inactive-el");
        
        if(idx == 0 && currentChapterIdx == 0 && currentBook == "Genesis"){
            arrow.classList.add("inactive-el");
        }

        if(idx ==  1 && currentChapterIdx == chapterHeadings.find(book => book.name == currentBook).headings.length - 1 && currentBook == "Revelation"){
            arrow.classList.add("inactive-el");
        }
    });
}

document.querySelectorAll(".bib-mid-chev").forEach((chev, idx) => {
    chev.addEventListener("click", () => {
        if(currentChapterIdx == 0 && idx == 0){
            currentBook = chapterHeadings[chapterHeadings.indexOf(chapterHeadings.find(book => book.name == currentBook)) - 1].name;
            currentChapterIdx = chapterHeadings.find(book => book.name == currentBook).headings.length - 1;
        } else if(currentChapterIdx == chapterHeadings.find(book => book.name == currentBook).headings.length - 1 && idx == 1){
            currentBook = chapterHeadings[chapterHeadings.indexOf(chapterHeadings.find(book => book.name == currentBook)) + 1].name;
            currentChapterIdx = 0;
        } else {
            if(idx == 0){
                currentChapterIdx--;
            } else {
                currentChapterIdx++;
            }
        }
        loadBible();
    });
});

document.querySelector(".bib-bottom-book").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.add("bib-left-show");
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "auto";
    document.querySelector(".bib-mobile-shadow").style.opacity = "1";
});
document.querySelector(".bib-bottom-high").addEventListener("click", () => {
    document.querySelector(".bib-right").classList.add("bib-right-show");
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "auto";
    document.querySelector(".bib-mobile-shadow").style.opacity = "1";
});
document.querySelector(".bib-bottom-audio").addEventListener("click", () => {
    showAudio(currentBook, currentChapterIdx + 1);
});
document.querySelector(".bib-bottom-settings").addEventListener("click", () => {
    document.querySelector(".bib-opt").style.opacity = "1";
    document.querySelector(".bib-opt").style.pointerEvents = "auto";
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "auto";
    document.querySelector(".bib-mobile-shadow").style.opacity = "1";
});
document.querySelector(".bib-mobile-shadow").addEventListener("click", () => {
    document.querySelector(".bib-left").classList.remove("bib-left-show");
    document.querySelector(".bib-right").classList.remove("bib-right-show");
    document.querySelector(".bib-opt").style.opacity = "0";
    document.querySelector(".bib-opt").style.pointerEvents = "none";
    document.querySelector(".bib-mobile-shadow").style.opacity = "0";
    document.querySelector(".bib-mobile-shadow").style.pointerEvents = "none";
});

function addNote(){
	let newNote = document.createElement("div");
	newNote.classList.add("bib-note");
	newNote.innerHTML = `
		<i class="fa-solid fa-trash-can bib-note-xmark none"></i>
		<textarea placeholder="Enter Heading..." class="bib-note-head-area" spellcheck="false"></textarea>
		<textarea placeholder="Type here..." class="bib-note-txt-area" spellcheck="false"></textarea>
		<div class="bib-note-time">Today <span></span> ${getTime()}</div>

        <div class="bib-note-save">Save</div>
	`;
    document.querySelector(".bib-right-note-err").classList.add("none");
	document.querySelector(".bib-right-note-col").prepend(newNote);

    setNoteInputs(newNote);
}
async function updateNote(noteId, noteELement){
    noteELement.querySelector(".bib-note-save").classList.add("none");

    const dataToSend = { noteId: noteId, heading: document.querySelector(".bib-note-head-area").value, txt: document.querySelector(".bib-note-txt-area").value };
    try {
        const response = await fetch(url + `/api/update-note`, {
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

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function displayNotes(){
    document.querySelector(".bib-right-note-col").innerHTML = "Loading...";
    try {
        const response = await fetch(url + `api/get-notes`, {
            method: 'GET',
        });
        const data = await response.json();

        let notes = data.notes;
        if(document.querySelector(".bib-right-note-filter-txt").textContent.toLowerCase() == "this book"){
            notes = notes.filter(note => note.book == currentBook);
        } else if(document.querySelector(".bib-right-note-filter-txt").textContent.toLowerCase() == "this chapter"){
            notes = notes.filter(note => note.book == currentBook && note.chapter == currentChapterIdx + 1);
        } else if(document.querySelector(".bib-right-note-filter-txt").textContent.toLowerCase() == "new testament"){
            notes = notes.filter(note => chapterHeadings.indexOf(chapterHeadings.find(book => book.name == note.book)) >= 39 );
        } else if(document.querySelector(".bib-right-note-filter-txt").textContent.toLowerCase() == "old testament"){
            notes = notes.filter(note => chapterHeadings.indexOf(chapterHeadings.find(book => book.name == note.book)) <= 38 );
        }

        document.querySelector(".bib-right-note-col").innerHTML = "";
        document.querySelector(".bib-right-note-err").classList.add("none");
        notes.forEach(note => {
            let newNote = document.createElement("div");
            newNote.classList.add("bib-note");
            newNote.dataset.noteId = note.id;

            let noteDate = note.note_date;
            if(getSlashDate(noteDate) == getCurrentDate()){
                noteDate = "Today";
            }
            newNote.innerHTML = `
                <i class="fa-solid fa-trash-can bib-note-xmark"></i>
                <textarea placeholder="Enter Heading..." class="bib-note-head-area" spellcheck="false">${note.heading}</textarea>
                <textarea placeholder="Type here..." class="bib-note-txt-area" spellcheck="false">${note.txt}</textarea>
                <div class="bib-note-time">${noteDate} <span></span> ${note.note_time}</div>

                <div class="bib-note-save none">Save</div>
            `;
            document.querySelector(".bib-right-note-col").prepend(newNote);

            setNoteInputs(newNote);
        });

        if(notes.length == 0){
            document.querySelector(".bib-right-note-err").classList.remove("none");
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function setNoteInputs(noteElement){
	noteElement.querySelector("i.bib-note-xmark").addEventListener("click", async () => {
		document.querySelector(".bib-right-note-col").removeChild(noteElement);

        console.log(document.querySelector(".bib-note"));
        if(!document.querySelector(".bib-note")){
            document.querySelector(".bib-right-note-err").classList.remove("none");
        }

        const dataToSend = { id: noteElement.dataset.noteId };
        try {
            const response = await fetch(url + `/api/delete-note`, {
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
        } catch (error) {
            console.error('Error posting data:', error);
        }
	});

	noteElement.querySelector(".bib-note-txt-area").addEventListener("scroll", () => {
		noteElement.querySelector(".bib-note-txt-area").style.resize = "vertical";
	});
    
    noteElement.querySelectorAll(".bib-note-head-area, .bib-note-txt-area").forEach(inp => {
        inp.addEventListener("input", () => {
            noteElement.querySelector(".bib-note-save").classList.remove("none");
        });
    });

    noteElement.querySelector(".bib-note-save").onclick = async () => {
        if(noteElement.querySelector(".bib-note-save").textContent == "Save"){
            const dataToSend = { heading: document.querySelector(".bib-note-head-area").value, txt: document.querySelector(".bib-note-txt-area").value, book: currentBook, chapter: currentChapterIdx + 1 };
            try {
                const response = await fetch(url + `/api/create-note`, {
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

                noteElement.dataset.noteId = data.noteId;
                noteElement.querySelector(".bib-note-save").textContent = "Update";
                noteElement.querySelector("i.bib-note-xmark").classList.remove("none");

            } catch (error) {
                console.error('Error posting data:', error);
            }
        }

        else {
            updateNote(data.noteId, noteElement);
        }
        noteElement.querySelector(".bib-note-save").classList.add("none");
    }
}
document.querySelector(".bib-right-note-filter-txt").addEventListener("click", () => {
    document.querySelector(".bib-right-note-filter-drop").style.opacity = "1";
    document.querySelector(".bib-right-note-filter-drop").style.pointerEvents = "auto";
});
document.addEventListener("click", (e) => {
    if(!document.querySelector(".bib-right-note-filter-txt").contains(e.target)){
        document.querySelector(".bib-right-note-filter-drop").style.opacity = "0";
        document.querySelector(".bib-right-note-filter-drop").style.pointerEvents = "none";
    }
});
document.querySelectorAll(".bib-right-note-filter-drop div").forEach(opt => {
    opt.addEventListener("click", () => {
        document.querySelector(".bib-right-note-filter-txt").textContent = opt.textContent;
        displayNotes();
    });
});

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
async function displayVerses(){
    document.querySelector(".bib-right-verse-err").classList.add("none");
    try {
        const response = await fetch(`${url}/api/get-user-verses`, {
            method: 'GET',
        });
        const data = await response.json(); 

        let verses = data.verses;
        if(document.querySelector(".bib-right-verse-filter-txt").textContent.toLowerCase() == "new testament"){
            verses = verses.filter(verse => chapterHeadings.indexOf(chapterHeadings.find(book => book.name == verse.book)) >= 39 );
        } else if(document.querySelector(".bib-right-verse-filter-txt").textContent.toLowerCase() == "old testament"){
            verses = verses.filter(verse => chapterHeadings.indexOf(chapterHeadings.find(book => book.name == verse.book)) <= 38 );
        }

        document.querySelector(".bib-right-verse-col").innerHTML = "";
        verses.forEach(verse => {
            let newVerse = document.createElement("div");
            newVerse.classList.add("bib-verse");
            newVerse.dataset.verseId = verse.id;

            let verseDate = verse.verse_date;
            if(getSlashDate(verseDate) == getCurrentDate()){
                verseDate = "Today";
            }
            newVerse.innerHTML = `
                <i class="fa-solid fa-trash bib-verse-xmark"></i>
                <div class="bib-verse-head">${verse.book} ${verse.chapter}:${verse.verse_ref}</div>
                <div class="bib-verse-txt">${verse.verse_txt}</div>
                <div class="bib-verse-time">${verseDate} <span></span> ${verse.verse_time}</div>

                <div class="bib-verse-tran">
                    <div class="bib-verse-tran-txt">${verse.translation}</div>

                    <div class="bib-verse-tran-drop"></div>
                </div>
            `;
            document.querySelector(".bib-right-verse-col").prepend(newVerse);

            setVerseInputs(newVerse);
        });

        if(verses.length == 0){
            document.querySelector(".bib-right-verse-err").classList.remove("none");
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
displayVerses();
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

    document.querySelector(".bib-right-verse-err").classList.add("none");
    document.querySelector(".bib-right-verse-load").classList.remove("none");
    let fullVerse = await getVerse(currentTranslation.id, getBookSlug(currentBook), currentChapterIdx + 1, verseIdxs);
    document.querySelector(".bib-right-verse-load").classList.add("none");

    let newVerse = document.createElement("div");
    newVerse.classList.add("bib-verse");
    newVerse.innerHTML = `
        <i class="fa-solid fa-trash bib-verse-xmark"></i>
        <div class="bib-verse-head">${currentBook} ${currentChapterIdx + 1}:${verseStr}</div>
        <div class="bib-verse-txt">${fullVerse}</div>
        <div class="bib-verse-time">Today <span></span> ${getTime()}</div>

        <div class="bib-verse-tran">
            <div class="bib-verse-tran-txt">${currentTranslation.name}</div>

            <div class="bib-verse-tran-drop"></div>
        </div>
    `;
    document.querySelector(".bib-right-verse-col").insertBefore(newVerse, document.querySelector(".bib-verse"));

    await saveVerseDb(newVerse, currentBook, currentChapterIdx + 1, verseStr, fullVerse, getTime(), currentTranslation.name);

    setVerseInputs(newVerse);
}
async function saveVerseDb(verseElement, book, chapter, verseRef, verseTxt, time, translation){
    const dataToSend = { book: book, chapter: chapter, verseRef: verseRef, verseTxt: verseTxt, time: time, translation: translation };
    try {
        const response = await fetch(url + `/api/create-verse`, {
            method: 'POST',
            
            headers: { 
                
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dataToSend), 
        });

        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return;
        }

        const data = await response.json();

        verseElement.dataset.verseId = data.id;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
function setVerseInputs(verseElement){
    verseElement.querySelector(".bib-verse-tran-txt").addEventListener("click", () => {
        verseElement.querySelector(".bib-verse-tran-drop").style.opacity = "1";
        verseElement.querySelector(".bib-verse-tran-drop").style.pointerEvents = "auto";
    });

    translations.forEach(tran => {
        let newTran = document.createElement("div");
        newTran.innerHTML = `${tran.name}`;
        verseElement.querySelector(".bib-verse-tran-drop").appendChild(newTran);

        newTran.addEventListener("click", async () => {
            verseElement.querySelector(".bib-verse-tran-txt").textContent = tran.name;

            let verseIdxs = [];
            verseElement.querySelector(".bib-verse-head").textContent.split(":")[1].split(", ").forEach(verse => {
                verseIdxs.push(verse);
            });
            verseElement.querySelector(".bib-verse-txt").textContent = "Loading...";
            let diffVerse = await getVerse(translations.find(translation => translation.name == tran.name).id, getBookSlug(currentBook), currentChapterIdx + 1, verseIdxs);
            verseElement.querySelector(".bib-verse-txt").textContent = diffVerse;

            const dataToSend = { id: verseElement.dataset.verseId, verse: diffVerse, translation: tran.name };
            try {
                const response = await fetch(url + `/api/change-verse-translation`, {
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
            } catch (error) {
                console.error('Error posting data:', error);
            }
        });
    });
    document.addEventListener("click", (e) => {
        if(!verseElement.querySelector(".bib-verse-tran-txt").contains(e.target)){
            verseElement.querySelector(".bib-verse-tran-drop").style.opacity = "0";
            verseElement.querySelector(".bib-verse-tran-drop").style.pointerEvents = "none";
        }
    });

    verseElement.querySelector("i.bib-verse-xmark").addEventListener("click", async () => {
        document.querySelector(".bib-right-verse-col").removeChild(verseElement);

        if(!document.querySelector(".bib-verse")){
            document.querySelector(".bib-right-verse-err").classList.remove("none");
        }

        const dataToSend = { id: verseElement.dataset.verseId };
        try {
            const response = await fetch(url + `/api/delete-verse`, {
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
        } catch (error) {
            console.error('Error posting data:', error);
        }
    });
}
document.querySelector(".bib-right-verse-filter-txt").addEventListener("click", () => {
    document.querySelector(".bib-right-verse-filter-drop").style.opacity = "1";
    document.querySelector(".bib-right-verse-filter-drop").style.pointerEvents = "auto";
});
document.addEventListener("click", (e) => {
    if(!document.querySelector(".bib-right-verse-filter-txt").contains(e.target)){
        document.querySelector(".bib-right-verse-filter-drop").style.opacity = "0";
        document.querySelector(".bib-right-verse-filter-drop").style.pointerEvents = "none";
    }
});
document.querySelectorAll(".bib-right-verse-filter-drop div").forEach(opt => {
    opt.addEventListener("click", () => {
        document.querySelector(".bib-right-verse-filter-txt").textContent = opt.textContent;
        displayVerses();
    });
});

function setVerseRelated(){
	document.querySelectorAll(".yv-vlbl").forEach(num => {
		num.classList.add("bib-verse-idx-highlighted");
		num.classList.remove("bib-verse-idx-active");

		num.onclick = () => {
            if(!num.classList.contains("bib-verse-idx-active")){
                document.querySelectorAll(".yv-vlbl").forEach(other => other.classList.remove("bib-verse-idx-active"));
                num.classList.add("bib-verse-idx-active");
            } else {
                num.classList.remove("bib-verse-idx-active");
            }
		}
	});
    document.querySelector(".bib-right-rel-col").classList.add("none");
    //getReferences();
}
async function getReferences(){
    let baseScripture = `${currentBook} ${currentChapterIdx + 1}`;
	if(document.querySelector(".bib-verse-idx-active")) baseScripture += ":" + document.querySelector(".bib-verse-idx-active").textContent;
    document.querySelector(".bib-right-rel-add").classList.add("inactive-el");
    document.querySelector(".bib-right-rel-col").classList.remove("none");
    document.querySelector(".bib-rel-desc").textContent = "Loading...";
    document.querySelectorAll(".bib-rel").forEach(rel => document.querySelector(".bib-right-rel-col").removeChild(rel));

	let sampleFormat = [
		{
			"book": "Genesis",
			"chapter": 1,
			"verse": "1"
		},
		{
			"book": "Genesis",
			"chapter": 1,
			"verse": "10-15"
		},
		{
			"book": "Genesis",
			"chapter": 1,
			"verse": "25"
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
        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return;
        }

        const data = await response.json();

		let references = data.data.references;

		references.reverse().forEach(ref => {
			let newRef = document.createElement("div");
			newRef.classList.add("bib-rel");
			newRef.innerHTML = `
				<div class="bib-rel-head">${ref.book} ${ref.chapter}:${ref.verse}</div>
				<div class="bib-rel-txt">${ref.verseTxt}</div>
			`;
            if(!ref.verseTxt) newRef.classList.add("none");
			document.querySelector(".bib-right-rel-col").insertBefore(newRef, document.querySelector(".bib-rel"));
		});
        document.querySelector(".bib-rel-desc").textContent = "Scripture related to " + baseScripture;

        document.querySelector(".bib-right-rel-add").classList.remove("inactive-el");

	} catch (error) {
        console.error('Error posting data:', error);
    }
}

function setVerseLang(){
    document.querySelector(".bib-right-lang-col").classList.add("none");
    document.querySelector(".bib-lang-content").classList.add("none");
    document.querySelector(".bib-lang-content-load").classList.add("none");
    document.querySelector(".bib-lang-content").classList.add("none");

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
async function loadTranslatedVerse(){
    let baseScripture = `${currentBook} ${currentChapterIdx + 1}`;
	if(document.querySelector(".bib-verse-idx-active")) baseScripture += ":" + document.querySelector(".bib-verse-idx-active").textContent;
    document.querySelector(".bib-lang-load").textContent = "Loading...";
    document.querySelector(".bib-lang-eng").innerHTML = "";
    document.querySelector(".bib-lang-greek-full").innerHTML = "";
    document.querySelector(".bib-lang-greek-ul").innerHTML = "";
    document.querySelector(".bib-right-lang-col").classList.remove("none");
    document.querySelector(".bib-lang-content").classList.add("none");
    document.querySelector(".bib-lang-content-load").classList.add("none");

    let engVerse = await getVerse(currentTranslation.id, getBookSlug(currentBook), currentChapterIdx + 1, [document.querySelector(".bib-verse-idx-active").textContent]);

    let translationData = await getTranslatedVerse({
        "book": currentBook,
        "chapter": currentChapterIdx + 1,
        "verse": Number(document.querySelector(".bib-verse-idx-active").textContent)
    },
    currentLanguage
    );
    let wordArr = translationData;

    document.querySelector(".bib-lang-load").textContent = baseScripture;
    document.querySelector(".bib-lang-eng").innerHTML = engVerse + "<br>";
    wordArr.forEach(word => document.querySelector(".bib-lang-greek-full").innerHTML += word.word.replace(/[/]/g, "") + " ");


    for(const word of wordArr){
        let wordData = await getWordDictionary(word.strongs);
        if(!wordData){
            wordData = {
                "transliteration": "n/a",
                "gloss": "n/a"
            }
        }
        let newWord = document.createElement("div");
        newWord.classList.add("bib-lang-greek-li");
        newWord.dataset.transliteration = wordData.transliteration;
        newWord.innerHTML = `
            <div class="bib-lang-greek-word">${word.word.replace(/[/]/g, "")}</div>
            <span></span>
            <div class="bib-lang-eng-word">${wordData.gloss.replace("[Obj.]", "(object marker)")}</div>
        `;
        document.querySelector(".bib-lang-greek-ul").appendChild(newWord);

        newWord.onclick = () => {
            analyseWord(wordData.lemma, wordData.transliteration, word.strongs, wordData.gloss.replace("[Obj.]", "(object marker)"), word.morph, baseScripture, engVerse);
        }
    }
}
async function getTranslatedVerse(verseData, language){
    let fileName = "greek_nt";
    if(language == "Hebrew"){
        fileName = "hebrew_ot";
    }
    let bookLink = `${fileName}/${verseData.book.toLowerCase().replace(/ /g, "_")}.json`;
    try {
        const response = await fetch(bookLink, {
            method: 'GET',
        });
        const data = await response.json();
        
        let realVerseNum = verseData.verse;
        if(verseData.book == "Psalm"){
            if(psalmSubscriptions.includes(verseData.chapter)){
                realVerseNum++;
            } else if(psalmDoubleSubscriptions.includes(verseData.chapter)){
                realVerseNum += 2;
            }
        }

        let wordArr = data.filter(word => word.chapter == verseData.chapter && word.verse == realVerseNum);
        wordArr.forEach(word => {
            if(word.strongs.slice(0, 1) != "G"){
                word.strongs = "H" + word.strongs;
            }
        });
        return wordArr;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
async function analyseWord(translatedWord, transliteration, strongs, gloss, parsing, reference, engVerse){
    document.querySelector(".bib-lang-content-load").classList.remove("none");
    document.querySelector(".bib-lang-content").classList.add("none");
    document.querySelector(".bib-right-lang-col").scrollTop = document.querySelector(".bib-right-lang-col").scrollHeight;
    
    let prompt = `
        You are a biblical Greek and Hebrew lexical and contextual analysis assistant.

        Using the lexical information and Bible verse below, provide:
        1. ONE concise, accurate English definition of the word.
        2. ONE concise analysis of what the word means specifically in this verse, including any useful insight gained from knowing the original Greek or Hebrew word.

        Lexical information:

        - Language: ${currentLanguage}
        - Lemma: ${translatedWord}
        - Strong's number: ${strongs}
        - English glosses: ${gloss}

        Verse information:

        - Bible reference: ${reference}
        - English verse: ${engVerse}

        Instructions for the definition:

        - IMPORTANT: Give the word's general lexical meaning, not its meaning in this particular verse.
        - Do not introduce meanings that are not supported by the supplied information.
        - Write in clear, natural English that an ordinary Bible reader can understand.
        - Keep the definition concise: approximately 10–25 words.
        - If the word has multiple closely related senses, express them naturally in one definition rather than listing separate definitions.
        - Do not give theological commentary or application in the definition.

        Instructions for the verse analysis:

        - Explain what this word specifically means or conveys in this particular verse.
        - Use the surrounding verse context to determine the most appropriate sense.
        - Explain any meaningful nuance that may be lost or less obvious in the English translation.
        - If knowing the Greek or Hebrew word provides a useful insight into the verse, briefly explain why.
        - Do not claim that the original-language word has a meaning that is not supported by its lexical or contextual usage.
        - Do not force an insight simply because the word is Greek or Hebrew.
        - Keep the analysis approximately 25–40 words.
        - Write for an ordinary Bible reader: clear, informative, and natural.
        - Do not speculate about the author's intentions beyond what the text supports.
        - Focus the analysis on the word specifically, not the bible verse.

        Return ONLY valid JSON in exactly this format:

        {
        "definition": "A concise general definition of the word.",
        "verseAnalysis": "A concise explanation of what the word conveys specifically in this verse and any useful original-language insight."
        }
    `;

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
                <span>${translatedWord}</span>
            </div>
            <div class="bib-lang-li">
                <div>Transliteration:</div>
                <span>${transliteration}</span>
            </div>
            <div class="bib-lang-li">
                <div>English:</div>
                <span>${gloss}</span>
            </div>
            <div class="bib-lang-li">
                <div>Definition:</div>
                <span>${analysis.definition}</span>
            </div>
            <div class="bib-lang-li">
                <div>AI Analysis:</div>
                <span>${analysis.analysis}</span>
            </div>
            <div class="bib-lang-li">
                <div>Strong’s:</div>
                <span>${strongs.replace(/[abcdef]/g, "")}</span>
            </div>
            <div class="bib-lang-li">
                <div>Parsing:</div>
                <span>${parsing}</span>
            </div>
        `;

        document.querySelector(".bib-lang-content-load").classList.add("none");

        document.querySelector(".bib-right-lang-col").scrollTop = document.querySelector(".bib-right-lang-col").scrollHeight;

        let occurrences;
        occurrences = await getLemmaOccurrences(strongs, currentLanguage);
        document.querySelector(".bib-lang-label").innerHTML = `${currentTestament} Occurrences`;
        document.querySelector(".bib-lang-occ-col").innerHTML = "";
        for(const verse of occurrences){
            let newOcc = document.createElement("div");
            newOcc.classList.add("bib-lang-occ");
            let occVerse = await getVerse(currentTranslation.id, getBookSlug(verse.book), verse.chapter, [verse.verse]);
            newOcc.innerHTML = `
                <div class="bib-lang-head">${verse.book} ${verse.chapter}:${verse.verse}</div>
                <div class="bib-lang-txt">${occVerse || "Verse not found"}</div>
            `;
            if(Array.from(document.querySelectorAll(".bib-lang-occ")).filter(occ => occ.querySelector(".bib-lang-head").textContent == `${verse.book} ${verse.chapter}:${verse.verse}`).length == 0){
                document.querySelector(".bib-lang-occ-col").appendChild(newOcc);
            }
        }
        document.querySelector(".bib-lang-label").innerHTML = `${currentTestament} Occurrences (${occurrences.length})`;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function getLemmaOccurrences(strongs, language){
    let fileName = "greek_nt";
    if(language == "Hebrew"){
        fileName = "hebrew_ot";
    }
    let occurrences = [];
    for(const book of chapterHeadings){
        if( (chapterHeadings.indexOf(book) > 38 && language == "Greek") || (chapterHeadings.indexOf(book) <= 38 && language == "Hebrew") ){
            let bookLink = `${fileName}/${book.name.toLowerCase().replace(/ /g, "_")}.json`;
            try {
                const response = await fetch(bookLink, {
                    method: 'GET',
                });
                const data = await response.json();

                data.forEach(word => {
                    if(Number(word.strongs.replace(/\D/g, "")) == Number(strongs.replace(/\D/g, ""))){
                        let newOcc = {
                            "book": book.name,
                            "chapter": word.chapter,
                            "verse": word.verse
                        }

                        occurrences.push(newOcc);
                    }
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
    return occurrences;
}
async function getGreekParsing(book, chapter, verse, surfaceForm){
    try {
        const response = await fetch(`greek_nt/${book.toLowerCase().replace(/ /g, "_")}.json`, {
            method: 'GET',
        });
        const data = await response.json();

        let codeParsing = data.find(word => word.chapter == chapter && word.verse == verse && word.word == surfaceForm).morph;        

        return codeParsing;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
async function getWordDictionary(strongs){
    try {
        const response = await fetch(`${url}/language_dictionary.json`, {
            method: 'GET',
        });
        const data = await response.json(); 

        let word;
        Object.keys(data).forEach((key, keyIdx) => {
            let keyCompare = `${key[0]}${Number(key.replace(/\D/g, ""))}`;
            if(isNaN(key[key.length - 1])){
                keyCompare += key[key.length - 1];
            }
            let strongsCompare = `${strongs[0]}${Number(strongs.replace(/\D/g, ""))}`;
            if(isNaN(strongs[strongs.length - 1])){
                strongsCompare += strongs[strongs.length - 1];
            }

            if(keyCompare == strongsCompare){
                word = Object.values(data)[keyIdx];
            }
        });

        return word;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function loadComments(){
    document.querySelector(".bib-chat-desc").innerHTML = `Loading...`;
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
        currentAllComments = comments;
        document.querySelector(".bib-chat-col").innerHTML = "";
        document.querySelector(".bib-chat-desc").innerHTML = `Comments on ${currentBook} ${currentChapterIdx + 1}`;

        for(const comment of comments){
            await displayComment(comment, comments);
        }

        if(comments.length == 0){
            document.querySelector(".bib-chat-col").innerHTML = "No comments found";
        }

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function displayComment(commentData, allComments){
    let newComment = document.createElement("div");
    newComment.classList.add("bib-chat-com");
    newComment.dataset.commentId = commentData.id;

    let userData = await getUserData(commentData.user_id);

    let replies = allComments.filter(reply => reply.parent_id == commentData.id);

    newComment.innerHTML = `
        <div class="bib-com-pfp">
            <img src="${userData.pfp}" />
        </div>

        <div class="bib-com-right">
            <div class="bib-com-name">${userData.username}</div>
            <div class="bib-com-date">${getTextDateNoYear(commentData.comment_date)}, ${commentData.comment_time}</div>
            <div class="bib-com-text">${commentData.message}</div>
            <div class="bib-com-flex">
                <div class="bib-com-reply-btn bib-com-view">View Reples (<span>${replies.length}</span>) <i class="fa-solid fa-chevron-down"></i></div>
                <div class="bib-com-rep">Reply</div>
            </div>
            <div class="bib-com-input-container none">
                <textarea type="text" placeholder="Type a reply..." class="bib-com-input" ></textarea>
                <div class="bib-com-input-btn bib-input-cancel-btn">Cancel</div>
                <div class="bib-com-input-btn bib-input-reply-btn inactive-el">Reply</div>
            </div>

            <div class="bib-com-col none">

            </div>
        </div>
    `;

    newComment.querySelector(".bib-com-input").addEventListener("scroll", () => {
        newComment.querySelector(".bib-com-input").style.height = Number(newComment.querySelector(".bib-com-input").scrollHeight + 2) + "px";
    });
    newComment.querySelector(".bib-com-input").addEventListener("input", () => {
        if(newComment.querySelector(".bib-com-input").value == ""){
            document.querySelector(".bib-input-reply-btn").classList.add("inactive-el");
            newComment.querySelector(".bib-com-input").style.height = "34px";
        } else {
            document.querySelector(".bib-input-reply-btn").classList.remove("inactive-el");
        }
    });

    if(replies.length == 0){
        newComment.querySelector(".bib-com-view").classList.add("none");
    }

    newComment.querySelector(".bib-com-view").addEventListener("click", () => {
        if(newComment.querySelector(".bib-com-col").classList.contains("none")){
            newComment.querySelector(".bib-com-col").classList.remove("none");
            newComment.querySelector(".bib-com-reply-btn i").style.transform = "rotate(-180deg)";
        } else {
            newComment.querySelector(".bib-com-col").classList.add("none");
            newComment.querySelector(".bib-com-reply-btn i").style.transform = "rotate(0deg)";
        }
    });

    newComment.querySelector(".bib-com-rep").addEventListener("click", () => {
        newComment.querySelector(".bib-com-input-container").classList.remove("none");
    });
    newComment.querySelector(".bib-input-cancel-btn").addEventListener("click", () => {
        newComment.querySelector(".bib-com-input-container").classList.add("none");
        newComment.querySelector(".bib-com-input").value = "";
    });

    newComment.querySelector(".bib-input-reply-btn").addEventListener("click", () => {
        postComment(newComment.querySelector(".bib-com-input").value, commentData.id);
        newComment.querySelector(".bib-input-cancel-btn").click();
        newComment.querySelector(".bib-com-view").classList.remove("none");
        newComment.querySelector(".bib-com-col").classList.remove("none");
        newComment.querySelector(".bib-com-reply-btn i").style.transform = "rotate(-180deg)";
        newComment.querySelector(".bib-com-view span").textContent = Number(newComment.querySelector(".bib-com-view span").textContent) + 1;
    });

    if(commentData.parent_id == 0){
        document.querySelector(".bib-chat-col").prepend(newComment);
    } else {
        Array.from(document.querySelectorAll(".bib-chat-com")).find(comment => comment.dataset.commentId == commentData.parent_id)?.querySelector(".bib-com-col").prepend(newComment);
    }
}
async function getUserData(userId){
    const dataToSend = { userId: userId };
    try {
        const response = await fetch(url + `/api/get-user-info`, {
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

        return data.userData;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function postComment(text, parentId){
    const dataToSend = { text: text, parentId: parentId, book: currentBook, chapter: currentChapterIdx + 1 };
    try {
        const response = await fetch(url + `/api/post-comment`, {
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

        let sameComment = data.sameComment;
        currentAllComments.push(sameComment);
        if(document.querySelectorAll(".bib-chat-com").length == 0){
            document.querySelector(".bib-chat-col").innerHTML = "";
        }
        await displayComment(sameComment, currentAllComments);

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
document.querySelector(".bib-chat-input textarea").addEventListener("input", () => {
    let commentValue = document.querySelector(".bib-chat-input textarea").value;
    if(commentValue == ""){
        document.querySelector(".bib-chat-send").classList.add("inactive-el");
        document.querySelector(".bib-chat-input textarea").style.height = "45px";
    } else {
        document.querySelector(".bib-chat-send").classList.remove("inactive-el");
    }
});
document.querySelector(".bib-chat-input textarea").addEventListener("scroll", () => {
    document.querySelector(".bib-chat-input textarea").style.height = Number(document.querySelector(".bib-chat-input textarea").scrollHeight + 2) + "px";
});
document.querySelector(".bib-chat-send").addEventListener("click", async () => {
    await postComment(document.querySelector(".bib-chat-input textarea").value, 0);
    /*
    document.querySelector(".bib-com-rep").addEventListener("click", () => {
        document.querySelector(".bib-com-input-container").classList.remove("none");
    });
    */
});

document.querySelector(".bib-ai-ques-txt").addEventListener("click", () => {
    document.querySelector(".bib-ai-ana").classList.add("none");
    document.querySelector(".bib-ai-ques-container").classList.remove("none");
    document.querySelector(".bib-right-ai-add").classList.add("none");
    document.querySelector(".bib-ai-wrapper").classList.add("none");
    document.querySelector(".bib-ai-load").classList.add("none");
});
document.querySelector(".bib-ai-ques-ana").addEventListener("click", () => {
    document.querySelector(".bib-ai-ana").classList.remove("none");
    document.querySelector(".bib-ai-ques-container").classList.add("none");
    document.querySelector(".bib-right-ai-add").classList.remove("none");
    document.querySelector(".bib-ai-wrapper").classList.add("none");
    document.querySelector(".bib-ai-load").classList.add("none");
});
function initializeAi(){
    document.querySelectorAll(".bib-ai-sel").forEach((sel, selIdx) => {
        sel.querySelector("span").textContent = "1";
        if(selIdx == 1){
            sel.querySelector("span").textContent = document.querySelectorAll(".yv-vlbl").length;
        }
        sel.querySelector(".bib-ai-sel-drop").innerHTML = "";
        document.querySelectorAll(".yv-vlbl").forEach((num) => {
            sel.querySelector(".bib-ai-sel-drop").innerHTML += `<div>${num.textContent}</div>`;
        });

        sel.querySelectorAll(".bib-ai-sel-drop div").forEach(opt => {
            opt.onclick = () => {
                sel.querySelector("span").textContent = opt.textContent;
                setTimeout(() => {
                    sel.querySelector(".bib-ai-sel-drop").style.opacity = "0";
                    sel.querySelector(".bib-ai-sel-drop").style.pointerEvents = "none";
                }, 0);
                if(selIdx == 0 && Number(document.querySelectorAll(".bib-ai-sel span")[1].textContent) < Number(opt.textContent)){
                    document.querySelectorAll(".bib-ai-sel span")[1].textContent = opt.textContent;
                } else if(selIdx == 1 && Number(document.querySelectorAll(".bib-ai-sel span")[0].textContent) > Number(opt.textContent)){
                    document.querySelectorAll(".bib-ai-sel span")[0].textContent = opt.textContent;
                }
            }
        });
    });
}
document.querySelectorAll(".bib-ai-sel").forEach((sel, idx) => {
    sel.addEventListener("click", () => {
        sel.querySelector(".bib-ai-sel-drop").style.opacity = "1";
        sel.querySelector(".bib-ai-sel-drop").style.pointerEvents = "auto";
    });
});
document.addEventListener("click", (e) => {
    document.querySelectorAll(".bib-ai-sel").forEach(sel => {
        if(!sel.contains(e.target)){
            sel.querySelector(".bib-ai-sel-drop").style.opacity = "0";
            sel.querySelector(".bib-ai-sel-drop").style.pointerEvents = "none";
        }
    });
});
async function aiAnalysis(){
    let scripture = `${currentBook} ${currentChapterIdx + 1}:${document.querySelectorAll(".bib-ai-sel span")[0].textContent}`;
    if(document.querySelectorAll(".bib-ai-sel span")[1].textContent != document.querySelectorAll(".bib-ai-sel span")[0].textContent){
        scripture += `-${document.querySelectorAll(".bib-ai-sel span")[1].textContent}`;
    }
    document.querySelector(".bib-ai-load").classList.remove("none");
    document.querySelector(".bib-ai-ques-txt").classList.add("inactive-el");

    let responseFormat = {
        "observe": "",
        "interpret": "",
        "theology": "",
        "apply": "",
        "apologetics": "",
    }

    let prompt = `
        You are a careful Christian Scripture analysis assistant. Analyse the following passage:

        ${scripture}

        Return your response strictly in this JSON format:

        ${responseFormat}

        Each field must contain ONE coherent paragraph of analysis. Do not use bullet points, numbered lists, headings, or multiple paragraphs inside any field.

        ### 1. Observe
        Carefully observe what the text itself says before interpreting it.
        - Identify who is speaking, acting, receiving, or responding.
        - Identify important commands, promises, contrasts, causes, and results.
        - Highlight the words, phrases, or ideas that carry the main point.
        - End by restating the passage's basic meaning in one sentence without adding interpretation or information not stated in the passage.
        Do not make theological or modern-life applications here.

        ### 2. Interpret
        Explain what the passage communicates in its literary and historical context.
        - Explain what it would have communicated to its original audience.
        - Consider what immediately comes before and after the passage.
        - Identify the words, phrases, images, or literary features that control its meaning.
        - Distinguish clearly between what the text explicitly says and reasonable interpretive conclusions.
        Do not force meanings into the passage that are not supported by its context.

        ### 3. Theology
        Explain the theological significance of the passage.
        - What does it reveal about God, humanity, sin, grace, salvation, redemption, or other relevant theological themes?
        - Explain how the passage fits into the wider story and teaching of Scripture.
        - Where faithful Christians may reasonably interpret a detail differently, briefly acknowledge the main interpretive possibilities without declaring a position merely because it is common.
        Keep the theology grounded in the passage and the wider biblical context rather than speculation.

        ### 4. Apply
        Draw faithful, specific application from the meaning of the passage.
        - Identify the truth that should shape a Christian's thinking today.
        - Identify any relevant command, promise, warning, encouragement, example, or principle to respond to.
        - Give ONE specific, practical response that could be practiced this week.
        Do not turn the passage into generic self-help or invent an application that contradicts its original meaning. Keep the application centered on faithfulness to God and, where appropriate, Christ.

        ### 5. Apologetics
        Consider how this passage might be questioned or misunderstood.
        - Identify a reasonable question, difficulty, or objection someone might raise about the passage.
        - Identify other relevant Scripture that should be considered before answering it.
        - Give a careful explanation that addresses the question while remaining faithful to the passage and its context.
        - Do not invent objections merely to create controversy, and do not overstate what the passage proves.
        If there is genuine uncertainty or disagreement among Christians, acknowledge it honestly.

        ### General requirements
        - Analyse the specific passage provided, not merely its general theme.
        - Keep all five paragraphs focused and reasonably concise.
        - Do not quote large portions of Scripture unnecessarily.
        - Do not cite nonexistent sources or claim that a verse says something it does not say.
        - Do not treat personal application as the original meaning of the passage.
        - Let Scripture interpret Scripture where relevant.
        - Maintain a reverent, Christ-centered, biblically faithful tone.
        - Return ONLY valid JSON matching the provided structure.
    `;

    const dataToSend = { prompt: prompt };
    try {
        const response = await fetch(url + `/api/ai-analysis`, {
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

        document.querySelector(".bib-ai-head").style.marginBottom = "-10px";
        document.querySelector(".bib-ai-head").textContent = `${scripture} Analysis`;
        document.querySelector(".bib-ai-ques-txt").classList.remove("inactive-el");
        document.querySelector(".bib-ai-load").classList.add("none");
        document.querySelector(".bib-ai-wrapper").classList.remove("none");
        document.querySelector(".bib-ai-txt").innerHTML = "";

        let aiHeadings = ["Observe", "Interpret", "Theology", "Apply", "Apologetics"];
        Object.values(analysis).forEach((para, idx) => {
            document.querySelector(".bib-ai-txt").innerHTML += `<span>${aiHeadings[idx]}</span>`;
            document.querySelector(".bib-ai-txt").innerHTML += para;
        });

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
async function aiAskQuestion(){
    let qValue = document.querySelector(".bib-ai-ques-area textarea").value;
    document.querySelector(".bib-ai-ques-area textarea").value = "";
    document.querySelector(".bib-ai-ques-area textarea").blur();

    if(qValue != ""){
        document.querySelector(".bib-ai-ques-ana").classList.add("inactive-el");
        document.querySelector(".bib-ai-load").classList.remove("none");
        document.querySelector(".bib-ai-wrapper").classList.add("none");

        let scripture = `${currentBook} ${currentChapterIdx + 1}`;

        let prompt = `
            You are a careful, biblically faithful Christian Bible study assistant.

            The user is asking a question about the following passage/chapter of Scripture:
            ${scripture}

            Here is the user's question:
            ${qValue}

            Answer the user's question directly and clearly.

            Use the surrounding context of the passage and, where relevant, the wider teaching of Scripture to explain your answer. Pay close attention to the actual wording, context, literary genre, historical setting, and intended meaning of the passage.

            Distinguish between:
            - What the passage explicitly teaches.
            - What can reasonably be inferred from it.
            - Interpretations where faithful Christians may disagree.

            If other passages of Scripture are important for understanding the question, mention them and briefly explain how they relate.

            Do not force an answer simply because the user expects one. If the passage does not provide enough information to answer something with certainty, say so clearly.

            Avoid reading modern ideas into the text, taking verses out of context, or making claims that go beyond what Scripture supports.

            Keep the response focused on the user's specific question rather than giving an unnecessary general commentary on the entire chapter.

            Write in clear, natural paragraphs with a warm, reverent, Christ-centered tone.

            Return only the answer to the user's question.
        `;
    
        const dataToSend = { prompt: prompt };
        try {
            const response = await fetch(url + `/api/ai-ask-question`, {
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
            let answer = data.answer;

            document.querySelector(".bib-ai-head").style.marginBottom = "0px";
            document.querySelector(".bib-ai-head").textContent = `${scripture} Question`;
            document.querySelector(".bib-ai-ques-ana").classList.remove("inactive-el");
            document.querySelector(".bib-ai-load").classList.add("none");
            document.querySelector(".bib-ai-wrapper").classList.remove("none");
            document.querySelector(".bib-ai-txt").innerHTML = answer;

        } catch (error) {
            console.error('Error posting data:', error);
        }
    }
}
document.querySelector(".bib-ai-ques-area textarea").addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        aiAskQuestion();
    }
});

let headerSearchOpen = false;
document.querySelector(".bib-header-search-container").addEventListener("click", () => {
    if(!headerSearchOpen){
        headerSearchOpen = true;
        document.querySelector(".bib-header-search-container").classList.add("bib-header-search-container-focus");
        document.querySelector(".bib-search-input").focus();
    }
});
document.querySelector(".bib-search-input").addEventListener("blur", () => {
    //document.querySelector(".bib-header-search-container").classList.remove("bib-header-search-container-focus");
});
document.querySelector(".bib-search-input").addEventListener("input", () => {
    document.querySelectorAll(".bib-header-verse-drop, .bib-header-topic-drop").forEach(drop => {
        drop.style.opacity = "0";
        drop.style.pointerEvents = "none";
    });
    document.querySelectorAll(".bib-header-sug-li").forEach(sug => {
        sug.classList.add("none");
    });
    document.querySelector(".bib-header-sug").classList.add("none");

    let searchValue = document.querySelector(".bib-search-input").value.toLowerCase();

    chapterHeadings.forEach(book => {
        // scripture
        if(searchValue.includes(book.name.toLowerCase())){
            // is format john XY
            if(searchValue[book.name.length] == " " && searchValue.length >= book.name.length + 2 && (!isNaN(searchValue.slice(book.name.length + 1).replace(":", "").replace(/ /g, "")) && searchValue[searchValue.length - 1] != ":") && (Number(searchValue.slice(book.name.length + 1)) || Number(searchValue.slice(book.name.length + 1).split(":")[0]) || Number(searchValue.slice(book.name.length + 1).split(" ")[0])) <= book.headings.length){
                document.querySelectorAll(".bib-header-sug-li")[0].innerHTML = `
                    <i class="fa-solid fa-magnifying-glass"></i>
                    Go to <div>${searchValue}</div>
                `;
                document.querySelectorAll(".bib-header-sug-li")[0].classList.remove("none");
                document.querySelectorAll(".bib-header-sug-li")[0].onclick = async () => {
                    currentBook = book.name;
                    currentChapterIdx = Number(searchValue.slice(book.name.length + 1)) - 1;

                    if(searchValue.slice(book.name.length + 1).replace(/ /g, ":").split(":").length == 2){
                        currentChapterIdx = Number(searchValue.slice(book.name.length + 1).replace(/ /g, ":").split(":")[0]) - 1;
                    }
                    closeHeaderSearch();
                    await loadBible();

                    if(searchValue.slice(book.name.length + 1).replace(/ /g, ":").split(":").length == 2){
                        document.querySelectorAll(".yv-vlbl")[Number(searchValue.slice(book.name.length + 1).replace(/ /g, ":").split(":")[1]) - 1].scrollIntoView({
                            block: "center"
                        });
                        document.querySelectorAll(".bib-right-btn span")[1].click();
                        document.querySelectorAll(".yv-vlbl")[Number(searchValue.slice(book.name.length + 1).replace(/ /g, ":").split(":")[1]) - 1].click();
                    }
                }
            }
        }

        // phrase
        if(searchValue[0] == `"` && searchValue[searchValue.length - 1] == `"`){
            document.querySelectorAll(".bib-header-sug-li")[1].innerHTML = `
                <i class="fa-solid fa-magnifying-glass"></i>
                Find verses including <div>${searchValue}</div>
            `;
            document.querySelectorAll(".bib-header-sug-li")[1].classList.remove("none");
            document.querySelectorAll(".bib-header-sug-li")[1].onclick = async () => {
                document.querySelector(".bib-header-verse-drop").style.opacity = "1";
                document.querySelector(".bib-header-verse-drop").style.pointerEvents = "auto";
                document.querySelectorAll(".bib-header-verse-drop .bib-header-verse-opt").forEach(opt => {
                    document.querySelector(".bib-header-verse-drop").removeChild(opt);
                });
                
                let currentBible = await getFullBible();
                let phrase = searchValue.replace(/"/g, "");
                let phraseVerses = [];
                Object.values(currentBible).forEach((book, bookIdx) => {
                    Object.values(book).forEach((chapter, chapterIdx) => {
                        Object.values(chapter).forEach((verse, verseIdx) => {
                            if(verse.includes(phrase)){
                                let verseObj = {
                                    "book": Object.keys(currentBible)[bookIdx],
                                    "chapter": chapterIdx + 1,
                                    "verse": verseIdx + 1,
                                    "text": verse
                                }
                                phraseVerses.push(verseObj);
                            }
                        });
                    });
                });
                phraseVerses.forEach(verse => {
                    let newVerseOpt = document.createElement("div");
                    newVerseOpt.classList.add("bib-header-verse-opt");
                    newVerseOpt.innerHTML = `
                        <div class="bib-header-verse-name">${verse.book} ${verse.chapter}:${verse.verse}</div>
                        <div class="bib-header-verse-txt">${verse.text.replace(new RegExp(phrase, "g"), `<b>${phrase}</b>`)}</div>
                    `;
                    document.querySelector(".bib-header-verse-drop").appendChild(newVerseOpt);

                    newVerseOpt.addEventListener("click", async () => {
                        currentBook = verse.book;
                        currentChapterIdx = verse.chapter - 1;
                        closeHeaderSearch();
                        await loadBible();

                        document.querySelectorAll(".yv-vlbl")[Number(verse.verse) - 1].scrollIntoView({
                            block: "center"
                        });
                        document.querySelectorAll(".bib-right-btn span")[1].click();
                        document.querySelectorAll(".yv-vlbl")[Number(verse.verse) - 1].click();
                    });
                });
                if(phraseVerses.length == 0){
                    document.querySelector(".bib-header-verse-drop .bib-header-verse-drop-label").textContent = `No verses found including the phrase: "${phrase}"`;
                } else {
                    document.querySelector(".bib-header-verse-drop .bib-header-verse-drop-label").textContent = `${phraseVerses.length} occurences of "${phrase}":`;
                }
            }
        }

        // topic
        if(searchValue.length >= 3){ 
            document.querySelectorAll(".bib-header-sug-li")[2].innerHTML = `
                <i class="fa-solid fa-magnifying-glass"></i>
                Search <div>${searchValue}</div> in topics
            `;
            document.querySelectorAll(".bib-header-sug-li")[2].classList.remove("none");
            document.querySelectorAll(".bib-header-sug-li")[2].onclick = async () => {
                document.querySelector(".bib-header-topic-drop").style.opacity = "1";
                document.querySelector(".bib-header-topic-drop").style.pointerEvents = "auto";
                document.querySelectorAll(".bib-header-topic-drop .bib-header-verse-opt").forEach(opt => {
                    document.querySelector(".bib-header-topic-drop").removeChild(opt);
                });
                document.querySelector(".bib-header-topic-drop .bib-header-verse-drop-label").textContent = `Loading...`;

                let verses = await getTopicScriptures(searchValue);
                
                document.querySelectorAll(".bib-header-topic-drop .bib-header-verse-opt").forEach(opt => {
                    document.querySelector(".bib-header-topic-drop").removeChild(opt);
                });
                document.querySelector(".bib-header-topic-drop .bib-header-verse-drop-label").textContent = `Topic: ${searchValue} (${verses.length})`;
                for(const verse of verses){
                    let newVerse = document.createElement("div");
                    newVerse.classList.add("bib-header-verse-opt");
                    let verseTxt = await getVerse(currentTranslation.id, getBookSlug(verse.book), verse.chapter, [verse.verse]);
                    newVerse.innerHTML = `
                        <div class="bib-header-verse-name">${verse.book} ${verse.chapter}:${verse.verse}</div>
                        <div class="bib-header-verse-txt">${verseTxt}</div>
                    `;
                    document.querySelector(".bib-header-topic-drop").appendChild(newVerse);

                    newVerse.addEventListener("click", async () => {
                        currentBook = verse.book;
                        currentChapterIdx = verse.chapter - 1;
                        closeHeaderSearch();        
                        await loadBible();

                        // NEED TO DEAL WITH VERSES LIKE "1-5" ***

                        let verseNum;
                        if(verse.verse.includes("-")){
                            verseNum = Number(verse.verse.split("-")[0]) - 1;
                        } else {
                            verseNum = Number(verse.verse) - 1;
                        }

                        document.querySelectorAll(".yv-vlbl")[verseNum].scrollIntoView({
                            block: "center"
                        });
                        document.querySelectorAll(".bib-right-btn span")[1].click();
                        document.querySelectorAll(".yv-vlbl")[verseNum].click();
                    });
                }
            }
        }
    });

    if(Array.from(document.querySelectorAll(".bib-header-sug-li")).filter(li => !li.classList.contains("none")).length > 0){
        document.querySelector(".bib-header-sug").classList.remove("none");
    }
});
function closeHeaderSearch(){
    document.querySelector(".bib-search-input").value = "";
    document.querySelectorAll(".bib-header-sug-li").forEach(sug => {
        sug.classList.add("none");
    });
    document.querySelectorAll(".bib-header-verse-drop, .bib-header-topic-drop").forEach(drop => {
        drop.style.opacity = "0";
        drop.style.pointerEvents = "none";
    });

    document.querySelector(".bib-header-sug").classList.add("none");
    document.querySelector(".bib-header-search-container").classList.remove("bib-header-search-container-focus");
    setTimeout(() => {
        headerSearchOpen = false;
    }, 10);
}
document.addEventListener("click", (e) => {
    if(!document.querySelector(".bib-header-search-container").contains(e.target)){
        closeHeaderSearch();
        //document.querySelector(".bib-header-search-container").classList.remove("bib-header-search-container-focus");
        setTimeout(() => {
            headerSearchOpen = false;
        }, 10);
    }
});
function manualHeaderSearch(){
    if(Array.from(document.querySelectorAll(".bib-header-sug-li")).filter(li => !li.classList.contains("none")).length > 0){
        Array.from(document.querySelectorAll(".bib-header-sug-li")).filter(li => !li.classList.contains("none"))[0].click();
    } else {
        
    }
}
document.querySelector(".bib-search-input").addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        manualHeaderSearch();
    }
});
async function getTopicScriptures(topicStr){
    let responseFormat = [
        {
            "book": "Genesis",
            "chapter": 1,
            "verse": "1"
        },
        {
            "book": "John",
            "chapter": 15,
            "verse": "1-5"
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": "5-10"
        },
    ]

    let prompt = `
        Find 5 to 10 of the most relevant Bible verses or passages that directly relate to the topic below:
        ${topicStr}

        Guidelines:
        - Choose passages from anywhere in the Bible.
        - Each passage must be genuinely relevant to the topic, not merely contain a related word.
        - Prefer passages that clearly teach, explain, illustrate, or address the topic.
        - Use a single verse when that verse sufficiently addresses the topic.
        - Use a verse range when the surrounding context is important to understanding the passage.
        - Do not include duplicate or substantially overlapping passages.
        - Return between 5 and 10 passages.
        - Return ONLY a valid JSON array.
        - Do not include explanations, commentary, markdown, or any text outside the JSON array.
        - Use the exact format shown below.
        - "chapter" must be a number.
        - "verse" must be a string, and may contain either a single verse number (e.g. "5") or a verse range (e.g. "5-10").

        only respond in this exact JSON format:
        ${responseFormat}
    `;

    const dataToSend = { prompt: prompt };
    try {
        const response = await fetch(url + `/api/get-topic-scriptures`, {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dataToSend), 
        });

        if(!response.ok){
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return;
        }

        const data = await response.json();
        return data.verses;

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

function showAudio(book, chapter){
    document.querySelector(".bib-audio-title").textContent = `${book} ${chapter}`;
    document.querySelector(".bib-audio-modal").style.opacity = "1";
    document.querySelector(".bib-audio-modal").style.pointerEvents = "auto";

    let audio = document.createElement("audio");
    document.body.appendChild(audio);
    audio.src = `bible_audios/${book.toLowerCase()}/${chapter}.mp3`;
    currentAudio = audio;
    document.querySelectorAll(".bib-audio-time div")[0].textContent = "0:00";
    document.querySelector(".bib-audio-range").value = 0;

    audio.addEventListener('timeupdate', () => {
        document.querySelectorAll(".bib-audio-time div")[0].textContent = formatTime(audio.currentTime);
        document.querySelector(".bib-audio-range").value = audio.currentTime / audio.duration;
        if(audio.currentTime == audio.duration){
            audio.currentTime = 0;
            audio.pause();
            document.querySelector(".bib-audio-play .fa-pause").classList.add("none");
            document.querySelector(".bib-audio-play .fa-play").classList.remove("none");

            document.querySelectorAll(".bib-audio-time div")[0].textContent = formatTime(audio.currentTime);
        }
    });
    document.querySelector(".bib-audio-range").addEventListener("change", () => {
        audio.currentTime = audio.duration * document.querySelector(".bib-audio-range").value;
    });
    audio.addEventListener('loadedmetadata', () => {
        document.querySelectorAll(".bib-audio-time div")[1].textContent = formatTime(audio.duration);
    });
    document.querySelectorAll("i.bib-audio-forward")[0].addEventListener("click", () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });
    document.querySelectorAll("i.bib-audio-forward")[1].addEventListener("click", () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    });
    function timeToSeconds(time) {
        const [mins, secs] = time.split(':').map(Number);
        return mins * 60 + secs;
    }
    function getProgress(current, total) {
        const currentSec = timeToSeconds(current);
        const totalSec = timeToSeconds(total);
        return currentSec / totalSec;
    }
    
    document.querySelector(".bib-audio-play").onclick = () => {
        if(audio.paused){
            audio.play();
            document.querySelector(".bib-audio-play .fa-pause").classList.remove("none");
            document.querySelector(".bib-audio-play .fa-play").classList.add("none");
        } else {
            audio.pause();
            document.querySelector(".bib-audio-play .fa-pause").classList.add("none");
            document.querySelector(".bib-audio-play .fa-play").classList.remove("none");
        }
    }

    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }
}
function closeAudio(){
    document.querySelector(".bib-audio-modal").style.opacity = "0";
    document.querySelector(".bib-audio-modal").style.pointerEvents = "none";
    currentAudio.pause();
}
document.querySelector(".bib-header-audio").addEventListener("click", () => {
    showAudio(currentBook, currentChapterIdx + 1);
});
document.querySelector(".bib-audio-xmark").addEventListener("click", () => {
    closeAudio();
});
document.querySelector(".bib-audio-modal").addEventListener("click", (e) => {
    if(!document.querySelector(".bib-audio-wrapper").contains(e.target)){
        closeAudio();
    }
});
document.querySelectorAll(".bib-audio-chev").forEach((chev, idx) => {
    chev.addEventListener("click", () => {
        if(currentAudioChapter == 0 && idx == 0){
            currentAudioBook = chapterHeadings[chapterHeadings.indexOf(chapterHeadings.find(book => book.name == currentAudioBook)) - 1].name;
            currentAudioChapter = chapterHeadings.find(book => book.name == currentAudioBook).headings.length - 1;
        } else if(currentAudioChapter == chapterHeadings.find(book => book.name == currentAudioBook).headings.length - 1 && idx == 1){
            currentAudioBook = chapterHeadings[chapterHeadings.indexOf(chapterHeadings.find(book => book.name == currentAudioBook)) + 1].name;
            currentChapterIdx = 0;
        } else {
            if(idx == 0){
                currentAudioChapter--;
            } else {
                currentAudioChapter++;
            }
        }
        showAudio(currentAudioBook, currentAudioChapter + 1);
    });
});

function getSavedSettings(){
    let savedSettings = JSON.parse(localStorage.getItem("savedSettings"));
    if(savedSettings){
        document.querySelector(".bib-opt-range").value = savedSettings.fontSizeValue;
        document.querySelectorAll(".bib-opt-family .bib-opt-btn")[savedSettings.familyBtnIdx].click();
        document.querySelectorAll(".bib-opt-spacing .bib-opt-btn")[savedSettings.spacingBtnIdx].click();
        document.querySelectorAll(".bib-opt-theme .bib-opt-col")[savedSettings.themeBtnIdx].click();
        document.querySelectorAll(".bib-opt-tran .bib-opt-pill")[savedSettings.tranBtnIdx].click();
    } else {
        let currentSettings = {
            "fontSizeValue": 1,
            "familyBtnIdx": 0,
            "spacingBtnIdx": 1,
            "themeBtnIdx": 1,
            "tranBtnIdx": 0,
        }
        localStorage.setItem("savedSettings", JSON.stringify(currentSettings));
        getSavedSettings();
    }
}
getSavedSettings();
function saveSettings(){
    let currentSettings = {
        "fontSizeValue": document.querySelector(".bib-opt-range").value,
        "familyBtnIdx": Array.from(document.querySelectorAll(".bib-opt-family .bib-opt-btn")).indexOf(document.querySelector(".bib-opt-family .bib-opt-btn-active")),
        "spacingBtnIdx": Array.from(document.querySelectorAll(".bib-opt-spacing .bib-opt-btn")).indexOf(document.querySelector(".bib-opt-spacing .bib-opt-btn-active")),
        "themeBtnIdx": Array.from(document.querySelectorAll(".bib-opt-theme .bib-opt-col")).indexOf(document.querySelector(".bib-opt-theme .bib-opt-col-active")),
        "tranBtnIdx": Array.from(document.querySelectorAll(".bib-opt-tran .bib-opt-pill")).indexOf(document.querySelector(".bib-opt-tran .bib-opt-pill-active")),
    }
    localStorage.setItem("savedSettings", JSON.stringify(currentSettings));
}

async function convertHebrew(){
    const tempHeadings = [
        "Genesis",
        "Exod",
        "Lev",
        "Num",
        "Deut",
        "Josh",
        "Judg",
        "Ruth",
        "1Sam",
        "2Sam",
        "1Kgs",
        "2Kgs",
        "1 Chronicles",
        "2Chr",
        "Ezra",
        "Neh",
        "Esth",
        "Job",
        "Ps",
        "Prov",
        "Eccl",
        "Song",
        "Isa",
        "Jer",
        "Lam",
        "Ezek",
        "Dan",
        "Hos",
        "Joel",
        "Amos",
        "Obad",
        "Jonah",
        "Mic",
        "Nah",
        "Hab",
        "Zeph",
        "Hag",
        "Zech",
        "Mal"
    ];

    for(const book of chapterHeadings){
        if(chapterHeadings.indexOf(book) < 39){
            let bookLink = `hebrew_ot/${tempHeadings[chapterHeadings.indexOf(book)].slice(0, 1).toUpperCase()}${tempHeadings[chapterHeadings.indexOf(book)].slice(1)}.xml`;
            try {
                const response = await fetch(bookLink, {
                    method: 'GET',
                });
                const data = await response.text(); 
        
                const parser = new DOMParser();
                const bookDoc = parser.parseFromString(data, "application/xml");
    
                let newBook = [];
    
                bookDoc.querySelector("div").querySelectorAll("chapter").forEach((chapter, chapterIdx) => {
                    chapter.querySelectorAll("verse").forEach((verse, verseIdx) => {
                        verse.querySelectorAll("w").forEach(word => {
                            let strongs = word.getAttribute("lemma").replace(/\D/g, "");
                            if(word.getAttribute("lemma").split(" ").length > 1){
                                strongs += word.getAttribute("lemma").split(" ")[1];
                            }
                            newBook.push({
                                "chapter": chapterIdx + 1,
                                "verse": verseIdx + 1,
                                "word": word.textContent,
                                "strongs": strongs,
                                "morph": word.getAttribute("morph")
                            });
                        });
                    });
                });
    
                downloadFile(newBook, book.name.toLowerCase().replace(/ /g, "_"));
        
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}
function downloadFile(bookData, bookName){
    const json = JSON.stringify(bookData, null, 4);

    const blob = new Blob([json], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${bookName}.json`;
    a.click();

    URL.revokeObjectURL(url);
}
//convertHebrew();


