/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
const getRandomQuotes = () => {
  let randomNumber = Math.floor(Math.random() * Math.floor(1643));
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response[randomNumber];
      document.getElementById('quotes').textContent = data.text;
      document.getElementById('author').textContent = data.author;
    });
};
getRandomQuotes();

function buttonListener() {
  document.getElementById('main-container').addEventListener('click', () => {
    getRandomQuotes();
  });
}
buttonListener();
