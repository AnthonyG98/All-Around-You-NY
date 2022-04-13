const getAllNYTimesData = async() =>{
    const res = fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GpB8GoRIDcaekhMEZbKY7aGGnBtDXkDA")
    .then(response =>response.json())
    .then(data => {
        console.log(data)
        const MainHeader = document.getElementById("headline-title");
        MainHeader.innerText = data.results[0].title;
        const mainImg = document.getElementById("main-img");
        mainImg.style.backgroundImage = `url("${data.results[0].multimedia[3].url}")`;
    })
}
getAllNYTimesData();

