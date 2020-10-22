"user scrict";
$(document).ready(function () {

  
  function ranger(numeroDeRanger, wall) {
    let murs = $('span.square_2');
    if (numeroDeRanger % 2 == 0) {
      $("section").append('<div class="row"></div>');
     
    } else{
     $("section").append('<p class="case"></p>');
    
      //$("div.row").after('<span class="square_2" ></span>');


    }
    //console.log(murs);
  }
  /*function wall (murs){
    if (wall %2 == 0){
    $("div.row").append('<span class="square_2"></span>'); } else{

    }
  }

for (murs = 0; murs < 81; murs++){
wall(murs);
}*/

  for (var numeroDeRanger = 0; numeroDeRanger < 17; numeroDeRanger++) {
    ranger(numeroDeRanger); // fonction

  }

  //}

  function carre(i) {
    
  
    if (i % 2 == 0) {

      $("div").append('<span  class="square" ></span>');

    } else {

      $("div.row").append('<h6 class="ligne"></h6>');
    }
  }

  for (var i = 0; i < 17; i++) {
    carre(i); 
    // je met i en parametre, argument
    //c++;
  }
  function murs(walls) {
    
  
    if (walls < 0) {
      
      $("p").append('<span id="carré" class="" ></span>');
    }else{
      $("p").append('<span id="carré" class="square_2" ></span>');

    }
  }

  for (var walls = 0; walls < 9; walls++) {
    murs(walls); 
    // je met i en parametre, argument
    //c++;
      
  }

  /*function myid (id){
    let element = $('p');
    element.attr('id');
  }
  for (var i = 0; i < 81; i++) {
    myid(i+1); 
  }*/ 

  /*$('.square').each(function(square){
let number = $('p').attr('id');
console.log(number);

  });
*/




});