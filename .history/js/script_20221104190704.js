// https://htmlcheatsheet.com/jquery/
// refer above for jquery se

console.log($);
// we will wait for the whole dom to load
$(document).ready(function () {
    $('p').click();
    $('p').click(function () {
        console.log("clicked")
        $('p').hide();
        $('p').show();
    
    });
     
})


