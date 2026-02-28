document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imageModalImg");
    const modalTitle = document.getElementById("imageModalTitle");
    const closeBtn = modal.querySelector(".image-modal-close");
    const downloadBtn = modal.querySelector(".image-modal-download");
    const carouselInner = document.querySelector(".carousel-inner");

    // Ouvrir la modale au clic sur le carrousel
    if (carouselInner) {
        carouselInner.addEventListener("click", function () {
            // Trouver l'image active dans le carrousel
            const activeItem = carouselInner.querySelector(".carousel-item.active");
            if (activeItem) {
                const img = activeItem.querySelector("img");
                const overlay = activeItem.querySelector(".image-overlay");

                if (img) {
                    // Récupérer le titre depuis image-overlay
                    let title = "Retable";
                    if (overlay) {
                        const badge = overlay.querySelector(".image-badge");
                        const heading = overlay.querySelector(".image-heading");
                        if (badge && heading) {
                            title = `${heading.textContent} - ${badge.textContent}`;
                        } else if (heading) {
                            title = heading.textContent;
                        }
                    }

                    modalImg.src = img.src;
                    modalImg.alt = title;
                    modalTitle.textContent = title;
                    modal.classList.add("is-open");
                    modal.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";
                }
            }
        });
    }

    // Télécharger l'image
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const imgSrc = modalImg.src;
            const imgTitle = modalTitle.textContent || "retable";

            // Créer un élément <a> temporaire pour télécharger
            fetch(imgSrc)
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    // Nettoyer le nom de fichier (remplacer les caractères spéciaux)
                    const filename = imgTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                })
                .catch(error => {
                    console.error('Erreur lors du téléchargement:', error);
                    // Fallback: ouvrir l'image dans un nouvel onglet
                    window.open(imgSrc, '_blank');
                });
        });
    }

    // Fermer la modale
    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Fermer en cliquant sur le fond
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
});

