// Mento - Ağıllı Yardımçının Beyni

document.getElementById('sendBtn').addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    let output = document.getElementById('output');

    if(input.trim() === "") {
        alert("Zəhmət olmasa bir sual yaz!");
        return;
    }

    // Mento-nun ilkin cavab reaksiyası
    output.innerHTML = "<p style='color: #38bdf8;'>Mento düşünür...</p>";

    // Cavab simulyasiyası
    setTimeout(() => {
        output.innerHTML = `<p><strong>Sənin sualın:</strong> ${input}</p>
                            <p><em>Mento cavab verir:</em> Bu mövzu olduqca maraqlıdır! Sənin üçün dərindən araşdırdım və əsas detalları hazırlayıram...</p>`;
    }, 1500);
});

// Səsli sistemin aktivləşdirilməsi
function startVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'az-AZ';
    
    recognition.onstart = () => { alert("Mento dinləyir..."); };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('userInput').value = transcript;
    };
    
    recognition.start();
}

document.getElementById('voiceBtn').addEventListener('click', startVoice);
