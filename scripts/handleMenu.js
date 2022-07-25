const handleMenu = () => {
    //hamburger
    const hamburgerContainer = document.getElementsByClassName("hamburgerContainer")[0];
    const hamburgerBox = document.getElementsByClassName("hamburgerBox")[0];
    const lineOne = document.getElementsByClassName("hamburgerLine")[0];
    const lineTwo = document.getElementsByClassName("hamburgerLine")[1];
    const lineThree = document.getElementsByClassName("hamburgerLine")[2];

    //menu
    const menu = document.getElementsByClassName('dropDownMenu')[0];
    const linkOne = document.getElementsByClassName('dropDownLink')[0];
    const linkTwo = document.getElementsByClassName('dropDownLink')[1];
    const linkThree = document.getElementsByClassName('dropDownLink')[2];
    const linkFour = document.getElementsByClassName('dropDownLink')[3];

    //conditional
    if(hamburgerContainer.classList.contains('shownContainer')){
        //container
        hamburgerContainer.classList.remove('shownContainer');
        //Box
        hamburgerBox.classList.remove('shownBox');
        //lines
        lineOne.classList.remove('shownOne');
        lineTwo.classList.remove('shownTwo');
        lineThree.classList.remove('shownThree');
        //menu
        menu.classList.remove('menuShown');
        linkOne.classList.remove('linkShown');
        linkTwo.classList.remove('linkShown');
        linkThree.classList.remove('linkShown');
        linkFour.classList.remove('linkShown');
        return
    } 
    else {
        //container
        hamburgerContainer.classList.add('shownContainer');
        //Box
        hamburgerBox.classList.add('shownBox');
        //lines
        lineOne.classList.add('shownOne');
        lineTwo.classList.add('shownTwo');
        lineThree.classList.add('shownThree');
        //menu
        menu.classList.add('menuShown');
        linkOne.classList.add('linkShown');
        linkTwo.classList.add('linkShown');
        linkThree.classList.add('linkShown');
        linkFour.classList.add('linkShown');
        return
    }
}