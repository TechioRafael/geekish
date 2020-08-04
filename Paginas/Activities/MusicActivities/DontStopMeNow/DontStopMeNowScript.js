var total = 0;

function activity1(){
	var activities = document.getElementsByName('Activity1question1');
	for (var i = 0; i < activities.length; i++){
		if ( activities[i].checked ) {
			if(activities[i].value == "A"){
				var text = document.getElementById('AAA');
				text.style.color="green";
			}else if (activities[i].value == "B"){
				var text = document.getElementById('AAB');
				text.style.color="red";
				total = total + 1;
			}else if (activities[i].value == "C") {
				var text = document.getElementById('AAC');
				text.style.color="red";
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
				total = total + 1;
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ABB');
				text.style.color="red";	
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ABC');
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ABD');
				text.style.color="green";
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
				text.style.color="green";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ACD');
				text.style.color="red";
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

	var text4 = document.getElementById('BBA').value;
	var text5 = document.getElementById('BBB').value;
	var text6 = document.getElementById('BBC').value;
	var text7 = document.getElementById('BBD').value;

	var text8 = document.getElementById('BCA').value;
	var text9 = document.getElementById('BCB').value;
	var text10 = document.getElementById('BCC').value;
	var text11 = document.getElementById('BCD').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "Tonight I'm";
	document.getElementById('atividade2correcao1parte2').innerHTML = "gonna have myself a real good time";
	document.getElementById('atividade2correcao1parte3').innerHTML = "And the world, I'll turn it inside out, yeah!";

	document.getElementById('atividade2correcao2parte1').innerHTML = "I'm a shooting star";
	document.getElementById('atividade2correcao2parte2').innerHTML = "leaping through the sky";
	document.getElementById('atividade2correcao2parte3').innerHTML = "I'm";
	document.getElementById('atividade2correcao2parte4').innerHTML = "gonna go, go, go";

	document.getElementById('atividade2correcao3parte1').innerHTML = "If you wanna have a good time, just give me a call";
	document.getElementById('atividade2correcao3parte2').innerHTML = "Don't stop me now ('cause I'm havin' a good time)";
	document.getElementById('atividade2correcao3parte3').innerHTML = "Don't stop me now (yes, I'm havin' a good time)";
	document.getElementById('atividade2correcao3parte4').innerHTML = "I don't wanna stop at all";

//	If you wanna have a good time, just give me a call
//Don't stop me now ('cause I'm havin' a good time)
//Don't stop me now (yes, I'm havin' a good time)
//I don't wanna stop at all


		if (text1 === "'m"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		if (text2 === "gonna"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}
		if (text3 === "'ll"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}


		///////////////////////


		if (text4 === "'m"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text5 === "leaping"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text6 === "'m"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text7 === "gonna"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}

		///////////////////////


		if (text8 === "wanna"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text9 === "Don't"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text10 === "Don't"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text11 === "don't"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}

		document.getElementById('btnActivity2').style.display="none";
		
}


function activity3(){	
	var text1 = document.getElementById('CAA').value;
	var text2 = document.getElementById('CAB').value;
	var text3 = document.getElementById('CAC').value;
	var text4 = document.getElementById('CAD').value;
	var text5 = document.getElementById('CAE').value;
	var text6 = document.getElementById('CAF').value;
	var text7 = document.getElementById('CAG').value;
	var text8 = document.getElementById('CAH').value;
	var text9 = document.getElementById('CAI').value;
	var text10 = document.getElementById('CAJ').value;	
	var text11 = document.getElementById('CAK').value;

	var text12 = document.getElementById('CBA').value;
	var text13 = document.getElementById('CBB').value;
	var text14 = document.getElementById('CBC').value;
	var text15 = document.getElementById('CBD').value;
	var text16 = document.getElementById('CBE').value;
	var text17 = document.getElementById('CBF').value;
	var text18 = document.getElementById('CBG').value;
	var text19 = document.getElementById('CBH').value;
	var text20 = document.getElementById('CBI').value;
	var text21 = document.getElementById('CBJ').value;


	document.getElementById('atividade3correcao1parte1').innerHTML = "I'm";
	document.getElementById('atividade3correcao1parte2').innerHTML = "burning";
	document.getElementById('atividade3correcao1parte3').innerHTML = "through";
	document.getElementById('atividade3correcao1parte4').innerHTML = "the sky";
	document.getElementById('atividade3correcao1parte5').innerHTML = "yeah!";
	document.getElementById('atividade3correcao1parte6').innerHTML = "Two hundred";
	document.getElementById('atividade3correcao1parte7').innerHTML = "degrees";
	document.getElementById('atividade3correcao1parte8').innerHTML = "That's why";
	document.getElementById('atividade3correcao1parte9').innerHTML = "they";
	document.getElementById('atividade3correcao1parte10').innerHTML = "call me";
	document.getElementById('atividade3correcao1parte11').innerHTML = "Mister Fahrenheit";

	document.getElementById('atividade3correcao2parte1').innerHTML = "I'm";
	document.getElementById('atividade3correcao2parte2').innerHTML = "travelling";
	document.getElementById('atividade3correcao2parte3').innerHTML = "at speed";
	document.getElementById('atividade3correcao2parte4').innerHTML = "of light";
	document.getElementById('atividade3correcao2parte5').innerHTML = "I";
	document.getElementById('atividade3correcao2parte6').innerHTML = "wanna";
	document.getElementById('atividade3correcao2parte7').innerHTML = "make a";
	document.getElementById('atividade3correcao2parte8').innerHTML = "supersonic man";
	document.getElementById('atividade3correcao2parte9').innerHTML = "out";
	document.getElementById('atividade3correcao2parte10').innerHTML = "of you";

			
		if (text1 === "I'm"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "burning"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "through"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "the sky"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		///////////////////////
		if (text5 === "yeah!"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		//////////////////////
		if (text6 === "Two hundred"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "degrees"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "That's why"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		///////////////////////
		if (text9 === "they"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "call me"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}
		///////////////////////
		if (text11 === "Mister Fahrenheit"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////


//=================================================================================================


		///////////////////////
		if (text12 === "I'm"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text13 === "travelling"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text14 === "at speed"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text15 === "of light"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text16 === "I"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text17 === "wanna"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text18 === "make a"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text19 === "supersonic man"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text20 === "out"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text21 === "of you"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		
		document.getElementById('btnActivity3').style.display="none";
		
}



function score(){
	document.getElementById('btnCheckResults').style.display="none";
	if(total >= 10){
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