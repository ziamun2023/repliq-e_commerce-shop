$(document).ready(function() {

    $(document).ready(function() {
        const carousel = $('.carousel');
        const items = $('.item');
        const prevButton = $('.prev');
        const nextButton = $('.next');
        let currentIndex = 0;
      
        prevButton.click(function() {
          if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
          }
        });
      
        nextButton.click(function() {
          if (currentIndex < items.length - 3) {
            currentIndex++;
            updateCarousel();
          }
        });
      
        function updateCarousel() {
          const translateValue = currentIndex * -400;
          carousel.css('transform', `translateX(${translateValue}px)`);
        }
      
        // Auto-scroll the carousel every 2 seconds
        function autoScroll() {
          setInterval(function() {
            if (currentIndex < items.length - 3) {
              currentIndex++;
            } else {
              currentIndex = 0;
            }
            updateCarousel();
          }, 4000);
        }
      
        autoScroll(); // Start auto-scrolling
      });
      


    $(".navbar a").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of anchor links

        var targetSection = $(this).attr("href"); // Get the target section ID
        var targetPosition = $(targetSection).offset().top; // Get the position of the target section
        console.log(targetPosition)

        $("html, body").animate({ scrollTop: targetPosition }, 1500); // Smooth scroll to the target
    });
    $(window).scroll(function() {
        var currentPosition = $(window).scrollTop(); // Get the current scroll position

        $(".navbar a").each(function() {
            var targetSection = $(this).attr("href"); // Get the target section ID
            var targetPosition = $(targetSection).offset().top;
            var sectionHeight = $(targetSection).outerHeight(); // Get the height of the section

            // Check if the current scroll position is within the bounds of the section
            if (currentPosition >= targetPosition && currentPosition < targetPosition + sectionHeight) {
                $(".navbar a").removeClass("active"); // Remove 'active' class from all navbar links
                $(this).addClass("active"); // Add 'active' class to the current navbar link
            }
        });
    });
 

    $('.downArrow').click(function(){
       var targetsection= $(this).data("target")
       console.log(targetsection)
       var targetposition=$(targetsection).offset().top
       $('html,body').animate({scrollTop :targetposition},1200)
    })

    $('.cart').hover(function(){
        var child=  $(this).find('.cartChild')

        child.css("margin-top","100px")
        $(this).css('shadow',"30px")
      
    },
    function(){
        var child=  $(this).find('.cartChild')
        child.css("margin-top","400px")
     
    }
    
    )
});
