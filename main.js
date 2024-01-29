const ke = "Il38dEvCsfg2dB8GxGnp6zDv91LHCeG7tgi5YVuFdvA"

let form = document.getElementById("form")
let input = document.getElementById("input")
let Allresoult = document.getElementById("Allresoult")
let showMore = document.getElementById("showMore")
// console.log(form,input,Allresoult,showMore);

let inputData = ""

let page = 1;

async function searchImg() {

    inputData = input.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ke}`

    const response = await fetch(url)

    const data = await response.json()

    const results = data.results

    if (page === 1) {

        Allresoult.innerHTML = ""
        
    }

    results.map((re) => {

        const rre = document.createElement("div")
        rre.classList.add("resoult")

        const img = document.createElement('img')
        img.src = re.urls.small
        img.alt = re.alt_description

        const hreff = document.createElement("a")
        hreff.classList.add("href")

        hreff.href = re.links.html
        hreff.target = "_blank"
        hreff.textContent = re.alt_description


        const br = document.createElement('br')

        rre.appendChild(img)
        rre.appendChild(br)
        rre.appendChild(hreff)
        Allresoult.appendChild(rre)


    })

    page++
    if (page > 1) {

        showMore.style.display = "block"
        
    }




    // console.log(data.results);
}
// searchImg()

form.onsubmit=(event)=>{

    event.preventDefault()
    page = 1 ;


    searchImg()
}

showMore.onclick=()=>{
    searchImg()
}