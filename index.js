const linkInputEl = document.getElementById("link-input");
const saveLinkBtn = document.getElementById("save-link-btn");
const deleteAllLinksBtn = document.getElementById("delete-all-links-btn");
const linksList = document.getElementById("links-list");
let trackedLinks = [];
const linksFromLocalStorage = JSON.parse(localStorage.getItem("trackedLinks"));

if (linksFromLocalStorage) {
    trackedLinks = linksFromLocalStorage;
    renderLinks();
}

saveLinkBtn.addEventListener("click", () => {
    trackedLinks.push(linkInputEl.value);
    localStorage.setItem("trackedLinks", JSON.stringify(trackedLinks));
    renderLinks();
});

deleteAllLinksBtn.addEventListener("click", () => {
    localStorage.clear();
    trackedLinks = [];
    renderLinks();
})

const renderLinks = () => {
    let listItems = "";
    for (let i = 0; i < trackedLinks.length; i++) {
        listItems += `<li><a target="_blank" href="${trackedLinks[i]}">${trackedLinks[i]}</a></li>`;
    }
    linksList.innerHTML = listItems;
    linkInputEl.value = "";
}




