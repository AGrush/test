

// $(function(){
//     $("contact-form").submit(function(e){
//         e.preventDefault();

//         $form=$(this);

//         $.post(document.location.url, $(this).serialize(), function(data){
//             $feedback= $("<div>").html(data).find(".form-feedback");
            
//             $form.prepend($feedback);
//         });


//     });
// })










function animateButton() {
    var button = $('.stuff');

    if (button.hasClass('animate-hi-reverse')) {
        button.removeClass('animate-hi-reverse').addClass('animate-hi');
    }
    else {
        button.addClass('animate-hi');
    }
};
$(document).ready(function () {
    $('.hi').on("click", function () {
        animateButton();
    });
});







$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
});




// $("#menuitem3 a").click(function (e) {

//     var toShow = $(this).attr('data-val');   
//     var activeMenu = $(this).attr('class').split(' ')[1] 
//     querySelector('activeMenu').classList.add('activex');
    
// });

$("a").click(function (e) {
    //e.preventDefault();
    var button = $('.stuff');
    var $toShow = $(this).attr('data-val');  
    $("a.activex").removeClass("activex");
    $(this).addClass("activex");
    
    
    

    if ($toShow == 'content4') {
        $(".toggle").fadeOut(1500);
        $("." + $toShow).delay(1200).fadeIn(400);
    } else {
        $(".toggle").slideUp(1500);
        $("." + $toShow).delay(1200).slideDown(400);

    };
   
    $('.Menu').removeClass('nodisplay');
    
    if (button.hasClass('animate-hi')) { //any other button clicked will add reverse class
        button.removeClass('animate-hi').addClass('animate-hi-reverse');
    }
    
    // $(this).css('display', 'block'); 
    
    
});

$(".33").click(function () {
    $('.Menu').addClass('nodisplay');

});
//////////////////////////////////

//var activeMenu = $(this).attr('class').split(' ')[1];


// $("#menuitem3 a").click(function (e) {
//     // e.preventDefault();
//     var toShow = $(this).attr('data-val');      //".client1" 2 3
//     alert(activeMenu)
//     var activeMenu = $(this).attr('class').split(' ')[1] // get the second class
//     getElementByClassName(activeMenu).classList.addClass('nodisplay');


    // $('.Menu').removeClass('nodisplay');
    // $('#menuitem3 a').removeClass('activex');
    // $('activeMenu').addClass('activex'); 
    // $(".toggle").slideUp();

    // $(toShow).slideDown();

// });


/////////////animate bars//////////////////////
$(".22").click(function (e) {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
});




// $('#menuitem3 a').click(function (e) {
//     e.preventDefault();
//     $('#links a').removeClass('active');
//     $(this).addClass('active');
// });


// function myFunk() {
//     // document.getElementByClass("11").innerHTML = "YOU CLICKED ME!";
//     alert("click")
//     var element = document.getElementById("Menu");
//     element.classList.add("nodisplay");

// }










// Scroll Magic Tutorial
// var scene1 = new ScrollMagic.Scene({
//     triggerElement: '#trigger1'
// }).setClassToggle('#animateid','newclass')
// .addTo(controller);

// $(window).scroll(function () {
//     var scrollval = $(this).scrollTop();    // this will return scroll value
//     $(".inner").css('transform', 'translate(' + scrollval/1.8 + 'px,' + scrollval + 'px )');
//     // '-webkit-transform', 'translate(' + now + 'px,' + now + 'px )'
//     // if (scrollval > 270 && scrollval < 530) {
//         //$('#welcome').css({ opacity: 50/scrollval });
//         //alert("Scroll is greater than 100");
//         //     $(".aboutme").addClass("aboutmeforced"); 
//         // } else {
//         //     $(".aboutme").removeClass("aboutmeforced");         
//         // };
// });

// var abtme = $('.imgx');

// $(document).ready(function () {
// abc.waypoint(function (){
//     alert("waypoint");
// });
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('abcs'),
//     handler: function (direction) {
//        2
//     }
// })

// function movestuff() {
//     var winwidth = $(window).width();
//     if (winwidth < 1255){
//     alert("win smaller than 555");   $(".mywork").addClass("myworkforced");   $(".skills").removeClass("myworkforced");
// }
// }
// movestuff();

