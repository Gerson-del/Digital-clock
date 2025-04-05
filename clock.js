button = document.getElementById("button");


setInterval(function() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}, 1000);






function fun() {
    for (let i = 0; i < 10; i++) {

        
        let heart = document.createElement("div");
        heart.classList.add("heart");
        
        let inner = document.createElement("span");
        inner.classList.add("inner-heart");
        inner.innerText = "💖";
        
        heart.appendChild(inner);
        document.body.appendChild(heart);
        

        let x = Math.random() * window.innerWidth;
        let duration = Math.random() * 3 + 2;
        heart.style.animationDuration = `${duration}s`;
        inner.style.animationDuration = `${duration}s`;

        heart.style.left = `${x}px`;
        

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    document.body.classList.toggle("dark-mode");
}



