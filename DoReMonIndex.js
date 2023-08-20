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

document.getElementById('btnGoIndex').addEventListener('click', () => {
    localStorage.removeItem("anh1dichuyen");
    localStorage.removeItem("endGame");
    localStorage.removeItem("tdBatDau");
    localStorage.removeItem("tdKetThuc");
    localStorage.removeItem("xTrangcd");
    localStorage.removeItem("yTrangcd");
    localStorage.removeItem("x1cd");
    localStorage.removeItem("y1cd");
    localStorage.removeItem("x2cd");
    localStorage.removeItem("y2cd");
    localStorage.removeItem("x3cd");
    localStorage.removeItem("y3cd");
    localStorage.removeItem("x4cd");
    localStorage.removeItem("y4cd");
    localStorage.removeItem("x5cd");
    localStorage.removeItem("y5cd");
    localStorage.removeItem("x6cd");
    localStorage.removeItem("y6cd");
    localStorage.removeItem("x7cd");
    localStorage.removeItem("y7cd");
    localStorage.removeItem("x8cd");
    localStorage.removeItem("y8cd");
    localStorage.removeItem("x9cd");
    localStorage.removeItem("y9cd");
    localStorage.removeItem("x10cd");
    localStorage.removeItem("y10cd");
    localStorage.removeItem("x11cd");
    localStorage.removeItem("y11cd");
    localStorage.removeItem("x12cd");
    localStorage.removeItem("y12cd");
    localStorage.removeItem("x13cd");
    localStorage.removeItem("y13cd");
    localStorage.removeItem("x14cd");
    localStorage.removeItem("y14cd");
    localStorage.removeItem("x15cd");
    localStorage.removeItem("y15cd");
    localStorage.removeItem("x16cd");
    localStorage.removeItem("y16cd");
    localStorage.removeItem("xTrang");
    localStorage.removeItem("yTrang");
    localStorage.removeItem("x1");
    localStorage.removeItem("y1");
    localStorage.removeItem("x2");
    localStorage.removeItem("y2");
    localStorage.removeItem("x3");
    localStorage.removeItem("y3");
    localStorage.removeItem("x4");
    localStorage.removeItem("y4");
    localStorage.removeItem("x5");
    localStorage.removeItem("y5");
    localStorage.removeItem("x6");
    localStorage.removeItem("y6");
    localStorage.removeItem("x7");
    localStorage.removeItem("y7");
    localStorage.removeItem("x8");
    localStorage.removeItem("y8");
    localStorage.removeItem("x9");
    localStorage.removeItem("y9");
    localStorage.removeItem("x10");
    localStorage.removeItem("y10");
    localStorage.removeItem("x11");
    localStorage.removeItem("y11");
    localStorage.removeItem("x12");
    localStorage.removeItem("y12");
    localStorage.removeItem("x13");
    localStorage.removeItem("y13");
    localStorage.removeItem("x14");
    localStorage.removeItem("y14");
    localStorage.removeItem("x15");
    localStorage.removeItem("y15");
    localStorage.removeItem("x16");
    localStorage.removeItem("y16");
    localStorage.removeItem("luuGio");
    localStorage.removeItem("luuPhut");
    localStorage.removeItem("luuGiay");
    localStorage.removeItem("daPlay");
});

document.getElementById('btnPlayGame').style.marginTop = 20 + "vh";