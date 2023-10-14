const linkInput = document.getElementById("link-input");
const saveLinkBtn = document.getElementById("save-link-btn");
const linkList = document.getElementById("link-list");
let myLinks = [];

saveLinkBtn.addEventListener("click", () => {
    myLinks.push(linkInput.value);
    renderLinks();
});

const renderLinks = () => {
    let listItems = "";
    for (let i = 0; i < myLinks.length; i++) {
        listItems += `<li><a target="_blank" href="${myLinks[i]}">${myLinks[i]}</a></li>`;
    }
    linkList.innerHTML = listItems;
    linkInput.value = "";
}



