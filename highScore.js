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
const bangDiemSapXepGiamDan = JSON.parse(localStorage.getItem("bangDiemJson")) || [];

highScoreList.innerHTML = bangDiemSapXepGiamDan.map(DiemKhiNhanNutSave => {
    return `<li class="bangDiem">${DiemKhiNhanNutSave.name} - ${DiemKhiNhanNutSave.score}</li>`;
}).join("");
