"use strict";


jQuery(document).ready(function () {
  
  /* =========================================================
  Main Menu
  ============================================================ */

  Modernizr.load([
    {
      load: 'js/superfish.js',
      complete: function () {

          //Main menu
          jQuery('#main-menu').superfish({
          });

          jQuery("#main-menu > li").each(function() {
              if(jQuery(this).has("ul").length > 0) {
                  jQuery(this).addClass('has-child');
              }
          });

      }
    }
  ]);

  /* =========================================================
  Mobile Menu
  ============================================================ */
  Modernizr.load([
    {
      load: 'js/jquery.navgoco.js',
      complete: function () {

          jQuery('#mobile-menu').navgoco({accordion: true});
          jQuery( "#main-nav > i" ).click(function(){
              jQuery( "#mobile-menu" ).slideToggle( "slow" );
          });
      }
    }
  ]);


  /* =========================================================
  FredCarousel
  ============================================================ */

  //HeadLine Scroller
  Modernizr.load([
    {
      load: 'js/jquery.carouFredSel-6.2.1-packed.js',
      complete: function () {
        var _scroll = {
            delay: 1000,
            easing: 'linear',
            items: 1,
            duration: 0.07,
            timeoutDuration: 0,
            pauseOnHover: 'immediate'
        };
        if( jQuery(".ticker-1").length > 0){
            jQuery('.ticker-1').carouFredSel({
                width: 1000,
                align: false,
                items: {
                    width: 'variable',
                    height: 36,
                    visible: 1
                },
                scroll: _scroll
            });
        }

        //  set carousels to be 100% wide
        jQuery('.caroufredsel_wrapper').css('width', '100%');
      }
    }
  ]);

  // Article list widget
  if( jQuery(".kp-article-list-carousel").length > 0){    
    Modernizr.load([
      {
        load: 'js/jquery.carouFredSel-6.2.1-packed.js',
        complete: function () {

            jQuery('.kp-article-list-carousel').carouFredSel({
                responsive: true,
                prev: '#prev-1',
                next: '#next-1',
                width: '100%',
                scroll: 1,
                pagination: "#pager2",
                auto: false,
                items: {
                    width: 248,
                    height: 'auto',
                    visible: {              
                        min: 1,
                        max: 4
                    }
                }
            });

        }
      }
    ]);      
  };


  /* =========================================================
  Owl Carousel
  ============================================================ */
  if (jQuery('.kp-gallery-owl-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kp-gallery-owl-carousel').owlCarousel({
                items : 5,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
  };


  // Media widget in Home style 1

  if (jQuery('.kp-media-owl-carousel').length > 0) {
    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kp-media-owl-carousel').owlCarousel({
                items : 4,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
  };


  // Carousel in Multimedia page

  if (jQuery('.kp-multimedia-owl-carousel').length > 0) {
    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kp-multimedia-owl-carousel').owlCarousel({
                items : 4,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
  };


  /* =========================================================
  Flex slider
  ============================================================ */
  Modernizr.load([
    {
      load: 'js/jquery.flexslider-min.js',
      complete: function () {
        jQuery('.kp-top-news-slider').flexslider({
          animation: "slide",
          controlNav: false,
          slideshow: false,
          start: function(slider){
            jQuery('body').removeClass('loading');
          }
        });
      }
    }
  ]);

  Modernizr.load([
    {
      load: 'js/jquery.flexslider-min.js',
      complete: function () {
        jQuery('.kp-featured-item-slider').flexslider({
          animation: "slide",
          controlNav: false,
          slideshow: false,
          start: function(slider){
            jQuery('body').removeClass('loading');
          }
        });
      }
    }
  ]);


  /* =========================================================
  Masonry
  ============================================================ */

  if (jQuery('.kp-media-list').length > 0) {
    Modernizr.load([
      {
        load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
        complete: function () {
          var $container = jQuery('.kp-media-list');
          // initialize
          
          imagesLoaded($container,function(){
            $container.masonry({
              columnWidth: 1,
              itemSelector: '.element'
            });
            $container.masonry('bindResize')
          });
        }
      }
    ]);
  };


  if (jQuery('.kp-article-list').length > 0) {
    Modernizr.load([
      {
        load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
        complete: function () {
          var $container = jQuery('.kp-article-list');
          // initialize
          
          imagesLoaded($container,function(){
            $container.masonry({
              gutterWidth: 20,
              itemSelector: '.kp-article-element'
            });
            $container.masonry('bindResize')
          });
        }
      }
    ]);
  };


  if (jQuery('.kp-article-list-2').length > 0) {
    Modernizr.load([
      {
        load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
        complete: function () {
          var $container = jQuery('.kp-article-list-2');
          // initialize
          
          imagesLoaded($container,function(){
            $container.masonry({
              gutterWidth: 20,
              itemSelector: '.kp-article-element-2'
            });
            $container.masonry('bindResize')
          });
        }
      }
    ]);
  };


  if (jQuery('.kp-gallery-list').length > 0) {
    Modernizr.load([
      {
        load: ['js/masonry.pkgd.js','js/imagesloaded.js','js/filtermasonry.js'],
        complete: function () {
          var $container = $('.kp-gallery-list');
          if ($container.length > 0) {
              $container.imagesLoaded(function(){
                  $container.multipleFilterMasonry({
                      itemSelector: '.gallery-item',
                      filtersGroupSelector:'.filters'
                  });
                  jQuery('#options li label').click(function(){
                    jQuery('#options li label').removeClass('active');
                    jQuery(this).addClass('active');
                  });
              });
          };
        }
      }
    ]);
  };

  
  /* =========================================================
  Flickr
  ============================================================ */
  if (jQuery('#flickr-feed-1').length > 0) {
    Modernizr.load([
      {
        load: ['js/jflickrfeed.js','js/imgliquid.js'],
        complete: function () {
          jQuery('#flickr-feed-1 ul').jflickrfeed({
            limit: 9,
            qstrings: {
                id: '78715597@N07'
            },
            itemTemplate:
                '<li class="flickr-badge-image">' +
                '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid" style="width:75px; height:75px;">' +
                '<img src="{{image_s}}" alt="{{title}}" />' +
                '</a>' +
                '</li>'
        }, function(data) {
            jQuery('#flickr-feed-1 .imgLiquid').imgLiquid();
        });

          
        }
      }
    ]);
  }


  /* =========================================================
  Twitter
  ============================================================ */
  if (jQuery('#tweets').length > 0) {
    Modernizr.load([
      {
        load: ['js/jquery.timeago.js','js/jquery.tweetable.js'],
        complete: function () {
            jQuery('#tweets').tweetable({
                username: 'kopasoft ',
                time: true,
                rotate: false,
                speed: 4000,
                limit: 3,
                replies: false,
                position: 'append',
                failed: "Sorry, twitter is currently unavailable for this user.",
                loading: "Loading tweets...",
                html5: true,
                onComplete: function ($ul) {
                    jQuery('time').timeago();
                }
            });
        }
      }
    ]);
  }

  /* =========================================================
  prettyPhoto
  ============================================================ */
  Modernizr.load([
    {
      load: 'js/jquery.prettyPhoto.js',
      complete: function () {
        var view_p_w = jQuery(window).width();
        var pp_w = 500;
        var pp_h = 344;
        
        if(view_p_w <= 479){
          pp_w = '120%';
          pp_h = '100%';
        }
        else if(view_p_w >= 480 && view_p_w <= 599){
          pp_w = '100%';
          pp_h = '170%';
        }
                
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({
          show_title: false,
          deeplinking:false,
          social_tools:false,
          default_width: pp_w,
          default_height: pp_h
        });
      }
    }
  ]);


  /* =========================================================
  Comment Form
  ============================================================ */
  if(jQuery("#comments-form").length > 0){

    Modernizr.load([
      {
        load: ['js/jquery.form.js','js/jquery.validate.js'],
        complete: function () {

          jQuery('#comments-form').validate({

            // Add requirements to each of the fields
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                name: {
                    required: true,
                    minlength: 2
                },
                website: {
                    required: true,
                    minlength: 2
                },
                
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                username: {
                    required: "Please enter your name.",
                    username: "Please enter a valid email."
                },
                 website: {
                    required: "Please enter your Website.",
                    website: "Please enter a valid email."
                },
                
                name: {
                    required: "Please enter your name.",
                    name: "Please enter a valid email."
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                url: {
                    required: "Please enter your url.",
                    url: "Please enter a valid url."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            
            //Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery("#submit-comment").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, $form) {
                        jQuery("#response").html(responseText).hide().slideDown("fast");
                        jQuery("#submit-comment").attr("value", "Comment");
                    }
                });
                return false;
            }
          });

        }
      }
    ]);
  }


  /* =========================================================
  Contact Form
  ============================================================ */
  if(jQuery("#contact-form").length > 0){

    Modernizr.load([
      {
        load: ['js/jquery.form.js','js/jquery.validate.js'],
        complete: function () {

          jQuery('#contact-form').validate({

            // Add requirements to each of the fields
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                name: {
                    required: true,
                    minlength: 2
                },
                 website: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                username: {
                    required: "Please enter your name.",
                    username: "Please enter a valid Username."
                },
                name: {
                    required: "Please enter your name.",
                     name: "Please enter a valid Username."
                },
                website: {
                    required: "Please enter your Website.",
                     website: "Please enter a valid Username."
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                url: {
                    required: "Please enter your url.",
                    url: "Please enter a valid url."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery("#submit-contact").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, $form) {
                        jQuery("#response").html(responseText).hide().slideDown("fast");
                        jQuery("#message").html("User Registration Successfully...");
                        $('#contact_name').val('');
                        $('#contact_email').val('');
                        $('#contact_url').val('');
                        $('#contact_message').val('');
                        jQuery("#user").html("User Profile Edit Successfully...");
                        jQuery("#messagecontact").html("Thanks For Contact Us");
                        jQuery("#submit-contact").attr("value", "Submit");
                    }
                });
                return false;
            }
          });

        }
      }
    ]);
  }

});

