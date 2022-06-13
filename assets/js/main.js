
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  /**
   * Show responsive navbar
   */
  var state = false,
      links = $('.navbar-responsive__link')
  $(document).ready(function(){
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
      if(!state) {
        $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
        $('#body').css("overflow", "hidden")
        state = true
      } else {
        $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
        $('#body').css("overflow", "auto")
        state = false
      }

    })
    $.each(links, function(index,value){
      value.addEventListener("click",function(){
        if(!state) {
          $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
          $('#body').css("overflow", "hidden")
          state = true
        } else {
          $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
          $('#body').css("overflow", "auto")
          state = false
        }
        $('#nav-icon3').removeClass('open')
      })
    })
  })

  /**
   * Hide responsive navbar
   */

  function hideNavbar(x) {
    if (x.matches) { // If media query matches
      $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
      $('#nav-icon3').removeClass('open')
      state = false
    }
  }

  var x = window.matchMedia("(min-width: 768px)")
  hideNavbar(x) // Call listener function at run time
  x.addEventListener("change", () => {
    hideNavbar(x)
  }); // Attach listener function on state changes



  /**
   * Preloader
   */

  $(window).on("load", function (){
    $(".sk-circle-wrapper").fadeOut("slow");
  });


  /**
   * Back to top button
   */

  var btn = $('#button-to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
  });



  /**
   * Smooth scroll
   */

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

})()