// resizestuff();
// window.addEventListener('resize', resizestuff);
// function resizestuff() {
//     if(document.documentElement.clientWidth < 1000){
//         //alert("stuff resized");
//     }
//     else {
//         //alert("stuff putback");
//         //removeEventListener('resize', resizestuff);
//     };
// }

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
        transformPoster = 'translate3d(0, ' + (-offsetX * offsetPoster)/2 + 'px, 0) rotateX(' + (-offsetY * offsetPoster)/2 + 'deg) rotateY(' + (offsetX * (offsetPoster * 2))/2 + 'deg)'; //poster transform
    
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
            transformLayer = 'translate3d(' + (offsetX * offsetLayer)/4 + 'px, ' + (offsetY * offsetLayer)/4 + 'px, 20px)';

        $this.css('transform', transformLayer);
    });
});


////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STARSS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('myCanvas')
const c = canvas.getContext('2d')

let mouseX
let mouseY

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const canvasWidth = canvas.width
const canvasHeight = canvas.height

const maxRadius = 7

window.onmousemove = function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
}

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

function Circle(xCoordinate, yCoordinate, radius) {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomTrueOrFalse = Math.floor(Math.random() * 2)
    var speeD = .1
    this.xCoordinate = xCoordinate
    this.yCoordinate = yCoordinate
    this.radius = radius
    this.color = colorArray[randomNumber]

    if (randomTrueOrFalse == 1) {
        this.xVelocity = -Math.random() * speeD
    } else {
        this.xVelocity = Math.random() * speeD
    }

    if (randomTrueOrFalse == 1) {
        this.yVelocity = -Math.random() * speeD
    } else {
        this.yVelocity = Math.random() * speeD
    }

    // As distance gets closer to 0, increase radius

    this.update = function () {
        this.xCoordinate += this.xVelocity
        const xDistance = mouseX - this.xCoordinate
        const yDistance = mouseY - this.yCoordinate
        const originalRadius = radius
        this.yCoordinate += this.yVelocity

        // Movement Functions
        if (
            this.xCoordinate + this.radius > canvasWidth ||
            this.xCoordinate - this.radius < 0
        ) {
            this.xVelocity = -this.xVelocity                    //when it hits wall reverse y direction
        }
        if (
            this.yCoordinate + this.radius > canvasHeight ||
            this.yCoordinate - this.radius < 0
        ) {
            this.yVelocity = -this.yVelocity                       //when it hits wall reverse x direction
        }

        // Radius Decrease Functions
        
        if (
            xDistance < 15 &&
            xDistance > -15 &&
            this.radius < maxRadius &&
            yDistance < 15 &&
            yDistance > -15
        ) {
            this.radius += 1                                              //radius taht deflates
            //this.yVelocity = +(Math.floor(Math.random() * 2) == 1 ? 1 : -1)*15      //randomly push the circles out 20pxs y
            // this.xVelocity = +(Math.floor(Math.random() * 2) == 1 ? 1 : -1)*15                               
        } else if (
            (xDistance >= 15 && originalRadius < this.radius) ||
            (xDistance <= -15 && originalRadius < this.radius) ||
            (yDistance >= 15 && originalRadius < this.radius) ||
            (yDistance <= -15 && originalRadius < this.radius)
        ) {
            this.radius -= 1                                           //radius that stays
            if (randomTrueOrFalse == 1) {
                this.xVelocity = -Math.random() 
                
            } else {
                this.xVelocity = Math.random() 
                
            }

            if (randomTrueOrFalse == 1) {
                this.yVelocity = -Math.random() 
            } else {
                this.yVelocity = Math.random() 
            }
        }

        this.draw()
    }

    this.draw = function () {
        c.beginPath()
        c.arc(
            this.xCoordinate,
            this.yCoordinate,
            Math.abs(this.radius),
            0,
            Math.PI * 2
        )
        c.fillStyle = this.color
        c.fill()
    }
}

const colorArray = ['#ffa069', '#eb3e4a', '#068184', '#CCAC5D']
const myCircle = new Circle(30, 80, 10)
let circleArray = []

