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
