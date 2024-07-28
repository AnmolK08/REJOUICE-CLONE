function locomotiveJS(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

function cursorAnimation(){
    var cursor = document.querySelector("#cursor");
var page1Content = document.querySelector("#page1-content");

page1Content.addEventListener("mousemove" , function(dets){
    gsap.to(cursor,{
        x:dets.x ,
        y:dets.y

    })
})
page1Content.addEventListener("mouseenter" , function(){
    gsap.to(cursor,{
       scale:1,
       opacity:1

    })
})
page1Content.addEventListener("mouseleave" , function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0

    })
})
}

function page2Animation(){
    gsap.from(".elem h1",{
        y:80,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:3
        }
    })
}

function page3Animation(){
    var tl = gsap.timeline();

    tl.from("#page3-top h2",{
        y:80,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 60%",
            end:"top 46%",
            scrub:3
        }
    })

   
}

function page4Animation(){
    var tl = gsap.timeline();

    tl.from("#page4-content h4",{
        y:80,
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:3,
            start:"top 90%",
            end : "top 80%"
        }
    })

    tl.from("#page4-content h1",{
        y:80,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:3
        }
    })
    tl.from("#page4-b-4 h4",{
        y:80,
        opacity:0,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4-bottom",
            scroller:"#main",
            scrub:3,
            start:"top 90%",
            end : "top 80%"
        }
    })

    tl.from("#page4-b-1 h1",{
        y:80,
        opacity:0,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page4-bottom",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:3
        }
    })
}

function loaderAnimation(){
    var tl =gsap.timeline();

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to("#loader h3",{
    x:-10,
    opacity:0, 
    stagger:0.1,
    duration:1
})

tl.to("#loader",{
    opacity:0
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.to("#loader",{
    display:"none"
})


}

function page6Animation(){
    gsap.from("#page6 a h1",{
        y:80,
        opacity:0,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:2,
            start:"top 70%",
            end:"top 65%"
        }
    })
}

function footerAnimation(){
    gsap.from("#f3 h1 span",{
        y:-100,
        opacity:0,
        stagger:5,
        duration:10,
        delay:1,
        scrollTrigger:{
            trigger:"#footer",
            scroller:"#main",
            scrub:2,
            start:"top 0%",
            end:"top -20%",
            ease:"slow(0.7,0.7,false)"
        }
    })
}

function menuopen(){
    var tl = gsap.timeline();
    tl.to("#menu",{
        top:"0",
        opacity:1,
        display:"block",
        duration:1
        
    })
tl.from("#menu-d1 video",{
    scale:0.5,
    duration:0.1,
    delay:-0.5
})

tl.from("#menu-d2 h3",{
    y:50,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
}

function menuclose(){
    gsap.to("#menu",{
        top:"-70vh",
        opacity:0,
        display:"none",
        duration:1
        
    })
}
function newshowreel(){
    var open = document.querySelector("#page1-content nav h4");
var close = document.querySelector("#menu #menu-d2 h3");


open.addEventListener("click",function(){
  menuopen();
})
close.addEventListener("click",function(){
    menuclose();
})

var showreel = document.querySelector("#content-b");

showreel.addEventListener("click",function(){
    let newTab = document.createElement('a');
    newTab.href = "https://player.vimeo.com/video/736431927";
    newTab.target = "_blank";
    newTab.click();
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}
  function wheelAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY <0){
            gsap.to(".marquee",{
                transform:"translateX(-200%)",
                repeat:-1,
                duration:6,
                ease:"none"
            })
            gsap.to(".marquee img",{
                rotate:180
            })
        }
        else{
            gsap.to(".marquee",{
                transform:"translateX(0%)",
                repeat:-1,
                duration:6,
                ease:"none"
            })
            gsap.to(".marquee img",{
                rotate:0
            })
        }
      })
    
  }
locomotiveJS();
cursorAnimation();
loaderAnimation();
page2Animation();
page3Animation();
page4Animation();
page6Animation();
footerAnimation();
newshowreel();
wheelAnimation();


