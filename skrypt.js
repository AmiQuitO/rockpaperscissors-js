punkty1 = 0;
punkty2 = 0;
wygrana = false;
j = 0;
x = 0;
window.onload=function(){
	for(i=0;i<2;i++){
		document.getElementById("board").innerHTML+=
		'<div class="photoboard"></div>';
	}
	for(i=0;i<3;i++){
		document.getElementById("choice").innerHTML+=
		'<div class="photo" id="p'+ (i+1) + '"></div>';
	}
	b=document.getElementsByClassName('photo');
	for(i=0;i<3;i++){
		b[i].style.backgroundImage = "url('"+ (i+1) + ".png')";
	}
	b[0].onclick=function(){
		j = 1
		if(wygrana){
			resepts();
			return;
		}
		x=Math.floor(3*Math.random())+1;
		console.log(j, x);
		resetborder()
		papkamnoz()
		sprawdzwygrana()
	}
	b[1].onclick=function(){
		j = 2
		if(wygrana){
			resepts();
			return;
		}
		x=Math.floor(3*Math.random())+1;
		console.log(j, x);
		resetborder()
		papkamnoz()
		sprawdzwygrana()
	}
	b[2].onclick=function(){
		j = 3
		if(wygrana){
			resepts();
			return;
		}
		x=Math.floor(3*Math.random())+1;
		console.log(j, x);
		resetborder()
		papkamnoz()
		sprawdzwygrana()
	}
}
function resepts(){	
	document.getElementsByClassName("photoboard")[0].style.border = "";
	document.getElementsByClassName("photoboard")[1].style.border = "";
	document.getElementById("points").innerHTML = "";
	alert("Nowa gra");
	punkty1 = 0;
	punkty2 = 0;
	wygrana = false;
}
function resetborder(){
	document.getElementsByClassName("photoboard")[0].style.backgroundImage = "url('"+ j +".png')";
	document.getElementsByClassName("photoboard")[1].style.backgroundImage = "url('"+ x +".png')";
	document.getElementsByClassName("photoboard")[0].style.border = "";
	document.getElementsByClassName("photoboard")[1].style.border = "";
}
function sprawdzwygrana(){
	document.getElementById("points").innerHTML = "<p>" + punkty1 + " : " + punkty2 + "</p>";
		if(punkty1 == 5){
			document.getElementById("points").innerHTML = "<p>" + punkty1 + " : " + punkty2 + "<br> Wygrałeś! </p>";
			wygrana = true;
		}else if(punkty2 == 5){	
			document.getElementById("points").innerHTML = "<p>" + punkty1 + " : " + punkty2 + "<br> Przegrałeś! </p>";
			wygrana = true;
		}
}
function papkamnoz(){
	// pap 1 kam 2 noz 3
	if((j == 1 && x == 2) || (j == 2 && x == 3) || (j == 3 && x == 1)){
		punkty1 += 1;
		document.getElementsByClassName("photoboard")[0].style.border = "5px solid #333333";
	}else if((x == 1 && j == 2) || (x == 2 && j == 3) || (x == 3 && j == 1)){
		punkty2 += 1;
		document.getElementsByClassName("photoboard")[1].style.border = "5px solid #333333";
	}
}