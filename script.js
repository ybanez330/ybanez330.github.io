document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
        
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

$(document).ready(function () {
    // Filter button click event
    $('.buttons button').click(function () {
      // Remove active class from all buttons
      $('.buttons button').removeClass('is-selected');
      $('.buttons button').removeClass('dark-button-inverted');
      // Add active class to the clicked button
      $(this).addClass('is-selected');
      $(this).addClass('dark-button-inverted');
  
      // Get the selected filter
      var filter = $(this).data('filter');
  
      // Show/hide project cards based on the selected filter
      $('#projects .section').hide();
      if (filter === 'all') {
        $('#projects .section').show();
      } else {
        $('#projects .section[data-labels*="' + filter + '"]').show();
      }
    });
});