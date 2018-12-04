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

var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function (e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h, //cursor position Y
        dy = e.pageY - h / 2, //@h/2 = center of poster
        dx = e.pageX - w / 2, //@w/2 = center of poster
        theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
        angle = theta * 180 / Math.PI - 90, //convert rad in degrees
        offsetPoster = $menu.data('offset'),
        transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
        angle = angle + 360;
    }

    //poster transform
    $menu.css('transform', transformPoster);

    //parallax for each layer
    $item.each(function () {
        var $this = $(this),
            offsetLayer = $this.data('offset') || 0,
            transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

        $this.css('transform', transformLayer);
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


