var messageIcon = document.querySelector(".message-icon");
var chatArea = document.querySelector(".chat-area");
var removeChat = document.querySelector(".remove-chat");
var cancel = document.querySelector(".cancel");

var string = "An award-winning freelance marketplace in the industry!"; 
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.querySelector(".typr").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70);

}
frameLooper();

$(document).ready(function(){
    $("#icon").click(function(){
        $("#searchbar-drop").fadeOut("fast");
        $("#responsivedrop-outter").fadeIn("");
    });
    $("#cancel-nav").click(function(){
        $("#responsivedrop-outter").fadeOut("");
    });
});
$(document).ready(function(){
    $("#search-icon").click(function(){
        $("#responsivedrop-outter").fadeOut("fast");
        $("#searchbar-drop").fadeToggle("fast");
    });
});

function drop(){
    var x = document.getElementById("dropdown2-1");
    var y = document.getElementById("dropdown2-2");
    var z = document.getElementById("dropdown2-3");
    if (x.style.display === "none") {
        y.style.display = "none";
        z.style.display = "none";
        x.style.display = "block";
        // document.getElementById("dropbtn1").style.backgroundColor = "#f9f9f9";
        // document.getElementById("dropbtn2").style.backgroundColor = "white";
        // document.getElementById("dropbtn3").style.backgroundColor = "white";
    } else {
        x.style.display = "none";
        
    }
}

function dropTwo(){
    var x = document.getElementById("dropdown2-1");
    var y = document.getElementById("dropdown2-2");
    var z = document.getElementById("dropdown2-3");
    if (y.style.display === "none") {
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "block";
        // document.getElementById("dropbtn2").style.backgroundColor = "#f9f9f9";
        // document.getElementById("dropbtn1").style.backgroundColor = "white";
        // document.getElementById("dropbtn3").style.backgroundColor = "white";
    } else {
        y.style.display = "none";
    }
}

function dropThree(){
    var x = document.getElementById("dropdown2-1");
    var y = document.getElementById("dropdown2-2");
    var z = document.getElementById("dropdown2-3");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        // document.getElementById("dropbtn3").style.backgroundColor = "#f9f9f9";
        // document.getElementById("dropbtn2").style.backgroundColor = "white";
        // document.getElementById("dropbtn1").style.backgroundColor = "white";
    } else {
        z.style.display = "none";
    }
}
    
    function foot(){
        a = document.getElementById("footerinnercontent1");
        b = document.getElementById("footerinnercontent2");
        c = document.getElementById("footerinnercontent3");
        d = document.getElementById("footerinnercontent4");
        e = document.getElementById("footerinnercontent5");
        if (a.style.display === "none"){
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        } else{
            a.style.display = "none";
        }
    }
    function footTwo(){
        a = document.getElementById("footerinnercontent1");
        b = document.getElementById("footerinnercontent2");
        c = document.getElementById("footerinnercontent3");
        d = document.getElementById("footerinnercontent4");
        e = document.getElementById("footerinnercontent5");
        if (b.style.display === "none"){
            b.style.display = "block";
            a.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        } else{
            b.style.display = "none";
        }
    }
    function footThree(){
        a = document.getElementById("footerinnercontent1");
        b = document.getElementById("footerinnercontent2");
        c = document.getElementById("footerinnercontent3");
        d = document.getElementById("footerinnercontent4");
        e = document.getElementById("footerinnercontent5");
        if (c.style.display === "none"){
            c.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        } else{
            c.style.display = "none";
        }
    }
    function footFour(){
        a = document.getElementById("footerinnercontent1");
        b = document.getElementById("footerinnercontent2");
        c = document.getElementById("footerinnercontent3");
        d = document.getElementById("footerinnercontent4");
        e = document.getElementById("footerinnercontent5");
        if (d.style.display === "none"){
            d.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            e.style.display = "none";
        } else{
            d.style.display = "none";
        }
    }
    function footFive(){
        a = document.getElementById("footerinnercontent1");
        b = document.getElementById("footerinnercontent2");
        c = document.getElementById("footerinnercontent3");
        d = document.getElementById("footerinnercontent4");
        e = document.getElementById("footerinnercontent5");
        if (e.style.display === "none"){
            e.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
        } else{
            e.style.display = "none";
        }
    }

