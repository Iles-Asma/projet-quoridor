"user scrict";
$(document).ready(function () {




  function ranger(numeroDeRanger) {
    if (numeroDeRanger % 2 == 0) {
      $("tbody").append(`<tr class="row"></tr>`);
    } else {
      $("tbody").append(`<tr class="case row "></tr>`);
      

    }
  }

  for (var numeroDeRanger = 0; numeroDeRanger < 17; numeroDeRanger++) {
    ranger(numeroDeRanger); // fonction


  }


  function carre(i) {
    if (i % 2 == 0) {

      $("tr").append(`<td class="square"></td>`);

    } else {

      $("tr").append(`<td class="ligne square"></td>`);
    }
  }



  for (var i = 0; i < 17; i++) {
    carre(i); // je met i en parametre, argument



  }



});