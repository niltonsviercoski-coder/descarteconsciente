// Menu Mobile
const menuBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('ativo');
        menuBtn.textContent = navList.classList.contains('ativo') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('ativo');
            menuBtn.textContent = '☰';
        });
    });
}

// Abas (Tipos de Embalagem)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        const targetEl = document.getElementById(target);
        if (targetEl) targetEl.classList.add('active');
    });
});

// Botão Voltar ao Topo
const backBtn = document.getElementById('back-top');
if (backBtn) {
    window.addEventListener('scroll', () => {
        window.scrollY > 500 ? backBtn.classList.remove('hidden') : backBtn.classList.add('hidden');
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Efeito Visual Suave ao Rolar a Página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(secao => {
    observer.observe(secao);
});