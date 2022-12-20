//Publish a web page that shows a random quote from an available Web Service.
let body = document.body;

let blQuote = document.createElement("blockquote");
    img = document.createElement("img");
    author = document.createElement("p");
 
body.appendChild(blQuote);
body.appendChild(img);
body.appendChild(author);

async function quoteCall(){
    try{
        let response = await fetch('https://thatsthespir.it/api')
            json = await response.json()
        blQuote.innerHTML = json.quote;
        author.innerHTML = json.author;
        img.setAttribute("src",json.photo);
        img.setAttribute("alt",json.author);
    }
    catch(error) {
        alert(error);
    }
}
quoteCall()

let btn = document.createElement("button");
btn.innerHTML = "Another quote";
body.appendChild(btn);
btn.addEventListener('click', quoteCall);