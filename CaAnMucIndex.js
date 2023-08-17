function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen().catch((e) => { });
    }
}

document.addEventListener("dblclick", () => {
    toggleFullscreen();
});

document.getElementById('btnCaExit').addEventListener('click', (e) => {
    localStorage.removeItem("DiemMoiLanChoi");
});

document.getElementById('btnPlayGame').style.marginTop = 20 + "vh";