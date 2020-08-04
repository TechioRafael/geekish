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
				text.style.color="red";s
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
				text.style.color="red";	
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ABC');
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ABD');
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
	var text8 = document.getElementById('BBD').value;
	var text9 = document.getElementById('BCA').value;
	var text10 = document.getElementById('BCB').value;
	var text11 = document.getElementById('BCC').value;
	var text12 = document.getElementById('BCD').value;
	var text13 = document.getElementById('BCE').value;
	var text14 = document.getElementById('BCF').value;
	var text15 = document.getElementById('BCG').value;

	
	document.getElementById('atividade2correcao1parte1').innerHTML = "Amazing every word of which";
	document.getElementById('atividade2correcao1parte2').innerHTML = "you just";
	document.getElementById('atividade2correcao1parte3').innerHTML = "said is";
	document.getElementById('atividade2correcao1parte4').innerHTML = "wrong";

	document.getElementById('atividade2correcao2parte1').innerHTML = "He ignites it and";
	document.getElementById('atividade2correcao2parte2').innerHTML = "kills his";
	document.getElementById('atividade2correcao2parte3').innerHTML = "true";
	document.getElementById('atividade2correcao2parte4').innerHTML = "enemy";


	document.getElementById('atividade2correcao3parte1').innerHTML = "I";
	document.getElementById('atividade2correcao3parte2').innerHTML = "will";
	document.getElementById('atividade2correcao3parte3').innerHTML = "not";
	document.getElementById('atividade2correcao3parte4').innerHTML = "be";
	document.getElementById('atividade2correcao3parte5').innerHTML = "the";
	document.getElementById('atividade2correcao3parte6').innerHTML = "last";
	document.getElementById('atividade2correcao3parte7').innerHTML = "jedi";
	
			
		if (text1 === "every"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "you"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "said"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "wrong"){
			document.getElementById('atividade2correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte4').style.color = "red";
		}
		//////////////////////
		if (text5 === "ignites"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "kills"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text7 === "true"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text8 === "enemy"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text9 === "I"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text10 === "will"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text11 === "not"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text12 === "be"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text13 === "the"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
		}
		///////////////////////
		if (text14 === "last"){
			document.getElementById('atividade2correcao3parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte6').style.color = "red";
		}
		///////////////////////
		if (text15 === "jedi"){
			document.getElementById('atividade2correcao3parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte7').style.color = "red";
		}
		

		document.getElementById('btnActivity2').style.display="none";
		
}

function activity3(){	
	var text1 = document.getElementById('CAA').value;
	var text2 = document.getElementById('CBA').value;
	var text3 = document.getElementById('CCA').value;
	var text4 = document.getElementById('CCB').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Kylo Ren was trained by Luke Skywalker.";

	document.getElementById('atividade3correcao2parte1').innerHTML = "Kylo is the son of Leia and Han Solo.";

	document.getElementById('atividade3correcao3parte1').innerHTML = "Kylo has been seduced, and wanted to be strong";
	document.getElementById('atividade3correcao3parte2').innerHTML = "as your grandfather.";

		if (text1 === "was"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "is"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "has"){
			document.getElementById('atividade3correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "as"){
			document.getElementById('atividade3correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte2').style.color = "red";
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