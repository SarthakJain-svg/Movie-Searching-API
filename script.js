var k = 1;
var arr = [];

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
	var input = document.getElementById("inputBox").value;
	if(input != "" && k==1)
	{
		document.getElementById("heading1").style.visibility = "visible";
		document.body.style.backgroundColor = "#AAAAAA";
	}
	document.getElementById("inputBox").value = "";
	var id = localStorage.getItem(input);
	var xhttp = new XMLHttpRequest();
	var img = document.createElement('img');
	var h2 = document.createElement("h2");
	var division = document.createElement("div");
	division.setAttribute("id", "inner_div_" + k++);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			var myObj = JSON.parse(this.responseText);
			img.src = myObj.image.medium;
			division.appendChild(img);
			var textNode = document.createTextNode(myObj.name);
			h2.appendChild(textNode);
			division.appendChild(h2);
			var strng = (myObj.summary).replace( /(<([^>]+)>)/ig, '');
			var paragraph = document.createElement("p");
			var textNode1 = document.createTextNode(strng);
			paragraph.appendChild(textNode1);
			division.appendChild(paragraph);
			document.getElementById("inner_div").appendChild(division);
		}
	};
	xhttp.open("GET", "http://api.tvmaze.com/shows/" + id, true);
	xhttp.send();
}