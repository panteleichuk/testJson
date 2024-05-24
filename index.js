fetch('./data.json')
    .then((response) => response.json())
    .then((json) =>{ console.log(json)
let div = document.querySelector("div")
div.innerHTML = JSON.stringify(json)
let name = document.querySelector(".name")
name.innerHTML = json.name
})