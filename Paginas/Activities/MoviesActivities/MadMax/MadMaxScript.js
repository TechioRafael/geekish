var total = 0;

function activity1(){
	var activities = document.getElementsByName('Activity1question1');
	for (var i = 0; i < activities.length; i++){
		if ( activities[i].checked ) {
			if(activities[i].value == "A"){
				var text = document.getElementById('AAA');
				text.style.color="red";
			}else if (activities[i].value == "B"){
				var text = document.getElementById('AAB');
				text.style.color="red";
			}else if (activities[i].value == "C") {
				var text = document.getElementById('AAC');
				text.style.color="green";
				total = total + 1;
			}else if (activities[i].value == "D") {
				var text = document.getElementById('AAD');
				text.style.color="red";
			}
		}
	}
	var activities = document.getElementsByName('Activity1question2');
	for (var i = 0; i < activities.length; i++){
		if ( activities[i].checked ) {
			if(activities[i].value == "A"){
				var text = document.getElementById('ABA');
				text.style.color="red";
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ABB');
				text.style.color="green";
				total = total + 1;	
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ABC');
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ABD');
				text.style.color="red";
			}
		}
	}
	
	document.getElementById('btnActivity1').style.display="none";
}

function activity2(){	
	var text1 = document.getElementById('BAA').value;
	var text2 = document.getElementById('BAB').value;
	var text3 = document.getElementById('BAC').value;
	var text4 = document.getElementById('BAD').value;
	var text5 = document.getElementById('BAE').value;
	var text6 = document.getElementById('BAF').value;
	var text7 = document.getElementById('BBA').value;
	var text8 = document.getElementById('BBB').value;
	var text9 = document.getElementById('BBC').value;
	var text10 = document.getElementById('BBD').value;
	var text11 = document.getElementById('BBE').value;
	var text12 = document.getElementById('BBF').value;
	var text13 = document.getElementById('BBG').value;
	var text14 = document.getElementById('BBH').value;
	var text15 = document.getElementById('BBI').value;
	var text16 = document.getElementById('BCA').value;
	var text17 = document.getElementById('BCB').value;
	var text18 = document.getElementById('BCC').value;
	var text19 = document.getElementById('BCD').value;
	var text20 = document.getElementById('BCE').value;
	var text21 = document.getElementById('BCF').value;
	var text22 = document.getElementById('BCG').value;
	var text23 = document.getElementById('BCH').value;
	var text24 = document.getElementById('BCI').value;
	var text25 = document.getElementById('BCJ').value;
	var text26 = document.getElementById('BCK').value;
	var text27 = document.getElementById('BCL').value;
	var text28 = document.getElementById('BCM').value;
	var text29 = document.getElementById('BCN').value;
	
	document.getElementById('atividade2correcao1parte1').innerHTML = "If I'm gonna die,";
	document.getElementById('atividade2correcao1parte2').innerHTML = "I'm gonna";
	document.getElementById('atividade2correcao1parte3').innerHTML = "die historic";
	document.getElementById('atividade2correcao1parte4').innerHTML = "on";
	document.getElementById('atividade2correcao1parte5').innerHTML = "the";
	document.getElementById('atividade2correcao1parte6').innerHTML = "fury road";
	
	document.getElementById('atividade2correcao2parte1').innerHTML = "Return my";
	document.getElementById('atividade2correcao2parte2').innerHTML = "treasures to";
	document.getElementById('atividade2correcao2parte3').innerHTML = "me, and I";
	document.getElementById('atividade2correcao2parte4').innerHTML = "myself will";
	document.getElementById('atividade2correcao2parte5').innerHTML = "carry you";
	document.getElementById('atividade2correcao2parte6').innerHTML = "through the";
	document.getElementById('atividade2correcao2parte7').innerHTML = "gates of Valhalla. You";
	document.getElementById('atividade2correcao2parte8').innerHTML = "shall ride eternal.";
	document.getElementById('atividade2correcao2parte9').innerHTML = "Shiny, and chrome!";

	document.getElementById('atividade2correcao3parte1').innerHTML = "As the";
	document.getElementById('atividade2correcao3parte2').innerHTML = "world";
	document.getElementById('atividade2correcao3parte3').innerHTML = "fell,";
	document.getElementById('atividade2correcao3parte4').innerHTML = "each of us";
	document.getElementById('atividade2correcao3parte5').innerHTML = "in our";
	document.getElementById('atividade2correcao3parte6').innerHTML = "own way";
	document.getElementById('atividade2correcao3parte7').innerHTML = "was";
	document.getElementById('atividade2correcao3parte8').innerHTML = "broken. It was";
	document.getElementById('atividade2correcao3parte9').innerHTML = "hard to";
	document.getElementById('atividade2correcao3parte10').innerHTML = "know who";
	document.getElementById('atividade2correcao3parte11').innerHTML = "was";
	document.getElementById('atividade2correcao3parte12').innerHTML = "more";
	document.getElementById('atividade2correcao3parte13').innerHTML = "crazy, me, or";
	document.getElementById('atividade2correcao3parte14').innerHTML = "everyone else.";
	
			
		if (text1 === "die"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "gonna"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "historic"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "on"){
			document.getElementById('atividade2correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte4').style.color = "red";
		}
		//////////////////////
		if (text5 === "the"){
			document.getElementById('atividade2correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "fury"){
			document.getElementById('atividade2correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "my"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text8 === "treasures"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text9 === "me"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text10 === "myself"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text11 === "carry"){
			document.getElementById('atividade2correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text12 === "through"){
			document.getElementById('atividade2correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text13 === "gates"){
			document.getElementById('atividade2correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text14 === "shall"){
			document.getElementById('atividade2correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text15 === "Shiny"){
			document.getElementById('atividade2correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text16 === "As"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text17 === "world"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text18 === "fell"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text19 === "each"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text20 === "in"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
		}
		///////////////////////
		if (text21 === "own"){
			document.getElementById('atividade2correcao3parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte6').style.color = "red";
		}
		///////////////////////
		if (text22 === "was"){
			document.getElementById('atividade2correcao3parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte7').style.color = "red";
		}
		///////////////////////
		if (text23 === "broken"){
			document.getElementById('atividade2correcao3parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte8').style.color = "red";
		}
		///////////////////////
		if (text24 === "hard"){
			document.getElementById('atividade2correcao3parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte9').style.color = "red";
		}
		///////////////////////
		if (text25 === "know"){
			document.getElementById('atividade2correcao3parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte10').style.color = "red";
		}
		///////////////////////
		if (text26 === "was"){
			document.getElementById('atividade2correcao3parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte11').style.color = "red";
		}
		///////////////////////
		if (text27 === "more"){
			document.getElementById('atividade2correcao3parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte12').style.color = "red";
		}
		///////////////////////
		if (text28 === "crazy"){
			document.getElementById('atividade2correcao3parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte13').style.color = "red";
		}
		///////////////////////
		if (text29 === "everyone"){
			document.getElementById('atividade2correcao3parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte14').style.color = "red";
		}

		document.getElementById('btnActivity2').style.display="none";
		
}


function score(){
	document.getElementById('btnCheckResults').style.display="none";
	if(total >= 7){
		document.getElementById('winOrLose').innerHTML = "Congratulations! You've answeared correcly " + total + " questions!";
	}else{
		document.getElementById('winOrLose').innerHTML = "Oh my friend, You've answeared correcly " + total + " questions. Don't let it put you down! Try again!";
	}
}

function audio1() {
        var audio = document.getElementById('audio1');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
        }
    }

function audio2() {
        var audio = document.getElementById('audio2');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
        }
    }

function audio3() {
        var audio = document.getElementById('audio3');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
        }
    }