let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResults(result) {
    let {title, link, description} = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let resultTitleEl = document.createElement("a");
    resultTitleEl.href = link;
    resultTitleEl.textContent = title;
    resultLinkEl.target = "_blank";
    resultTitleEl.classList.add("result-title");
    resultItemEl.appendChild(resultTitleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let resultLinkEl = document.createElement('a');
    resultLinkEl.href = link;
    resultLinkEl.textContent = link;
    resultLinkEl.target = "_blank";
    resultLinkEl.classList.add("result-link");
    resultItemEl.appendChild(resultLinkEl);
    
    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let resultDescriptionEl = document.createElement("p");
    resultDescriptionEl.textContent = description;
    resultDescriptionEl.classList.add("result-description");
    resultItemEl.appendChild(resultDescriptionEl);
    
    searchResultsEl.appendChild(resultItemEl);

}


function displayWikiResults(search_results) {
    spinnerEl.classList.add("d-none");
    for (let result of search_results) {
        createAndAppendSearchResults(result);
    }
}


function wikipediaSearch(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.classList.add("d-none");

        let searchValue = searchInputEl.value;
        let requestedUrl = "https://apis.ccbp.in/wiki-search?search=" + searchValue;
        let options = {
            method: "GET",
        };

        fetch(requestedUrl, options)
        .then(function(response) {
            return response;
        })
        .then(function(jsonData) {
            let {search_results} = jsonData;
            displayWikiResults(search_results);
        })
    }
}


searchInputEl.addEventListener("keydown", wikipediaSearch);