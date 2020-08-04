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
				text.style.color="green";		
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
	var text5 = document.getElementById('BBD').value;

	var text6 = document.getElementById('BCA').value;
	var text7 = document.getElementById('BCB').value;
	var text8 = document.getElementById('BCC').value;
	var text9 = document.getElementById('BCD').value;

	document.getElementById('atividade2correcao1parte1').innerHTML = "Doesn't really matter to me";

	document.getElementById('atividade2correcao2parte1').innerHTML = "Mama, life had just";
	document.getElementById('atividade2correcao2parte2').innerHTML = "begun, but now";
	document.getElementById('atividade2correcao2parte3').innerHTML = "I've";
	document.getElementById('atividade2correcao2parte4').innerHTML = "gone and thrown it all away";

	document.getElementById('atividade2correcao3parte1').innerHTML = "I don't";
	document.getElementById('atividade2correcao3parte2').innerHTML = "wanna die";
	document.getElementById('atividade2correcao3parte3').innerHTML = "I sometimes wish I'd";
	document.getElementById('atividade2correcao3parte4').innerHTML = "never been born at all";

		if (text1 === "Doesn't"){
			document.getElementById('atividade2correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao1parte1').style.color = "red";
		}


		///////////////////////


		if (text2 === "had"){
			document.getElementById('atividade2correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text3 === "begun"){
			document.getElementById('atividade2correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text4 === "'ve"){
			document.getElementById('atividade2correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text5 === "gone"){
			document.getElementById('atividade2correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao2parte4').style.color = "red";
		}

		///////////////////////


		if (text6 === "don't"){
			document.getElementById('atividade2correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text7 === "wanna"){
			document.getElementById('atividade2correcao3parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte2').style.color = "red";
		}
		///////////////////////
		if (text8 === "'d"){
			document.getElementById('atividade2correcao3parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade2correcao3parte3').style.color = "red";
		}
		///////////////////////
		if (text9 === "been"){
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
	var text22 = document.getElementById('CBK').value;
	var text23 = document.getElementById('CBL').value;
	var text24 = document.getElementById('CBM').value;
	var text25 = document.getElementById('CBN').value;
	var text26 = document.getElementById('CBO').value;
	var text27 = document.getElementById('CBP').value;
	var text28 = document.getElementById('CBQ').value;
	var text29 = document.getElementById('CBR').value;
	var text30 = document.getElementById('CBS').value;


	document.getElementById('atividade3correcao1parte1').innerHTML = "I";
	document.getElementById('atividade3correcao1parte2').innerHTML = "see";
	document.getElementById('atividade3correcao1parte3').innerHTML = "a little";
	document.getElementById('atividade3correcao1parte4').innerHTML = "silhouetto";
	document.getElementById('atividade3correcao1parte5').innerHTML = "of a man";
	document.getElementById('atividade3correcao1parte6').innerHTML = "Scaramouche";
	document.getElementById('atividade3correcao1parte7').innerHTML = "Scaramouche";
	document.getElementById('atividade3correcao1parte8').innerHTML = "Will";
	document.getElementById('atividade3correcao1parte9').innerHTML = "you";
	document.getElementById('atividade3correcao1parte10').innerHTML = "do";
	document.getElementById('atividade3correcao1parte11').innerHTML = "the fandango";

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

			
		if (text1 === "I"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "see"){
			document.getElementById('atividade3correcao1parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte2').style.color = "red";
		}
		///////////////////////
		if (text3 === "a little"){
			document.getElementById('atividade3correcao1parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte3').style.color = "red";
		}
		///////////////////////
		if (text4 === "silhouetto"){
			document.getElementById('atividade3correcao1parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte4').style.color = "red";
		}
		//////////////////////
		if (text5 === "of a man"){
			document.getElementById('atividade3correcao1parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte5').style.color = "red";
		}
		///////////////////////
		if (text6 === "Scaramouche"){
			document.getElementById('atividade3correcao1parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte6').style.color = "red";
		}
		///////////////////////
		if (text7 === "Scaramouche"){
			document.getElementById('atividade3correcao1parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte7').style.color = "red";
		}
		///////////////////////
		if (text8 === "Will"){
			document.getElementById('atividade3correcao1parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte8').style.color = "red";
		}
		///////////////////////
		if (text9 === "you"){
			document.getElementById('atividade3correcao1parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte9').style.color = "red";
		}
		///////////////////////
		if (text10 === "do"){
			document.getElementById('atividade3correcao1parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte10').style.color = "red";
		}
		///////////////////////
		if (text11 === "the fandango"){
			document.getElementById('atividade3correcao1parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte11').style.color = "red";
		}


//=================================================================================================

		
		///////////////////////
		if (text12 === "So"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}
		///////////////////////
		if (text13 === "you"){
			document.getElementById('atividade3correcao2parte2').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte2').style.color = "red";
		}
		///////////////////////
		if (text14 === "think"){
			document.getElementById('atividade3correcao2parte3').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte3').style.color = "red";
		}
		///////////////////////
		if (text15 === "you"){
			document.getElementById('atividade3correcao2parte4').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte4').style.color = "red";
		}
		///////////////////////
		if (text16 === "can"){
			document.getElementById('atividade3correcao2parte5').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte5').style.color = "red";
		}
		///////////////////////
		if (text17 === "stone me"){
			document.getElementById('atividade3correcao2parte6').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte6').style.color = "red";
		}
		///////////////////////
		if (text18 === "and"){
			document.getElementById('atividade3correcao2parte7').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte7').style.color = "red";
		}
		///////////////////////
		if (text19 === "spit"){
			document.getElementById('atividade3correcao2parte8').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte8').style.color = "red";
		}
		///////////////////////
		if (text20 === "in"){
			document.getElementById('atividade3correcao2parte9').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte9').style.color = "red";
		}
		///////////////////////
		if (text21 === "my eye"){
			document.getElementById('atividade3correcao2parte10').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte10').style.color = "red";
		}
		///////////////////////
		if (text22 === "So"){
			document.getElementById('atividade3correcao2parte11').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte11').style.color = "red";
		}
		///////////////////////
		if (text23 === "you"){
			document.getElementById('atividade3correcao2parte12').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte12').style.color = "red";
		}
		///////////////////////
		if (text24 === "think"){
			document.getElementById('atividade3correcao2parte13').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte13').style.color = "red";
		}
		///////////////////////
		if (text25 === "you"){
			document.getElementById('atividade3correcao2parte14').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte14').style.color = "red";
		}
		///////////////////////
		if (text26 === "can"){
			document.getElementById('atividade3correcao2parte15').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte15').style.color = "red";
		}
		///////////////////////
		if (text27 === "love me"){
			document.getElementById('atividade3correcao2parte16').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte16').style.color = "red";
		}
		///////////////////////
		if (text28 === "and"){
			document.getElementById('atividade3correcao2parte17').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte17').style.color = "red";
		}
		///////////////////////
		if (text29 === "leave me"){
			document.getElementById('atividade3correcao2parte18').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte18').style.color = "red";
		}
		///////////////////////
		if (text30 === "to die"){
			document.getElementById('atividade3correcao2parte19').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte19').style.color = "red";
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