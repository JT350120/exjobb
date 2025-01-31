# Peiriant Motor Cars
## Configurator app and website for my fictional car brand
### A Vue + Vite app by Johan Törmä, Medieinstitutet FED23D

### Short description

My degree project is inspired by car brand websites where the user can customize their own car by choosing colors, engines and other options. The entire application is a single html-page where different content is loaded through conditional rendering in Vue. 

The configurator is a JavaScript app using two Pinia stores, content.js and global.js, one to get the different options and one to store the chosen options. The car is an SVG that is styled according to the user set variables.

### Tech stack

- HTML/CSS
- JavaScript
- Vite
- Vue
- Pinia
- Tailwind
- Gimp
- Inkscape
- MS Paint
- ChatGPT
- GitHub Pages 
- Visual Studio Code
- Google Chrome Lighthouse
- Google Fonts

### Technical breakdown

In the App.vue file template-tag I have added the header first, the footer last, and in between the different main components to “navigate” to, or actually show/hide, using the buttons in the header menu and elsewhere through the application. 

#### Pinia stores
To have one easy source of truth accessible in each component, the rendering status mentioned above is stored in the Pinia store called “globalVariables”. The current configuration options and index of chosen model are other examples of variables stored here.

My other Pinia store is called “content”, which contains text content of the website and also information about the car, its specifications, pricing, and all available options. If I wish to add a color choice for example, I can easily do so by adding a color object in the colors-array, giving it a price, a name and a HEX-string, and my front end will loop out a new button with this color and it will all work. 

To conclude my stores: globalVariables.js contains variables that the user can change through the app, content.js contains information that is static no matter what the user does (but changeable if one has access to it, a hypothetical site admin for example).

#### Header
A component at the top with navigation and the Peiriant logo, a button with an SVG image, which when clicked renders the hero section. On mobile it is a hamburger menu which shows the Menu-component when clicked, on desktop the hamburger menu way of doing it requires an unnecessary click while providing no real benefits, so on desktop the menu items are always visible in a row.

#### Hero
The Hero component is my starting page. It is a flex column that other components can be added into, I figured it makes it easy to expand the hero with new content like seasonal deals or new models the company would like to show on the first page. The component that the hero shows right now is the Welcome-component, which shows an overlay with an animation of the logo and slogan, which fades away using a JavaScript time out, and shows a background image. 

The Hero section is rendered with v-show in App.vue, the other components with v-if. The reason for this is that I only want to run the animation in the Welcome-component once, and not every time you navigate to the starting page which users might get tired of.  Since v-if toggles whether the component exists in the DOM at all and v-show only toggles visibility, the Hero section is just loaded once when using v-show and therefore the animation only runs once.

#### Configurator and SVG-component
Configurator.vue is the main car configurator component. The configurator is coded in JavaScript, using one single SVG of the car. Below the model name there is a decorative divider with a car shaped SVG. The price is updated in real time according to the configuration choices. 

Since an SVG file gets very long when using more advanced images, having it in the Configurator component was out of the question since there would be so many lines of code in it already to manage the user interface logic. I tried different solutions for moving my SVG somewhere else. I was initially planning on having it in a separate assets folder and load it in, or stored as a string in a Pinia store and load it in that way, but it turned out to be a better solution to create a component named SVG150.vue (150 is the model name) and simply paste the SVG code in there and let Configurator.vue use it as an import. 

On desktop, the structure is a split view with the car on the left and a list of options on the right. On smaller laptop screens like mine the overflow scrolls, and to make the scrollbar to the right visible I had to add a right-hand margin to the button section. Initially the buttons were supposed to stretch all the way to the end of the viewport. On mobile the view is in one column with the car view on top and the buttons rendered below. 

 ![Configurator](/readme_images/configurator.png)

“Spara bil” saves the car by saving the current state of “globalVariables.configuration” as “config” in local storage, with visual feedback that the car has been saved (the text “sparad” appears for a couple of seconds). “Ladda sparad bil” does the opposite, updates globalVariables.configuration to the value of the item “config”.

The car is generated as a PNG-file by chatGPT, modified in MS Paint to my liking, and traced in Inkscape to a vector image. The main reason for using vector graphics is that all parts of a vector image are accessible in code which makes it easy to hide/show and color it and to add functionality to different parts of the image which is what I needed.

![Car SVG open in Inkscape](/readme_images/inkscape.png)

