// https://htmlcheatsheet.com/jquery/
// refer above for jquery cheat sheet

console.log($);
// we will wait for the whole dom to load
$(document).ready(function () {
    $("#ab").css("color", "blue");
    $('#ab').click(function () {
        console.log("clicked")
       
        $('#ab').hide();
        $('#ab').show();
        $('#a').dbclick(function () {
            console.log("y")
            
        })
         // All types of element selector
            // $("#id")
            // $(".class")
            // $('element')

          
        

    
    });

  


 
     
})


