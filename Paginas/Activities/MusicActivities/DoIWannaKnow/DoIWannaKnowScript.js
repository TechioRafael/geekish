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
	var activities = document.getElementsByName('Activity1question3');
	for (var i = 0; i < activities.length; i++){

		if (activities[i].checked){
			if(activities[i].value == "A"){
				var text = document.getElementById('ACA');
				text.style.color="red";
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ACB');
				text.style.color="red";		
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ACC');
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ACD');
				text.style.color="green";
				total = total + 1;
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
	var text5 = document.getElementById('BBA').value;
	var text6 = document.getElementById('BBB').value;
	var text7 = document.getElementById('BBC').value;
	var text8 = document.getElementById('BCCA').value;
	var text9 = document.getElementById('BCCB').value;
	var text10 = document.getElementById('BCCC').value;
	var text11 = document.getElementById('BCCD').value;
	

	document.getElementById('atividade2correcao1parte1').innerHTML = "Have you";
	document.getElementById('atividade2correcao1parte2').innerHTML = "got colour in your cheeks?";
	document.getElementById('atividade2correcao1parte3').innerHTML = "Do you ever get that fear that";
	document.getElementById('atividade2correcao1parte4').innerHTML = "you can't shift the type";

	document.getElementById('atividade2correcao2parte1').innerHTML = "Have you no idea that you're in deep?";
	document.getElementById('atividade2correcao2parte2').innerHTML = "I've";
	document.getElementById('atividade2correcao2parte3').innerHTML = "dreamt about you nearly every night this week";

	document.getElementById('atividade2correcao3parte1').innerHTML = "Crawling back to you";
	document.getElementById('atividade2correcao3parte2').innerHTML = "Ever";
	document.getElementById('atividade2correcao3parte3').innerHTML = "thought of calling when";
	document.getElementById('atividade2correcao3parte4').innerHTML = "you've";
	document.getElementById('atividade2correcao3parte5').innerHTML = "had a few?";

		if (text1 === "Have"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "got"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "Do"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "can't"){
			document.getElementById('atividade2correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte4').style.color = "red";
		}
		//////////////////////
		if (text5 === "Have"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "ve"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text7 === "dream"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		if (text8 === "Ever"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		//////////////////////
		if (text9 === "thought"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text10 === "ve"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text11 === "had"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
		}

		document.getElementById('btnActivity2').style.display="none";
		
}

function activity3(){

	var text1 = document.getElementById('BZA').value;
	var text2 = document.getElementById('BCB').value;
	var text3 = document.getElementById('BCC').value;
	var text4 = document.getElementById('BCD').value;
	var text5 = document.getElementById('BCE').value;
	var text6 = document.getElementById('BCF').value;
	var text7 = document.getElementById('BCG').value;
	var text8 = document.getElementById('BCH').value;
	var text9 = document.getElementById('BDA').value;
	var text10 = document.getElementById('BDB').value;
	var text11 = document.getElementById('BDC').value;
	var text12 = document.getElementById('BDD').value;
	var text13 = document.getElementById('BDE').value;
	var text14 = document.getElementById('BDF').value;
	var text15 = document.getElementById('BDG').value;
	var text16 = document.getElementById('BDH').value;
	var text17 = document.getElementById('BDI').value;
	var text18 = document.getElementById('BDJ').value;

	var text19 = document.getElementById('BEA').value;
	var text20 = document.getElementById('BEB').value;
	var text21 = document.getElementById('BEC').value;
	var text22 = document.getElementById('BED').value;
	var text23 = document.getElementById('BEE').value;

	var text24 = document.getElementById('BEF').value;
	var text25 = document.getElementById('BFA').value;
	var text26 = document.getElementById('BFB').value;
	var text27 = document.getElementById('BFC').value;
	var text28 = document.getElementById('BFD').value;

	var text29 = document.getElementById('BFE').value;
	var text30 = document.getElementById('BFF').value;
	var text31 = document.getElementById('BFG').value;
	var text32 = document.getElementById('BFH').value;
	var text33 = document.getElementById('BFI').value;

	var text34 = document.getElementById('BFJ').value;
	


	document.getElementById('atividade3correcao1parte1').innerHTML = "Been";
	document.getElementById('atividade3correcao1parte2').innerHTML = "wordering";
	document.getElementById('atividade3correcao1parte3').innerHTML = "if";
	document.getElementById('atividade3correcao1parte4').innerHTML = "your";
	document.getElementById('atividade3correcao1parte5').innerHTML = "heart'";
	document.getElementById('atividade3correcao1parte6').innerHTML = "s";
	document.getElementById('atividade3correcao1parte7').innerHTML = "still";
	document.getElementById('atividade3correcao1parte8').innerHTML = "open";
	document.getElementById('atividade3correcao1parte9').innerHTML = "And";
	document.getElementById('atividade3correcao1parte10').innerHTML = "if";
	document.getElementById('atividade3correcao1parte11').innerHTML = "so, ";
	document.getElementById('atividade3correcao1parte12').innerHTML = "I";
	document.getElementById('atividade3correcao1parte13').innerHTML = "wanna";
	document.getElementById('atividade3correcao1parte14').innerHTML = "know";
	document.getElementById('atividade3correcao1parte15').innerHTML = "what";
	document.getElementById('atividade3correcao1parte16').innerHTML = "time";
	document.getElementById('atividade3correcao1parte17').innerHTML = "it";
	document.getElementById('atividade3correcao1parte18').innerHTML = "shuts";

	document.getElementById('atividade3correcao2parte1').innerHTML = "That";
	document.getElementById('atividade3correcao2parte2').innerHTML = "the";
	document.getElementById('atividade3correcao2parte3').innerHTML = "nights";
	document.getElementById('atividade3correcao2parte4').innerHTML = "were";
	document.getElementById('atividade3correcao2parte5').innerHTML = "mainly";
	document.getElementById('atividade3correcao2parte6').innerHTML = "made";
	document.getElementById('atividade3correcao2parte7').innerHTML = "For";
	document.getElementById('atividade3correcao2parte8').innerHTML = "saying";
	document.getElementById('atividade3correcao2parte9').innerHTML = "thing";
	document.getElementById('atividade3correcao2parte10').innerHTML = "that";
	document.getElementById('atividade3correcao2parte11').innerHTML = "you";
	document.getElementById('atividade3correcao2parte12').innerHTML = "can";
	document.getElementById('atividade3correcao2parte13').innerHTML = "'t";
	document.getElementById('atividade3correcao2parte14').innerHTML = "say";
	document.getElementById('atividade3correcao2parte15').innerHTML = "tomorrow";
	document.getElementById('atividade3correcao2parte16').innerHTML = "day";


console.log(text1);
console.log(text10);
console.log(text18);
console.log(text21);
console.log(text30);
console.log(text34);

		if (text1 === "Been"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "wondering"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "if"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "tyour"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		if (text5 === "heart"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "s"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}

		///////////////////////
		if (text7 === "still"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "open"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		if (text9 === "And"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "if"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}

		///////////////////////
		if (text11 === "so"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "I"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		if (text13 === "wanna"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}
		///////////////////////
		if (text14 === "know"){
			document.getElementById('atividade3correcao1parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte14').style.color = "red";
		}

		///////////////////////
		if (text15 === "what"){
			document.getElementById('atividade3correcao1parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte15').style.color = "red";
		}
		///////////////////////
		if (text16 === "time"){
			document.getElementById('atividade3correcao1parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte16').style.color = "red";
		}
		if (text17 === "it"){
			document.getElementById('atividade3correcao1parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte17').style.color = "red";
		}
		///////////////////////
		if (text18 === "shuts"){
			document.getElementById('atividade3correcao1parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte18').style.color = "red";
		}
		/////////////////////////////////////////////////////////////////////////////

		if (text19 === "That"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text20 === "the"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}

		///////////////////////
		if (text21 === "nights"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text22 === "were"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		if (text23 === "mainly"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text24 === "made"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}

		///////////////////////
		if (text25 === "For"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text26 === "saying"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		if (text27 === "things"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text28 === "that"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}

		///////////////////////
		if (text29 === "you"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		///////////////////////
		if (text30 === "can"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		if (text31 === "t"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		///////////////////////
		if (text32 === "say"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}

		///////////////////////
		if (text33 === "tomorrow"){
			document.getElementById('atividade3correcao2parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte15').style.color = "red";
		}
		///////////////////////
		if (text34 === "day"){
			document.getElementById('atividade3correcao2parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte16').style.color = "red";
		}
		

		document.getElementById('btnActivity3').style.display="none";
		
}

function score(){
	document.getElementById('btnCheckResults').style.display="none";
	if(total >= 19){
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

function audio4() {
        var audio = document.getElementById('audio4');
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

function audio5() {
        var audio = document.getElementById('audio5');
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