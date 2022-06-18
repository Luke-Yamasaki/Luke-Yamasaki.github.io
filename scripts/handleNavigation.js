const handleNavigation = () => {
    localStorage.setItem('visited', 'true');
    console.log(localStorage.getItem('visited'));
}