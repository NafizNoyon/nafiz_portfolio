const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

const modalButtons = document.querySelectorAll(".modal-btn");

modalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const title = button.getAttribute("data-title");
        const text = button.getAttribute("data-text");

        modalTitle.textContent = title;
        modalText.textContent = text;

        modal.classList.add("active");
    });
});

modalClose.addEventListener("click", function() {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});