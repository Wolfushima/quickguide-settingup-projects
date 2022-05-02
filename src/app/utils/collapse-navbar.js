export default () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
    });
};
