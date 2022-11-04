// https://htmlcheatsheet.com/jquery/
// refer above for jquery cheat sheet

console.log($);
// we will wait for the whole dom to load
$(document).ready(function () {
//   $("#ab").css("color", "blue");
//   $("#ab").click(function () {
//     console.log("clicked");

//     $("#ab").hide();
//     $("#ab").show();
//    $("#a").mouseover(function () {
//       console.log("you mouse is over paragraph",this);
//     });



    // All types of element selector
    // $("#id")
    // $(".class")
    // $('element')


    // on-method
    // $('p').on({
    //     click: function() {
    //   console.log("thanks for clicking",this)
    //     }, mouseleave: function () {
    //         console.log("mouse clicked")
    //     }
    // })

    // working here for hide and show

    $('p').hide(1000, () => {
        console.log("hidden")
    })
    $('p').show(1000, () => {
        console.log("showed")
    })

    $('p').toggle(1000, () => {
        
    })






  });
// });