for (let i = 0; i < 700; i++) {
    const randomXCoordinate = Math.random() * canvasWidth
    const randomYCoordinate = Math.random() * canvasHeight
    const randomRadius = Math.random() * 2.5                               // the starting circle radius
    circleArray.push(
        new Circle(randomXCoordinate, randomYCoordinate, randomRadius)
    )
}

function updateAll() {
    c.clearRect(0, 0, canvasWidth, canvasHeight)
    myCircle.update()
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
    window.requestAnimationFrame(updateAll)
}

updateAll()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////yahia///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    var input = $('.field').find('input, textarea');
    input.keyup(function () {
        inputTest(this);
    });
});

function inputTest(that) {
    var field = $(that).closest('.field');
    var form = $(that).closest('form, .form');
    var length = $.trim($(that).val()).length;

    //  FILLED
    if (length > 0) field.addClass('filled'); else field.removeClass('filled');

    //  VALIDATED
    if (length >= 4) {
        field.addClass('validated');
        form.addClass('validated');
    } else {
        field.removeClass('validated');
        form.removeClass('validated');
    }
}
var Timer = {
    length: null,
    time: null,
    selector: null,
    interval: null,
    callback: null,

    //  RUN
    run: function (selector, callback, length) {
        Timer.length = length;
        Timer.time = Timer.length;
        Timer.selector = selector;
        Timer.callback = callback;
        $(Timer.selector).text(Timer.length);
        Timer.interval = setInterval(Timer.count, 1000);
    },

    //  COUNT
    count: function () {
        Timer.time = Timer.time - 1;
        $(Timer.selector).text(Timer.time);
        if (Timer.time <= 0) {
            if (typeof Timer.callback === 'function' && Timer.callback) Timer.callback();
            Timer.reset();
        }
    },

    //  RESET
    reset: function () {
        clearInterval(Timer.interval);
        Timer.length = null;
        Timer.time = null;
        Timer.selector = null;
        Timer.interval = null;
        Timer.callback = null;
    }
};
var Identity = {
    duration: 1400,
    delay: 500,
    iteration: 0,
    processing: false,
    enough: false,
    interval: null,
    callback: null,
    status: 'loading',
    id: '#identity',
    selector: '#identity div',
    classes: 'working rest robot',

    //  WORK
    work: function () {
        if (Identity.status != 'loading') Identity.status = 'working';
        Identity.wait(function () {
            $(Identity.id).addClass('working');
        });
    },

    //  ROBOT
    robot: function () {
        Identity.status = 'robot';
        Identity.wait(function () {
            $(Identity.id).addClass('robot');
        });
    },

    //  REST
    rest: function () {
        Identity.abort();
        Identity.status = 'rest';
        setTimeout(function () {
            Identity.abort();
            $(Identity.id).addClass('rest');
        }, Identity.delay);
    },

    //  WAIT
    wait: function (call) {
        if (Identity.processing != true) {
            Identity.abort();
            Identity.processing = true;

            setTimeout(function () {
                if (typeof call === 'function' && call) call();
                Identity.waiting();
                Identity.interval = setInterval(Identity.waiting, Identity.duration);
            }, Identity.delay);
        }
    },

    //  WAITING
    waiting: function () {
        if (Identity.enough != true) {
            ++Identity.iteration;
            return;
        }

        Identity.stopping();
    },

    //  STOP
    stop: function (callback) {
        setTimeout(function () {
            if (Identity.processing == true) {
                Identity.enough = true;
                Identity.callback = callback;

                $(Identity.selector).attr('style', 'animation-iteration-count: ' + Identity.iteration + '; -webkit-animation-iteration-count: ' + Identity.iteration + ';');
            }
        }, Identity.delay);
    },

    //  STOPPING
    stopping: function () {
        clearInterval(Identity.interval);
        Identity.rest();

        if (typeof Identity.callback === 'function' && Identity.callback) Identity.callback();
        Identity.reset();
    },

    //  ABORT
    abort: function () {
        if (Identity.status == 'robot') $(Identity.id).removeClass('robot'); else if (Identity.status != 'loading' && Identity.processing != true) $(Identity.id).removeClass(Identity.classes + ' loading'); else $(Identity.id).removeClass(Identity.classes);
    },

    //  RESET
    reset: function () {
        Identity.iteration = 0;
        Identity.processing = false;
        Identity.enough = false;
        Identity.interval = null;
        Identity.callback = null;

        $(Identity.selector).removeAttr('style');
    }
};
var Stars = {
    canvas: null,
    context: null,
    circleArray: [],
    colorArray: ['#4c1a22', '#4c1a23', '#5d6268', '#1f2e37', '#474848', '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'],

    mouseDistance: 50,
    radius: .5,
    maxRadius: 1.5,

    //  MOUSE
    mouse: {
        x: undefined,
        y: undefined,
        down: false,
        move: false
    },

    //  INIT
    init: function () {
        this.canvas = document.getElementById('stars');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.display = 'block';
        this.context = this.canvas.getContext('2d');

        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.resize);

        this.prepare();
        this.animate();
    },

    //  CIRCLE
    Circle: function (x, y, dx, dy, radius, fill) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = this.radius;

        this.draw = function () {
            Stars.context.beginPath();
            Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            Stars.context.fillStyle = fill;
            Stars.context.fill();
        };

        this.update = function () {
            if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
            if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;

            //  INTERACTIVITY
            if (Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance) {
                if (this.radius < Stars.maxRadius) this.radius += 1;
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }

            this.draw();
        };
    },

    //  PREPARE
    prepare: function () {
        this.circleArray = [];

        for (var i = 0; i < 100; i++) {
            var radius = Stars.radius;
            var x = Math.random() * (this.canvas.width - radius * 2) + radius;
            var y = Math.random() * (this.canvas.height - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * 1.5;
            var dy = (Math.random() - 1) * 1.5;
            var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

            this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill));
        }
    },

    //  ANIMATE
    animate: function () {
        requestAnimationFrame(Stars.animate);
        Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);

        for (var i = 0; i < Stars.circleArray.length; i++) {
            var circle = Stars.circleArray[i];
            circle.update();
        }
    },

    //  MOUSE MOVE
    mouseMove: function (event) {
        Stars.mouse.x = event.x;
        Stars.mouse.y = event.y;
    },

    //  RESIZE
    resize: function () {
        Stars.canvas.width = window.innerWidth;
        Stars.canvas.height = window.innerHeight;
    }
};

