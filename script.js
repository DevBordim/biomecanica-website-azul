/* ==========================================================================
   BIOMECÂNICA+ | Main Script & WhatsApp Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CONFIGURAÇÃO DO SEU WHATSAPP
    // ==========================================
    // Substitua pelo seu número com código do país (Ex: 5511999998888 ou 34600000000)
    const WHATSAPP_NUMBER = "34602703011"; 
    
    // Mensagem padrão de saudação
    const DEFAULT_MESSAGE = "Olá! Vi os planos de biomecânica e gostaria de saber mais sobre as sessões.";

    // Função para gerar o link do WhatsApp
    function getWhatsAppLink(customPlanName) {
        let message = DEFAULT_MESSAGE;
        if (customPlanName) {
            message = `Olá! Gostaria de agendar a sessão: *${customPlanName}*. Como podemos prosseguir?`;
        }
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    // Configurar todos os botões com a classe .btn-whatsapp-trigger
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp-trigger');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const planName = button.getAttribute('data-plan');
            const targetUrl = getWhatsAppLink(planName);
            window.open(targetUrl, '_blank');
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // IntersectionObserver para animações Suaves ao rolar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
});
