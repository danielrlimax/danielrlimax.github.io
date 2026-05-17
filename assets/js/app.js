const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-toggle i');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    // Abre ou fecha o menu lateral e ativa o botão simultaneamente
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Troca o ícone de hambúrguer para "X" e vice-versa
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// Fecha o menu automaticamente se o usuário clicar em algum link (ou no botão do WhatsApp)
document.querySelectorAll('.nav-menu a, .nav-menu button').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active'); 
        menuToggle.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});