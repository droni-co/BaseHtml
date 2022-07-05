import * as _ from 'lodash';
// import bootstrap
import 'bootstrap';
import 'bootstrap-datepicker'

var $ = require( "jquery" );

/* Jquery code */
$(function() {
  $(".miboton").click(function(){
    alert("Hola");
  });

  var activeNavItem = $('.nav-item');

  activeNavItem.click(function(){
    activeNavItem.removeClass('active');
    $(this).addClass('active');  
  });

  $("#trFormuGrande").click(function() {
    $(".formuGrande").show('slow')
    $("#trFormuGrande").hide('slow')
  })
 
  
  $('.datepicker').datepicker();

  //select
  const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})

});
