// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"


$( document ).ready(function() {
    // All of your code in here
    // This uses jQuery, but there is a plain
    // JavaScript way to do this as well

    //Access (read) the data-color attribute of the <img>, log to the console.
    const $img = $('img');
    console.log($img.attr('data-color'))

    //Update the third <li> item ("Turbocharged"), set the class name to "highlight"
    const $li = $("li:contains(Turbocharged)");
    $li.attr('class', 'highlight');

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $newA = $('<a>');
    $("p:last").after($newA)
    $newA.attr("id", "cta");
    $newA.text("Buy Now!");

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $("p:last").remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $newA.on('click', function(e) {
        let $this = $(this);
        $this.text("Added to cart");
    })

});