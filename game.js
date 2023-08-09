//fullscreen
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

// canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
let gameOver = false;
let stopGame = false;
let soLuongNhanVatMayTuThemVao = 0;
ctx.font = '20px Times New Roman';

//background
const bg1 = new Image();
bg1.src = 'img/background.png';
const bg2 = new Image();
bg2.src = 'img/background1.png';
class BackGround {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.x1 = 0;
        this.x2 = this.resizeCanvas.width - 10;
        this.y = 0;
    }
    update() {
        this.x1--;
        if (this.x1 < - this.resizeCanvas.width) {
            this.x1 = this.resizeCanvas.width - 15;
        }
        this.x2--;
        if (this.x2 < - this.resizeCanvas.width) {
            this.x2 = this.resizeCanvas.width - 15;
        }
    }
    draw() {
        ctx.drawImage(bg1, this.x1, this.y, this.resizeCanvas.width, this.resizeCanvas.height / 5);
        ctx.drawImage(bg2, this.x2, this.y, this.resizeCanvas.width, this.resizeCanvas.height / 5);
    }
    reset() {
        this.x1 = 0;
        this.x2 = this.resizeCanvas.width - 10;
        this.y = 0;
    }
}


// Điều khiển Player
class InputHandler {
    constructor() {
        this.keys = [];
        this.touchX = '';
        this.touchY = '';
        this.touchX2 = '';
        this.touchY2 = '';
        this.touchTreshold = 10;
        window.addEventListener('keydown', (e) => {
            if ((e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            if (e.key === 'Enter' && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
                if (stopGame === true) {
                    restartGame();
                }
            }
        });
        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Enter') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }

        });
        window.addEventListener('touchstart', (e) => {
            [...e.changedTouches].forEach(touch => {
                if (touch.identifier === 0) {
                    this.touchX = touch.pageX;
                    this.touchY = touch.pageY;
                }

                if (touch.identifier === 1) {
                    this.touchX2 = touch.pageX;
                    this.touchY2 = touch.pageY;
                }

            });



        });
        window.addEventListener('touchmove', (e) => {
            [...e.changedTouches].forEach(touch => {
                if (touch.identifier === 0) {
                    const swipeDistanceX = touch.pageX - this.touchX;
                    if (swipeDistanceX < - this.touchTreshold && this.keys.indexOf('vuot trai') === -1) {
                        this.keys.push('vuot trai')
                    }

                    if (swipeDistanceX > this.touchTreshold && this.keys.indexOf('vuot phai') === -1) {
                        this.keys.push('vuot phai');
                    }

                    const swipeDistanceY = touch.pageY - this.touchY;
                    if (swipeDistanceY < - this.touchTreshold && this.keys.indexOf('vuot len') === -1) {
                        this.keys.push('vuot len')
                    }

                    if (swipeDistanceY > this.touchTreshold && this.keys.indexOf('vuot xuong') === -1) {
                        this.keys.push('vuot xuong');
                        if (gameOver) restartGame();
                    }

                }

                if (touch.identifier === 1) {
                    const swipeDistanceX2 = touch.pageX - this.touchX2;
                    if (swipeDistanceX2 < - this.touchTreshold && this.keys.indexOf('vuot trai') === -1) {
                        this.keys.push('vuot trai')
                    }

                    if (swipeDistanceX2 > this.touchTreshold && this.keys.indexOf('vuot phai') === -1) {
                        this.keys.push('vuot phai');
                    }


                    const swipeDistanceY2 = touch.pageY - this.touchY2;
                    if (swipeDistanceY2 < - this.touchTreshold && this.keys.indexOf('vuot len') === -1) {
                        this.keys.push('vuot len')
                    }

                    if (swipeDistanceY2 > this.touchTreshold && this.keys.indexOf('vuot xuong') === -1) {
                        this.keys.push('vuot xuong');
                        if (gameOver) restartGame();
                    }

                }


            });
        });
        window.addEventListener('touchend', (e) => {
            [...e.changedTouches].forEach(touch => {
                if (touch.identifier === 0) {
                    this.keys.splice(this.keys.indexOf('vuot trai'), 1);
                    this.keys.splice(this.keys.indexOf('vuot phai'), 1);

                    this.keys.splice(this.keys.indexOf('vuot len'), 1);
                    this.keys.splice(this.keys.indexOf('vuot xuong'), 1);
                }

                if (touch.identifier === 1) {
                    this.keys.splice(this.keys.indexOf('vuot trai'), 1);
                    this.keys.splice(this.keys.indexOf('vuot phai'), 1);

                    this.keys.splice(this.keys.indexOf('vuot len'), 1);
                    this.keys.splice(this.keys.indexOf('vuot xuong'), 1);
                }
            });

        });
    }
}
const input = new InputHandler();

