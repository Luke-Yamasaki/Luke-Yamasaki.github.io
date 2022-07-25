const checkVisited = () => {
    const animationBox = document.getElementById('anim');
    const nav = document.getElementsByClassName('welcomeNav')[0];
    const main = document.getElementsByClassName('welcomeMain')[0];

    if (sessionStorage.getItem('visited') === 'true') {
        animationBox.removeAttribute('id');
        animationBox.setAttribute('id', 'noAnim');
        nav.style.animation = 'none';
        main.style.animation='none';
    } 

    return 'ready';
}