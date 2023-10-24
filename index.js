const linkInputEl = document.getElementById("link-input");
const saveLinkBtn = document.getElementById("save-link-btn");
const saveCurrentTabBtn = document.getElementById("save-current-tab-btn");
const deleteAllLinksBtn = document.getElementById("delete-all-links-btn");
const linksList = document.getElementById("links-list");
const linksFromLocalStorage = JSON.parse(localStorage.getItem("trackedLinks"));
let trackedLinks = [];

const renderLinks = (links) => {
    try {
        let listItems = "";
        for (let i = 0; i < links.length; i++) {
            listItems += `<li><a target="_blank" href="${links[i]}">${links[i]}</a></li>`;
        }
        linksList.innerHTML = listItems;
        linkInputEl.value = "";
    } catch (err) {
        alert("Something went wrong!");
    }

}

const setLocalStorageItem = (array) => {
    try {
        localStorage.setItem("trackedLinks", JSON.stringify(array));
    } catch (err) {
        alert("Something went wrong!");
    }
}

if (linksFromLocalStorage) {
    trackedLinks = linksFromLocalStorage;
    renderLinks(linksFromLocalStorage);
}

saveLinkBtn.addEventListener("click", () => {
    if (linkInputEl.value === "") return alert("Please enter a link!");

    try {
        trackedLinks.push(linkInputEl.value);
        setLocalStorageItem(trackedLinks)
        renderLinks(trackedLinks);
    } catch (err) {
        alert("Something went wrong!");
    }
});

saveCurrentTabBtn.addEventListener("click", () => {
    try {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            trackedLinks.push(tabs[0].url);
            setLocalStorageItem(trackedLinks)
            renderLinks(trackedLinks);
        });
    } catch (err) {
        alert("Something went wrong!");
    }

})

deleteAllLinksBtn.addEventListener("click", () => {
    try {
        localStorage.clear();
        trackedLinks = [];
        renderLinks(trackedLinks);
    } catch (err) {
        alert("Something went wrong!");
    }
})