// player
const playerImage = new Image();
playerImage.src = 'img/ca_boi_an.png';
let playerAnMuc = false;
let thoiGianPlayerAnMuc = 0;

class Player {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.spriteWidth = 117.6;
        this.spriteHeight = 66.25;
        this.x = this.spriteWidth;
        this.y = this.resizeCanvas.height / 2;
        this.speedX = 0;
        this.speedY = 0;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 7;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;

    }
    update(input) {
        if (playerAnMuc === false) {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < this.resizeCanvas.height / 5) {
                this.y = this.resizeCanvas.height / 5;
            }

            if (this.y > this.resizeCanvas.height - this.spriteHeight) {
                this.y = this.resizeCanvas.height - this.spriteHeight;
            }

            if (this.x < 0) {
                this.x = 0;
            }

            if (this.x > this.resizeCanvas.width - this.spriteWidth) {
                this.x = this.resizeCanvas.width - this.spriteWidth;
            }

            if (input.keys.indexOf('ArrowRight') > -1 || input.keys.indexOf('vuot phai') > -1) {
                this.frameY = 0;
                this.speedX = 3;
            }
            else if (input.keys.indexOf('ArrowLeft') > -1 || input.keys.indexOf('vuot trai') > -1) {
                this.frameY = 1;
                this.speedX = -3;
            }
            else if (input.keys.indexOf('ArrowUp') > -1 || input.keys.indexOf('vuot len') > -1) {
                this.speedY = -2;
            }
            else if (input.keys.indexOf('ArrowDown') > -1 || input.keys.indexOf('vuot xuong') > -1) {
                this.speedY = 2;
            }
            else {
                this.speedX = 0;
                this.speedY = 0;
            }

            if (input.keys.indexOf('ArrowRight') > -1 || input.keys.indexOf('vuot phai') > -1) {
                if (input.keys.indexOf('ArrowUp') > -1 || input.keys.indexOf('vuot len') > -1) {
                    this.frameY = 0;
                    this.speedX = 3;
                    this.speedY = -2;
                }

                if (input.keys.indexOf('ArrowDown') > -1 || input.keys.indexOf('vuot xuong') > -1) {
                    this.frameY = 0;
                    this.speedX = 3;
                    this.speedY = 2;
                }
            }

            if (input.keys.indexOf('ArrowLeft') > -1 || input.keys.indexOf('vuot trai') > -1) {
                if (input.keys.indexOf('ArrowUp') > -1 || input.keys.indexOf('vuot len') > -1) {
                    this.frameY = 1;
                    this.speedX = -3;
                    this.speedY = -2;
                }

                if (input.keys.indexOf('ArrowDown') > -1 || input.keys.indexOf('vuot xuong') > -1) {
                    this.frameY = 1;
                    this.speedX = -3;
                    this.speedY = 2;
                }
            }
        }

    }
    draw(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX < this.maxFrame) { this.frameX++ }
            else { this.frameX = 0 }
            this.frameTimer = 0;
        }
        else {
            this.frameTimer += deltaTime;
        }
        ctx.drawImage(playerImage, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
    }
    reset() {
        this.x = this.spriteWidth;
        this.y = this.resizeCanvas.height / 2;
        this.speed = 0;
        this.speedY = 0;
    }
    restart() {
        this.x = this.spriteWidth;
        this.y = this.resizeCanvas.height / 2;
        this.speedX = 0;
        this.speedY = 0;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 7;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
    }
}

