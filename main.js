// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploading; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//Escreva um código para verificar o tipo de tecla pressionada
	 {
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("alphabet key");
	}
}

function aplhabetkey()
{
	img_image= "alfabeto.png";
	add();

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
