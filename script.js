// Sayfa geçişi fonksiyonu
function navigateTo(page) {
    window.location.href = page;
}

// Matrix Animasyonu
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff64';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(char, i * fontSize, drops[i]);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

function animate() {
    drawMatrix();
    requestAnimationFrame(animate);
}

animate();

// Pencere boyutu değiştiğinde canvas'ı güncelle
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Video döngüsü kontrolü
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.full-screen-video');
    
    if (video) {
        video.play().catch(error => {
            console.log('Video otomatik çalınamamış:', error);
        });
    }
});
