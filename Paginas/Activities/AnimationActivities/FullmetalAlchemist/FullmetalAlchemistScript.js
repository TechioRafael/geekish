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
				text.style.color="red";	
			}else if (activities[i].value == "B"){
				var text = document.getElementById('ACB');
				text.style.color="red";		
			}else if (activities[i].value == "C") {
				var text = document.getElementById('ACC');
				text.style.color="red";
			}else if (activities[i].value == "D") {
				var text = document.getElementById('ACD');
				text.style.color="green";
				total = total + 1;
			}
		}
	}
	document.getElementById('btnActivity1').style.display="none";
}

function activity3(){	
	var text1 = document.getElementById('CAA').value;
	var text2 = document.getElementById('CBA').value;
	var text3 = document.getElementById('CCA').value;
	var text4 = document.getElementById('CCB').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Alphonse uses an armor because he and your";

	document.getElementById('atividade3correcao2parte1').innerHTML = " brother try revive their";

	document.getElementById('atividade3correcao3parte1').innerHTML = "mom, in consequence he lost your body, because in";

	document.getElementById('atividade3correcao4parte1').innerHTML = " the alchemist the trade is equivalent.";

		if (text1 === "your"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "their"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "in"){
			document.getElementById('atividade3correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "the"){
			document.getElementById('atividade3correcao4parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao4parte1').style.color = "red";
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
