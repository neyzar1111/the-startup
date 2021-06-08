$(document).ready(function(){
            
    $(".carousel-caption h5").addClass('animated slideInLeft');
    
    $(".carousel-caption p").addClass('animated slideInRight');
    
});



function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }