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

const highScoreList = document.getElementById('highScoreList');
const bangThoiGianSapXepTangDan = JSON.parse(localStorage.getItem("bangThoiGianJson")) || [];

highScoreList.innerHTML = bangThoiGianSapXepTangDan.map(ThoiGianKhiNhanNutSave => {
    return `<li class="bangDiem">${ThoiGianKhiNhanNutSave.name} - ${ThoiGianKhiNhanNutSave.gio} : ${ThoiGianKhiNhanNutSave.phut} : ${ThoiGianKhiNhanNutSave.giay}</li>`;
}).join("");

document.getElementById('btnXoaBtt').addEventListener('click', (e) => {
    localStorage.removeItem("bangThoiGianJson");
    window.location.replace("/DoReMonIndex.html")
});