/////yes

var renderer, scene, camera, ww, wh, particles;

ww = window.innerWidth, wh = window.innerHeight;

var centerVector = new THREE.Vector3(0, 0, 0);
var previousTime = 0;
speed = 20;
isMouseDown = false;

var getImageData = function (image) {

    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, image.width, image.height);
};

function getPixel(imagedata, x, y) {
    var position = (x + imagedata.width * y) * 4,
        data = imagedata.data;
    return { r: data[position], g: data[position + 1], b: data[position + 2], a: data[position + 3] };
}

var drawTheMap = function () {

    var geometry = new THREE.Geometry();
    var material = new THREE.PointCloudMaterial();
    material.vertexColors = true;
    material.transparent = true;
    for (var y = 0, y2 = imagedata.height; y < y2; y += 1) {
        for (var x = 0, x2 = imagedata.width; x < x2; x += 1) {
            if (imagedata.data[x * 4 + y * 4 * imagedata.width] > 0) {
                
                var vertex = new THREE.Vector3();
                vertex.x = x - imagedata.width / 2 ;
                vertex.y = -y + imagedata.height / 2 -200;
                vertex.z = -Math.random() * 500;
                
                vertex.speed = Math.random() / speed + 0.015;

                var pixelColor = getPixel(imagedata, x, y);
                var color = "rgb(" + pixelColor.r + ", " + pixelColor.g + ", " + pixelColor.b + ")";
                geometry.colors.push(new THREE.Color(color));
                geometry.vertices.push(vertex);
            }
        }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    requestAnimationFrame(render);
};

var init = function () {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("agg"),
        antialias: true,
        alpha: true
    });
    renderer.setSize(ww, wh);

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(ww / -2.5, ww / 1.5, wh / 3.2, wh / -1.3, 1, 1000);                                    //where in the window
    camera.position.set(-5, 0, 3);
    camera.lookAt(centerVector);
    scene.add(camera);
    camera.zoom = 1.8;                                                                                                        //zoom out on smaller screen?
    camera.updateProjectionMatrix();

    imagedata = getImageData(image);
    drawTheMap();

    window.addEventListener('mousemove', onMousemove, false);
    window.addEventListener('mousedown', onMousedown, false);
    window.addEventListener('mouseup', onMouseup, false);
    window.addEventListener('resize', onResize, false);
};
var onResize = function () {
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
    camera.left = ww ;
    camera.right = ww ;
    camera.top = wh ;
    camera.bottom = wh ;
    camera.updateProjectionMatrix();
};
var onMouseup = function () {
    isMouseDown = false;
};
var onMousedown = function (e) {
    lastMousePos = { x: e.clientX, y: e.clientY };
    if (lastMousePos.x < ww / 2){
        isMouseDown = true;
    }
    else{
        isMouseDown = false;
    }

};
var onMousemove = function (e) {
    if (isMouseDown) {
        camera.position.x += (e.clientX - lastMousePos.x) / 100;
        camera.position.y -= (e.clientY - lastMousePos.y) / 100;
        camera.lookAt(centerVector);
        lastMousePos = { x: e.clientX, y: e.clientY };
    }
};
var render = function (a) {

    requestAnimationFrame(render);

    particles.geometry.verticesNeedUpdate = true;
    if (!isMouseDown) {
        camera.position.x += (0 - camera.position.x) * 0.06;
        camera.position.y += (0 - camera.position.y) * 0.06;
        camera.lookAt(centerVector);
    }

    renderer.render(scene, camera);
};

