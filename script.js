document.getElementById('criptografar').addEventListener('click', function() {
    // Captura o texto do textarea
    var textareaValue = document.getElementById('textarea').value;
    let encryptedText = encrypt(textareaValue, 3);
    document.getElementById('output').innerText = encryptedText;
    document.getElementById('box2-id').hidden=true;
    document.getElementById('box2-output').classList.remove('hidden');
    document.getElementById('colar').classList.add('hidden');
    
});

function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            // Letras maiúsculas
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

document.getElementById('descriptografar').addEventListener('click', function() {
    let inputText = document.getElementById('textarea').value;
    let decryptedText = decrypt(inputText, 3); // usando um deslocamento de 3
    document.getElementById('output').innerText = decryptedText;
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('box2-output').classList.add('hidden');
});

function copiar() {
    // Seleciona o elemento de textarea
    const textToCopy = document.getElementById("output").innerText;
    
    navigator.clipboard.writeText(textToCopy).then(function() {
    }, function(err) {
        console.error("Erro ao copiar texto: ", err);
    });
    document.getElementById('copiar').classList.add('hidden');
    document.getElementById('colar').classList.remove('hidden');
}

function colar(){ 
    document.getElementById('textarea').value = document.getElementById("output").innerText;
    
}

