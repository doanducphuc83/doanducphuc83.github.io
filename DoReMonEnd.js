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

const finalScore = document.getElementById('finalScore');
const giojs = JSON.parse(localStorage.getItem("luuGio"));
const phutjs = JSON.parse(localStorage.getItem("luuPhut"));
const giayjs = JSON.parse(localStorage.getItem("luuGiay"));
let giayTinhToan;
let phutTinhToan;
let gioTinhToan;
if (giayjs < 10) {
    const giayArray = giayjs.split('', 2);
    giayTinhToan = giayArray[1]*1;
}
else {
    giayTinhToan = giayjs;
}

if (phutjs < 10) {
    const phutArray = phutjs.split('', 2);
    phutTinhToan = phutArray[1]*1;
}
else {
    phutTinhToan = phutjs;
}

if (giojs < 10) {
    const gioArray = giojs.split('', 2);
    gioTinhToan = gioArray[1]*1;
}
else {
    gioTinhToan = giojs;
}

const thoiGianSapXep = gioTinhToan * 3600 + phutTinhToan * 60 + giayTinhToan;

finalScore.innerText = "Time Played: " + giojs + " : " + phutjs + " : " + giayjs;

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('btn');

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = false;
});

const bangThoiGianjs = JSON.parse(localStorage.getItem("bangThoiGianJson")) || [];

function saveHighScore(){
    const thoiGianKhiNhanNutSave = {
        gio: giojs,
        phut: phutjs,
        giay: giayjs,
        thoiGianSapXepTangDan: thoiGianSapXep,
        name: username.value
    }
    bangThoiGianjs.push(thoiGianKhiNhanNutSave);
    bangThoiGianjs.sort((a,b) => {
        return a.thoiGianSapXepTangDan - b.thoiGianSapXepTangDan;
    });

    bangThoiGianjs.splice(5); // bangThoiGianjs chỉ cho phép lưu được 5 phần tử (index 0, ..., index 4). Nếu push tiếp phần từ thứ 6, thì phần tử thứ 5 tại vị trí index 4 sẽ bị thay thế bằng phần tử thứ 6.
    
    localStorage.setItem("bangThoiGianJson", JSON.stringify(bangThoiGianjs));
    window.location.assign("/DoReMonIndex.html");
}