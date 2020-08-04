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
				total = total + 1;
			}else if (activities[i].value == "C") {
				var text = document.getElementById('AAC');
				text.style.color="green";
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
				text.style.color="green";	
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
				text.style.color="green";	
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ACB');
				text.style.color="red";		
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ACC');
				text.style.color="red";
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

	var text6 = document.getElementById('BCA').value;
	var text7 = document.getElementById('BCB').value;
	var text8 = document.getElementById('BCC').value;
	var text9 = document.getElementById('BCD').value;
	var text10 = document.getElementById('BCE').value;


	document.getElementById('atividade2correcao1parte1').innerHTML = "Don't go look at me with that look in your eye";
	document.getElementById('atividade2correcao1parte2').innerHTML = "You really ain't";
	document.getElementById('atividade2correcao1parte2').innerHTML = "going away without a fight";

	document.getElementById('atividade2correcao2parte1').innerHTML = "Haven't I made it obvious?";
	document.getElementById('atividade2correcao2parte2').innerHTML = "Haven't I made it clear?";

	document.getElementById('atividade2correcao3parte1').innerHTML = "Don't mess it up,";
	document.getElementById('atividade2correcao3parte2').innerHTML = "talking that shit";
	document.getElementById('atividade2correcao3parte3').innerHTML = "Have you";
	document.getElementById('atividade2correcao3parte4').innerHTML = "got no shame?";
	document.getElementById('atividade2correcao3parte5').innerHTML = "You looking insane";


		if (text1 === "Don't"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		if (text2 === "ain't"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}
		if (text3 === "going"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}


		///////////////////////


		if (text4 === "Haven't"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text5 === "Haven't"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}


		///////////////////////
		


		if (text6 === "Don't"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text7 === "talking"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text8 === "Have"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text9 === "got"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text10 === "looking"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
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
	var text12 = document.getElementById('CAL').value;

	var text13 = document.getElementById('CBA').value;
	var text14 = document.getElementById('CBB').value;
	var text15 = document.getElementById('CBC').value;
	var text16 = document.getElementById('CBD').value;
	var text17 = document.getElementById('CBE').value;
	var text18 = document.getElementById('CBF').value;
	var text19 = document.getElementById('CBG').value;
	var text20 = document.getElementById('CBH').value;
	var text21 = document.getElementById('CBI').value;
	var text22 = document.getElementById('CBJ').value;
	var text23 = document.getElementById('CBK').value;
	var text24 = document.getElementById('CBL').value;
	var text25 = document.getElementById('CBM').value;
	var text26 = document.getElementById('CBN').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "You";
	document.getElementById('atividade3correcao1parte2').innerHTML = "say";
	document.getElementById('atividade3correcao1parte3').innerHTML = "you";
	document.getElementById('atividade3correcao1parte4').innerHTML = "love me";
	document.getElementById('atividade3correcao1parte5').innerHTML = "I";
	document.getElementById('atividade3correcao1parte6').innerHTML = "say";
	document.getElementById('atividade3correcao1parte7').innerHTML = "you're crazy";
	document.getElementById('atividade3correcao1parte8').innerHTML = "We're";
	document.getElementById('atividade3correcao1parte9').innerHTML = "nothing";
	document.getElementById('atividade3correcao1parte10').innerHTML = "more";
	document.getElementById('atividade3correcao1parte11').innerHTML = "than";
	document.getElementById('atividade3correcao1parte12').innerHTML = "friends";

	document.getElementById('atividade3correcao2parte1').innerHTML = "You";
	document.getElementById('atividade3correcao2parte2').innerHTML = "can't be";
	document.getElementById('atividade3correcao2parte3').innerHTML = "reasoned";
	document.getElementById('atividade3correcao2parte4').innerHTML = "I'm done";
	document.getElementById('atividade3correcao2parte5').innerHTML = "being";
	document.getElementById('atividade3correcao2parte6').innerHTML = "polite";
	document.getElementById('atividade3correcao2parte7').innerHTML = "I've";
	document.getElementById('atividade3correcao2parte8').innerHTML = "told you";
	document.getElementById('atividade3correcao2parte9').innerHTML = "one";
	document.getElementById('atividade3correcao2parte10').innerHTML = "two";
	document.getElementById('atividade3correcao2parte11').innerHTML = "three";
	document.getElementById('atividade3correcao2parte12').innerHTML = "four";
	document.getElementById('atividade3correcao2parte13').innerHTML = "five";
	document.getElementById('atividade3correcao2parte14').innerHTML = "six thousand times";

			
		if (text1 === "You"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "say"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "you"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "love me"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		///////////////////////
		if (text5 === "I"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		//////////////////////
		if (text6 === "say"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "you're crazy"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "We're"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		///////////////////////
		if (text9 === "nothing"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "more"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}
		///////////////////////
		if (text11 === "than"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "friends"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}


//=================================================================================================


		if (text13 === "You"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text14 === "can't be"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text15 === "reasoned"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text16 === "I'm done"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text17 === "being"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text18 === "polite"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text19 === "I've"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text20 === "told you"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text21 === "one"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text22 === "two"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		///////////////////////
		if (text23 === "three"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		///////////////////////
		if (text24 === "four"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		///////////////////////
		if (text25 === "five"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		///////////////////////
		if (text26 === "six thousand times"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
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