"user scrict";
$(document).ready(function () {


  let c = 0;

  function ranger(numeroDeRanger) {
    if (numeroDeRanger % 2 == 0) {
      $("section").append('<div class="row"></div>');
    } else {
      $("section").append(`<div class="case row "></div>`);
    

    }
  }

  for (var numeroDeRanger = 0; numeroDeRanger < 17; numeroDeRanger++) {
    ranger(numeroDeRanger); // fonction
    


  }


  function carre(i) {
    if (i % 2 == 0) {

      $("div").append('<p class="square" ></p>');

    } else {

      $("div").append('<p class="ligne square"></p>');
    }
  }


//attr-case='c'
  for (var i = 0; i <17; i++) {
    carre(i); // je met i en parametre, argument
    //c++;


  }

  $("div.ligne").css({'':''})



});