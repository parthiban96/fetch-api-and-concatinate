let wordUri = "https://random-word-api.herokuapp.com/word?number=5";
let gifUri = "https://api.giphy.com/v1/gifs/search?api_key=Xyatnk7Fr6JXw5WUSMpZdi4K5VxKb4Py&limit=5&offset=0&rating=g&lang=en&q=";

fetch(wordUri)
.then((resp) => {
    return resp.json()
})
.then((data) => {
    return fetch(gifUri + data[0]);
})
.then((resp1) => {
    return resp1.json();
})
.then((result1) => {
    result1.data.forEach((element) =>{
        foo(element.images.original.url)
    })
})
.catch((err) => {
    console.log(err);
})

function foo(par){
    let object = document.createElement("object");
    object.data = par;
    document.body.append(object);
}
