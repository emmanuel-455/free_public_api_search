const formEl = document.querySelector("form");
const categoryValue = document.querySelector("#input_search");
let inputData = ""
let thePD = document.querySelector(".animal_result")
let thecate = document.getElementById("category")
let found = false

async function logMovies() {
    inputData = categoryValue.value
    const response = await fetch("https://api.publicapis.org/entries");
    const movies = await response.json();
    let themain = movies.entries
    themain.map((map) => {
        console.log(map.Category.toLowerCase());
        if (map.Category.toLowerCase() === inputData.toLowerCase()) {
            thecate.textContent = map.Category
            let apiDiv = document.createElement("div")
            apiDiv.classList.add("the_api");
            let apiTitle = document.createElement("h3");
            apiTitle.classList.add("api_title");
            apiTitle.innerHTML = map.API
            let apiDescription = document.createElement("p");
            apiDescription.classList.add("api_description");
            apiDescription.innerHTML = map.Description;
            let theBtn = document.createElement("button")
            let apiLink = document.createElement("a");
            apiLink.href = map.Link;
            apiLink.textContent = "Api Link"
            apiLink.target = "_blank"

            thePD.appendChild(apiDiv);
            apiDiv.appendChild(apiTitle);
            theBtn.appendChild(apiLink)
            apiDiv.appendChild(apiDescription)
            apiDiv.appendChild(apiLink)
        }
    
    })
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    logMovies()
})







