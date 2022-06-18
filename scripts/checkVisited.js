const checkVisited = () => {
    const animationBox = document.getElementById('anim');
    const nav = document.getElementsByClassName('welcomeNav');
    const main = document.getElementsByClassName('welcomeMain');
    const greet = document.getElementsByClassName('welcomeGreet');
    const delayed = document.getElementsByClassName('delayedGreet');
    const bio = document.getElementsByClassName('welcomeBio');
    const description = document.getElementsByClassName('welcomeDescription');

    if (sessionStorage.getItem('visited') === 'true') {
        animationBox.removeAttribute('id');
        animationBox.setAttribute('id', 'noAnim');
        nav.style.removeProperty('animation');
        main.style.removeProperty('animation');
        greet.style.removeProperty('animation');
        delayed.style.removeProperty('animation');
        bio.style.removeProperty('animation');
        description.style.removeProerty('animation');
    } 

    return 'ready';
}