// Kẻ thù
const anhKT = new Image();
anhKT.src = 'img/KT.png';
class KeThu {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.frameKtX = 0;
        this.frameKtY = 1;
        this.maxFrameKT = 5;
        this.widthKT = 133;
        this.heightKT = 156;
        this.xKT = this.resizeCanvas.width - this.widthKT;
        this.yKT = Math.random() * this.resizeCanvas.height;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.speedX = -1;
        this.speedY = 1;
    }
    update() {
        this.xKT += this.speedX;
        this.yKT += this.speedY;

        if (this.xKT < 0) {
            this.frameKtY = 0;
            this.xKT = 0;
            this.speedX = 1;
        }

        if (this.xKT > this.resizeCanvas.width - this.widthKT) {
            this.xKT = this.resizeCanvas.width - this.widthKT;
            this.frameKtY = 1;
            this.speedX = -1;
        }

        if (this.yKT > this.resizeCanvas.height - this.heightKT / 1.4) {
            this.yKT = this.resizeCanvas.height - this.heightKT / 1.4;
            this.speedY = -1;
        }


        if (this.yKT < this.resizeCanvas.height / 5) {
            this.yKT = this.resizeCanvas.height / 5;
            this.speedY = 1;
        }
    }
    draw(deltaTime, ctx) {
        if (this.frameTimer > this.frameInterval) {
            if (this.frameKtX < this.maxFrameKT) { this.frameKtX++ }
            else { this.frameKtX = 0 }
            this.frameTimer = 0;
        }
        else {
            this.frameTimer += deltaTime;
        }
        ctx.drawImage(anhKT, this.frameKtX * this.widthKT, this.frameKtY * this.heightKT, this.widthKT, this.heightKT, this.xKT, this.yKT, this.widthKT, this.heightKT);
    }
    restart() {
        this.frameKtX = 0;
        this.frameKtY = 1;
        this.maxFrameKT = 5;
        this.xKT = this.resizeCanvas.width - this.widthKT;
        this.yKT = Math.random() * this.resizeCanvas.height;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.speedX = -1;
        this.speedY = 1;
    }
}
// mồm cá
class MomCa {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.xMom = this.xMom;
        this.yMom = this.yMom;
    }
    update() {
        if (this.resizeCanvas.player.frameY === 0 || this.resizeCanvas.player.frameY === 2) {
            this.xMom = this.resizeCanvas.player.x + 100;
            this.yMom = this.resizeCanvas.player.y + 25;
        }

        if (this.resizeCanvas.player.frameY === 1 || this.resizeCanvas.player.frameY === 3) {
            this.xMom = this.resizeCanvas.player.x;
            this.yMom = this.resizeCanvas.player.y + 25;
        }

    }
    draw() {
        if (this.resizeCanvas.player.frameY === 0 || this.resizeCanvas.player.frameY === 2) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.xMom, this.yMom, 20, 20);
        }
        if (this.resizeCanvas.player.frameY === 1 || this.resizeCanvas.player.frameY === 3) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.xMom, this.yMom, 20, 20);
        }
    }
    restart() {
        this.xMom = this.xMom;
        this.yMom = this.yMom;
    }
}

// đuôi cá
class DuoiCa {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.xDuoi = this.xDuoi;
        this.yDuoi = this.yDuoi;
    }
    update() {
        if (this.resizeCanvas.player.frameY === 0 || this.resizeCanvas.player.frameY === 2) {
            this.xDuoi = this.resizeCanvas.player.x;
            this.yDuoi = this.resizeCanvas.player.y + 25;
        }
        if (this.resizeCanvas.player.frameY === 1 || this.resizeCanvas.player.frameY === 3) {
            this.xDuoi = this.resizeCanvas.player.x + 100;
            this.yDuoi = this.resizeCanvas.player.y + 25;
        }
    }
    draw() {
        if (this.resizeCanvas.player.frameY === 1 || this.resizeCanvas.player.frameY === 3) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.xDuoi, this.yDuoi, 20, 20);
        }
        if (this.resizeCanvas.player.frameY === 0 || this.resizeCanvas.player.frameY === 2) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.xDuoi, this.yDuoi, 20, 20);
        }
    }
    restart() {
        this.xDuoi = this.xDuoi;
        this.yDuoi = this.yDuoi;
    }
}

// bubbles (bong bóng)
const bongbong = new Image();
bongbong.src = 'img/bubble-64px.png';

