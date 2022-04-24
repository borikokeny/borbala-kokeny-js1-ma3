const RAWG_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4ac541ac0184412c8e229d3d73d7c03b";
const CORS_URL = "https://noroffcors.herokuapp.com/";
const corsAdd = RAWG_URL + CORS_URL;
const resultContainer = document.querySelector(".rawgResults");
const options = {headers: {
    'X-RapidAPI-Key': 'dc51b191d2msha6a10125422b4a3p1527dajsn63787a84857a'}
};

async function callRawg() {
    try{
        const response = await fetch(corsAdd, options);
        const results = await response.json();
       
        for (let i = 0; i < 8; i++) {
            console.log(results[i].text);
        }
    } catch(error) {
        console.log(error);
    } finally {
        console.log("Hi there!");
    }
    resultContainer.innerHTML +=`<div class="rawgResults">${results[i].text}</div>`;
}
callRawg();