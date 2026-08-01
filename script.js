function copyWallet() {
    let wallet = document.getElementById("wallet");
    wallet.select();
    document.execCommand("copy");
    alert("Wallet Address Copied!");
}

const popup = document.getElementById("depositPopup");

// Open Popup
function openPopup() {
    popup.style.display = "flex";
}

// Close Popup
function closePopup() {
    popup.style.display = "none";

    document.getElementById("depositForm").style.display = "block";
    document.getElementById("loadingMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "none";

    document.getElementById("depositForm").reset();
}

// Close popup when clicking outside
window.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
};

// Handle form submission
document.getElementById("depositForm").addEventListener("submit", function(e) {

    e.preventDefault();

    document.getElementById("depositForm").style.display = "none";
    document.getElementById("loadingMessage").style.display = "block";

    setTimeout(function(){

        document.getElementById("loadingMessage").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

    },2000);

});
// Premium Counter Animation

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseFloat(counter.dataset.target);

        let current = 0;

        const increment = target / 100;

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target;

            } else {

                if (target % 1 !== 0) {
                    counter.innerText = current.toFixed(1);
                } else {
                    counter.innerText = Math.floor(current);
                }

                requestAnimationFrame(update);
            }

        };

        update();

        observer.unobserve(counter);

    });

});

counters.forEach(counter => observer.observe(counter));
function previewPayment(event){

    const image = document.getElementById("paymentPreview");

    image.src = URL.createObjectURL(event.target.files[0]);

    image.style.display = "block";

}
