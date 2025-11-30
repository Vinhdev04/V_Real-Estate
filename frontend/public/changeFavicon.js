function setupVisibilityEffects() {
    const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');

    const originalTitle = document.title;
    const originalFavicon = favicon?.href;

    // Tạo audio để phát ding
    const dingSound = new Audio("./ting.mp3");
    dingSound.volume = 1.0; // âm lượng 0 → 1

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            // Khi rời tab
            if (favicon) favicon.href = "/agent.png";
            document.title = "Come back here🙄!";
        } else {
            // Khi quay lại tab
            if (favicon) favicon.href = originalFavicon;
            document.title = originalTitle;

            // Phát âm thanh khi user quay lại tab
            dingSound.play().catch(() => {});
        }
    });
}

setupVisibilityEffects();
