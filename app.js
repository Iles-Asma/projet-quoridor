"user scrict";
$(document).ready(function () {


  function ranger(numeroDeRanger) {

    if (numeroDeRanger % 2 == 0) {
      $("section").append('<div class="row"></div>');

    } else {
      $("section").append('<p class="case"></p>');




    }

  }

  for (var numeroDeRanger = 0; numeroDeRanger < 17; numeroDeRanger++) {
    ranger(numeroDeRanger);
  }

  var countCase = 1;

  function carre(i) {
  

    if (i % 2 == 0) {
// `` reconnais le ${} comme element js
      $("div").append(`<span id="carre-${countCase++}" class="square"></span>`);


    } else {

      $("div.row").append('<h6 class="ligne"></h6>');
    }
  }

  for (var i = 0; i < 17; i++) {
    carre(i);

  }

  function pions(){
    $("#carre-5").append("<span class='pion-1'></span>").addClass("pion-1");

  };

  pions();



  function murs(walls) {


    if (walls < 0) {

      $("p").append('<span></span>');
    } else {
      $("p").append('<span id="carré" class="square_2" ></span>');

    }
  }

  for (var walls = 0; walls < 9; walls++) {
    murs(walls);

  };





});