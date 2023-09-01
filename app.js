(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function open_description_click(clickid) {
    document.getElementById(clickid + "_description").style.display = "flex";
    document.getElementById(clickid + "_description").style.opacity = "100%";

    full_container = document.getElementById("experiance-fullscreen-container");
    full_container.style.display = "flex";
    full_container.style.opacity = "100%";

    click_handler = function() {
        document.getElementById(clickid + "_description").style.opacity = "0%";

        full_container.style.opacity = "0%";
        setTimeout(function() {
            full_container.style.display = "none";
        });

        full_container.removeEventListener("click", this);
    };

    full_container.addEventListener("click", click_handler);
}
