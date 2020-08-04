var total = 0;

function activity1(){
	var activities = document.getElementsByName('Activity1question1');
	for (var i = 0; i < activities.length; i++){
		if ( activities[i].checked ) {
			if(activities[i].value == "A"){
				var text = document.getElementById('AAA');
				text.style.color="green";
				total = total + 1;
			}else if (activities[i].value == "B"){
				var text = document.getElementById('AAB');
				text.style.color="red";
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
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ABB');
				text.style.color="red";	
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ABC');
				text.style.color="green";
				total = total + 1;
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
				text.style.color="green";
				total = total + 1;			
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ACC');
				text.style.color="red";
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
	var text2 = document.getElementById('BAB').value;
	var text3 = document.getElementById('BAC').value;
	var text4 = document.getElementById('BBA').value;
	var text5 = document.getElementById('BBB').value;
	var text6 = document.getElementById('BBC').value;
	var text7 = document.getElementById('BBD').value;
	var text8 = document.getElementById('BBE').value;
	var text9 = document.getElementById('BBF').value;
	var text10 = document.getElementById('BBG').value;
	var text11 = document.getElementById('BBH').value;
	var text12 = document.getElementById('BCA').value;
	var text13 = document.getElementById('BCB').value;
	var text14 = document.getElementById('BCC').value;
	var text15 = document.getElementById('BCD').value;
	var text16 = document.getElementById('BCE').value;
	var text17 = document.getElementById('BCF').value;
	var text18 = document.getElementById('BCG').value;
	var text19 = document.getElementById('BCH').value;
	
	document.getElementById('atividade2correcao1parte1').innerHTML = "There's a fine";
	document.getElementById('atividade2correcao1parte2').innerHTML = "line";
	document.getElementById('atividade2correcao1parte3').innerHTML = "between bravery and stupidity.";

	document.getElementById('atividade2correcao2parte1').innerHTML = "I";
	document.getElementById('atividade2correcao2parte2').innerHTML = "may";
	document.getElementById('atividade2correcao2parte3').innerHTML = "have";
	document.getElementById('atividade2correcao2parte4').innerHTML = "lost";
	document.getElementById('atividade2correcao2parte5').innerHTML = "face";
	document.getElementById('atividade2correcao2parte6').innerHTML = "but";
	document.getElementById('atividade2correcao2parte7').innerHTML = "I haven't lost";
	document.getElementById('atividade2correcao2parte8').innerHTML = "heart.";

	document.getElementById('atividade2correcao3parte1').innerHTML = "To";
	document.getElementById('atividade2correcao3parte2').innerHTML = "die";
	document.getElementById('atividade2correcao3parte3').innerHTML = "at";
	document.getElementById('atividade2correcao3parte4').innerHTML = "my";
	document.getElementById('atividade2correcao3parte5').innerHTML = "hand";
	document.getElementById('atividade2correcao3parte6').innerHTML = "is";
	document.getElementById('atividade2correcao3parte7').innerHTML = "an";
	document.getElementById('atividade2correcao3parte8').innerHTML = "honor.";


			
		if (text1 === "fine"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "line"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "between"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}

		///////////////////////
		if (text4 === "I"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text5 === "may"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		//////////////////////
		if (text6 === "have"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text7 === "lost"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text8=== "face"){
			document.getElementById('atividade2correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text9 === "but"){
			document.getElementById('atividade2correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text10 === "I"){
			document.getElementById('atividade2correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text11 === "lost"){
			document.getElementById('atividade2correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text12 === "To"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text13 === "die"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		//////////////////////
		if (text14 === "at"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text15 === "my"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text16=== "hand"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
		}
		///////////////////////
		if (text17 === "is"){
			document.getElementById('atividade2correcao3parte6').style.color = "green";
			total = total + 1;2
		}else{
			document.getElementById('atividade2correcao3parte6').style.color = "red";
		}
		///////////////////////
		if (text18 === "an"){
			document.getElementById('atividade2correcao3parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte7').style.color = "red";
		}
		///////////////////////
		if (text19 === "honor"){
			document.getElementById('atividade2correcao3parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte8').style.color = "red";
		}

		document.getElementById('btnActivity2').style.display="none";
		
}

function activity3(){	
	var text1 = document.getElementById('CAA').value;
	var text2 = document.getElementById('CBA').value;
	var text3 = document.getElementById('CCA').value;
	var text4 = document.getElementById('CCA').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Dragon Knight is a dragon-slayer.";

	document.getElementById('atividade3correcao2parte1').innerHTML = " Eldwurm was looking like weak.";

	document.getElementById('atividade3correcao3parte1').innerHTML = " What did";
	document.getElementById('atividade3correcao3parte2').innerHTML = "Eldwurm do?";

		if (text1 === "is"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "was"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "did"){
			document.getElementById('atividade3correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "do"){
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