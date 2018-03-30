function $All(selector){
	var element = document.querySelectorAll(selector);
	return element;
}
function $(selector){
	var element = document.querySelector(selector);
	return element;
}
function clearValue(input){
	input.value="";
}
function reset(){
	var elements = $All("#counter .setCounter div input");
	for(a=0; a<elements.length; a++){
		elements[a].value=0;
	}
}
function start(){
	var h = $("#counter .setCounter div input:first-child").value;
	var m = $("#counter .setCounter div input:nth-child(2)").value;
	var s = $("#counter .setCounter div input:last-child").value;
	if(h == ""){
		h=0;
	}
	if(m == ""){
		m = 0;
	}
	var redLineWidth = parseInt(window.getComputedStyle($("#counter .timer div")).getPropertyValue('width'), 10);
	var redLine = redLineWidth / (parseInt(h) *60*60 + parseInt(m)*60 + parseInt(s));
	var interval = setInterval(function(){
		if(s+m+h != 0){
			$("#counter .timer").style.display = "block";
			$("#counter .setCounter").style.display = "none";
			redLineWidth = parseInt(window.getComputedStyle($("#counter .timer div")).getPropertyValue('width'), 10);
			$("#counter .timer div").style.width = redLineWidth-redLine+"px";
			if(s>0){
				s--;
			}else{
				s=60;
				if(m>0){
					m--;
				}else{
					m=60;
					if(h>0){
						h--;
					}
				}
			}
			$("#counter .timer p:first-child").innerHTML = h;
			$("#counter .timer p:nth-child(2)").innerHTML = m;
			$("#counter .timer p:nth-child(3)").innerHTML = s;
		}else{
			clearInterval(interval)
		}
	},1000);
}