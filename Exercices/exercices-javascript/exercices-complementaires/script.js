// Inserez la balise script au bon endroit dans votre index.html

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
// Créez un script permettant d'ouvrir une box alert au click sur un bouton, n'oubliez pas de créer la balise bouton dans votre index.html
function buttonListener() {
  document.getElementById('container').addEventListener('click', () => {
    getRandomQuotes();
  });
}
buttonListener();

// A l'aide de la propriété textContent modifiez le contenu text de votre index.html: d'abord créez un paragraphe avec l'ID de votre choix, puis dans votre fichier script.js modifiez le contenu texte de cette balise

document.getElementById('mon paragraphe').textContent =
  'Voici mon nouveau texte';

// Affichez dans une box alert le résultat de la méthode math random, dont l'entier à ne pas dépassé est 16

/*let ourNumber = Math.floor(Math.random() * 17);
window.alert(ourNumber);*/

/* let randomNumber = Math.floor(Math.random () * Math.floor(16))
window.alert(randomNumber); */

// A l'aide de la méthode fetch(), contactez cette API via cette url: https://type.fit/api/quotes, aidez vous de l'exemple donné dans la théorie. D'abord traitez la réponse en utilisant la méthode .json(), ensuite affichez le contenu de la réponse dans un console.log
