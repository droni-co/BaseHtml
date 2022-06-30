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

});
