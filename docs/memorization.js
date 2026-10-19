


let catVerses = {
    "love": [
        {
            "book": "John",
            "chapter": 17,
            "verse": "26",
            "verseTxt": "I have made known to them your name, and I will continue to make it known, that the love with which you have loved me may be in them, and I in them."
        }
    ]
}

async function fakeSignUp(){
    try {
        const response = await fetch(`${url}/api/signup`, {
            method: 'GET',
        });
        const data = await response.json(); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fakeSignUp();

async function getSavedVerses(){
    document.querySelector(".mem-table-col").innerHTML = "";
    try {
        const response = await fetch(`${url}/api/get-saved-verses`, {
            method: 'GET',
        });
        const data = await response.json(); 
        
        let verses = data.verses;
        verses.forEach(verse => {
            let newRow = document.createElement("div");
            newRow.classList.add("mem-table-row");
            newRow.dataset.verseId = verse.id;
            newRow.dataset.book = verse.book;
            newRow.dataset.chapter = verse.chapter;
            newRow.dataset.verse = verse.verse;
            newRow.innerHTML = `
                <div class="mem-table-txt">${verse.book} ${verse.chapter}:${verse.verse}</div>
                <div class="mem-table-txt mem-table-verse">${verse.verse_txt}</div>
                <div class="mem-table-txt mem-table-tran">
                    <span>${verse.translation}</span>

                    <div class="mem-table-tran-drop">

                    </div>
                </div>
                <div class="mem-table-txt">${getSlashDate(verse.date_added)}</div>
                <div class="mem-table-txt mem-table-icons">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            `;
            document.querySelector(".mem-table-col").prepend(newRow);

			setRowInputs(newRow);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getSavedVerses();
function setRowInputs(element){
	element.querySelector(".mem-table-tran span")?.addEventListener("click", () => {
        element.querySelector(".mem-table-tran-drop").innerHTML = "";
		translations.forEach(tran => {
			let newTran = document.createElement("div");
			newTran.innerHTML = tran.name;
			element.querySelector(".mem-table-tran-drop").appendChild(newTran);

            newTran.addEventListener("click", async () => {
                let newVerseTxt = await getVerse(tran.id, getBookSlug(element.dataset.book), Number(element.dataset.chapter), [element.dataset.verse]);

                element.querySelector(".mem-table-verse").textContent = newVerseTxt;
                element.querySelector(".mem-table-tran span").textContent = tran.name;

                const dataToSend = { id: element.dataset.verseId, verse: newVerseTxt, translation: tran.name };
                try {
                    const response = await fetch(url + `/api/change-mem-translation`, {
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
        element.querySelector(".mem-table-tran-drop").style.opacity = "1";
        element.querySelector(".mem-table-tran-drop").style.pointerEvents = "auto";
	});
    document.addEventListener("click", (e) => {
        if(!element.querySelector(".mem-table-tran span").contains(e.target)){
            element.querySelector(".mem-table-tran-drop").style.opacity = "0";
            element.querySelector(".mem-table-tran-drop").style.pointerEvents = "none";
        }
    });
}

document.querySelector(".mem-top-btn-cat").addEventListener("click", () => {
    if(document.querySelector(".mem-cat-drop").style.opacity != "1"){
        document.querySelector(".mem-cat-drop").style.opacity = "1";
        document.querySelector(".mem-cat-drop").style.pointerEvents = "auto";
    } else {
        document.querySelector(".mem-cat-drop").style.opacity = "0";
        document.querySelector(".mem-cat-drop").style.pointerEvents = "none";
    }
});
document.addEventListener("click", (e) => {
    if(!document.querySelector(".mem-top-btn-cat").contains(e.target)){
        document.querySelector(".mem-cat-drop").style.opacity = "0";
        document.querySelector(".mem-cat-drop").style.pointerEvents = "none";
    }
});
document.querySelectorAll(".mem-cat-drop div").forEach(opt => {
    opt.addEventListener("click", () => {
        document.querySelector(".mem-table-top-saved").classList.add("none");
        document.querySelector(".mem-table-top-cat").classList.remove("none");
        document.querySelector(".mem-table-col").innerHTML = "";

        catVerses[opt.textContent.toLowerCase()].forEach(verse => {
            let newVerse = document.createElement("div");
            newVerse.classList.add("mem-table-row");
            newVerse.innerHTML = `
                <div class="mem-table-txt">${verse.book} ${verse.chapter}:${verse.verse}</div>
                <div class="mem-table-txt mem-table-verse">${verse.verseTxt}</div>
                <div class="mem-table-txt mem-table-tran">
                    <span>KJV</span>

                    <div class="mem-table-tran-drop">
                    </div>
                </div>
                <div class="mem-table-txt mem-table-save">
                    <div>
                        Save verse
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            `;
            document.querySelector(".mem-table-col").appendChild(newVerse);
        });
    });
});

document.querySelector(".mem-add-btn").addEventListener("click", () => {
	if(!document.querySelector(".mem-add-drop").classList.contains("mem-add-drop-chap")){
		document.querySelector(".mem-add-drop").style.opacity = "1";
		document.querySelector(".mem-add-drop").style.pointerEvents = "auto";
	}
});
document.querySelectorAll(".mem-add-drop .bib-left-drop-li").forEach((bookOpt, idx) => {
    bookOpt.addEventListener("click", () => {
        document.querySelector(".mem-add-drop").classList.add("mem-add-drop-chap");

        document.querySelector(".mem-add-chap").innerHTML = "<span>Chapter</span>";
        for(let i = 0; i < chapterHeadings.find(book => book.name.toLowerCase() == bookOpt.textContent.toLowerCase()).headings.length; i++){
            let newChap = document.createElement("div");
            newChap.textContent = i + 1;
            document.querySelector(".mem-add-chap").appendChild(newChap);

            newChap.addEventListener("click", async () => {
				let fullBible = await getFullBible();
				let amountVerses = Object.values(fullBible[bookOpt.textContent][String(Number(i + 1))]).length;
				document.querySelector(".mem-add-chap").innerHTML = "<span>Verses</span>";
				for(let v = 1; v <= amountVerses; v++){
					let newVerse = document.createElement("div");
					newVerse.textContent = v;
					document.querySelector(".mem-add-chap").appendChild(newVerse);

					newVerse.addEventListener("click", async () => {
						document.querySelector(".mem-add-drop").style.opacity = "0";
						document.querySelector(".mem-add-drop").style.pointerEvents = "none";
						setTimeout(() => {
							document.querySelector(".mem-add-drop").classList.remove("mem-add-drop-chap");
						}, 300);

						await addVerse(bookOpt.textContent, i + 1, v);
						getSavedVerses();
					});
				}
            });
        }
    });
});
async function addVerse(book, chapter, verse){
	let verseTxt = await getVerse(currentTranslation.id, getBookSlug(book), chapter, [verse]);

    const dataToSend = { book: book, chapter: chapter, verse: verse, verseTxt: verseTxt };
    try {
        const response = await fetch(url + `/api/add-mem-verse`, {
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

    } catch (error) {
        console.error('Error posting data:', error);
    }
}
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
document.addEventListener("click", (e) => {
    document.querySelectorAll(".bib-book-drop").forEach((drop, idx) => {
        if(!drop.contains(e.target) && !e.target.classList.contains("mem-add-btn")&& !e.target.parentElement.classList.contains("mem-add-btn")){
            drop.style.opacity = "0";
            drop.style.pointerEvents = "none";
            if(drop.classList.contains("mem-add-drop-chap")){
                drop.classList.remove("mem-add-drop-chap");
            }
        }
    });
});