class Bubble {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.x = Math.random() * this.resizeCanvas.width;
        this.y = this.resizeCanvas.height + Math.random() * this.resizeCanvas.height;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.bongVo = false;
    }
    update() {
        this.y -= this.speed;
        const dx = this.x - this.resizeCanvas.player.x;
        const dy = this.y - this.resizeCanvas.player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);
    }
    draw() {
        ctx.drawImage(bongbong, this.x, this.y, 100, 100);
    }
    restart() {
        this.x = Math.random() * this.resizeCanvas.width;
        this.y = this.resizeCanvas.height + Math.random() * this.resizeCanvas.height;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.bongVo = false;
    }
}

// mực chạy sang trái - sang phải
const muc = new Image();
muc.src = 'img/MucTraiPhai.png';
class Muc {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.xMuc = this.resizeCanvas.width;
        this.yMuc = Math.random() * this.resizeCanvas.height;
        this.mucWidth = 109;
        this.mucHeight = 41;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 4;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.kcMucMomCa;
        this.kcMucDuoiCa;
        this.speed = 0;
        this.speedY = -1;
    }
    update() {
        this.xMuc += this.speed;
        this.yMuc += this.speedY;
        if (this.frameY === 0) {
            this.speed = -1;
        }
        if (this.frameY === 1) {
            this.speed = 1;
        }
        if (this.yMuc < this.resizeCanvas.height / 5) {
            this.yMuc = this.resizeCanvas.height / 5;
            this.speedY = 1;
        }
        if (this.yMuc > this.resizeCanvas.height - this.mucHeight) {
            this.yMuc = this.resizeCanvas.height - this.mucHeight;
            this.speedY = -1;
        }
        if (this.xMuc < 0) {
            this.xMuc = 0;
            this.frameY = 1;
        }
        if (this.frameY === 1) {
            if (this.xMuc > this.resizeCanvas.width - this.mucWidth) {
                this.xMuc = this.resizeCanvas.width - this.mucWidth;
                this.frameY = 0;
            }
        }




        if (this.frameY === 0) {
            let dx = this.xMuc / 2 - momCa.xMom / 2;
            let dy = (this.yMuc + 10) / 2 - momCa.yMom / 2;
            this.kcMucMomCa = Math.sqrt(dx * dx + dy * dy);

            let mucDuoidx = this.xMuc / 2 - duoiCa.xDuoi / 2;
            let mucDuoidy = (this.yMuc + 10) / 2 - duoiCa.yDuoi / 2;
            this.kcMucDuoiCa = Math.sqrt(mucDuoidx * mucDuoidx + mucDuoidy * mucDuoidy);
        }

        if (this.frameY === 1) {
            let dx = (this.xMuc + 109) / 2 - momCa.xMom / 2;
            let dy = (this.yMuc + 10) / 2 - momCa.yMom / 2;
            this.kcMucMomCa = Math.sqrt(dx * dx + dy * dy);

            let mucDuoidx = (this.xMuc + 109) / 2 - duoiCa.xDuoi / 2;
            let mucDuoidy = (this.yMuc + 10) / 2 - duoiCa.yDuoi / 2;
            this.kcMucDuoiCa = Math.sqrt(mucDuoidx * mucDuoidx + mucDuoidy * mucDuoidy);
        }

    }
    draw(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX < this.maxFrame) { this.frameX++ }
            else { this.frameX = 0 }
            this.frameTimer = 0;
        }
        else {
            this.frameTimer += deltaTime;
        }
        ctx.drawImage(muc, this.frameX * this.mucWidth, this.frameY * this.mucHeight, this.mucWidth, this.mucHeight, this.xMuc, this.yMuc, this.mucWidth, this.mucHeight);
    }
    restart() {
        this.xMuc = this.resizeCanvas.width;
        this.yMuc = Math.random() * this.resizeCanvas.height;
        this.mucWidth = 109;
        this.mucHeight = 41;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 4;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;
        this.kcMucMomCa;
        this.kcMucDuoiCa;
        this.speed = 0;
        this.speedY = -1;
    }
}



//thay đổi canvas theo kích thước window
class ResizeCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.backGround = new BackGround(this);
        this.player = new Player(this);

        window.addEventListener('resize', e => {
            this.resize(e.target.window.innerWidth, e.target.window.innerHeight, ctx);
        });
    }

    resize(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.backGround.reset();
        ctx.font = '20px Georgia';
        this.player.reset();
    }
    update(deltaTime) {
        this.backGround.update();
        this.backGround.draw();
        this.player.update(input);
        this.player.draw(deltaTime);
    }
}
const resizeCanvas = new ResizeCanvas(canvas);
const momCa = new MomCa(resizeCanvas);
const duoiCa = new DuoiCa(resizeCanvas);
const kethu = new KeThu(resizeCanvas);

