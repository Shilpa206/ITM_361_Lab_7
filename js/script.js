function init(){

  //creating a function
  function alertBox(){
	  
	  // obtaining input
	  var input = document.getElementById('entryinput');
	  alert ("Naga Satya Silpa Annadevara:" + input);
	  
	  //obtaining output
	  var output = document.getElementById('textoutput');
	  output.innerHTML = input;
}
  
 







window.addEventListener('load', init);