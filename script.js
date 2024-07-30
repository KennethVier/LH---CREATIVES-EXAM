$(document).ready(function() {
    $('#header-placeholder').load('HEADER/header.html', function() {
        loadCSS('HEADER/header.css');

        const headerContainer = document.getElementById('header-placeholder');

        const logoSrc = headerContainer.getAttribute('data-logo-src');
        const logoAlt = headerContainer.getAttribute('data-logo-alt');
        
        if (logoSrc) {
            $('.logo-cont img').attr('src', logoSrc);
        }
        
        if (logoAlt) {
            $('.logo-cont img').attr('alt', logoAlt);
        }

        const navLinks = JSON.parse(headerContainer.getAttribute('data-nav-links')) || [];
        
        if (navLinks.length > 0) {
            const navList = $('.navlist');
            navList.empty(); 
            
            navLinks.forEach(link => {
                const aTag = $('<a></a>')
                    .attr('href', link.href)
                    .html(link.text);
                
                navList.append(aTag);
            });
        }

        const contactLinkText = headerContainer.getAttribute('data-contact-text');
        if (contactLinkText) {
            $('.contact a').text(contactLinkText);
        }
    });

    $('#cards-placeholder').load('CARD/card.html', function() {
        loadCSS('CARD/card.css');

        updateCards();
    });

    $('#section-placeholder').load('SECTION/section.html', function() {
        loadCSS('SECTION/section.css');
    });

    $('#accordion-placeholder').load('ACCORDION/accordion.html', function() {
        loadCSS('ACCORDION/accordion.css');
        const accordionContainer = document.getElementById('accordion-placeholder');

        const title = accordionContainer.getAttribute('data-accordion-title');
        const headers = JSON.parse(accordionContainer.getAttribute('data-accordion-header') || '[]');
        const descriptions = JSON.parse(accordionContainer.getAttribute('data-accordion-description') || '[]');

        if (title || headers.length > 0 || descriptions.length > 0) {
            updateAccordionFromAttributes(title, headers, descriptions);
        }

        initializeAccordion();
    });

    $('#form-placeholder').load('FORM/form.html', function() {
        loadCSS('FORM/form.css');
    });

    $('#footer-placeholder').load('FOOTER/footer.html', function() {
        loadCSS('FOOTER/footer.css');
    });

    fetch('HERO/hero.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const heroImg = doc.querySelector('.hero-img');
            const defaultH1 = doc.querySelector('.h1-hero').textContent;
            const defaultP = doc.querySelector('.p-hero').textContent;

            function updateHeroText(h1Text, pText) {
                heroImg.querySelector('h1').textContent = h1Text;
                heroImg.querySelector('p').textContent = pText;
            }

            const heroContainer = document.getElementById('hero-container');
            const heroTitle = heroContainer.getAttribute('data-hero-title');
            const heroSubtitle = heroContainer.getAttribute('data-hero-subtitle');

            updateHeroText(heroTitle || defaultH1 , heroSubtitle || defaultP);

            heroContainer.appendChild(heroImg);

            loadCSS('HERO/hero.css');
        })
        .catch(error => console.error('Error fetching the hero.html:', error));

    fetch('CAROUSEL/carousel.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const carousel = doc.querySelector('.carousel');

            function updateCarouselContent(title, items) {
                const carouselTitle = carousel.querySelector('.carousel-title');
                const carouselInner = carousel.querySelector('.carousel-inner');

                if (title) {
                    carouselTitle.textContent = title;
                }

                if (items && items.length) {
                    carouselInner.innerHTML = ''; 

                    items.forEach(item => {
                        const carouselItem = document.createElement('div');
                        carouselItem.classList.add('carousel-item');
                        carouselItem.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
                        carouselInner.appendChild(carouselItem);
                    });

                    updateCarouselItemWidth();
                }
            }

            const carouselContainer = document.getElementById('carousel-container');
            const carouselTitle = carouselContainer.getAttribute('data-carousel-title');
            const carouselItems = JSON.parse(carouselContainer.getAttribute('data-carousel-items')) || [];

            updateCarouselContent(
                carouselTitle,
                carouselItems
            );

            carouselContainer.appendChild(carousel);

            loadCSS('CAROUSEL/carousel.css');
        })
        .catch(error => console.error('Error fetching the carousel.html:', error));

    function loadCSS(cssFile) {
        if (!$('link[href="' + cssFile + '"]').length) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    }

    function updateCards() {
        const fourColumnContainer = document.querySelector('.card-container.four-columns');
        const threeColumnContainer = document.querySelector('.card-container.three-columns');

        const fourColumnCards = JSON.parse(document.getElementById('cards-placeholder').getAttribute('data-four-column-cards') || '[]');
        const threeColumnCards = JSON.parse(document.getElementById('cards-placeholder').getAttribute('data-three-column-cards') || '[]');

        function createCardHTML(item) {
            return `
                <div class="card">
                    <img src="${item.src}" alt="${item.alt}">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            `;
        }

        if (fourColumnContainer && fourColumnCards.length) {
            fourColumnContainer.innerHTML = fourColumnCards.map(createCardHTML).join('');
        }

        if (threeColumnContainer && threeColumnCards.length) {
            threeColumnContainer.innerHTML = threeColumnCards.map(createCardHTML).join('');
        }
    }

    function updateAccordionFromAttributes(title, headers, descriptions) {
        const accordionContainer = document.getElementById('accordion-placeholder');
        
        // Update <h1> tag if title attribute is present
        if (title) {
            const h1 = accordionContainer.querySelector('h1');
            if (h1) {
                h1.textContent = title;
            } else {
                const newH1 = document.createElement('h1');
                newH1.textContent = title;
                accordionContainer.insertBefore(newH1, accordionContainer.firstChild);
            }
        }

        // Update accordion items if headers and descriptions attributes are present
        const accordionButtons = accordionContainer.getElementsByClassName('accordion');
        const accordionPanels = accordionContainer.getElementsByClassName('panel');

        headers.forEach((header, index) => {
            if (accordionButtons[index]) {
                accordionButtons[index].textContent = header;
            } else {
                const button = document.createElement('button');
                button.classList.add('accordion');
                button.textContent = header;
                accordionContainer.appendChild(button);

                const panel = document.createElement('div');
                panel.classList.add('panel');
                panel.innerHTML = `<p>${descriptions[index]}</p>`;
                accordionContainer.appendChild(panel);
            }
        });

        descriptions.forEach((description, index) => {
            if (accordionPanels[index]) {
                accordionPanels[index].querySelector('p').textContent = description;
            }
        });
    }
});