class MomKT {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        this.x;
        this.y;
        this.kcMomKtMomPlayer;
    }
    update(ctx) {
        if (kethu.frameKtY === 1) {
            this.x = kethu.xKT;
            this.y = kethu.yKT + 46;
        }
        if (kethu.frameKtY === 0) {
            this.x = kethu.xKT + 123;
            this.y = kethu.yKT + 68;
        }

        if (this.resizeCanvas.player.frameY === 0 || this.resizeCanvas.player.frameY === 2) {
            if (kethu.frameKtY === 1) {
                if (kethu.xKT > this.resizeCanvas.player.x) {
                    const dx = this.x / 2 - momCa.xMom / 2;
                    const dy = this.y / 2 - momCa.yMom / 2;
                    this.kcMomKtMomPlayer = Math.hypot(dx, dy);
                }

            }
        }

        if (this.resizeCanvas.player.frameY === 1 || this.resizeCanvas.player.frameY === 3) {
            if (kethu.frameKtY === 0) {
                if (kethu.xKT < this.resizeCanvas.player.x) {
                    const dx = this.x / 2 - momCa.xMom / 2;
                    const dy = this.y / 2 - momCa.yMom / 2;
                    this.kcMomKtMomPlayer = Math.hypot(dx, dy);
                }

            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 20, 20);
    }
    restart() {
        this.x;
        this.y;
        this.kcMomKtMomPlayer;
    }
}
const momKT = new MomKT(resizeCanvas);

const anhChet = new Image();
anhChet.src = 'img/vongChet.png';

class VongChet {
    constructor() {
        this.x = this.x;
        this.y = this.y;
        this.chetWidth = 221;
        this.chetHeight = 204;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 7;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;

    }
    update() {
        this.x = momKT.x - 20;
        this.y = momKT.y - 15;

        if (momKT.kcMomKtMomPlayer < 10) {
            stopGame = true;
            gameOver = true;
        }

    }
    draw(ctx, deltaTime) {
        if (momKT.kcMomKtMomPlayer < 30) {
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX < this.maxFrame) { this.frameX++ }
                else { this.frameX = 0 }
                this.frameTimer = 0;
            }
            else {
                this.frameTimer += deltaTime;
            }
            ctx.drawImage(anhChet, this.frameX * this.chetWidth, this.frameY * this.chetHeight, this.chetWidth, this.chetHeight, this.x, this.y, 50, 50);
        }
    }
    restart() {
        this.x = this.x;
        this.y = this.y;
        this.chetWidth = 221;
        this.chetHeight = 204;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 7;
        this.frameTimer = 0;
        this.fps = 30;
        this.frameInterval = 1000 / this.fps;

    }
}
const chet = new VongChet();

const bubblePop1 = document.getElementById('pop1');
const bubblePop2 = document.getElementById('pop2');

let phutBongMotVo = 0;
let phutBongHaiVo;
let giayBongMotVo = 0;
let giayBongHaiVo;
let t1;
let t2;
let thoiGianThemBong = 0;
let bubblesArray = [];
function handleBubbles(deltaTime) {
    if (thoiGianThemBong > 500) {
        bubblesArray.push(new Bubble(resizeCanvas));
        thoiGianThemBong = 0;
    }
    else {
        thoiGianThemBong += deltaTime;
    }
    bubblesArray.forEach((phanTuBong, i) => {
        phanTuBong.update();
        phanTuBong.draw();

        if (phanTuBong.y < 150) {
            bubblesArray.splice(i, 1);
        }

        if (giayBongMotVo === 0) {
            if (phanTuBong.distance <= 100) {
                if (!phanTuBong.bongVo) {
                    bubblePop1.play();
                    const curDate1 = new Date();
                    giayBongMotVo = curDate1.getSeconds();
                    phutBongMotVo = curDate1.getMinutes();
                    t1 = phutBongMotVo * 60 + giayBongMotVo;
                    giayBongHaiVo = 0;
                    phanTuBong.bongVo = true;
                    bubblesArray.splice(i, 1);
                }

            }
        }

        if (giayBongHaiVo === 0) {
            if (phanTuBong.distance <= 100) {
                if (!phanTuBong.bongVo) {
                    const curDate2 = new Date();
                    giayBongHaiVo = curDate2.getSeconds();
                    phutBongHaiVo = curDate2.getMinutes();
                    t2 = phutBongHaiVo * 60 + giayBongHaiVo;
                    phanTuBong.bongVo = true;
                    bubblesArray.splice(i, 1);
                }

            }
        }

        if (t2 > 0) {
            let t21 = t2 - t1;
            if (t21 >= 0) {
                if (t21 < 3) {
                    bubblePop2.play();
                    t21 = -1;
                    t1 = 0;
                    t2 = -1;
                    giayBongMotVo = 0;
                }

                if (t21 >= 3) {
                    bubblePop1.play();
                    t21 = -1;
                    t1 = 0;
                    t2 = -1;
                    giayBongMotVo = 0;
                }
            }

        }
    });
}

