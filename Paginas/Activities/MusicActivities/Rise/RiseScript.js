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
	var text2 = document.getElementById('BAB').value;
	var text3 = document.getElementById('BBA').value;
	var text4 = document.getElementById('BBB').value;
	var text5 = document.getElementById('BCA').value;
	var text6 = document.getElementById('BCB').value;
	var text7 = document.getElementById('BCC').value;
	var text8 = document.getElementById('BCD').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "It's";
	document.getElementById('atividade2correcao1parte2').innerHTML = "is";

	document.getElementById('atividade2correcao2parte1').innerHTML = "yourself";
	document.getElementById('atividade2correcao2parte2').innerHTML = "will";

	document.getElementById('atividade2correcao3parte1').innerHTML = "we've";
	document.getElementById('atividade2correcao3parte2').innerHTML = "begun";
	document.getElementById('atividade2correcao3parte3').innerHTML = "There'";
	document.getElementById('atividade2correcao3parte4').innerHTML = "s";
			
		if (text1 === "It's"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "is"){
			document.getElementById('atividade2correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "yourself"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "will"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		//////////////////////
		if (text5 === "we've"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text6 === "begun"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text7 === "There"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		if (text8 === "s"){
			document.getElementById('atividade2correcao3parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte4').style.color = "red";
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
	var text9 = document.getElementById('BCI').value;
	var text10 = document.getElementById('BDA').value;
	var text11 = document.getElementById('BDB').value;
	var text12 = document.getElementById('BDC').value;
	var text13 = document.getElementById('BDD').value;
	var text14 = document.getElementById('BDE').value;
	var text15 = document.getElementById('BDF').value;
	var text16 = document.getElementById('BDG').value;
	var text17 = document.getElementById('BDH').value;
	var text18 = document.getElementById('BDI').value;
	var text19 = document.getElementById('BDJ').value;
	
	var text20 = document.getElementById('BEA').value;
	var text21 = document.getElementById('BEB').value;
	var text22 = document.getElementById('BEC').value;
	var text23 = document.getElementById('BED').value;
	var text24 = document.getElementById('BEE').value;
	var text25 = document.getElementById('BEF').value;
	var text26 = document.getElementById('BEG').value;
	var text27 = document.getElementById('BEH').value;
	var text28 = document.getElementById('BEI').value;
	var text29 = document.getElementById('BEJ').value;

	var text30 = document.getElementById('BFA').value;
	var text31 = document.getElementById('BFB').value;
	var text32 = document.getElementById('BFC').value;
	var text33 = document.getElementById('BFD').value;
	var text34 = document.getElementById('BFE').value;
	var text35 = document.getElementById('BFF').value;
	var text36 = document.getElementById('BFG').value;
	var text37 = document.getElementById('BFH').value;
	var text38 = document.getElementById('BFI').value;


	document.getElementById('atividade3correcao1parte1').innerHTML = "Welcome";
	document.getElementById('atividade3correcao1parte2').innerHTML = "to";
	document.getElementById('atividade3correcao1parte3').innerHTML = "the";
	document.getElementById('atividade3correcao1parte4').innerHTML = "climb";
	document.getElementById('atividade3correcao1parte5').innerHTML = "up,";
	document.getElementById('atividade3correcao1parte6').innerHTML = "reach";
	document.getElementById('atividade3correcao1parte7').innerHTML = "for";
	document.getElementById('atividade3correcao1parte8').innerHTML = "the";
	document.getElementById('atividade3correcao1parte9').innerHTML = "summit";
	document.getElementById('atividade3correcao1parte10').innerHTML = "Visions";
	document.getElementById('atividade3correcao1parte11').innerHTML = "pray";
	document.getElementById('atividade3correcao1parte12').innerHTML = "that";
	document.getElementById('atividade3correcao1parte13').innerHTML = "one";
	document.getElementById('atividade3correcao1parte14').innerHTML = "false";
	document.getElementById('atividade3correcao1parte15').innerHTML = "step";
	document.getElementById('atividade3correcao1parte16').innerHTML = "lead";
	document.getElementById('atividade3correcao1parte17').innerHTML = "the";
	document.getElementById('atividade3correcao1parte18').innerHTML = "end,";
	document.getElementById('atividade3correcao1parte19').innerHTML = "so";

	document.getElementById('atividade3correcao2parte1').innerHTML = "It";
	document.getElementById('atividade3correcao2parte2').innerHTML = "'s";
	document.getElementById('atividade3correcao2parte3').innerHTML = "deep";
	document.getElementById('atividade3correcao2parte4').innerHTML = "in";
	document.getElementById('atividade3correcao2parte5').innerHTML = "your";
	document.getElementById('atividade3correcao2parte6').innerHTML = "blood,";
	document.getElementById('atividade3correcao2parte7').innerHTML = "go";
	document.getElementById('atividade3correcao2parte8').innerHTML = "and";
	document.getElementById('atividade3correcao2parte9').innerHTML = "take";
	document.getElementById('atividade3correcao2parte10').innerHTML = "it";
	document.getElementById('atividade3correcao2parte11').innerHTML = "This";
	document.getElementById('atividade3correcao2parte12').innerHTML = "is";
	document.getElementById('atividade3correcao2parte13').innerHTML = "your";
	document.getElementById('atividade3correcao2parte14').innerHTML = "moment,";
	document.getElementById('atividade3correcao2parte15').innerHTML = "take";
	document.getElementById('atividade3correcao2parte16').innerHTML = "to";
	document.getElementById('atividade3correcao2parte17').innerHTML = "the";
	document.getElementById('atividade3correcao2parte18').innerHTML = "skies";
	document.getElementById('atividade3correcao2parte19').innerHTML = ", go";
	

	



		if (text1 === "Welcome"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "to"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}

		///////////////////////
		if (text3 === "the"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "climb"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		if (text5 === "up"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "reach"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}

		///////////////////////
		if (text7 === "for"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "the"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		if (text9 === "summit"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "Visions"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}

		///////////////////////
		if (text11 === "pray"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}
		///////////////////////
		if (text12 === "that"){
			document.getElementById('atividade3correcao1parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte12').style.color = "red";
		}
		if (text13 === "one"){
			document.getElementById('atividade3correcao1parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte13').style.color = "red";
		}
		///////////////////////
		if (text14 === "false"){
			document.getElementById('atividade3correcao1parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte14').style.color = "red";
		}

		///////////////////////
		if (text15 === "step"){
			document.getElementById('atividade3correcao1parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte15').style.color = "red";
		}
		///////////////////////
		if (text16 === "lead"){
			document.getElementById('atividade3correcao1parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte16').style.color = "red";
		}
		if (text17 === "the"){
			document.getElementById('atividade3correcao1parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte17').style.color = "red";
		}
		///////////////////////
		if (text18 === "end"){
			document.getElementById('atividade3correcao1parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte18').style.color = "red";
		}
		if (text19 === "so"){
			document.getElementById('atividade3correcao1parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte19').style.color = "red";
		}
		////////////////////////////////////////////////////////////////////////////////////////////////////
		if (text20 === "It"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text21 === "s"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text22 === "deep"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		if (text23 === "in"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text24 === "your"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}

		///////////////////////
		if (text25 === "blood"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text26 === "go"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		if (text27 === "and"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text28 === "take"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}

		///////////////////////
		if (text29 === "it"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		///////////////////////
		if (text30 === "This"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		if (text31 === "is"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		///////////////////////
		if (text32 === "your"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}

		///////////////////////
		if (text33 === "moment"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}
		///////////////////////
		if (text34 === "take"){
			document.getElementById('atividade3correcao2parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte15').style.color = "red";
		}
		if (text35 === "to"){
			document.getElementById('atividade3correcao2parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte16').style.color = "red";
		}
		///////////////////////
		if (text36 === "the"){
			document.getElementById('atividade3correcao2parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte17').style.color = "red";
		}
		if (text37 === "skies"){
			document.getElementById('atividade3correcao2parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte18').style.color = "red";
		}
		if (text38 === "go"){
			document.getElementById('atividade3correcao2parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte19').style.color = "red";
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