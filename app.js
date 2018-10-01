anime({
    targets: "div.box.red",
    translateY: [
        { value: 200, duration: 1000, delay: 400},
        { value: 0, duration: 1000}
    ],

    rotate: {
        value:'1turn', 
        easing: 'easeInOutSine',
        delay: 400
    }
})

anime({
    targets: "div.box.blue",
    translateY: [
        { value: 200, duration: 1000, delay: 800},
        { value: 0, duration: 1000}
    ],
    
    rotate: {
        value:'1turn', 
        easing: 'easeInOutSine',
        delay: 800
    }
})

anime({
    targets: "div.box.gray",
    translateY: [
        { value: 200, duration: 1000, delay: 1200},
        { value: 0, duration: 1000}
    ],
    
    rotate: {
        value:'1turn', 
        easing: 'easeInOutSine',
        delay: 1200
    }
})

anime({
    targets: "div.box.black",
    translateY: [
        { value: 200, duration: 1000, delay: 1600},
        { value: 0, duration: 1000}
    ],
    
    rotate: {
        value:'1turn', 
        easing: 'easeInOutSine',
        delay: 1600
    }
})