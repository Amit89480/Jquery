// https://htmlcheatsheet.com/jquery/
// refer above for jquery cheat sheet

console.log($);
// we will wait for the whole dom to load
$(document).ready(function () {
    $('p').click();
    $('p').click(function () {
        console.log("clicked")
        $('p').hide();
        $('p').show();
        $('#a').click(function () {
            console.log("clicked");
        })

//others selectors
        

    
    });

     // All types of element selector
    // $("#id")
    // $(".class")
    // $('element')


 
     
})


