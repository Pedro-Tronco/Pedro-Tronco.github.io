// N deu tempo, mas era pra copiar o número do telefone quando clicasse
function copyPhoneNumber(lang) {
    if(lang = "pt-br"){
        navigator.clipboard.writeText("+55 54 999294304");
        alert("Numero do Telefone copiado: " + copyText.value);
    }
    if(lang = "en-us"){
        navigator.clipboard.writeText("+55 54 999294304");
        alert("Telephone number copied: " + copyText.value);
    }
}