const hexArray= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var hexcolor="#";

function changecolor () {
    for(var i=0; i<6; i++){
    var index = Math.floor(Math.random()*(hexArray.length));
    hexcolor=hexcolor + hexArray[index];
    }

console.log(hexcolor);
var body=document.querySelector('body');

body.style.backgroundColor = hexcolor;

var changename= document.querySelector(".changename");
changename.textContent = hexcolor;
hexcolor= "#";
}