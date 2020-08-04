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
	var activities = document.getElementsByName('Activity1question3');
	for (var i = 0; i < activities.length; i++){
		if (activities[i].checked){
			if(activities[i].value == "A"){
				var text = document.getElementById('ACA');
				text.style.color="green";
				total = total + 1;	
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ACB');
				text.style.color="red";		
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

	document.getElementById('atividade2correcao1parte1').innerHTML = "Faster";
	document.getElementById('atividade2correcao1parte2').innerHTML = "than my";
	document.getElementById('atividade2correcao1parte3').innerHTML = "arrows?";
	document.getElementById('atividade2correcao1parte4').innerHTML = "I think not.";

	document.getElementById('atividade2correcao2parte1').innerHTML = "All";
	document.getElementById('atividade2correcao2parte2').innerHTML = "the";
	document.getElementById('atividade2correcao2parte3').innerHTML = "world";
	document.getElementById('atividade2correcao2parte4').innerHTML = "on one arrow.";
	

	document.getElementById('atividade2correcao3parte1').innerHTML = "Do";
	document.getElementById('atividade2correcao3parte2').innerHTML = "not";
	document.getElementById('atividade2correcao3parte3').innerHTML = "confuse";
	document.getElementById('atividade2correcao3parte4').innerHTML = "mercy";
	document.getElementById('atividade2correcao3parte5').innerHTML = "for";
	document.getElementById('atividade2correcao3parte6').innerHTML = "weekness.";


			
		if (text1 === "Faster"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "my"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "arrows"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "I"){
			document.getElementById('atividade2correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte4').style.color = "red";
		}

		///////////////////////
		if (text5 === "All"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "the"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		//////////////////////
		if (text7 === "world"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text8 === "arrow"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text9=== "Do"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text10 === "not"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text11 === "confuse"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text12 === "mercy"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text13 === "for"){
			document.getElementById('atividade2correcao3parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte5').style.color = "red";
		}
		///////////////////////
		if (text14 === "week"){
			document.getElementById('atividade2correcao3parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte6').style.color = "red";
		}
		///////////////////////

		document.getElementById('btnActivity2').style.display="none";
		
}

function activity3(){	
	var text1 = document.getElementById('CAA').value;
	var text2 = document.getElementById('CBA').value;
	var text3 = document.getElementById('CCA').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Yasuo is a stronger warrior.";

	document.getElementById('atividade3correcao2parte1').innerHTML = "Yasuo did an attack with his sword.";

	document.getElementById('atividade3correcao3parte1').innerHTML = "The winds are controlated by the Yasuo's sword.";

		if (text1 === "is"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "did"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "are"){
			document.getElementById('atividade3correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte1').style.color = "red";
		}
		//////////////////////

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