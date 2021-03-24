var k = 1;

window.onload= function (){
	document.getElementById("inputBox").addEventListener("keyup", function (event) { 
		if (event.code == "Enter") 
		{ 
			loadDoc();
		} 
	});
}

var obj = {
	"Bad Boys for Life": 38700,
	"Godzilla: King of the Monsters": 373571,
	"Joker": 475557,
	"Cherry": 544401,
	"Red Dot": 649087,
	"Breach": 651571,
	"The Little Things": 602269,
	"Outside the Wire": 775996,
	"Black Water: Abyss": 522444,
	"Monster Hunter": 458576
};

function loadDoc() 
{
	var input = document.getElementById("inputBox").value;
	if(input !== "" && k === 1)
	{
		document.getElementById("heading1").style.visibility = "visible";
		document.body.style.backgroundColor = "#AAAAAA";
	}
	document.getElementById("inputBox").value = "";

	var xhttp = new XMLHttpRequest();

	var img = document.createElement('img');

	var h2 = document.createElement("h2");

	var division = document.createElement("div");
	division.setAttribute("id", "inner_div_" + k++);

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			var myObj = JSON.parse(this.responseText);
			img.src = "https://www.themoviedb.org/t/p/original//" + myObj.poster_path;
			img.style.height = "250px";
			img.style.width = "200px";

			division.appendChild(img);

			var textNode = document.createTextNode(myObj.original_title);
			h2.appendChild(textNode);
			division.appendChild(h2);
			var paragraph = document.createElement("p");
			var textNode1 = document.createTextNode(myObj.overview);
			paragraph.appendChild(textNode1);
			division.appendChild(paragraph);
			document.getElementById("inner_div").appendChild(division);
		}
	};
	xhttp.open("GET", "https://api.themoviedb.org/3/movie/" + obj[input] + "?api_key=8fe364fa223db9a3f9720860af5fdd5d", true);
	xhttp.send();
}