/**
 * scrip untuk membuat link bisa dicopy
 */

const actionlink = document.querySelectorAll(".link-card .link-action");

actionlink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("action : ", action.parentElement);
        const url = action.parentElement.getAttribute("href");
        console.log("url : ", url);
        navigator.clipboard.writeText(url);
        alert("link berhasil disalin")
        
        /**
         * untuk menmunculkan toaster notification
         */
        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
        `;

        /**
         * untuk menghilangkan toast notification
         */

        setTimeout(() => {
            document
            .querySelector("#toast .toast-container")
            .classList.add("toast-gone")
        }, 300)

        setTimeout(() => {
            document
            .querySelector("#toast .toast-container").remove();
        }, 2000);
    });
});

/**
 * untuk ganti icon sosmet saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill")
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

/**
 * animation text mooving
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(
        ".bg-text-animation"
        ).style.transform = `translateX(${window.scrollY / 5}px)`;
});