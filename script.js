const video = document.getElementById('video');
const scanBtn = document.getElementById('scan-btn');
const scanLine = document.querySelector('.scan-line');
const statusText = document.getElementById('status-text');
const subText = document.getElementById('sub-text');

/**
 * Kamerayı en hızlı ve performanslı şekilde başlatan fonksiyon
 */
async function initCamera() {
    const constraints = {
        video: {
            width: { ideal: 640 }, 
            height: { ideal: 480 },
            facingMode: "user" 
        },
        audio: false // Ses kapalı olduğu için açılış hızı artar
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        
        // Video yüklenir yüklenmez oynat (gecikmeyi önler)
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (err) {
        console.error("Kamera hatası:", err);
        statusText.innerText = "SİSTEM HATASI";
        subText.innerText = "Kamera izni verilmedi veya cihaz bulunamadı.";
    }
}

/**
 * Tarama animasyonunu ve simülasyonu başlatır
 */
scanBtn.addEventListener('click', () => {
    // Görsel efektleri aktifleştir
    scanLine.style.display = 'block';
    scanBtn.style.display = 'none';
    
    statusText.innerText = "TARANIYOR...";
    statusText.style.color = "#00f2ff";
    subText.innerText = "Biyometrik veriler analiz ediliyor...";

    // 4 Saniyelik işlem süresi (Simülasyon)
    setTimeout(() => {
        completeAction();
    }, 4000);
});

/**
 * İşlem tamamlandığında kullanıcıya onay ekranını gösterir
 */
function completeAction() {
    scanLine.style.display = 'none';
    
    statusText.innerText = "ERİŞİM ONAYLANDI";
    statusText.style.color = "#00ff88"; // Neon Yeşil
    statusText.style.textShadow = "0 0 15px #00ff88";
    subText.innerText = "Hoş geldin, Enes Deva. Yetki: Yönetici";
}

// Dosya yüklendiği an kamerayı tetikle
initCamera();
