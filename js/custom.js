
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  // function sendEmail() {
  //   event.preventDefault(); 
  //   var formData = new FormData(document.querySelector('form')); 

  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", "send_email.php", true); 
  //   xhr.onload = function() {
  //     if (this.status == 200) {
  //       if (this.responseText === "success") {
  //         alert("Email sent successfully!"); 
  //         document.querySelector('form').reset(); 
  //       } else {
  //         alert("Oops! Something went wrong. Please try again later."); 
  //       }
  //     }
  //   };
  //   xhr.send(formData);
  // }

/*
var startDate = new Date('2019-01-01');
var endDate = new Date();
var difference = endDate.getTime() - startDate.getTime();
var hoursPassed = Math.floor(difference / (1000 * 60 * 60));
var counterElement = document.getElementById('coding-counter');
if (counterElement) {
    counterElement.setAttribute('data-purecounter-end', hoursPassed);

    function updateCounter() {
        var currentDifference = new Date().getTime() - startDate.getTime();
        var currentHoursPassed = Math.floor(currentDifference / (1000 * 60 * 60));
        counterElement.textContent = currentHoursPassed;

        setTimeout(updateCounter, 1000 * 60 * 60);  // Update every hour
    }

    updateCounter();
}
*/