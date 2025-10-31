document.addEventListener("DOMContentLoaded", function() {
    carregarHeader();
    carregarFooter();
});

async function carregarHeader() {
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    
    if (!headerPlaceholder) {
        return; 
    }

    
    try {
        const response = await fetch("header.html");
        
        const html = await response.text();
        
        headerPlaceholder.innerHTML = html;

    } catch (error) {
        console.error("Falha ao buscar o header:", error);
        headerPlaceholder.innerHTML = "<p style='color:red;'>Erro ao carregar o menu.</p>";
    }
}

async function carregarFooter() {
    
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if (!footerPlaceholder) {
        return; 
    }

    
    try {
        const response = await fetch("footer.html");
        
        const html = await response.text();
        
        footerPlaceholder.innerHTML = html;

    } catch (error) {
        console.error("Falha ao buscar o footer:", error);
        footerPlaceholder.innerHTML = "<p style='color:red;'>Erro ao carregar o menu.</p>";
    }
}

function criarSobreLigaComponent() {
    const container = document.createElement('div');
    container.className = 'container1';

    container.innerHTML = `
    <div class="espacamento-header" id="sobre"></div>
        <h1 class="titulos">Sobre a Liga</h1>
        <div class="secao1-2" id="sobre-a-liga">
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at ligula ut justo porttitor bibendum. 
                Suspendisse potenti. Nulla facilisi. Donec a dui eget nibh 
                tincidunt tincidunt. Curabitur sit amet diam eget libero 
                dapibus viverra vel nec elit. Aenean vitae neque a erat 
                aliquet blandit. Ut nec sem sit amet lorem lacinia aliquet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at ligula ut justo porttitor bibendum. 
                Suspendisse potenti. Nulla facilisi. Donec a dui eget nibh
            </h1>
            <img src="./elementosLIBIC/equipe-libic.png" class="imagens">
        </div>

    <div class="espacamento-header" id="nosso-orientador"></div>
        <h1 class="titulos">Nosso Orientador</h1>
        <div class="secao1-2" id="orientador">
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at ligula ut justo porttitor bibendum. 
                Suspendisse potenti. Nulla facilisi. Donec a dui eget nibh 
                tincidunt tincidunt. Curabitur sit amet diam eget libero 
                dapibus viverra vel nec elit. Aenean vitae neque a erat 
                aliquet blandit. Ut nec sem sit amet lorem lacinia aliquet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent at ligula ut justo porttitor bibendum. 
                Suspendisse potenti. Nulla facilisi. Donec a dui eget nibh
            </h1>
            <img src="./elementosLIBIC/equipe-libic.png" class="imagens">
        </div>
    `;

    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('sobre-liga-placeholder');
    if (placeholder) {
        placeholder.appendChild(criarSobreLigaComponent());
    }
});