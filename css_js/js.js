        feather.replace(); // Substitui os ícones Feather

        // Menu mobile
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Fechar menu mobile ao clicar em um item
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });

        // Animação de seções ao rolar
        const sections = document.querySelectorAll('section');

        const options = {
            threshold: 0.2 // A seção se torna visível quando 20% dela entra na viewport
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Deixa de observar depois de animar
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Validação de formulário de contato (exemplo básico)
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            // Aqui você pode adicionar lógica para enviar os dados, por exemplo, via Fetch API para um backend.
            // Por simplicidade, exibimos um alerta.
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            contactForm.reset(); // Limpa o formulário
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }