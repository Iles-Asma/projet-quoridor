"user scrict";
$(document).ready(function () {




  function ranger(numeroDeRanger) {
    if (numeroDeRanger % 2 == 0) {
      $("section").append(`<div class="row"></div>`);
    } else {
      $("section").append(`<div class="case row "></div>`);
      //$("div.row").css({'background-color': 'rgb(0, 0, 0)','height':'30px'})/
      

    }
  }

  for (var numeroDeRanger = 0; numeroDeRanger < 17; numeroDeRanger++) {
    ranger(numeroDeRanger); // fonction


  }


  function carre(i) {
    if (i % 2 == 0) {

      $("div").append(`<p class="square"></p>`);

    } else {

      $("div").append(`<p class="ligne square"></p>`);
    }
  }



  for (var i = 0; i < 17; i++) {
    carre(i); // je met i en parametre, argument



  }



});