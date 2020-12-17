document.getElementById('input').addEventListener('click', event => {
    
 

        event.preventDefault()
        let store = document.getElementById("store").value
        let product = document.getElementById("product").value
        let quantity = document.getElementById("quantity").value
        
        
        document.getElementById('fSentence').innerHTML = `I went to ${store}, and bought ${quantity}, ${product}`;

})