/* =========================================================
Search Box
============================================================ */
jQuery(document).ready(function () {

  if (jQuery('.dark-box .search-box').length > 0) {
      jQuery('.search-box').hover(function () {
              jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                  width: '200px',
                  padding: '6px 12px'
              }, 600);
      },function(){
              jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                  width: 0,
                  padding: 0
              }, 600);
      });
  };

});

/* =========================================================
Auto increase number
============================================================ */
jQuery(document).ready(function() {
  jQuery('.kp-article-list-widget .entry-item.no-thumb .entry-thumb .thumb-number').each(function(index) {
    jQuery(this).html((index + 1) + jQuery(this).html());
  });
});

/* =========================================================
Tabs
============================================================ */
jQuery(document).ready(function() { 
    
  if( jQuery(".tab-content-1-3").length > 0){   
      //Default Action Product Tab
      jQuery(".tab-content-1-3").hide(); //Hide all content
      jQuery("ul.tabs-1 li:first").addClass("active").show(); //Activate first tab
      jQuery(".tab-content-1-3:first").show(); //Show first tab content
      //On Click Event Product Tab
      jQuery("ul.tabs-1 li").click(function() {
          jQuery("ul.tabs-1 li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery(".tab-content-1-3").hide(); //Hide all tab content
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      
      });
  }

  if( jQuery(".tab-content-2-3").length > 0){   
      //Default Action Product Tab
      jQuery(".tab-content-2-3").hide(); //Hide all content
      jQuery("ul.tabs-2 li:first").addClass("active").show(); //Activate first tab
      jQuery(".tab-content-2-3:first").show(); //Show first tab content
      //On Click Event Product Tab
      jQuery("ul.tabs-2 li").click(function() {
          jQuery("ul.tabs-2 li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery(".tab-content-2-3").hide(); //Hide all tab content
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      
      });
  }

  if( jQuery(".tab-content-3").length > 0){   
      //Default Action Product Tab
      jQuery(".tab-content-3").hide(); //Hide all content
      jQuery("ul.tabs-3 li:first").addClass("active").show(); //Activate first tab
      jQuery(".tab-content-3:first").show(); //Show first tab content
      //On Click Event Product Tab
      jQuery("ul.tabs-3 li").click(function() {
          var CurrentPosition = jQuery(this).position();
          var NewTop = CurrentPosition.top;
          jQuery(".tab-highlight").animate({
              "top":NewTop
          },"normal");
          jQuery("ul.tabs-3 li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery(".tab-content-3").hide(); //Hide all tab content
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content

          
          if (jQuery('.kp-article-list-2').length > 0) {
            Modernizr.load([
              {
                load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
                complete: function () {
                  var $container = jQuery('.kp-article-list-2');
                  // initialize
                  
                  imagesLoaded($container,function(){
                    $container.masonry({
                      gutterWidth: 20,
                      itemSelector: '.kp-article-element-2'
                    });
                    $container.masonry('bindResize')
                  });
                }
              }
            ]);
          };

          return false;
      
      });
  }


  if( jQuery(".tab-content-4").length > 0){   
      //Default Action Product Tab
      jQuery(".tab-content-4").hide(); //Hide all content
      jQuery("ul.tabs-4 li:first").addClass("active").show(); //Activate first tab
      jQuery(".tab-content-4:first").show(); //Show first tab content
      //On Click Event Product Tab
      jQuery("ul.tabs-4 li").click(function() {
          jQuery("ul.tabs-4 li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery(".tab-content-4").hide(); //Hide all tab content
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      
      });
  }


  if( jQuery(".tab-content-5").length > 0){   
      //Default Action Product Tab
      jQuery(".tab-content-5").hide(); //Hide all content
      jQuery("ul.tabs-5 li:first").addClass("active").show(); //Activate first tab
      jQuery(".tab-content-5:first").show(); //Show first tab content
      //On Click Event Product Tab
      jQuery("ul.tabs-5 li").click(function() {
          jQuery("ul.tabs-5 li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery(".tab-content-5").hide(); //Hide all tab content
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      
      });
  }
    
});


/* =========================================================
Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
  jQuery('#toggle-view li').click(function (event) {
      
      var text = jQuery(this).children('div.panel');

      if (text.is(':hidden')) {
          jQuery(this).addClass('active');
          text.slideDown('300');
          jQuery(this).children('span').html('-');                 
      } else {
          jQuery(this).removeClass('active');
          text.slideUp('300');
          jQuery(this).children('span').html('+');               
      }
       
  });
 
});


/* =========================================================
Accordion
========================================================= */
jQuery(document).ready(function() {
    var acc_wrapper=jQuery('.acc-wrapper');
    if (acc_wrapper.length >0) 
    {
        
        jQuery('.acc-wrapper .accordion-container').hide();
        jQuery.each(acc_wrapper, function(index, item){
            jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
            
        });
        
        jQuery('.accordion-title').on('click', function(e) {
            kopa_accordion_click(jQuery(this));
            e.preventDefault();
        });
        
        var titles = jQuery('.accordion-title');
        
        jQuery.each(titles,function(){
            kopa_accordion_click(jQuery(this));
        });
    }        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('+');
    if (obj.hasClass('active')) {
        obj.find('span').first().html('-');              
    } 
}


/* =========================================================
Scroll to top
============================================================ */
jQuery(document).ready(function(){

    // hide #back-top first
    jQuery("#back-top").hide();
    
    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});


/* =========================================================
Google Map
============================================================ */
var map;

if (jQuery('.kp-map').length > 0) {
      var id_map = jQuery('.kp-map').attr('id');
      var lat = parseFloat(jQuery('.kp-map').attr('data-latitude'));
      var lng = parseFloat(jQuery('.kp-map').attr('data-longitude'));
      var place = jQuery('.kp-map').attr('data-place');

  map = new GMaps({
      el: '#'+id_map,
      lat: lat,
      lng: lng,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    map.addMarker({
      lat: lat,
        lng: lng,
      title: place
    });
};

