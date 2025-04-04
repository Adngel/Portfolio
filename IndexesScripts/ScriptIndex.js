
var PicIndex = 1; //The pic that is currently showing.
showSlides(PicIndex); //Initialize.

function NextPic(n) //it will receives +1 and -1, from the prev and next buttons.
{
  showSlides(PicIndex += n);
}

function ChoosePic(n) //For the dots buttons.
{
  showSlides(PicIndex = n);
}

function showSlides(n) //The function that hides all the pics and then shows the one selected.
{
	var i;
	var slides = document.getElementsByClassName("NewsUnit");
	var buttons = document.getElementsByClassName("BtC");
		
	if (n > slides.length) 
	{
		PicIndex = 1;
	} 
  
	if (n < 1) 
	{
		PicIndex =slides.length;
	}
	
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < buttons.length; i++) 
	{
		buttons[i].className = buttons[i].className.replace(" BtCon", "");
	}
	
	slides[PicIndex-1].style.display = "block"; 
	buttons[PicIndex-1].className += " BtCon";
}


function OpenYear(evt, YearTag)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
	{
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
	{
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(YearTag).style.display = "block";
    evt.currentTarget.className += " active";
}

function MainPage()
{
	var myWindow = window.open("index.html", "_self");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//Side Navigator menu.
function openNav() 
{
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





