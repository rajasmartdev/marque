 // All JS selectors and dynamically created classes use nw- prefix

        // Create animated lines moving in different directions
        function createAnimatedLines() {
            const footer = document.querySelector('.nw-footer');

            // Configuration for different line types
            const lineConfigs = [
                // Vertical lines moving up
                { type: 'nw-line-vertical', animation: 'nw-moveUp', count: 4, leftRange: [0, 100] },
                // Vertical lines moving down
                { type: 'nw-line-vertical', animation: 'nw-moveDown', count: 4, leftRange: [0, 100] },
                // Horizontal lines moving left
                { type: 'nw-line-horizontal', animation: 'nw-moveLeft', count: 3, topRange: [0, 100] },
                // Horizontal lines moving right
                { type: 'nw-line-horizontal', animation: 'nw-moveRight', count: 3, topRange: [0, 100] },
                // Diagonal lines
                { type: 'nw-line-diagonal', animation: 'nw-moveDiagonalTR', count: 2 },
                { type: 'nw-line-diagonal', animation: 'nw-moveDiagonalTL', count: 2 }
            ];

            lineConfigs.forEach(config => {
                for (let i = 0; i < config.count; i++) {
                    const line = document.createElement('div');
                    line.className = config.type;

                    const duration = Math.random() * 4 + 3; // 3-7 seconds
                    const delay = Math.random() * 5; // 0-5 seconds delay

                    let styleString = `
                        animation: ${config.animation} ${duration}s linear infinite;
                        animation-delay: ${delay}s;
                        opacity: 0.9;
                    `;

                    // Position lines based on type
                    if (config.leftRange) {
                        const left = Math.random() * (config.leftRange[1] - config.leftRange[0]) + config.leftRange[0];
                        styleString += `left: ${left}%;`;
                    }

                    if (config.topRange) {
                        const top = Math.random() * (config.topRange[1] - config.topRange[0]) + config.topRange[0];
                        styleString += `top: ${top}%;`;
                    } else {
                        // default top for vertical/diagonal lines if not specified
                        styleString += `top: ${Math.random() * 100}%;`;
                    }

                    // minor random size tweak for visual variety
                    if (config.type === 'nw-line-horizontal' || config.type === 'nw-line-diagonal') {
                        const w = 60 + Math.random() * 120;
                        styleString += `width: ${w}px;`;
                    }

                    line.style.cssText = styleString;
                    footer.appendChild(line);
                }
            });
        }

        createAnimatedLines();

        // Create glowing orbs
        function createGlowingOrbs() {
            const footer = document.querySelector('.nw-footer');
            for (let i = 0; i < 5; i++) {
                const orb = document.createElement('div');
                orb.className = 'nw-glow-orb';
                const size = Math.random() * 100 + 80;
                orb.style.cssText = `
                    width: ${size}px;
                    height: ${size}px;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: nw-orbFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 3}s;
                    opacity: 0.9;
                `;
                footer.appendChild(orb);
            }
        }
        createGlowingOrbs();

        // Create meteors
        function createMeteors() {
            const footer = document.querySelector('.nw-footer');
            setInterval(() => {
                const meteor = document.createElement('div');
                meteor.className = 'nw-meteor';
                meteor.style.cssText = `
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 30}%;
                    animation: nw-meteor ${Math.random() * 1 + 1}s linear forwards;
                `;
                footer.appendChild(meteor);
                setTimeout(() => meteor.remove(), 2000);
            }, 3000);
        }
        createMeteors();

        // Create floating particles
        function createParticles() {
            const footer = document.querySelector('.nw-footer');
            const particleCount = 15;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'nw-particle';

                const size = Math.random() * 4 + 2;
                const startPos = Math.random() * 100;
                const drift = (Math.random() - 0.5) * 200;
                const duration = Math.random() * 10 + 15;
                const delay = Math.random() * 5;

                particle.style.cssText = `
                    width: ${size}px;
                    height: ${size}px;
                    left: ${startPos}%;
                    bottom: -10px;
                    --nw-drift: ${drift}px;
                    animation-duration: ${duration}s;
                    animation-delay: ${delay}s;
                    opacity: 0.9;
                `;

                footer.appendChild(particle);
            }
        }

        createParticles();

        // Show/hide back to top button
        const backToTopBtn = document.querySelector('.nw-back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        });

        // Newsletter form handler
        const nwNewsletterForm = document.querySelector('.nw-newsletter-form');
        if (nwNewsletterForm) {
            nwNewsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const input = document.querySelector('.nw-newsletter-input');
                // Replace alert with nicer UI / AJAX subscription as needed
                alert('Thank you for subscribing to The Marque Club!');
                if (input) input.value = '';
            });
        }

        // Accessibility: enable keyboard shortcut (press "t") to go top
        window.addEventListener('keydown', (e) => {
            if (e.key === 't' || e.key === 'T') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });