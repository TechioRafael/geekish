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

	var text3 = document.getElementById('BBA').value;
	var text4 = document.getElementById('BBB').value;

	var text5 = document.getElementById('BCA').value;
	var text6 = document.getElementById('BCB').value;
	var text7 = document.getElementById('BCC').value;
	var text8 = document.getElementById('BCD').value;
	var text9 = document.getElementById('BCE').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "When I leave don't save my seat";
	document.getElementById('atividade2correcao1parte2').innerHTML = "I'll be back when it's all complete";

	document.getElementById('atividade2correcao2parte1').innerHTML = "I've";
	document.getElementById('atividade2correcao2parte2').innerHTML = "been tested like the end of";

	document.getElementById('atividade2correcao3parte1').innerHTML = "Lovin' what I'm";
	document.getElementById('atividade2correcao3parte2').innerHTML = "tastin'";
	document.getElementById('atividade2correcao3parte3').innerHTML = "I'm";
	document.getElementById('atividade2correcao3parte4').innerHTML = "runnin' for my life";
	document.getElementById('atividade2correcao3parte5').innerHTML = "runnin' for my life";

		if (text1 === "don't"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "'ll"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}


		///////////////////////
		

		if (text3 === "'ve"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "been"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}


		///////////////////////
		

		if (text5 === "'m"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "tastin'"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text7 === "'m"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text8 === "runnin'"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
		}
		///////////////////////
		if (text9 === "Runnin'"){
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
	var text13 = document.getElementById('CAM').value;
	var text14 = document.getElementById('CAN').value;
	var text15 = document.getElementById('CAO').value;
	var text16 = document.getElementById('CAP').value;
	var text17 = document.getElementById('CAQ').value;
	var text18 = document.getElementById('CAR').value;
	var text19 = document.getElementById('CAS').value;

	var text20 = document.getElementById('CBA').value;
	var text21 = document.getElementById('CBB').value;
	var text22 = document.getElementById('CBC').value;
	var text23 = document.getElementById('CBD').value;
	var text24 = document.getElementById('CBE').value;
	var text25 = document.getElementById('CBF').value;
	var text26 = document.getElementById('CBG').value;
	var text27 = document.getElementById('CBH').value;
	var text28 = document.getElementById('CBI').value;
	var text29 = document.getElementById('CBJ').value;
	var text30 = document.getElementById('CBK').value;
	var text31 = document.getElementById('CBL').value;
	var text32 = document.getElementById('CBM').value;
	var text33 = document.getElementById('CBN').value;
	var text34 = document.getElementById('CBO').value;
	var text35 = document.getElementById('CBP').value;
	var text36 = document.getElementById('CBQ').value;
	var text37 = document.getElementById('CBR').value;
	var text38 = document.getElementById('CBS').value;
	var text39 = document.getElementById('CBT').value;
	var text40 = document.getElementById('CBU').value;


	document.getElementById('atividade3correcao1parte1').innerHTML = "Fall";
	document.getElementById('atividade3correcao1parte2').innerHTML = "out";
	document.getElementById('atividade3correcao1parte3').innerHTML = "of";
	document.getElementById('atividade3correcao1parte4').innerHTML = "formation";
	document.getElementById('atividade3correcao1parte5').innerHTML = "I";
	document.getElementById('atividade3correcao1parte6').innerHTML = "plan";
	document.getElementById('atividade3correcao1parte7').innerHTML = "my";
	document.getElementById('atividade3correcao1parte8').innerHTML = "escape";
	document.getElementById('atividade3correcao1parte9').innerHTML = "From";
	document.getElementById('atividade3correcao1parte10').innerHTML = "walls";
	document.getElementById('atividade3correcao1parte11').innerHTML = "they";
	document.getElementById('atividade3correcao1parte12').innerHTML = "confined";
	document.getElementById('atividade3correcao1parte13').innerHTML = "Rebel";
	document.getElementById('atividade3correcao1parte14').innerHTML = "red";
	document.getElementById('atividade3correcao1parte15').innerHTML = "carnation";
	document.getElementById('atividade3correcao1parte16').innerHTML = "Grows";
	document.getElementById('atividade3correcao1parte17').innerHTML = "while";
	document.getElementById('atividade3correcao1parte18').innerHTML = "I";
	document.getElementById('atividade3correcao1parte19').innerHTML = "decay";

	document.getElementById('atividade3correcao2parte1').innerHTML = "So";
	document.getElementById('atividade3correcao2parte2').innerHTML = "you";
	document.getElementById('atividade3correcao2parte3').innerHTML = "think";
	document.getElementById('atividade3correcao2parte4').innerHTML = "you";
	document.getElementById('atividade3correcao2parte5').innerHTML = "can";
	document.getElementById('atividade3correcao2parte6').innerHTML = "stone me";
	document.getElementById('atividade3correcao2parte7').innerHTML = "and";
	document.getElementById('atividade3correcao2parte8').innerHTML = "spit";
	document.getElementById('atividade3correcao2parte9').innerHTML = "in";
	document.getElementById('atividade3correcao2parte10').innerHTML = "my eye";
	document.getElementById('atividade3correcao2parte11').innerHTML = "So";
	document.getElementById('atividade3correcao2parte12').innerHTML = "you";
	document.getElementById('atividade3correcao2parte13').innerHTML = "think";
	document.getElementById('atividade3correcao2parte14').innerHTML = "you";
	document.getElementById('atividade3correcao2parte15').innerHTML = "can";
	document.getElementById('atividade3correcao2parte16').innerHTML = "love me";
	document.getElementById('atividade3correcao2parte17').innerHTML = "and";
	document.getElementById('atividade3correcao2parte18').innerHTML = "leave me";
	document.getElementById('atividade3correcao2parte19').innerHTML = "to die";

			
		if (text1 === "Fall"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "out"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "of"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "formation"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}

		//////////////////////
		if (text5 === "I"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "plan"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "my"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "escape"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}

		//////////////////////
		if (text9 === "From"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "walls"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}
		///////////////////////
		if (text11 === "they"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "confined"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		///////////////////////
		if (text13 === "Rebel"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}
		///////////////////////
		if (text14 === "red"){
			document.getElementById('atividade3correcao1parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte14').style.color = "red";
		}
		///////////////////////
		if (text15 === "carnation"){
			document.getElementById('atividade3correcao1parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte15').style.color = "red";
		}

		///////////////////////
		if (text16 === "Grows"){
			document.getElementById('atividade3correcao1parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte16').style.color = "red";
		}
		///////////////////////
		if (text17 === "while"){
			document.getElementById('atividade3correcao1parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte17').style.color = "red";
		}
		///////////////////////
		if (text18 === "I"){
			document.getElementById('atividade3correcao1parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte18').style.color = "red";
		}
		///////////////////////
		if (text19 === "decay"){
			document.getElementById('atividade3correcao1parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte19').style.color = "red";
		}




//=================================================================================================




		if (text20 === "The lead"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text21 === "is"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text22 === "terrible in"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text23 === "flavour"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}

		///////////////////////
		if (text24 === "But"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text25 === "now"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text26 === "you"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text27 === "double as a"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text28 === "papermaker"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}

		///////////////////////
		if (text29 === "I"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		///////////////////////
		if (text30 === "despise you"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		///////////////////////
		if (text31 === "sometimes"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}

		///////////////////////
		if (text32 === "I"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		///////////////////////
		if (text33 === "love to"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}
		///////////////////////
		if (text34 === "hate"){
			document.getElementById('atividade3correcao2parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte15').style.color = "red";
		}
		///////////////////////
		if (text35 === "the fight"){
			document.getElementById('atividade3correcao2parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte16').style.color = "red";
		}
		///////////////////////
		if (text36 === "and"){
			document.getElementById('atividade3correcao2parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte17').style.color = "red";
		}
		///////////////////////
		if (text37 === "you"){
			document.getElementById('atividade3correcao2parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte18').style.color = "red";
		}
		///////////////////////
		if (text38 === "in my life"){
			document.getElementById('atividade3correcao2parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte19').style.color = "red";
		}
		///////////////////////
		if (text39 === "is"){
			document.getElementById('atividade3correcao2parte20').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte20').style.color = "red";
		}
		///////////////////////
		if (text40 === "like"){
			document.getElementById('atividade3correcao2parte21').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte21').style.color = "red";
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