//điều khiển mực trái - phải
let tongMuc = 200;
let lost = 0;
let soLuongMucDaPush = 0;
let soLuongMucConSong = 200;
let soLuongMucChuaXuatHien = 200;
let ketThucLevel = false;
let soLuongMucArray = [];
let thoiGianThemNPC = 0;
let thoiGianChoGoiThongBao = 0;
function dieuKhienMuc(deltaTime) {
    if (thoiGianThemNPC > 3000) {
        if (soLuongMucDaPush < tongMuc) {
            soLuongMucArray.push(new Muc(resizeCanvas));
            soLuongMucDaPush++;
        }
        thoiGianThemNPC = 0;
    }
    else {
        thoiGianThemNPC += deltaTime;
    }

    soLuongMucArray.forEach((phanTuMuc) => {
        phanTuMuc.update();
        phanTuMuc.draw(deltaTime);
    });

    if (resizeCanvas.player.frameY === 1) {
        soLuongMucArray.forEach((phanTuMuc, i) => {
            if (phanTuMuc.frameY === 1) {
                if (phanTuMuc.xMuc < momCa.xMom) {
                    if (phanTuMuc.kcMucMomCa < 10) {
                        playerAnMuc = true;
                        resizeCanvas.player.frameY = 3;
                        soLuongMucArray.splice(i, 1);
                        score++;
                    }
                }
            }

            if (phanTuMuc.frameY === 0) {
                if (phanTuMuc.xMuc > duoiCa.xDuoi) {
                    if (phanTuMuc.kcMucDuoiCa < 30) {
                        phanTuMuc.frameY = 1;
                    }
                }
            }

        });
    }

    if (resizeCanvas.player.frameY === 3) {
        soLuongMucArray.forEach((phanTuMuc) => {
            if (phanTuMuc.frameY === 0) {
                if (phanTuMuc.xMuc > duoiCa.xDuoi) {
                    if (phanTuMuc.kcMucDuoiCa < 30) {
                        phanTuMuc.frameY = 1;
                    }
                }
            }

        });
    }

    if (resizeCanvas.player.frameY === 0) {
        soLuongMucArray.forEach((phanTuMuc, i) => {
            if (phanTuMuc.frameY === 0) {
                if (phanTuMuc.xMuc > momCa.xMom) {
                    if (phanTuMuc.kcMucMomCa < 10) {
                        playerAnMuc = true;
                        resizeCanvas.player.frameY = 2;
                        soLuongMucArray.splice(i, 1);
                        score++;
                    }
                }
            }

            if (phanTuMuc.frameY === 1) {
                if (phanTuMuc.xMuc < duoiCa.xDuoi) {
                    if (phanTuMuc.kcMucDuoiCa < 30) {
                        phanTuMuc.frameY = 0;
                    }
                }
            }

        });
    }


    if (resizeCanvas.player.frameY === 2) {
        soLuongMucArray.forEach((phanTuMuc) => {
            if (phanTuMuc.frameY === 1) {
                if (phanTuMuc.xMuc < duoiCa.xDuoi) {
                    if (phanTuMuc.kcMucDuoiCa < 30) {
                        phanTuMuc.frameY = 0;
                    }
                }
            }

        });
    }


    if (playerAnMuc === true) {
        thoiGianPlayerAnMuc += deltaTime;
    }
    if (thoiGianPlayerAnMuc > 1000) {
        playerAnMuc = false;
        thoiGianPlayerAnMuc = 0;
    }

    soLuongMucConSong = tongMuc - lost - score;
    soLuongMucChuaXuatHien = tongMuc - soLuongMucDaPush;

    if (soLuongMucConSong === 0) {
        thoiGianChoGoiThongBao += deltaTime;
    }
    if (thoiGianChoGoiThongBao > 500) {
        stopGame = true;
        ketThucLevel = true;
    }
}

