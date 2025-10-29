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