Note that every option the user can choose is drawn in the same file in Inkscape, grouped and named to something understandable so I can style it easily. Then added as objects in content.js to get a name and a price and to be looped out as a choice button. 

By binding classes dynamically in Vue, The Tailwind class “inline” (display: inline in CSS) are added to chosen options, and “hidden” (display: none) are added to the unchosen.  The store “globalVariables” keeps track of the current configuration as chosen with the buttons and renders accordingly.

The “paint” group in my SVG is the filling between the black outlines. How it is changed in the code is through dynamically binding the CSS property “fill” in Vue to the chosen color variable in globalVariables. This variable is set by the user through menu buttons, which like the other options are looped out according to the different color objects in the Pinia store “content” mentioned earlier. 

To visualize this, I have included an illustration:

 ![Visualization of color change from stores to SVG](/readme_images/colorchoice.png)

When first loading the configurator, a default configuration is applied which gets the car model object from the content store and renders the first item in every category of options, except the “tillval” one (“extras” in the code) since all categories except “tillval” requires one choice, and one choice only. 

“Tillval” is handled a bit differently, since you could choose any number of options including none at all, so this is instead an array that defaults to empty when loading the configurator. The choice buttons then add (push) a choice of from content.js into the array, or remove (splice) it when clicked again.

#### Models
This is the component that lists the car models in a flex column structure. I am looping out a ModelPresentation-component for each model. Only one model at this stage, but since they are looped out from content.js I can add more with not too much work.

ModelPresentation consists of a box to the left which contains the model name, price, a decorative divider with a car shaped SVG, and buttons in the bottom to see more information or to build your own. To the right is a box with a background image (AI generated, the car edited in and modified to fit my style). On mobile the structure is instead a flex column instead of a flex row and the background image is different (cropped to scale easily with the car still in focus).

 ![Models listing](/readme_images/models.png)

#### Explore
A component which shows more information about the chosen car. On desktop, the view is split up as shown, on mobile everything is listed one after the other in a column. 

In the bottom, the car SVG is rendered, with points of interest (blue SVG circles) to click on which opens a box (InfoBox component) that shows information based on which circle was clicked. 

 ![Explore](/readme_images/explore.png)

The circles are scaling when hovered, clickable with a click event, focusable with tabbing and enter/spacebar and aria-labelled dynamically according to the information shown. I had to add the tabbing manually with a “tabindex” attribute for accessibility since the browser doesn’t handle these circles as normal buttons. Using interactive SVG elements this way is, however, an easy way of getting them in the exact right position no matter how the SVG is scaled. 

To make it clear to the user that the circles are interactive, I added an animation that scales the circles up and down by binding the r-attribute (radius) of the circles to a reactive Vue state and toggling it back and forth with a JavaScript interval. When hovered or clicked, the animation stops by clearing the interval.

I added buttons to take the user to the configurator, dealers or “Tekniska data” which shows detailed specifications of the car such as measurements and engine details. All of this content is of course loaded in from the chosen model’s object in content.js. The data is shown in the same InfoBox-component as the points of interest, by toggling a “specificationsMode”-variable. 

#### Dealers
A part where the dealers are located with names and addresses. I loop through a dealers-array which contains objects with information about all dealers. 

 ![Dealer list with map](/readme_images/dealers.png)

The map is drawn by me in MS Paint and traced in Inkscape. Each individual dealer to the left is its own component, looped out according to the information in the dealers-array in content.js.

The circles are SVG elements that are looped out in the correct place using the coordinates in the dealer object, like the points of interest in my Explore-component. 

When a circle is clicked, all the other dealers are hidden in the list focusing on just the one that is clicked. A close button appears in the upper right-hand corner, and when clicked, the view returns to listing all of them.

If I wanted to add a dealer, I would just have to create a new object in the dealer-array, add the coordinates and it will automatically show up as a clickable circle connected to the right dealer information on the map.

#### History
A page split into two columns on desktop. One half of the screen is an AI generated picture modified by me, and the other half is text content. In mobile view all content is stacked in one column. The text content is stored in content.js.

 ![History section](/readme_images/history.png)

#### Footer
A component at the bottom with contact information and a button element with the company logo SVG inserted. The contact information is stored in content.js, and the car shaped decorative border is the same SVG as used in the ModelPresentation-component, though hidden in mobile mode to save on width.

#### Contact me

<a href="https://github.com/JT350120">JT350120</a>

johantoerme@live.se