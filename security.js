function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

// Fungsi Cek Flag
function checkFlag(currentLevel, inputId, expectedRot13, nextLevelUrl) {
    let val = document.getElementById(inputId).value.toUpperCase();
    
    if (currentLevel === 1) {
        if (val === "FIRST_CODE") {
            sessionStorage.setItem("level1_clear", "true");
            window.location.href = nextLevelUrl;
        } else {
            alert("ACCESS DENIED: Flag Salah!");
        }
        return;
    }

    if (rot13(val) === expectedRot13) {
        sessionStorage.setItem("level" + currentLevel + "_clear", "true");
        window.location.href = nextLevelUrl;
    } else {
        alert("ACCESS DENIED: Flag Salah!");
    }
}

function protectPage(requiredLevel) {
    if (sessionStorage.getItem("level" + requiredLevel + "_clear") !== "true") {
        alert("SYSTEM ALERT: Anda mencoba melompati level! Akses ditolak.");
        // Tendang kembali ke level sebelumnya atau ke index
        window.location.href = "level" + requiredLevel + ".html"; 
    }
}