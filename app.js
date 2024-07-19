function encriptar() {
    const inputTexto = document.querySelector('input[type="text"]').value;
    const textoEncriptado = inputTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const inputTexto = document.querySelector('input[type="text"]').value;
    const textoDesencriptado = inputTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const rightColumn = document.querySelector('.right-column');
    rightColumn.innerHTML = `
        <h1>Resultado:</h1>
        <p>${texto}</p>
        <button class="copiar">Copiar</button>
    `;
    document.querySelector('.copiar').addEventListener('click', () => copiarAlPortapapeles(texto));
}

function copiarAlPortapapeles(texto) {
    const input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    // No alert message
}

document.querySelector('.boton1').addEventListener('click', encriptar);
document.querySelector('.boton2').addEventListener('click', desencriptar);
