var k = 1;
var obj = [];

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
	obj.splice(0, obj.length);
	var input = document.getElementById("inputBox").value;

	if(input !== "" && k === 1)
	{
		document.getElementById("heading1").style.visibility = "visible";
		document.body.style.backgroundColor = "#AAAAAA";
		document.getElementById("sort_movie").style.visibility = "visible";
	}
	document.getElementById("inputBox").value = "";

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			var myObj = JSON.parse(this.responseText);
			for(var i = 0; i < myObj.results.length; i++)
			{
				obj[i] =
					{
						MovieTitle: myObj.results[i].title,
						MoviePosterPath: myObj.results[i].poster_path,
						MovieOverview: myObj.results[i].overview,
						MoviePopularity: myObj.results[i].popularity,
						MovieReleaseDate: myObj.results[i].release_date
					}
			}
			addDivision(obj);
		}
	};
	xhttp.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=8fe364fa223db9a3f9720860af5fdd5d&query=" + input, true);
	xhttp.send();
}

function addDivision(M_Obj)
{
	k = 1;
	document.getElementById("inner_div").innerHTML = "";
	for(var i = 0; i < M_Obj.length;i++)
	{
		var img = document.createElement('img');
		var h2 = document.createElement("h2");
		var anchor = document.createElement("a");
		var division = document.createElement("div");

		division.setAttribute("id", "inner_div_" + k++);
		if(M_Obj[i]["MoviePosterPath"] !== null)
		{
			img.src = "https://www.themoviedb.org/t/p/original//" + M_Obj[i]["MoviePosterPath"];
		}
		else
		{
			img.src = "data:image/png;base64,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";
		}

		var textNode = document.createTextNode(M_Obj[i]["MovieTitle"]);
		anchor.appendChild(textNode);
		//anchor.setAttribute("href", "#");
		h2.appendChild(anchor);
		h2.setAttribute("onclick", "anchorClick(this)");
		division.appendChild(h2);
		division.appendChild(img);
		document.getElementById("inner_div").appendChild(division);
	}
}

function anchorClick(elem)
{
	document.getElementById("modalBox").style.visibility = "visible";
	document.getElementById("close").style.visibility = "visible";
	document.getElementById("div1").style.opacity = ".4";
	var id = elem.parentNode.id;
	var element = document.getElementById(id);
	var title = document.createTextNode(element.children[0].textContent);
	var image = element.children[1].src;
	var modal_title = document.getElementById("m_title");
	modal_title.innerHTML = "";
	modal_title.appendChild(title);
	document.getElementById("m_image").src = image;
	var movie_release_date = document.getElementById("m_releaseDate");
	movie_release_date.innerHTML = "";
	if(obj[id.substring(10)-1]["MovieReleaseDate"] !== "")
	{
		movie_release_date.appendChild(document.createTextNode(obj[id.substring(10)-1]["MovieReleaseDate"]));
		document.getElementById("m_releaseDate_title").style.display = "block";
	}
	else
	{
		document.getElementById("m_releaseDate_title").style.display = "none";
	}
	
	var movie_popularity = document.getElementById("m_popularity");
	movie_popularity.innerHTML = "";

	if(obj[id.substring(10)-1]["MoviePopularity"] !== null)
	{
		movie_popularity.appendChild(document.createTextNode(obj[id.substring(10)-1]["MoviePopularity"]));
		document.getElementById("m_popularity_title").style.display = "block";
	}
	else
	{
		document.getElementById("m_popularity_title").style.display = "none";
	}
	
	var content = obj[id.substring(10)-1]["MovieOverview"];
	var movie_overview = document.getElementById("m_overview");
	movie_overview.innerHTML = "";
	var data = content.substring(0, content.indexOf(".") + 1);
	if(content.indexOf(".") === -1)
	{
		data = content + ".";
	}
	movie_overview.appendChild(document.createTextNode(data));
}

function closeClick()
{
	document.getElementById("modalBox").style.visibility = "hidden";
	document.getElementById("close").style.visibility = "hidden";
	document.getElementById("div1").style.opacity = "1.1";
}

function SortMovie(value)
{
	if(value == 1)
	{
		addDivision(obj.sort((a, b) => a.MovieTitle > b.MovieTitle ? 1 : -1	));
	}

	if(value == 2)
	{
		addDivision(obj.sort((a, b) => a.MovieTitle < b.MovieTitle ? 1 : -1	));
	}

	if(value == 3)
	{
		addDivision(obj.sort((a, b) => a.MovieReleaseDate > b.MovieReleaseDate ? 1 : -1	));
	}

	if(value == 4)
	{
		addDivision(obj.sort((a, b) => a.MovieReleaseDate < b.MovieReleaseDate ? 1 : -1	));
	}
	
	document.getElementById("sort_movie").value = "Sort By";
}