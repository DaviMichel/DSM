document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a'); // Seleciona todos os links da navbar

    // Função para rolar suavemente até o elemento alvo com um offset personalizado
    function scrollToTarget(e) {
        e.preventDefault(); // Previne o comportamento padrão de clicar em links

        const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
        const targetElement = document.getElementById(targetId); // Obtém o elemento alvo

        if (targetElement) {
            let offset = -210; // Offset padrão

            // Se for o link para a seção de serviços, ajuste o offset para rolar menos
            if (targetId === 'Serviços') { // Certifique-se de que o ID esteja correto
                offset = -220; // Exemplo: rolar até 20 pixels abaixo do topo da seção alvo
            }

            const offsetTop = targetElement.offsetTop + offset; // Calcula a posição exata desejada
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Rola a página suavemente
            });
        }
    }

    // Função para alternar o menu
    function toggleMenu() {
        const navbarLinks = document.querySelector('.navbar-links');
        navbarLinks.classList.toggle('active');
    }

    // Adiciona um evento de clique a cada link da navbar
    navbarLinks.forEach(link => {
        link.addEventListener('click', scrollToTarget);
    });

    // Adiciona evento de clique ao menu de hambúrguer
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
});


