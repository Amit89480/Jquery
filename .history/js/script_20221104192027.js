// https://htmlcheatsheet.com/jquery/
// refer above for jquery cheat sheet

console.log($);
// we will wait for the whole dom to load
$(document).ready(function () {
    $('#ab').click();
    $('#ab').click(function () {
        console.log("clicked")
        $('#ab').hide();
        $('#ab').show();
        $('#a').click(function () {
            console.log("clicked");
        })
         // All types of element selector
            // $("#id")
            // $(".class")
            // $('element')

$('#ab').css("color","blue")
        

    
    });

  


 
     
})


