const cards = document.querySelectorAll('.love-card');
let cardsToShow = 3;

function updateVisibleCards() {
    cards.forEach((card, index) => {
        if (index < cardsToShow) {
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none'; 
        }
    }); 
}

document.getElementById('show-more-btn').addEventListener('click', () => {
    cardsToShow += 3;
    if (cardsToShow >= cards.length) {
        cardsToShow = cards.length; 
        document.getElementById('show-more-btn').style.display = 'none'; 
    }

    updateVisibleCards(); 
}); 

updateVisibleCards();

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const muteBtn = document.getElementById("mute-btn");

    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    };

    playAudio(); 

    
    document.body.addEventListener("click", playAudio, { once: true });

    
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;

        
        muteBtn.style.opacity = audio.muted ? "0.5" : "1";
    });
});
