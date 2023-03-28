## Slideshow-using-Javascript
You don't need google slides or powerpoint to make a slideshow! You can build it all out of HTML, CSS, and JavaScript.

## Instructions
The starter code has the HTML and CSS for a slide show. You'll add the JavaScript to make the slides advance.

add an event listener for click on document.body that logs "clicked"
add another console.log line to print out the currentSlide variable when the body is clicked
On a new line in the event listener, increase the currentSlide variable by 1 with the code currentSlide = currentSlide + 1. At this point, when you click, you should see increasing numbers logged in the console when you click the body.
Take a look at the slide divs in index.html. Each one has a class with the slide number, s-1, s-2, and on.
In the console, write the querySelector code to select the div for a slide, using the number.
Change the selector in your console snippet so that it uses the currentSlide variable. The selector part will use a selector like ".s-" + currentSlide so that it selects the current slide.
Try clicking the button to increase the counter and then running your snippet again, to confirm that it selects a different div after the button is clicked.
Starting with your selector snippet that uses the variable, add the JS code to hide a slide by adding the "hidden" class to the classList. Copy that snippet into the event listener in script.js, before the code that increases the variable
Now, change the snippet so that it shows the slide again by removing the "hidden" class from the classList. Copy that snippet and add it to the event listener too. Add it below the code that increases the variable
When you run the code now, the prior slide will now hide, but the next one is already showing. Add the "hidden" class to slides 2 and above in the HTML, so that those slides are hidden, but not slide 1.
When you run the code now, only slide 1 should start off as showing, and slides 2 and above should all start hidden. When you click, the slides should advance one by one.