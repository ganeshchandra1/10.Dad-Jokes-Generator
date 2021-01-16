const btn=document.getElementById('btn')
const joke=document.getElementById('joke')
btn.addEventListener("click",generateJoke)
generateJoke()
async function generateJoke (){
    const response = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes');
    const myJson = await response.json();
    joke.innerHTML=myJson.setup+"<br>"+myJson.punchline
}