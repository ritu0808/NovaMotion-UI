


function navAnimation(){
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom",{
        height:"21vh",
        duration : 0.5
    })
    tl.to(".nav-part2 h5",{
        display : "block",
        duration : 0.5
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        // duration : 0.3,
        stagger : {
            amount : 0.6
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        
        stagger : {
            amount : 0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display : "none",
        duration : 0.1
})
tl.to("#nav-bottom",{
    height : 0,
    duration : 0.2,
})
})

}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")
    
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity : 1,
                scale : 1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity : 0,
                scale : 0,
                
            })
        })
        elem.addEventListener("mousemove",function(dets){
            
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-90,
                y:dets.y - elem.getBoundingClientRect().y-215,
                
            })
            
        })
    })
}


function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity : 1,
        borderRadius : 0,

    })
})

video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity : 0,
        borderRadius : "30px",

    })
})


var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
              elem.childNodes[3].style.opacity = 1
              elem.childNodes[3].play()
     })
     elem.addEventListener("mouseleave",function(){
              elem.childNodes[3].style.opacity = 0
              elem.childNodes[3].load()
     })

})

}

function page7Animations(){
    gsap.from("#btm7-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm7-part2",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        scrub : true,
    }
})

    gsap.from("#btm7-part3 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm7-part3",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        scrub : true,
    }
})

    gsap.from("#btm7-part4 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm7-part4",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        scrub : true,
    }
})
}


function loadingAnimation(){
window.onload = function () {
    window.scrollTo(0,0);
;
var tl = gsap.timeline()
tl.from("#page1",{
     scale:0.7,
    //   transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
     y:80,
     borderRadius : "200px",
     duration: 1,
     ease: "expo.out"
      
})


tl.from("nav",{
     opacity : 0,
     y:-20,
     duration : 0.3,

 })

 tl.from("#page1 h1",{
    
     opacity : 0,
     y:30,
     duration : 0.4,
     stagger : 0.2,

 })


 tl.from("#page1 p, #page1 div",{
    
     opacity : 0,
     y:30,
     duration : 0.3,
     stagger : 0.2,

 })


}
}


loadingAnimation()
navAnimation()
page2Animation()
page3VideoAnimation()
page7Animations()