class NhonMuc {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.kcNhonMucMomKT;
    }
    update(ctx) {
        soLuongMucArray.forEach((phanTuMuc, i) => {
            if (phanTuMuc.frameY === 0) {
                this.x = phanTuMuc.xMuc;
                this.y = phanTuMuc.yMuc + 10;
                ctx.fillStyle = 'yellow';
                ctx.fillRect(this.x, this.y, 20, 20);
            }
            if (phanTuMuc.frameY === 1) {
                this.x = phanTuMuc.xMuc + phanTuMuc.mucWidth;
                this.y = phanTuMuc.yMuc + 10;
                ctx.fillStyle = 'yellow';
                ctx.fillRect(this.x, this.y, 20, 20);
            }
            const dx = this.x / 2 - momKT.x / 2;
            const dy = this.y / 2 - momKT.y / 2;
            this.kcNhonMucMomKT = Math.hypot(dx, dy);

            if (kethu.frameKtY === 0) {
                if (phanTuMuc.frameY === 0) {
                    if (this.x > momKT.x) {
                        if (this.kcNhonMucMomKT < 10) {
                            soLuongMucArray.splice(i, 1);
                            lost++;
                        }
                    }
                }

            }
            if (kethu.frameKtY === 1) {
                if (phanTuMuc.frameY === 1) {
                    if (this.x < momKT.x) {
                        if (this.kcNhonMucMomKT < 10) {
                            soLuongMucArray.splice(i, 1);
                            lost++;
                        }
                    }
                }

            }
        });
    }
    restart() {
        this.x = 0;
        this.y = 0;
        this.kcNhonMucMomKT;
    }
}
const nhonMuc = new NhonMuc();

function thongBao(ctx) {
    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.fillText('Game Over: Score: ' + score + ', Lost: ' + lost, resizeCanvas.width / 3, resizeCanvas.height / 2);
        localStorage.setItem("DiemMoiLanChoi", score);
        setTimeout(function () { window.location.replace("/end.html") }, 1500);
    }

    if (ketThucLevel) {
        ctx.fillStyle = 'red';
        ctx.fillText('End Level: Score: ' + score + ' , Lost: ' + lost, resizeCanvas.width / 3, resizeCanvas.height / 2);
        localStorage.setItem("DiemMoiLanChoi", score);
        setTimeout(function () { window.location.replace("/end.html") }, 1500);
    }

}


function restartGame() {
    score = 0;
    lost = 0;
    gameOver = false;
    stopGame = false;
    soLuongNhanVatMayTuThemVao = 0;
    ctx.font = '20px Times New Roman';
    resizeCanvas.player.restart();
    resizeCanvas.backGround.reset();
    bubblesArray = [];
    soLuongMucArray = [];
    momCa.restart();
    duoiCa.restart();
    kethu.restart();
    momKT.restart();
    chet.restart();
    nhonMuc.restart();
    animate(0);
}



// animation loop
let lastTime = 0;
function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    momKT.update(ctx);
    momKT.draw(ctx);
    nhonMuc.update(ctx);
    momCa.update();
    momCa.draw();
    duoiCa.update();
    duoiCa.draw();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    chet.update();
    chet.draw(ctx, deltaTime);

    kethu.update();
    kethu.draw(deltaTime, ctx);
    resizeCanvas.update(deltaTime);

    handleBubbles(deltaTime);
    dieuKhienMuc(deltaTime);

    ctx.fillStyle = 'black';
    ctx.fillText('score: ' + score, 10, 20);
    ctx.fillText('Max Score In Level: ' + tongMuc, 10, 50);
    ctx.fillText(' / Số lượng mực chưa xuất hiện: ' + soLuongMucChuaXuatHien, 210, 50);
    thongBao(ctx);
    if (!stopGame) requestAnimationFrame(animate);
}
animate(0);

