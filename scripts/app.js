function Criptografar() {
    if (verificarVazio()) return;

    const textoEntrada = document.getElementById("input-textarea").value;
    const regex = /[A-ZÀ-ÿ]/;

    if (regex.test(textoEntrada)) {
        alert("Lembre-se: O texto não deve conter letras maiúsculas ou caracteres acentuados.");
    } else {
        const textoEncriptado = textoEntrada
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("output-textarea").value = textoEncriptado;
    }
}

function Descriptografar() {
    if (verificarVazio()) return;

    const textoEntrada = document.getElementById("input-textarea").value;
    const textoEncriptado = textoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-textarea").value = textoEncriptado;
}

function Copiar() {
    const textoSaida = document.getElementById("output-textarea").value;
    navigator.clipboard.writeText(textoSaida).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}

function verificarVazio() {
    const textoEntrada = document.getElementById("input-textarea").value;

    if (textoEntrada == "") {
        alert("Por favor, digite algum texto!");
        return true;
    }

    return false;
}