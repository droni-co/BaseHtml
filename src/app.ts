import * as _ from 'lodash';
// import bootstrap
import 'bootstrap';

var $ = require( "jquery" );

/* Jquery code */
$(function() {
  $(".miboton").click(function(){
    alert("Hola");
  });
});
var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});