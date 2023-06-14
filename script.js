
async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/slack");
  const joke = await response.json();
  const jokeText = joke.attachments[0].text;
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = jokeText;
}

getJoke();

document.getElementById("btn").addEventListener('click',()=>{
  getJoke();
})