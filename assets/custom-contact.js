console.log('📱 Script de contato iniciado!');

// Função para criar a seção de contato imediatamente
function createContactSection() {
    // Verificar se já existe
    if (document.getElementById('custom-contact-section')) {
        console.log('⚠️ Seção já existe');
        return;
    }
    
    console.log('🔨 Criando seção de contato...');
    
    // Criar a seção principal
    const section = document.createElement('div');
    section.id = 'custom-contact-section';
    section.style.cssText = `
        background-color: #f9fafb;
        padding: 40px 20px;
        text-align: center;
        margin-top: 20px;
        width: 100%;
        box-sizing: border-box;
    `;
    
    // Criar o conteúdo
    section.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 32px; font-weight: bold; color: #111827; margin-bottom: 20px;">Entre em Contato</h2>
            <p style="font-size: 18px; color: #6b7280; margin-bottom: 30px;">Fale conosco através das nossas redes sociais</p>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                <a href="https://wa.me/5511987654321?text=Olá! Gostaria de saber mais sobre os serviços de eventos." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="display: inline-flex; align-items: center; padding: 15px 30px; background-color: #10b981; color: white; text-decoration: none; font-weight: 500; border-radius: 8px; margin: 8px; transition: background-color 0.2s; cursor: pointer; border: none; font-size: 16px;"
                   onmouseover="this.style.backgroundColor='#059669'"
                   onmouseout="this.style.backgroundColor='#10b981'"
                   onclick="console.log('🟢 WhatsApp clicado!')">
                    <svg style="width: 24px; height: 24px; margin-right: 8px;" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                    </svg>
                    <span>WhatsApp</span>
                </a>
                <a href="https://instagram.com/fabiano.fernandes.eventos" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="display: inline-flex; align-items: center; padding: 15px 30px; background-color: #e91e63; color: white; text-decoration: none; font-weight: 500; border-radius: 8px; margin: 8px; transition: background-color 0.2s; cursor: pointer; border: none; font-size: 16px;"
                   onmouseover="this.style.backgroundColor='#ad1457'"
                   onmouseout="this.style.backgroundColor='#e91e63'"
                   onclick="console.log('🟣 Instagram clicado!')">
                    <svg style="width: 24px; height: 24px; margin-right: 8px;" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    `;
    
    // Adicionar ao body
    document.body.appendChild(section);
    console.log('✅ Seção de contato adicionada!');
}

// Executar imediatamente
createContactSection();

// Executar após timeouts para garantir
setTimeout(createContactSection, 500);
setTimeout(createContactSection, 1000);
setTimeout(createContactSection, 2000);
setTimeout(createContactSection, 3000);

// Executar quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createContactSection);
} else {
    createContactSection();
}

// Executar quando página carregar
window.addEventListener('load', createContactSection);

console.log('📱 Script de contato finalizado!');