document.addEventListener("DOMContentLoaded", () => {
    let timeLeft = 120;
    
    const topBar = document.getElementById("top-bar");
    const countdownText = document.getElementById("countdown-text");

    const updateClass = (newClass) => {
        topBar.classList.remove("bg-green", "bg-orange", "bg-red", "bg-black");
        topBar.classList.add(newClass);
    };

    const timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft > 60) {
            updateClass("bg-green");
            countdownText.textContent = "Restan 2 minutos";
            
        } else if (timeLeft <= 60 && timeLeft > 30) {
            updateClass("bg-orange");
            countdownText.textContent = "Resta 1 minuto";
            
        } else if (timeLeft <= 30 && timeLeft > 0) {
            updateClass("bg-red");
            countdownText.textContent = `Restan ${timeLeft} segundos`;
            
        } else if (timeLeft <= 0) {
            updateClass("bg-black");
            countdownText.textContent = "Tiempo agotado";
            clearInterval(timerInterval);
        }
    }, 1000);
});