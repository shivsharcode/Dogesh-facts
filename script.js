const URL = "https://dogapi.dog/api/v2/facts?limit=2" ;

const factDiv = document.getElementById('fact-div-id');
const getFactBtn = document.getElementById("get-fact-btn-id");
const loadingGif = document.getElementById("loading-gif-id");

function showLoadingGif(){
    return new Promise((resolve)=>{
        loadingGif.style.display = "block";
        setTimeout(() => {
            loadingGif.style.display = "none";
            resolve()
        }, 2000);
    })
}


const getFact = async()=>{
    factDiv.innerText = "";
    try {
        await showLoadingGif();
        let respone = await fetch(URL);
        let data = await respone.json();
        factDiv.style.color = "black" ;
        factDiv.innerText = data.data[0].attributes.body;
        console.log(data.data[0].attributes.body);
    } catch (error) {
        console.error("Error fetching dog facts : ", error);
        factDiv.style.color = "red";
        factDiv.textContent = "There is an unexpected Error :("
    }

}



getFactBtn.addEventListener("click", getFact)