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
const diemMoiLanChoiJs = localStorage.getItem("DiemMoiLanChoi");
finalScore.innerText = "Score: " + diemMoiLanChoiJs;

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('btn');

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const bangDiemJs = JSON.parse(localStorage.getItem("bangDiemJson")) || [];

function saveHighScore(e){
   
    const DiemKhiNhanNutSave = {
        score: diemMoiLanChoiJs,
        name: username.value
    }
    bangDiemJs.push(DiemKhiNhanNutSave);
    bangDiemJs.sort((a,b) => {
        return b.score - a.score;
    });

    bangDiemJs.splice(5); // bangDiemJs chỉ cho phép lưu được 5 phần tử (index 0, ..., index 4). Nếu push tiếp phần từ thứ 6, thì phần tử thứ 5 tại vị trí index 4 sẽ bị thay thế bằng phần tử thứ 6.
    
    localStorage.setItem("bangDiemJson", JSON.stringify(bangDiemJs));
    window.location.replace("/index.html");
}