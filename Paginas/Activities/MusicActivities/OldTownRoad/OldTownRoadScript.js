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
	var text7 = document.getElementById('BCA').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "gonna";
	document.getElementById('atividade2correcao1parte2').innerHTML = "gonna";
	document.getElementById('atividade2correcao1parte3').innerHTML = "gonna";
	document.getElementById('atividade2correcao1parte4').innerHTML = "gonna";

	document.getElementById('atividade2correcao2parte1').innerHTML = "Can't";
	document.getElementById('atividade2correcao2parte2').innerHTML = "can't";

	document.getElementById('atividade2correcao3parte1').innerHTML = "been";
			
		if (text1 === "gonna"){
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
		if (text3 === "gonna"){
			document.getElementById('atividade2correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "gonna"){
			document.getElementById('atividade2correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte4').style.color = "red";
		}
		//////////////////////
		if (text5 === "Can't"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "can't"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text7 === "been"){
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
	var text25 = document.getElementById('BEG').value;
	var text26 = document.getElementById('BEH').value;
	var text27 = document.getElementById('BEI').value;
	var text28 = document.getElementById('BEJ').value;

	var text29 = document.getElementById('BEK').value;
	var text30 = document.getElementById('BFA').value;
	var text31 = document.getElementById('BFB').value;
	var text32 = document.getElementById('BFC').value;
	var text33 = document.getElementById('BFD').value;

	var text34 = document.getElementById('BFE').value;
	var text35 = document.getElementById('BFF').value;
	var text36 = document.getElementById('BFG').value;
	var text37 = document.getElementById('BFH').value;
	var text38 = document.getElementById('BFI').value;

	var text39 = document.getElementById('BFJ').value;
	var text40 = document.getElementById('BFK').value;


	document.getElementById('atividade3correcao1parte1').innerHTML = "Hat";
	document.getElementById('atividade3correcao1parte2').innerHTML = "down";
	document.getElementById('atividade3correcao1parte3').innerHTML = "cross";
	document.getElementById('atividade3correcao1parte4').innerHTML = "town";
	document.getElementById('atividade3correcao1parte5').innerHTML = "livin'";
	document.getElementById('atividade3correcao1parte6').innerHTML = "like";
	document.getElementById('atividade3correcao1parte7').innerHTML = "a";
	document.getElementById('atividade3correcao1parte8').innerHTML = "rockstar";
	document.getElementById('atividade3correcao1parte9').innerHTML = "Spent";
	document.getElementById('atividade3correcao1parte10').innerHTML = "a";
	document.getElementById('atividade3correcao1parte11').innerHTML = "lot";
	document.getElementById('atividade3correcao1parte12').innerHTML = "of";
	document.getElementById('atividade3correcao1parte13').innerHTML = "money";
	document.getElementById('atividade3correcao1parte14').innerHTML = "on";
	document.getElementById('atividade3correcao1parte15').innerHTML = "my";
	document.getElementById('atividade3correcao1parte16').innerHTML = "brand";
	document.getElementById('atividade3correcao1parte17').innerHTML = "new";
	document.getElementById('atividade3correcao1parte18').innerHTML = "guitar";

	document.getElementById('atividade3correcao2parte1').innerHTML = "I";
	document.getElementById('atividade3correcao2parte2').innerHTML = "m";
	document.getElementById('atividade3correcao2parte3').innerHTML = "like";
	document.getElementById('atividade3correcao2parte4').innerHTML = "a";
	document.getElementById('atividade3correcao2parte5').innerHTML = "Malboro";
	document.getElementById('atividade3correcao2parte6').innerHTML = "Man";
	document.getElementById('atividade3correcao2parte7').innerHTML = "so";
	document.getElementById('atividade3correcao2parte8').innerHTML = "I";
	document.getElementById('atividade3correcao2parte9').innerHTML = "kick";
	document.getElementById('atividade3correcao2parte10').innerHTML = "on";
	document.getElementById('atividade3correcao2parte11').innerHTML = "back";
	document.getElementById('atividade3correcao2parte12').innerHTML = "Wish";
	document.getElementById('atividade3correcao2parte13').innerHTML = "I";
	document.getElementById('atividade3correcao2parte14').innerHTML = "could";
	document.getElementById('atividade3correcao2parte15').innerHTML = "roll";
	document.getElementById('atividade3correcao2parte16').innerHTML = "on";
	document.getElementById('atividade3correcao2parte17').innerHTML = "back";
	document.getElementById('atividade3correcao2parte18').innerHTML = "to";
	document.getElementById('atividade3correcao2parte19').innerHTML = "that";
	document.getElementById('atividade3correcao2parte20').innerHTML = "old";
	document.getElementById('atividade3correcao2parte21').innerHTML = "town";
	document.getElementById('atividade3correcao2parte22').innerHTML = "road";

	



		if (text1 === "Hat"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "down"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "cross"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "town"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		if (text5 === "livin"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "like"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}

		///////////////////////
		if (text7 === "a"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "rockstar"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		if (text9 === "Spent"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "a"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}

		///////////////////////
		if (text11 === "lot"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "of"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		if (text13 === "money"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}
		///////////////////////
		if (text14 === "on"){
			document.getElementById('atividade3correcao1parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte14').style.color = "red";
		}

		///////////////////////
		if (text15 === "my"){
			document.getElementById('atividade3correcao1parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte15').style.color = "red";
		}
		///////////////////////
		if (text16 === "brand"){
			document.getElementById('atividade3correcao1parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte16').style.color = "red";
		}
		if (text17 === "new"){
			document.getElementById('atividade3correcao1parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte17').style.color = "red";
		}
		///////////////////////
		if (text18 === "guitar"){
			document.getElementById('atividade3correcao1parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte18').style.color = "red";
		}
		/////////////////////////////////////////////////////////////////////////////

		if (text19 === "I"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text20 === "m"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}

		///////////////////////
		if (text21 === "like"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text22 === "a"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		if (text23 === "Malboro"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text24 === "Man"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}

		///////////////////////
		if (text25 === "so"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text26 === "I"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		if (text27 === "kick"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text28 === "on"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}

		///////////////////////
		if (text29 === "back"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		///////////////////////
		if (text30 === "Wish"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		if (text31 === "I"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		///////////////////////
		if (text32 === "could"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}

		///////////////////////
		if (text33 === "roll"){
			document.getElementById('atividade3correcao2parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte15').style.color = "red";
		}
		///////////////////////
		if (text34 === "on"){
			document.getElementById('atividade3correcao2parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte16').style.color = "red";
		}
		if (text35 === "back"){
			document.getElementById('atividade3correcao2parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte17').style.color = "red";
		}
		///////////////////////
		if (text36 === "to"){
			document.getElementById('atividade3correcao2parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte18').style.color = "red";
		}
		if (text37 === "that"){
			document.getElementById('atividade3correcao2parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte19').style.color = "red";
		}
		if (text38 === "old"){
			document.getElementById('atividade3correcao2parte20').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte20').style.color = "red";
		}
		///////////////////////
		if (text39 === "town"){
			document.getElementById('atividade3correcao2parte21').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte21').style.color = "red";
		}
		if (text40=== "road"){
			document.getElementById('atividade3correcao2parte22').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte22').style.color = "red";
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