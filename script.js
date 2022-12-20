let body = document.body;

let btn = document.createElement("button");
btn.innerHTML = "Another quote";
body.appendChild(btn);
btn.addEventListener('click', quoteCall);

let blQuote = document.createElement("blockquote");
let img = document.createElement("img");
let author = document.createElement("p");

body.appendChild(blQuote);
body.appendChild(img);
body.appendChild(author);

async function quoteCall(){
    try{
        let response = await fetch('https://thatsthespir.it/api')
        let json = await response.json()
        blQuote.innerHTML = json.quote;
        img.innerHTML = json.photo;
        author.innerHTML = json.author;
    }
    catch(error) {
        alert(error);
    }
}
quoteCall()

        