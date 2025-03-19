// Dados dos gatos (simulando uma API)
const gatos = [
    {
        id: 1,
        nome: "Amora",
        idade: "2 anos",
        raca: "Siamês",
        descricao: "Uma gata muito carinhosa e brincalhona. Adora receber carinho e dormir no colo.",
        imagem: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nome: "Godofredo",
        idade: "1 ano",
        raca: "Persa",
        descricao: "Um gato tranquilo e independente. Perfeito para quem quer um companheiro mais reservado.",
        imagem: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nome: "Malu",
        idade: "3 anos",
        raca: "SRD",
        descricao: "Uma gata muito dócil e sociável. Adora brincar com outros animais e crianças.",
        imagem: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

// Função para criar os cards dos gatos
function criarCardsGatos() {
    const gatosGrid = document.querySelector('.gatos-grid');
    
    gatos.forEach(gato => {
        const card = document.createElement('div');
        card.className = 'gato-card';
        card.innerHTML = `
            <img src="${gato.imagem}" alt="${gato.nome}">
            <div class="gato-info">
                <h3>${gato.nome}</h3>
                <p><strong>Idade:</strong> ${gato.idade}</p>
                <p><strong>Raça:</strong> ${gato.raca}</p>
                <p>${gato.descricao}</p>
                <button class="cta-button" onclick="adotarGato(${gato.id})">Adotar ${gato.nome}</button>
            </div>
        `;
        gatosGrid.appendChild(card);
    });
}

// Função para adotar um gato
function adotarGato(id) {
    const gato = gatos.find(g => g.id === id);
    if (gato) {
        alert(`Obrigado por querer adotar o ${gato.nome}! Em breve entraremos em contato para agendar uma visita.`);
    }
}

// Função para suavizar o scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Função para lidar com o formulário de contato
const contatoForm = document.getElementById('contato-form');
if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Inicializar o site
document.addEventListener('DOMContentLoaded', function() {
    criarCardsGatos();
}); 