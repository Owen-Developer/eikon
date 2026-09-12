

let url = "";
let currentTranslation = "kjv";
let currentBook = "Genesis";
let currentChapterIdx = 0;

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
document.addEventListener("click", (e) => {
    document.querySelectorAll(".bib-book-drop").forEach((drop, idx) => {
        if(!drop.contains(e.target) && !e.target.classList.contains("drop-chev")){
            drop.style.opacity = "0";
            drop.style.pointerEvents = "none";
            document.querySelectorAll(".drop-chev")[idx].style.transform = "rotate(0deg)";
        }
    });
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

async function loadBible(){
    try {
        const response = await fetch(`${url}/bible_translations/${currentTranslation}.json`, {
            method: 'GET',
            credentials: 'include',
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        const data = await response.json(); 

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
loadBible();