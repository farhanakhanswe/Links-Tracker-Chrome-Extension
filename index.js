const linkInputEl = document.getElementById("link-input");
const saveLinkBtn = document.getElementById("save-link-btn");
const linksList = document.getElementById("links-list");
let trackedLinks = [];

saveLinkBtn.addEventListener("click", () => {
    trackedLinks.push(linkInputEl.value);
    renderLinks();
});

const renderLinks = () => {
    let listItems = "";
    for (let i = 0; i < trackedLinks.length; i++) {
        listItems += `<li><a target="_blank" href="${trackedLinks[i]}">${trackedLinks[i]}</a></li>`;
    }
    linksList.innerHTML = listItems;
    linkInputEl.value = "";
}



