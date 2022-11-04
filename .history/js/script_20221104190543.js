console.log($);
// we will wait 
$(document).ready(function () {
    $('p').click();
    $('p').click(function () {
        console.log("clicked")
        $('p').hide();
        $('p').show();
    
    });
     
})
