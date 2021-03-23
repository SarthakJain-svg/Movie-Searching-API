var k = 1;
var arr = [];
var id = "";

window.onload= function (){
	document.getElementById("inputBox").addEventListener("keyup", function (event) { 
		if (event.code == "Enter") 
		{ 
			loadDoc();
		} 
	});
}

var text = '{"TVShowsData":[' +
'{"Name":"Under the Dome","Id":"1" },' +
'{"Name":"Person of Interest","Id":"2" },' +
'{"Name":"Bitten","Id":"3" },' +
'{"Name":"Arrow","Id":"4" },' +
'{"Name":"True Detective","Id":"5" },' +
'{"Name":"The 100","Id":"6" },' +
'{"Name":"Homeland","Id":"7" },' +
'{"Name":"Glee","Id":"8" },' +
'{"Name":"Revenge","Id":"9" },' +
'{"Name":"Grimm","Id":"10" }]}';

var obj = JSON.parse(text);

function loadDoc() 
{
	var input = document.getElementById("inputBox").value;
	if(input != "" && k==1)
	{
		document.getElementById("heading1").style.visibility = "visible";
		document.body.style.backgroundColor = "#AAAAAA";
	}
	document.getElementById("inputBox").value = "";
	
	for(var i = 0; i < 10; i++)
	{
		if(obj.TVShowsData[i].Name == input)
		{
			id = obj.TVShowsData[i].Id;
		}
	}

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
