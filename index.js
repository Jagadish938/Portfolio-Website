<script>
    // Smooth scrolling function
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var ease = Math.easeInOutCubic(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Request animation frame
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t * t + b;
            t -= 2;
            return (c / 2) * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // Click event listener for the footer links
    var footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSection = this.getAttribute('href');
            smoothScroll(targetSection, 1000); // Adjust the duration (in ms) as needed
        });
    });
</script>
