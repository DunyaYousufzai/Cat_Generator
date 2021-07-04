function generateCat(){
    var img = document.createElement("img");
    var div =  document.getElementById("flex-cat-gen");
    img.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(img)
}