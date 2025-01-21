// PC MENU
const menuItems = document.querySelectorAll("ul.main-menu > li:not(#logo)");
const targetDiv = document.querySelector("#dropdown");
let currentLi = null;

menuItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
        if (currentLi === li) return;

        currentLi = li;

        targetDiv.innerHTML = "";

        const dropdownItems = li.querySelector(".dropdown-items");
        if (dropdownItems) {
            const links = dropdownItems.querySelectorAll("a");

            // Move the links to the target div if any exist
            if (links.length > 0) {
                links.forEach((link) => {
                    targetDiv.appendChild(link.cloneNode(true));
                });

                // Show the target div with animation
                targetDiv.style.display = "flex";
                requestAnimationFrame(() => {
                    targetDiv.style.opacity = "1";
                    targetDiv.style.transform = "translateY(0)";
                });
            } else {
                targetDiv.style.display = "none";
            }
        } else {
            targetDiv.style.display = "none";
        }
    });

    li.addEventListener("mouseleave", (event) => {
        if (!li.contains(event.relatedTarget) && !targetDiv.contains(event.relatedTarget) && !menuItems.contains(event.relatedTarget)) {
            currentLi = null;

            targetDiv.style.opacity = "0";
            targetDiv.style.transform = "translateY(-10px)";

            setTimeout(() => {
                targetDiv.style.display = "none";
            }, 300);
        }
    });
});

// Add mouseleave event listener to the dropdown div
targetDiv.addEventListener("mouseleave", (event) => {
    if (!targetDiv.contains(event.relatedTarget)) {
        currentLi = null;

        targetDiv.style.opacity = "0";
        targetDiv.style.transform = "translateY(-10px)";

        setTimeout(() => {
            targetDiv.style.display = "none";
        }, 300);
    }
});

Object.assign(targetDiv.style, {
    display: "none",
    opacity: "0",
    transform: "translateY(-10px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
});