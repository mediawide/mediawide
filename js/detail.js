let urlSearch = null;
let portfolioList = [];
let portfolioID = 0;

window.addEventListener("load", async function () {
    portfolioList = [];
    portfolioList = JSON.parse(JSON.stringify(portfolio));

    urlSearch = new URLSearchParams(location.search);
    portfolioID = parseInt(urlSearch.get("portfolio"));

    generateDetail(portfolioList[portfolioID - 1]);
});


function generateDetail(_obj){
    let iframeList = [];

    const obj_iframe = document.querySelector("iframe");
    obj_iframe.src = "https://www.youtube.com/embed/" + _obj.youtube[0];

    for(let i = 0; i < _obj.youtube.length; i++){
        iframeList[i] = obj_iframe.cloneNode(true);
        iframeList[i].src = "https://www.youtube.com/embed/" + _obj.youtube[i];
        if(i != 0){
            document.querySelector(".video-wrapper").appendChild(iframeList[i]);
        }
    }

    document.querySelector(".title").innerHTML = _obj.title;
    document.querySelector(".desc").innerHTML = _obj.desc;
    
    const frameList = document.querySelectorAll(".frame");

    for(let i = 0; i < frameList.length; i++){
        frameList[i].src = "img/" + portfolioID + "-" + (i + 1) + ".jpg";
    }
}