 window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Play button functionality
        document.querySelector('.btn-play').addEventListener('click', function() {
            const modal = document.getElementById('video-modal');
            const videoPlayer = document.getElementById('video-player');
            
            // Using a sample Netflix trailer
            videoPlayer.src = 'https://www.youtube.com/embed/5hAXVqrljbs?autoplay=1';
            modal.style.display = 'flex';
        });
        
        // Close modal functionality
        document.getElementById('close-modal').addEventListener('click', function() {
            const modal = document.getElementById('video-modal');
            const videoPlayer = document.getElementById('video-player');
            
            videoPlayer.src = '';
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('video-modal');
            if (event.target === modal) {
                const videoPlayer = document.getElementById('video-player');
                videoPlayer.src = '';
                modal.style.display = 'none';
            }
        });
        
        // Simulate movie card hover info
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // In a real implementation, we would fetch and show more info
            });
        });