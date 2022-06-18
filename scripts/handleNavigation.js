const handleNavigation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return sessionStorage.setItem('visited', 'true');
}