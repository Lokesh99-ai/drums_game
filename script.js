
var b=document.querySelectorAll(".drum");
var e=document.querySelector(".end")
var e1=e.addEventListener("click",endgame);
var cus=document.querySelector(".custom");
var c1=cus.addEventListener("click",enter);
var bi,i;
function enter()
{

	i=0;
	var a=prompt("Enter the letters which are on the drums");
	var ct=a.toString();
	bi=ct.split("");	
	setInterval(function(){
		if(i<bi.length)
		{
		clicked1(bi[i]);i++;
	}
	},500);
}



function endgame(){
	for(i=0;i<b.length;i++)
    {
	     b[i].remove();

    }
    e.remove();
    document.querySelector("body").classList.add("game-over");
    document.querySelector(".tq").innerHTML="<p>Thank you for Playing!!!</p>"
}

var i,c;
for(i=0;i<b.length;i++)
{
	b[i].addEventListener("click",clicked)
}

document.addEventListener("keypress",function (event){
	c=event.key;
	buttonani(c);
	makeSound(c);      
})

function clicked1(c)
{   
	buttonani(c);       
	makeSound(c);
}
function clicked()
{   
	c=this.textContent;
	buttonani(c);       
	makeSound(c);
}

function makeSound(c)
{
	switch(c)
	{
		case "w": var audio=new Audio("sounds/"+c+".mp3");
		          audio.play();
		          break;
		case "a": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;       
		case "d": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;   
		case "j": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "k": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "l": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		case "s": var audio=new Audio("sounds/"+c+".mp3");
				  audio.play();
		          break;
		default: console.log(c);          
	}
}

function buttonani(e)
{
	var but=document.querySelector("."+e);
	but.classList.add("pressed");
	setTimeout(function() {
	   but.classList.remove("pressed");	
	},200);
}

