// MOBILE MENU
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const mobileBodyContainer = document.querySelector(".mobile-body-container");

    hamburgerIcon.addEventListener("click", () => {
        mobileBodyContainer.classList.add("show");
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
        mobileBodyContainer.classList.remove("show");
        setTimeout(() => {
            hamburgerIcon.style.display = "block";
            closeIcon.style.display = "none";
        }, 300); 
    });
});

const dropdownButtons = document.querySelectorAll('.display-dropdown');

dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.mobile-dropdown-items').forEach((dropdown) => {
            dropdown.style.display = 'none';
        });
        document.querySelectorAll('.close-dropdown').forEach((closeBtn) => {
            closeBtn.style.display = 'none';
        });
        document.querySelectorAll('.display-dropdown').forEach((displayBtn) => {
            displayBtn.style.display = 'block';
        });

        const parentLi = button.closest('li');
        const dropdownItems = parentLi.querySelector('.mobile-dropdown-items');
        const closeDropdown = parentLi.querySelector('.close-dropdown');

        dropdownItems.style.display = 'block';
        closeDropdown.style.display = 'block';
        button.style.display = 'none';
    });
});


const closeButtons = document.querySelectorAll('.close-dropdown');

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.mobile-dropdown-items').forEach((dropdown) => {
            dropdown.style.display = 'none';
        });
        document.querySelectorAll('.close-dropdown').forEach((closeBtn) => {
            closeBtn.style.display = 'none';
        });
        document.querySelectorAll('.display-dropdown').forEach((displayBtn) => {
            displayBtn.style.display = 'block';
        });
    });
});