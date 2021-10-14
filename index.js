const quote = document.getElementById('quote');
const pic = document.getElementById('pic');
const getQuote = () => {

fetch('https://api.quotable.io/random')  /* récupérer des citations en random */
  .then((res) => res.json())  /* res = response */
  .then(data => {
      quote.innerHTML = data.content
    })

/* 2 méthode pour fonction, l'une en déclarant la variable et l'autre en incluant la variable direcetement dans la fonction */
     
fetch('https://picsum.photos/1600/1000') 
    .then((res) => {
        document.getElementById('pic').innerHTML = `<img src = ${res.url} />`
     
})
}
  quote.addEventListener('click', () => getQuote());
  getQuote();

//   https://picsum.photos/200/300

