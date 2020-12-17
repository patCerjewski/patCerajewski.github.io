let baseURL= 'https://pokeapi.co/api/v2/'

let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('input');
logo.addEventListener('click', fetchQuote);




document.getElementById('input').addEventListener('click', event => {
    fetch(baseURL + 'pokemon/', document.getElementById("name").value)
 

    event.preventDefault()
    let store = document.getElementById("store").value
    let product = document.getElementById("product").value
    let quantity = document.getElementById("quantity").value
    
    
    document.getElementById('fSentence').innerHTML = `I went to ${store}, and bought ${quantity}, ${product}`;

})
function fetchQuote(){
    fetch(baseURL)
        .then(response => response.json())
        .then(json => displayQuote(json))
    let logoContainer = document.getElementById(logoContainer)
    logoContainer.removeChild(logo)
}
let displayQuote = json => {
    console.log(json) //prints data from quote

    let quote = document.createAttribute('h1');
    quote.className = 'quote';
    quote.innerText = `"${json[0]}"`
    quote.style = 'font-family: pinewood; color: #3a2718';

    let quoteBy = document.createElement('p')
    quoteBy.id = 'quoteBy';
    quoteBy.innerText = 'Ron Swanson'
    quoteBy.style = 'font-size: 3rem; font family: billionDreams; color: #3a2718'
    if (json[0].length >= 50 && json[0].length <= 150){
        quote.style.fontSize = '5rem';
     } else if (json[0] < 50){
        quote.style.fontSize = '7rem';
        }
        else{
            quote.style.fontSize = '3.5rem';
        }

    let button = document.createElement('button');
    button.innerText = 'Another Please';
    button.className = 'reset';
    button.style = 'margin: 0; margin-top: 4em;'
    
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(button);

    button.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(button);
        quoteContainer.removeChild(quoteBy)
        fetchQuote()
    }
    )
}

