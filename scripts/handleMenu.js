const handleMenu = () => {
    //elements
    const hamburger = document.getElementsByClassName("hamburgerContainer")[0];
    const lineOne = document.getElementsByClassName("hamburgerLine")[0];
    const lineTwo = document.getElementsByClassName("hamburgerLine")[1];
    const lineThree = document.getElementsByClassName("hamburgerLine")[2];
    
    //conditional
    if(hamburger.classList.contains('hidden')){
        //container
        hamburger.classList.remove('hidden');
        hamburger.classList.add('shown');
        //lines
        lineOne.classList.remove('hiddenOne');
        lineOne.classList.add('shownOne');
        lineTwo.classList.remove('hiddenTwo');
        lineTwo.classList.add('shownTwo');
        lineThree.classList.remove('hiddenThree');
        lineThree.classList.add('shownThree');
        return
    } 
    else {
        //container
        hamburger.classList.remove('shown');
        hamburger.classList.add('hidden');
        //lines
        lineOne.classList.remove('shownOne');
        lineOne.classList.add('hiddenOne');
        lineTwo.classList.remove('shownTwo');
        lineTwo.classList.add('hiddenTwo');
        lineThree.classList.remove('shownhree');
        lineThree.classList.add('hiddenThree');
    }
}