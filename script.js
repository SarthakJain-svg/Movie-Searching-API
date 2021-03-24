var k = 1;

window.onload= function (){
	document.getElementById("inputBox").addEventListener("keyup", function (event) { 
		if (event.code == "Enter") 
		{ 
			loadDoc();
		} 
	});
}

function loadDoc() 
{
	document.getElementById("inner_div").innerHTML = "";
	var input = document.getElementById("inputBox").value;
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			var myObj = JSON.parse(this.responseText);
			for(var i = 0; i < myObj.results.length; i++)
			{
				addDivision(myObj.results[i].poster_path, myObj.results[i].title, myObj.results[i].overview);
			}
		}
	};
	xhttp.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=8fe364fa223db9a3f9720860af5fdd5d&query=" + input, true);
	xhttp.send();
}

function addDivision(image_path, movie_title, movie_brief)
{
	var input = document.getElementById("inputBox").value;
	if(input !== "" && k === 1)
	{
		document.getElementById("heading1").style.visibility = "visible";
		document.body.style.backgroundColor = "#AAAAAA";
	}
	document.getElementById("inputBox").value = "";

	var img = document.createElement('img');

	var h2 = document.createElement("h2");

	var division = document.createElement("div");
	division.setAttribute("id", "inner_div_" + k++);

	if(image_path !== null)
	{
		img.src = "https://www.themoviedb.org/t/p/original//" + image_path;
	}
	else
	{
		img.src = "E:\\JS Practise\\API Integration\\Default.png"
	}
	img.style.height = "250px";
	img.style.width = "200px";

	division.appendChild(img);
	var textNode = document.createTextNode(movie_title);
	h2.appendChild(textNode);
	division.appendChild(h2);
	var textNode1 = document.createTextNode(movie_brief);
	var paragraph = document.createElement("p");
	paragraph.appendChild(textNode1);
	division.appendChild(paragraph);
	document.getElementById("inner_div").appendChild(division);
}