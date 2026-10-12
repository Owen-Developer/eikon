

let url = "";

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
//getSavedVerses();






/*/////////// STAGE 3 ///////////*/
function getSlashDate(date){
    return `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;
}