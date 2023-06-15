const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxx";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {
       jokeElement.innerHTML = "Updating...";
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeElement.innerText = data[0].joke;

    btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke"; 
        
    } catch (error) {
        jokeElement.innerText = "An error happened, please try again later";
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke"; 
        console.log(error);

    }
    

    
}

btnElement.addEventListener("click", getJoke);