var imgData = ' data:image/png;base64,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 ';

var image = document.createElement("img");
image.src = imgData;
var Submit = {

    //  DATA
    data: function (template, fields) {
        var data = {};
        for (i = 0; i < fields.length; i++) {
            var field = $(fields[i]);
            var name = field.attr('name');
            var value = field.val().replace(/(?:\r\n|\r|\n)/g, '<br>');
            data[name] = value;
        }

        return data;
    },

    //  PUSH
    push: function (form) {
        var template = $('.template[data-template=' + form + ']');
        var fields = template.find('.field input, .field textarea');

        //  WAITING
        Submit.view('[data-status=waiting]', template);

        //  AJAX
        $.ajax({
            type: 'POST',
            url: 'includes/php/' + form + '.php',
            data: { dd: JSON.stringify(Submit.data(template, fields)) },
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                Submit.callback('error', form, template, fields);
            },
            success: function (data) {
                Submit.callback('success', form, template, fields);
            }
        });
    },

    //  CALLBACK
    callback: function (status, form, template, fields) {
        setTimeout(function () {

            //  SUCCESS
            if (status == 'success') {
                template.find('.form .status').removeClass('current');
                fields.closest('.field').fadeOut(700);
                fields.closest('.form').find('.submit').fadeOut(700);
                Identity.stop();

                if (form == 'secret') secretAvailability = false; else if (form == 'opinion') opinionAvailability = false;

                setTimeout(function () {
                    fields.closest('.form').find('.submit').remove();
                    fields.closest('.field').remove();
                    template.find('.form .status[data-status=success]').addClass('current');
                }, 750);
            }

            //  ERROR
            else {
                Submit.view('[data-status=error]', template);
                setTimeout(function () {
                    Submit.view(':not([data-status])', template);
                }, 6000);
            }
        }, 4000);
    },

    //	VIEW
    view: function (selector, template) {
        template.find('.form .status').removeClass('current');
        template.find('.form .status' + selector).addClass('current');
    },

    //	LISTEN
    listen: function (selector) {
        $(selector).on('click', function (e) {
            if ($(this).closest('.form').hasClass('validated')) {
                var form = $(this).attr('data-form');
                Submit.push(form);
            }

            e.preventDefault();
        });
    }
};
var Router = {
    wrapper: [],
    location: null,

    //	ROUTE
    route: function (location, callback) {
        Identity.work();
        Router.location = Router.processLocation(location);

        //	ROUTES
        Router.routes(callback);
    },

    //	PROCESS LOCATION
    processLocation: function (location) {
        if (location === undefined) location = window.location.hash;

        return location.replace('#', '');
    },

    //	CALLBACK
    callback: function (callback) {
        setTimeout(function () {
            Identity.stop();
            Router.updateWrapper();
            Router.updateTemplate(Router.wrapper[0]);
            window.location.hash = Router.location;
            Router.location = null;

            //  CALLBACKS
            Router.callbacks(Router.wrapper[0]);
            if (typeof callback === 'function' && callback) callback();
        }, 200);
    },

    //	UPDATE TEMPLATE
    updateTemplate: function (template) {
        var templates = $('.template');
        var current = $('.template[data-template=' + template + ']');

        templates.removeClass('current');
        setTimeout(function () {
            templates.hide();
            current.show().addClass('current');
        }, 1120);
    },

    //	UPDATE WRAPPER
    updateWrapper: function (push, pull) {
        if (push) Router.push(push);
        if (pull) Router.pull(pull);

        var wrapper = Router.wrapper.toString().replace(/,/g, ' ');
        $('.wrapper').attr('class', 'wrapper ' + wrapper);
    },

    //	PUSH
    push: function (items) {
        items = items.split(' ');

        for (i = 0; i < items.length; i++) {
            if (!Router.wrapper.includes(items[i]) && items[i] != '') Router.wrapper.push(items[i]);
        }
    },

    //	PULL
    pull: function (items) {
        items = items.split(' ');

        for (i = 0; i < items.length; i++) {
            if (Router.wrapper.includes(items[i]) && items[i] != '') Router.wrapper.splice(Router.wrapper.indexOf(items[i]), 1);
        }
    },

    //	LISTEN
    listen: function () {
        $('.wrapper').on('click', '.router', function (e) {
            Router.route($(this).attr('href'), window[$(this).attr('data-callback')]);
            e.preventDefault();
        });

        window.addEventListener('popstate', function (e) {
            Router.route(undefined);
        });
    }
};
Router.routes = function (callback) {
    Router.wrapper = [];
    var location = Router.location.split('/').filter(Boolean);

    //  HOME
    Router.push('home');

    //  CALLBACK
    Router.callback(callback);
};
Router.callbacks = function (wrapper) {
    if (wrapper == 'secret') secret(); else if (wrapper == 'opinion') opinion(); else if (wrapper == 'bucketAll') bucketAll(); else if (wrapper == 'notFound') notFound();
};
var secretAvailability = true;
function secret() {
    if (secretAvailability == true) {
        setTimeout(function () {
            var input = $('.template[data-template=secret] .field').find('input, textarea');

            input.focus();
            Identity.robot();
        }, Identity.duration * 1.25);
    }
}
var opinionAvailability = true;
function opinion() {
    if (opinionAvailability == true) {
        setTimeout(function () {
            var input = $('.template[data-template=opinion] .field').find('input, textarea');

            input.focus();
            Identity.robot();
        }, Identity.duration * 1.25);
    }
}
function bucketAll() {
    var list = $('.template[data-template=bucketAll] .bucketList');
    var link = list.find('li.archived a');

    //  LISTEN
    link.hover(function () {
        list.addClass('hover');
    }, function () {
        list.removeClass('hover');
    });
}
function notFound() {
    setTimeout(function () {
        Timer.run('.template[data-template=notFound] time', function () {
            Router.route('#');
        }, 5);
    }, Identity.duration * 1.25);
}

function notFoundCallback() {
    Timer.reset();
}
var md = new MobileDetect(window.navigator.userAgent);

$(document).ready(function () {
    Identity.work();
    $('.template main').mCustomScrollbar({
        theme: 'dark'
    });
});

function loadProject() {
    Router.route(undefined, function () {

        //  CALLBACK
        Router.listen();
        Submit.listen('.submit');
        if (!md.mobile()) {
        Stars.init();
        init();
        }
        setTimeout(function () {
            $('#signature').removeClass('loading');
        }, Identity.delay * 1.5);
    });
};

loadProject();

