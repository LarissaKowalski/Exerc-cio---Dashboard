// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Função para colapsar o menu
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('collapsed');
}
document.querySelector('.toggle-menu').addEventListener('click', function() {
    const sidebar = document.querySelector('aside');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});
