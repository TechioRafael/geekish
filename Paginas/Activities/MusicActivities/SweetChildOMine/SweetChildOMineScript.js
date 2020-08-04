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
				text.style.color="green";
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

	var text2 = document.getElementById('BBA').value;
	var text3 = document.getElementById('BBB').value;
	var text4 = document.getElementById('BBC').value;

	var text5 = document.getElementById('BCA').value;
	var text6 = document.getElementById('BCB').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "got";

	document.getElementById('atividade2correcao2parte1').innerHTML = "stare";
	document.getElementById('atividade2correcao2parte2').innerHTML = "'d";
	document.getElementById('atividade2correcao2parte3').innerHTML = "break";

	document.getElementById('atividade2correcao3parte1').innerHTML = "reminds";
	document.getElementById('atividade2correcao3parte2').innerHTML = "'d";

		if (text1 === "got"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}

//========================================================================================================

		if (text2 === "stare"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		if (text3 === "'d"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text4 === "break"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}

//========================================================================================================

		///////////////////////
		if (text5 === "reminds"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "'d"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
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
	var text13 = document.getElementById('CAM').value;

	var text14 = document.getElementById('CBA').value;
	var text15 = document.getElementById('CBB').value;
	var text16 = document.getElementById('CBC').value;
	var text17 = document.getElementById('CBD').value;
	var text18 = document.getElementById('CBE').value;
	var text19 = document.getElementById('CBF').value;
	var text20 = document.getElementById('CBG').value;
	var text21 = document.getElementById('CBH').value;
	var text22 = document.getElementById('CBI').value;
	var text23 = document.getElementById('CBJ').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Now";
	document.getElementById('atividade3correcao1parte2').innerHTML = "and";
	document.getElementById('atividade3correcao1parte3').innerHTML = "then";
	document.getElementById('atividade3correcao1parte4').innerHTML = "when";
	document.getElementById('atividade3correcao1parte5').innerHTML = "I see";
	document.getElementById('atividade3correcao1parte6').innerHTML = "her";
	document.getElementById('atividade3correcao1parte7').innerHTML = "face";
	document.getElementById('atividade3correcao1parte8').innerHTML = "She";
	document.getElementById('atividade3correcao1parte9').innerHTML = "takes me";
	document.getElementById('atividade3correcao1parte10').innerHTML = "away to";
	document.getElementById('atividade3correcao1parte11').innerHTML = "that";
	document.getElementById('atividade3correcao1parte12').innerHTML = "special";
	document.getElementById('atividade3correcao1parte13').innerHTML = "place";

	document.getElementById('atividade3correcao2parte1').innerHTML = "I";
	document.getElementById('atividade3correcao2parte2').innerHTML = "hate to";
	document.getElementById('atividade3correcao2parte3').innerHTML = "look";
	document.getElementById('atividade3correcao2parte4').innerHTML = "into";
	document.getElementById('atividade3correcao2parte5').innerHTML = "those";
	document.getElementById('atividade3correcao2parte6').innerHTML = "eyes";
	document.getElementById('atividade3correcao2parte7').innerHTML = "And";
	document.getElementById('atividade3correcao2parte8').innerHTML = "see an";
	document.getElementById('atividade3correcao2parte9').innerHTML = "ounce";
	document.getElementById('atividade3correcao2parte10').innerHTML = "of pain";

			
		if (text1 === "Now"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "and"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "then"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "when"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		///////////////////////
		if (text5 === "I see"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		//////////////////////
		if (text6 === "her"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "face"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "She"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		///////////////////////
		if (text9 === "takes me"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "away to"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}
		///////////////////////
		if (text11 === "that"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "special"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		///////////////////////
		if (text13 === "place"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}
	
//=================================================================================================

		if (text14 === "I"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text15 === "hate to"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text16 === "look"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text17 === "into"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text18 === "those"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text19 === "eyes"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text20 === "And"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text21 === "see an"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		if (text22 === "ounce"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		if (text23 === "of pain"){
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