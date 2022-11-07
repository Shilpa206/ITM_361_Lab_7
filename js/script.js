function init(){

  //creating a function
  function nameAlert(){
	  
	  // obtaining input
	  var input = document.getElementById('entryinput');
	  alert ("Naga Satya Silpa Annadevara: " + input.value);
	  
	  //obtaining output
	  var output = document.getElementById('textoutput');
	  output.innerHTML = input.value;
  }
   
   //configurating the button
   var button = document. getElementById('entrybutton');
   button.addEventListener('click' , nameAlert);
	  
}
 
window.addEventListener('load', init);