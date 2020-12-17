let url = "https://rickandmortyapi.com/api/character/avatar/"
//let imageONE = document.createElement('img');
imageOne.src = url + '1.jpeg'
//let imageTwo = document.createElement('img');
imageTwo.src = url + '2.jpeg'
        
                

fetch('https://rickandmortyapi.com/api/character')
    .then(function (result) {
    console.log(result)
     return result.json();})
     .then(function (json) {
        console.log(json);
        displayResults(json);
    })

function displayResults(json) {
console.log('Display Results', json);}