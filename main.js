document.addEventListener("DOMContentLoaded", function() {
    carregarHeader();
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