$(document).ready(function() {
  /* For the sticky navigation */
  /*
    $('.js--section-features').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
        offset: '60px;'
        });
    */

  /* Scroll on  buttons */

  /* Scroll to top */
  $(".js--scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: $(".js--header").offset().top }, 1000);
    // $('.js--main-nav').slideToggle(200); CSAK AKKOR kene futtani ha mobilos verzio
  });

  /* Scroll to tisztelt erdeklodo */
  $("#tajekoztato2").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top - 60 },
      1000
    );
  });

  /* Scroll to feltetelek */
  $("#feltetel").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".js--section-feltetelek").offset().top - 60 },
      1000
    );
  });

  /* Scroll to jogszabaly */
  $("#jogosan").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".js--section-jogszabaly").offset().top - 60 },
      1000
    );
  });

  /* Scroll to dijak */
  $("#dijak2").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".js--section-dijak").offset().top - 60 },
      1000
    );
  });

  /* Scroll to elerhetoseg */
  $("#elerhetoseg2").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".section-cities").offset().top - 60 },
      1000
    );
  });

  /* Scroll to kapcsolat */
  $("#kapcsolat").click(function() {
    if (window.outerWidth < 767) {
      $(".js--main-nav").slideToggle(200);
    }
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top - 60 },
      1000
    );
  });

  /* Scroll to kapcsolat */
  $("#kapcsolatText").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top - 60 },
      1000
    );
  });

  /* Navigation scroll */
  /*
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
              }
            });
          });
          */

  /* Animations on scroll */

  /* text fade in */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );

  /* iPhone fades in from left */
  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInLeft");
    },
    {
      offset: "50%"
    }
  );

  /* cities fade in */
  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  /* contact card pulse */
  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  /* Mobile navigation */

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);

    // $('.js--main-nav').slideToggle(200);

    /*
        if (icon.attr ("name", "menu")) {
            icon.attr ("name", "close");
        } else if (icon.attr ("name", "close")){
            icon.attr ("name", "menu");
        }
        */
  });
});
