const linkInputEl = document.getElementById("link-input");
const saveLinkBtn = document.getElementById("save-link-btn");
const linksList = document.getElementById("links-list");
let trackedLinks = [];
let linksFromLocalStorage = JSON.parse(localStorage.getItem("trackedLinks"));

const renderLinks = () => {
    let listItems = "";
    for (let i = 0; i < trackedLinks.length; i++) {
        listItems += `<li><a target="_blank" href="${trackedLinks[i]}">${trackedLinks[i]}</a></li>`;
    }
    linksList.innerHTML = listItems;
    linkInputEl.value = "";
}

if (linksFromLocalStorage) {
    trackedLinks = linksFromLocalStorage;
    renderLinks();
}

saveLinkBtn.addEventListener("click", () => {
    trackedLinks.push(linkInputEl.value);
    localStorage.setItem("trackedLinks", JSON.stringify(trackedLinks));
    renderLinks();
});




