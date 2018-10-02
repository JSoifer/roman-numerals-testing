import './sass/styles.scss';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { romanNumerals } from './business.js';

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += romanNumerals(userInput);
    $("#finalOutput").text(result);
    $("#results").show();
  });
});
