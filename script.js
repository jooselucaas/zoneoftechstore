// Seleciona o botão de menu mobile
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
// Seleciona o menu mobile
const mobileMenu = document.querySelector(".mobile-menu");

// Adiciona evento para abrir/fechar o menu
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Função para o slider automático
const slider = document.querySelector('.slider');
let index = 0;

setInterval(() => {
  // Incrementa o índice e redefine caso seja o último slide
  index = (index + 1) % slider.children.length;
  // Move o slider horizontalmente
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 5000); // Troca de imagem a cada 5 segundos


const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0; // Índice atual dos produtos exibidos

// Lista de produtos
const products = [
    {
        img: "https://down-br.img.susercontent.com/file/a1e2bcd790a4bccf997fa6111a5f5d85",
        name: "Produto 1"
    },
    {
        img: "https://down-br.img.susercontent.com/file/94e0d2110d8acfe1394937409576cd00",
        name: "Produto 2"
    },
    {
        img: "https://down-br.img.susercontent.com/file/063197f9a512f01c446790bd0fe26a8d",
        name: "Produto 3"
    },
    {
        img: "https://down-br.img.susercontent.com/file/367753814b067e6c6ed6e673f5e746b1",
        name: "Produto 4"
    },
    {
        img: "https://down-br.img.susercontent.com/file/829cd4c75f14b1a860a25add826bda12",
        name: "Produto 5"
    },
    {
        img: "https://down-br.img.susercontent.com/file/af4c20a87941394d4aef4951a83a4395",
        name: "Produto 6"
    },
    {
        img: "https://down-br.img.susercontent.com/file/7cf7d02f61379d93ef8756ba7cc71f1a",
        name: "Produto 7"
    },
    {
        img: "https://down-br.img.susercontent.com/file/56ad70de040eed2e7afe6caab50d095e",
        name: "Produto 8"
    },
    {
        img: "https://down-br.img.susercontent.com/file/87a56c798c50f86e7ab70c5746fc76ff",
        name: "Produto 9"
    },
    {
        img: "https://down-br.img.susercontent.com/file/d29fdc0df2665820e9ec668bc84551d2",
        name: "Produto 10"
    },
    {
        img: "https://down-br.img.susercontent.com/file/e71081009b48176c55fdec88aee6636a",
        name: "Produto 11"
    },
    {
        img: "https://down-br.img.susercontent.com/file/d0bbe93529cff4733a539edf58b14d99",
        name: "Produto 12"
    }
];

function getVisibleItems() {
    if (window.innerWidth <= 480) {
        return 2; // 2 itens visíveis em telas pequenas
    } else if (window.innerWidth <= 768) {
        return 3; // 3 itens visíveis em telas médias
    } else {
        return 6; // 6 itens visíveis em telas grandes
    }
}

function renderProducts() {
    // Limpa o carrossel
    carousel.innerHTML = '';

    const visibleItems = getVisibleItems(); // Obtém o número de itens visíveis

    // Adiciona os produtos ao carrossel
    for (let i = currentIndex; i < currentIndex + visibleItems && i < products.length; i++) {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${products[i].img}" alt="${products[i].name}">
            <p>${products[i].name}</p>
        `;
        carousel.appendChild(item);
    }
}

// Inicializa o carrossel com os primeiros produtos
renderProducts();

leftBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems(); // Obtém o número de itens visíveis
    currentIndex -= visibleItems; // Move para trás com base no número de itens visíveis
    if (currentIndex < 0) currentIndex = 0;
    renderProducts();
});

rightBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems(); // Obtém o número de itens visíveis
    currentIndex += visibleItems; // Move para frente com base no número de itens visíveis
    if (currentIndex >= products.length) {
        currentIndex = products.length - visibleItems; // Limita o índice
    }
    renderProducts();
});

// Adiciona um listener para redimensionamento da janela
window.addEventListener('resize', () => {
    renderProducts(); // Atualiza os produtos exibidos ao redimensionar a janela
});