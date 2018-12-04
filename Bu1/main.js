// Scroll Magic Tutorial
// var scene1 = new ScrollMagic.Scene({
//     triggerElement: '#trigger1'
// }).setClassToggle('#animateid','newclass')
// .addTo(controller);

$(window).scroll(function () {
    var scrollval = $(this).scrollTop();    // this will return scroll value
    $(".inner").css('transform', 'translate(' + scrollval/1.8 + 'px,' + scrollval + 'px )');
    // '-webkit-transform', 'translate(' + now + 'px,' + now + 'px )'
    // if (scrollval > 270 && scrollval < 530) {
        //$('#welcome').css({ opacity: 50/scrollval });
        //alert("Scroll is greater than 100");
        //     $(".aboutme").addClass("aboutmeforced"); 
        // } else {
        //     $(".aboutme").removeClass("aboutmeforced");         
        // };
});

// var abtme = $('.imgx');

// $(document).ready(function () {
// abc.waypoint(function (){
//     alert("waypoint");
// });
// });

var waypoint = new Waypoint({
    element: document.getElementById('abcs'),
    handler: function (direction) {
       
    }
})

// function movestuff() {
//     var winwidth = $(window).width();
//     if (winwidth < 1255){
//     alert("win smaller than 555");   $(".mywork").addClass("myworkforced");   $(".skills").removeClass("myworkforced");
// }
// }
// movestuff();

resizestuff();
window.addEventListener('resize', resizestuff);
function resizestuff() {
    if(document.documentElement.clientWidth < 1000){
        //alert("stuff resized");
    }
    else {
        //alert("stuff putback");
        //removeEventListener('resize', resizestuff);
    };
}

// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);