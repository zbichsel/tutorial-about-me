TweenMax.from(".left-container", 2, {
    width: "0",
    ease: Expo.easeInOut
});

TweenMax.from(".right-container", 2, {
    delay: 1.5,
    width: "100%",
    opacity: "0",
    ease: Expo.easeInOut
});

TweenMax.from(".center-container", 2, {
    delay: 3,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 1.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".info", 2, {
    delay: 1.5,
    y: 50,
    opacity: 0,
    scale: 2.5,
    ease: Expo.easeInOut
});

TweenMax.from(".story", 2, {
    delay: 2.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".menu", 2, {
    delay: 3.5,
    y: 20,
    opacity: 0,
    rotation: 90,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(
    ".social li",
    2,
    {
        delay: 3.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    },
    0.1
);