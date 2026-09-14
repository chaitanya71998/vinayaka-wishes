const wishes = [
    {
        text: "OM GANANATHAM TAMAHU VAYAM",
        meaning: "We bow to the Lord of All Beings"
    },
    {
        text: "VAKRATUNDA MAHAKAYA",
        meaning: "Curved trunk, mighty form"
    },
    {
        text: "OM GAM GANAPATAYE NAMAHA",
        meaning: "Salutations to the remover of obstacles"
    },
    {
        text: "SUKHAKARO DUKHAHAM HARO",
        meaning: "The giver of happiness and remover of sorrows"
    },
    {
        text: "MAY GANESHA BLESS YOUR PATH",
        meaning: "With wisdom and prosperity"
    },
    {
        text: "REMOVE ALL OBSTACLES",
        meaning: "From your journey of success"
    },
    {
        text: "GUIDE MY STEPS WITH WISDOM",
        meaning: "Dear Lord Ganesha, show me the righteous path"
    },
    {
        text: "ETERNAL BLESSINGS OF GANESHA",
        meaning: "May his grace flow through your life"
    }
];

let currentWishIndex = 0;

function nextWish() {
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    displayWish(currentWishIndex);
}

function displayWish(index) {
    const wishText = document.querySelector('.wish-text');
    const wishMeaning = document.querySelector('.wish-meaning');
    
    // Add fade out animation
    wishText.style.opacity = '0';
    wishMeaning.style.opacity = '0';
    
    setTimeout(() => {
        wishText.textContent = wishes[index].text;
        wishMeaning.textContent = wishes[index].meaning;
        
        // Add fade in animation
        wishText.style.transition = 'opacity 0.6s ease-out';
        wishMeaning.style.transition = 'opacity 0.6s ease-out';
        wishText.style.opacity = '1';
        wishMeaning.style.opacity = '1';
    }, 300);
}

// Auto-rotate wishes every 5 seconds
setInterval(nextWish, 5000);

// Initialize with first wish
displayWish(0);