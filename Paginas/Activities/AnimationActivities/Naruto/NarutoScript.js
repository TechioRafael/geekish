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
		}
	}
}

	document.getElementById('btnActivity1').style.display="none";
}

function activity2(){	
	var text1 = document.getElementById('BAA').value;
	var text2 = document.getElementById('BBA').value;
	var text3 = document.getElementById('BCA').value;
	var text4 = document.getElementById('BDA').value;
	var text5 = document.getElementById('BEA').value;

	document.getElementById('atividade3correcao1parte1').innerHTML = "Naruto has a lot of ninjutsus in his arsenal.";

	document.getElementById('atividade3correcao2parte1').innerHTML = "Ninjutsus are concentrations of chakra that the user";

	document.getElementById('atividade3correcao3parte1').innerHTML = "can use to materialize things in the ambient.";

	document.getElementById('atividade3correcao4parte1').innerHTML = "Naruto can does air balls that";

	document.getElementById('atividade3correcao5parte1').innerHTML = "disintegrated everything in its way.";

		if (text1 === "has"){
			document.getElementById('atividade3correcao1parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao1parte1').style.color = "red";
		}
		///////////////////////
		if (text2 === "are"){
			document.getElementById('atividade3correcao2parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao2parte1').style.color = "red";
		}

		///////////////////////
		if (text3 === "can"){
			document.getElementById('atividade3correcao3parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao3parte1').style.color = "red";
		}
		///////////////////////
		if (text4 === "can does"){
			document.getElementById('atividade3correcao4parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao4parte1').style.color = "red";
		}
		if (text5 === "disintegrated"){
			document.getElementById('atividade3correcao5parte1').style.color = "green";
			total = total + 1;
		}else{
			document.getElementById('atividade3correcao5parte1').style.color = "red";
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