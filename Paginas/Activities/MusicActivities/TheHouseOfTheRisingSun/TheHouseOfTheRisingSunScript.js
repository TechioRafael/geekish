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
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('AAD');
				text.style.color="green";
				total = total + 1;
			}
		}
	}
	var activities = document.getElementsByName('Activity1question2');
	for (var i = 0; i < activities.length; i++){
		if ( activities[i].checked ) {
			if(activities[i].value == "A"){
				var text = document.getElementById('ABA');
				text.style.color="green";
				total = total + 1;
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ABB');
				text.style.color="red";
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
				text.style.color="green";
				total = total + 1;
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ACD');
				text.style.color="red";
			}
		}
	}
	document.getElementById('btnActivity1').style.display="none";
}

function activity2(){	

	var text1 = document.getElementById('BAA').value;
	var text2 = document.getElementById('BBA').value;
	var text3 = document.getElementById('BBB').value;
	var text4 = document.getElementById('BCA').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "'ll";

	document.getElementById('atividade2correcao2parte1').innerHTML = "'ve";
	document.getElementById('atividade2correcao2parte2').innerHTML = "got";

	document.getElementById('atividade2correcao3parte1').innerHTML = "been";
			
		if (text1 === "ll"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "ve"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "got"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text4 === "been"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
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
	var text8 = document.getElementById('BDA').value;
	var text9 = document.getElementById('BDB').value;
	var text10 = document.getElementById('BDC').value;
	var text11 = document.getElementById('BDD').value;
	var text12 = document.getElementById('BDE').value;
	var text13 = document.getElementById('BDF').value;


	var text14 = document.getElementById('BEA').value;
	var text15 = document.getElementById('BEB').value;
	var text16 = document.getElementById('BEC').value;
	var text17 = document.getElementById('BED').value;
	var text18 = document.getElementById('BEE').value;
	var text19 = document.getElementById('BEF').value;
	var text20 = document.getElementById('BEG').value;
	var text21 = document.getElementById('BFA').value;
	var text22 = document.getElementById('BFB').value;
	var text23 = document.getElementById('BFC').value;
	var text24 = document.getElementById('BFD').value;
	var text25 = document.getElementById('BFE').value;
	var text26 = document.getElementById('BFF').value;
	var text27 = document.getElementById('BFG').value;
	


	document.getElementById('atividade3correcao1parte1').innerHTML = "I";
	document.getElementById('atividade3correcao1parte2').innerHTML = "am";
	document.getElementById('atividade3correcao1parte3').innerHTML = "going";
	document.getElementById('atividade3correcao1parte4').innerHTML = "Back";
	document.getElementById('atividade3correcao1parte5').innerHTML = "to'";
	document.getElementById('atividade3correcao1parte6').innerHTML = "new";
	document.getElementById('atividade3correcao1parte7').innerHTML = "orleans";
	document.getElementById('atividade3correcao1parte8').innerHTML = "To";
	document.getElementById('atividade3correcao1parte9').innerHTML = "wear";
	document.getElementById('atividade3correcao1parte10').innerHTML = "that";
	document.getElementById('atividade3correcao1parte11').innerHTML = "ball";
	document.getElementById('atividade3correcao1parte12').innerHTML = "and";
	document.getElementById('atividade3correcao1parte13').innerHTML = "chain";
	

	document.getElementById('atividade3correcao2parte1').innerHTML = "Spend";
	document.getElementById('atividade3correcao2parte2').innerHTML = "your";
	document.getElementById('atividade3correcao2parte3').innerHTML = "lives";
	document.getElementById('atividade3correcao2parte4').innerHTML = "in";
	document.getElementById('atividade3correcao2parte5').innerHTML = "sin";
	document.getElementById('atividade3correcao2parte6').innerHTML = "and";
	document.getElementById('atividade3correcao2parte7').innerHTML = "misery";
	document.getElementById('atividade3correcao2parte8').innerHTML = "In";
	document.getElementById('atividade3correcao2parte9').innerHTML = "the";
	document.getElementById('atividade3correcao2parte10').innerHTML = "house";
	document.getElementById('atividade3correcao2parte11').innerHTML = "of";
	document.getElementById('atividade3correcao2parte12').innerHTML = "the";
	document.getElementById('atividade3correcao2parte13').innerHTML = "rising";
	document.getElementById('atividade3correcao2parte14').innerHTML = "sun";

		if (text1 === "I"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "am"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "going"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "Back"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		if (text5 === "to"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "new"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}

		///////////////////////
		if (text7 === "orleans"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "To"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		if (text9 === "wear"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "that"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}

		///////////////////////
		if (text11 === "ball"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "and"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		if (text13 === "chain"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}

		///////////////////////
		///////////////////////
		if (text14 === "Spend"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text15 === "your"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text16 === "lives"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		if (text17 === "in"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text18 === "sin"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		/////////////////////////////////////////////////////////////////////////////

		if (text19 === "and"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text20 === "misery"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}

		///////////////////////
		if (text21 === "In"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text22 === "the"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		if (text23 === "house"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		///////////////////////
		if (text24 === "of"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}

		///////////////////////
		if (text25 === "the"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		///////////////////////
		if (text26 === "rising"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		if (text27 === "sun"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}

		document.getElementById('btnActivity3').style.display="none";
		
}

function score(){
	document.getElementById('btnCheckResults').style.display="none";
	if(total >= 16){
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