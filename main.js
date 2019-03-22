 



function showDiv(){

				//Assign variable in select #id = selectBox use camelCase
				//Assign variable in the SelectBox options

		var selectBox = document.getElementById('sWeight');
		var userInput = selectBox.options[selectBox.selectedIndex].value;

		document.getElementById('lbsInput').addEventListener('input', function (e){

			let wip = e.target.value;

			if (userInput == 0) {

				document.getElementById('gCard').style.display = 'none';
				document.getElementById('kgCard').style.display = 'none';
				document.getElementById('pdsCard').style.display = 'none';
				document.getElementById('ozCard').style.display = 'none';

				  
			}


			else if (userInput == 1){
				document.getElementById('gCard').style.display = 'none';
				document.getElementById('kgCard').style.display = 'block';
				document.getElementById('pdsCard').style.display = 'block';
				document.getElementById('ozCard').style.display = 'block';

				document.getElementById('kgOutput').innerHTML = wip*0.001; // formula 1kg = 1000 gram  1 / 1000 = 0.0001
				document.getElementById('pdsOutput').innerHTML = wip/453.592;
				//formula  453.592g = 1 pd
				document.getElementById('ozOutput').innerHTML = wip/28.35; // 1 oz = 28.35g  g = g/28.35 
			
			}else if (userInput == 2) {
				document.getElementById('gCard').style.display = 'block';
				document.getElementById('kgCard').style.display = 'none';
				document.getElementById('pdsCard').style.display = 'block';
				document.getElementById('ozCard').style.display = 'block';

				document.getElementById('grmOutput').innerHTML = wip*1000;
				document.getElementById('pdsOutput').innerHTML = wip*2.20462;
				document.getElementById('ozOutput').innerHTML = wip*35.274;
			
			}else if(userInput == 3) {
				document.getElementById('gCard').style.display = 'block';
				document.getElementById('kgCard').style.display = 'block';
				document.getElementById('pdsCard').style.display = 'none';
				document.getElementById('ozCard').style.display = 'block';

				document.getElementById('grmOutput').innerHTML = wip*453.592;
				document.getElementById('kgOutput').innerHTML = wip/2.205;
				document.getElementById('ozOutput').innerHTML = wip*16;
			
			}else if(userInput == 4) {
				document.getElementById('gCard').style.display = 'block';
				document.getElementById('kgCard').style.display = 'block';
				document.getElementById('pdsCard').style.display = 'block';
				document.getElementById('ozCard').style.display = 'none';

				document.getElementById('grmOutput').innerHTML = wip*28.35;
				document.getElementById('kgOutput').innerHTML = wip/35.274;
				document.getElementById('pdsOutput').innerHTML = wip/16;
			}

		});
}


/*
//document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener
('input', function(e){

//document.getElementById('output').style.visibility ='visible';
let lbs= e.target.value;

document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
document.getElementById('kgOutput').innerHTML =
	lbs/2.20462;
document.getElementById('ozOutput').innerHTML =
	lbs*16;
}); */