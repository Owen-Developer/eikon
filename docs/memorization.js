

let url = "";

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
            newRow.innerHTML = `
                <div class="mem-table-txt">${verse.book} ${verse.chapter}:${verse.verse}</div>
                <div class="mem-table-txt mem-table-verse">${verse.verse_txt}</div>
                <div class="mem-table-txt mem-table-tran">
                    <span>${verse.verse_txt}</span>

                    <div class="mem-table-tran-drop">

                    </div>
                </div>
                <div class="mem-table-txt">${getSlashDate(verse.date_added)}</div>
                <div class="mem-table-txt mem-table-icons">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            `;
            document.querySelector(".mem-table-col").appendChild(newRow);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getSavedVerses();

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






/*/////////// STAGE 3 ///////////*/
function getSlashDate(date){
    return `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;
}