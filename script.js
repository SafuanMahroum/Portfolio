document.addEventListener("DOMContentLoaded", () => {

    const disableScroll = () => document.body.style.overflow = "hidden";
    const enableScroll = () => document.body.style.overflow = "";

    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("char-count");

    if (messageInput && charCount) {
        messageInput.addEventListener("input", () => {
            const length = messageInput.value.length;

            charCount.classList.toggle("hidden", length === 0);
            charCount.innerText = `${length} / 2000`;

            charCount.classList.toggle("text-red-500", length > 1999);
            charCount.classList.toggle("text-neutral-500", length <= 1999);
        });
    }

    const btn = document.getElementById("button");
    const btnText = document.getElementById("btn-text");
    const btnLoader = document.getElementById("btn-loader");
    const form = document.getElementById("form");

    const showNotif = () => {
        const notif = document.getElementById("notif");
        if (!notif) return;

        notif.classList.remove("hidden");
        setTimeout(() => notif.classList.remove("opacity-0", "translate-y-3"), 10);

        setTimeout(() => {
            notif.classList.add("opacity-0", "translate-y-3");
            setTimeout(() => notif.classList.add("hidden"), 300);
        }, 3000);
    };

    if (form && btnText && btnLoader) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            btnText.innerText = "Envoi...";
            btnLoader.classList.remove("hidden");

            emailjs.sendForm("default_service", "template_mq04aqg", this)
                .then(() => {
                    btnText.innerText = "Envoyer le message";
                    btnLoader.classList.add("hidden");
                    showNotif();
                })
                .catch(err => {
                    btnText.innerText = "Envoyer le message";
                    btnLoader.classList.add("hidden");
                    alert(JSON.stringify(err));
                });
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    const videoModal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("video-frame");
    const closeVideo = document.getElementById("close-video");

    const openVideoModal = videoId => {
        if (!videoModal || !videoFrame) return;

        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1`;
        videoModal.classList.remove("opacity-0", "pointer-events-none");
        videoModal.classList.add("opacity-100");
        disableScroll();
    };

    const closeVideoModal = () => {
        if (!videoModal || !videoFrame) return;

        videoModal.classList.add("opacity-0");
        videoModal.classList.remove("opacity-100");

        setTimeout(() => {
            videoModal.classList.add("pointer-events-none");
            videoFrame.src = "";
        }, 300);

        enableScroll();
    };

    window.openVideoModal = openVideoModal;

    if (closeVideo) closeVideo.addEventListener("click", closeVideoModal);
    if (videoModal) videoModal.addEventListener("click", e => e.target === videoModal && closeVideoModal());

    const imageModal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeImage = document.getElementById("close-image");

    const openImageModal = src => {
        if (!imageModal || !modalImage) return;

        modalImage.src = src;
        imageModal.classList.remove("opacity-0", "pointer-events-none");
        imageModal.classList.add("opacity-100");
        disableScroll();
    };

    const closeImageModal = () => {
        if (!imageModal || !modalImage) return;

        imageModal.classList.add("opacity-0");
        imageModal.classList.remove("opacity-100");

        setTimeout(() => {
            imageModal.classList.add("pointer-events-none");
            modalImage.src = "";
        }, 300);

        enableScroll();
    };

    window.openImageModal = openImageModal;

    if (closeImage) closeImage.addEventListener("click", closeImageModal);
    if (imageModal) imageModal.addEventListener("click", e => e.target === imageModal && closeImageModal());

    const mobileMenu = document.getElementById("mobile-menu");
    const openMenu = document.getElementById("open-menu");

    const toggleMenu = () => {
        if (!mobileMenu) return;

        const isOpen = mobileMenu.classList.contains("opacity-100");

        mobileMenu.classList.toggle("opacity-100", !isOpen);
        mobileMenu.classList.toggle("opacity-0", isOpen);
        mobileMenu.classList.toggle("pointer-events-none", isOpen);

        isOpen ? enableScroll() : disableScroll();
    };

    if (openMenu) openMenu.addEventListener("click", toggleMenu);
    if (mobileMenu) mobileMenu.addEventListener("click", e => e.target === mobileMenu && toggleMenu());

    document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", toggleMenu);
    });

    const homeLink = document.getElementById("home-link");
    if (homeLink) {
        homeLink.addEventListener("click", () => {
            if (mobileMenu && mobileMenu.classList.contains("opacity-100")) toggleMenu();
        });
    }

    const marquees = document.querySelectorAll(".animate-scroll");

    if (marquees.length > 0) {
        const marqueeObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                } else {
                    entry.target.style.animationPlayState = "paused";
                }
            });
        }, { threshold: 0 });

        marquees.forEach(m => marqueeObserver.observe(m));
    }

});