Components and Usage

1. Hero Section
The Hero section includes a main heading and a subheading. Use the following data attributes to customize the text content:

<div id="hero-container" 
     data-hero-title="Hero Text" 
     data-hero-subtitle="Sub Hero Text Sentence">
</div>

    data-hero-title: Sets the main heading text displayed in the Hero section.
    data-hero-subtitle: Sets the subheading text displayed in the Hero section.


2. Header Section
The Header section features a logo, navigation links, and a contact link. Customize this section using the following data attributes:

<div id="header-placeholder" 
     data-logo-src="PATH TO LOGO"
     data-logo-alt="New Logo Alt Text"
     data-nav-links='[
        {"href": "#home", "text": "HOME"},
        {"href": "#about", "text": "ABOUT"},
        {"href": "#service", "text": "SERVICE"},
        {"href": "#contact", "text": "CONTACT"},
        {"href": "#contact", "text": "HELLO"}
     ]'
     data-contact-text="GET IN TOUCH">
</div>

        data-logo-src: URL of the logo image to be displayed.
        data-logo-alt: Alt text for the logo image.
        data-nav-links: A JSON array of objects, each containing href and text for navigation links.
        data-contact-text: Text for the contact link displayed in the header.


3. Carousel Section
The Carousel section displays a series of images with optional captions. Use the following data attributes to configure the content:

<div id="carousel-container" 
     data-carousel-title="Carousel"
     data-carousel-items='[
        {"src": "/ASSETS/carousel-item1.png", "alt": "Item 1"},
        {"src": "/ASSETS/carousel-item2.png", "alt": "Item 2"},
        {"src": "/ASSETS/carousel-item3.png", "alt": "Item 3"}
     ]'>
</div>

        data-carousel-title: Title displayed above the carousel.
        data-carousel-items: A JSON array of objects, each containing src (image URL) and alt (alt text for the image).


4. Cards Section
The Cards section supports different column layouts to display various content cards. Customize the cards using these data attributes:

<div id="cards-placeholder"
     data-four-column-cards='[
        {"src":"/ASSETS/card-4col-img1@2x.png", "alt":"Card Image 1", "title":"Card Title 1", "text":"Card description 1"},
        {"src":"/ASSETS/card-4col-img2@2x.png", "alt":"Card Image 2", "title":"Card Title 2", "text":"Card description 2"},
        {"src":"/ASSETS/card-4col-img3@2x.png", "alt":"Card Image 3", "title":"Card Title 3", "text":"Card description 3"},
        {"src":"/ASSETS/card-4col-img4@2x.png", "alt":"Card Image 4", "title":"Card Title 4", "text":"Card description 4"}
     ]'
     data-three-column-cards='[
        {"src":"/ASSETS/card-3col-img1@2x.png", "alt":"Card Image 5", "title":"Card Title 5", "text":"Card description 5"},
        {"src":"/ASSETS/card-3col-img2@2x.png", "alt":"Card Image 6", "title":"Card Title 6", "text":"Card description 6"},
        {"src":"/ASSETS/card-3col-img3@2x.png", "alt":"Card Image 7", "title":"Card Title 7", "text":"Card description 7"}
     ]'>
</div>

        data-four-column-cards: A JSON array of card objects for the four-column layout. Each object should include src (image URL), alt (alt text), title (card title), and text (card description).
        data-three-column-cards: A JSON array of card objects for the three-column layout with similar properties as above.


5. Accordion Section
The Accordion section allows for expandable and collapsible content panels. Use these data attributes to configure the content:

<div id="accordion-placeholder"
     data-accordion-title="Updated Accordion Title"
     data-accordion-header='["Updated Title 1", "Updated Title 2", "Updated Title 3"]'
     data-accordion-description='["Updated description 1", "Updated description 2"]'>
</div>

        data-accordion-title: Title of the accordion section.
        data-accordion-header: A JSON array of headers for each accordion item.
        data-accordion-description: A JSON array of descriptions corresponding to each header.
