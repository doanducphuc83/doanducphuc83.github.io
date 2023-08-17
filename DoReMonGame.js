let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = '20px Georgia';
const anhgocjs = document.getElementById('anhGoc');
function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullscreenElement;
}

function anhGocFullScreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    }
    else {
        anhgocjs.requestFullscreen().catch((e) => { });
    }
}

anhgocjs.addEventListener("click", () => {
    anhGocFullScreen();
});

function gameFullScreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen().catch((e) => { });
    }
}
document.addEventListener("dblclick", () => {
    gameFullScreen();
});


class AnhGoc {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (this.resizeCanvas.width < this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2 - 2 * this.width;
                this.canhTren = this.resizeCanvas.height - 7.5 * this.height;
                this.canhTraiTextTime = this.resizeCanvas.width / 20;
                this.canhTrenTextTime = this.resizeCanvas.height / 10;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 127;
                this.canhTrenTextTimedh = this.resizeCanvas.height / 10;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2 - 2 * this.width;
                this.canhTren = this.resizeCanvas.height - 7.5 * this.height;
                this.canhTraiTextTime = this.resizeCanvas.width / 20;
                this.canhTrenTextTime = this.resizeCanvas.height / 10;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 155;
                this.canhTrenTextTimedh = this.resizeCanvas.height / 10;
            }

        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 844) {
                this.width = 90;
                this.height = 90;
                this.canhTrai = 10;
                this.canhTren = this.resizeCanvas.height - this.height * 2.5;
                this.canhTraiTextTime = this.resizeCanvas.width - 140;
                this.canhTrenTextTime = this.resizeCanvas.height - this.height * 4 - 8;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 140;
                this.canhTrenTextTimedh = this.resizeCanvas.height - this.height * 3.5;
            }
            if (this.resizeCanvas.width >= 844) {
                this.width = 110;
                this.height = 110;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - 90 * 4 - 6) / 2 - 90 * 4 - 6 - 200;
                this.canhTren = this.resizeCanvas.height - this.height * 2.5;
                this.canhTraiTextTime = this.resizeCanvas.width - 140;
                this.canhTrenTextTime = this.resizeCanvas.height - this.height * 3.4 - 8;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 140;
                this.canhTrenTextTimedh = this.resizeCanvas.height - this.height * 3;
            }

        }
    }
    update() {
        document.getElementById('anhGoc').style.marginLeft = this.canhTrai + "px";
        document.getElementById('anhGoc').style.marginTop = this.canhTren + "px";
        document.getElementById('anhGoc').classList.remove("hien");
        document.getElementById('textTime').style.marginLeft = this.canhTraiTextTime + "px";
        document.getElementById('textTime').style.marginTop = this.canhTrenTextTime + "px";

        document.getElementById('dongHo').style.marginLeft = this.canhTraiTextTimedh + "px";
        document.getElementById('dongHo').style.marginTop = this.canhTrenTextTimedh + "px";


        if (this.resizeCanvas.width < this.resizeCanvas.height) {
            if (this.resizeCanvas.height < 642) {
                document.getElementById('anhGoc').style.display = 'none';
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 844) {
                document.getElementById('anhGoc').style.width = 100 + "px";
                document.getElementById('anhGoc').style.height = 100 + "px";
            }
            if (this.resizeCanvas.width >= 844) {
                document.getElementById('anhGoc').style.width = 190 + "px";
                document.getElementById('anhGoc').style.height = 190 + "px";
            }
        }
    }
    reset() {
        if (this.resizeCanvas.width < this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2 - 2 * this.width;
                this.canhTren = this.resizeCanvas.height - 7.5 * this.height;
                this.canhTraiTextTime = this.resizeCanvas.width / 20;
                this.canhTrenTextTime = this.resizeCanvas.height / 10;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 127;
                this.canhTrenTextTimedh = this.resizeCanvas.height / 10;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2 - 2 * this.width;
                this.canhTren = this.resizeCanvas.height - 7.5 * this.height;
                this.canhTraiTextTime = this.resizeCanvas.width / 20;
                this.canhTrenTextTime = this.resizeCanvas.height / 10;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 155;
                this.canhTrenTextTimedh = this.resizeCanvas.height / 10;
            }

        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 844) {
                this.width = 90;
                this.height = 90;
                this.canhTrai = 10;
                this.canhTren = this.resizeCanvas.height - this.height * 2.5;
                this.canhTraiTextTime = this.resizeCanvas.width - 140;
                this.canhTrenTextTime = this.resizeCanvas.height - this.height * 4 - 8;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 140;
                this.canhTrenTextTimedh = this.resizeCanvas.height - this.height * 3.5;
            }
            if (this.resizeCanvas.width >= 844) {
                this.width = 110;
                this.height = 110;
                this.canhTrai = this.resizeCanvas.width - (this.resizeCanvas.width - 90 * 4 - 6) / 2 - 90 * 4 - 6 - 200;
                this.canhTren = this.resizeCanvas.height - this.height * 2.5;
                this.canhTraiTextTime = this.resizeCanvas.width - 140;
                this.canhTrenTextTime = this.resizeCanvas.height - this.height * 3.4 - 8;

                this.canhTraiTextTimedh = this.resizeCanvas.width - 140;
                this.canhTrenTextTimedh = this.resizeCanvas.height - this.height * 3;
            }

        }
    }
}

const anh16 = new Image();
anh16.src = 'img/doremon/img-16.png'
class Anh16class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (this.resizeCanvas.width < this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6) - this.height;
        }
    }
    draw(ctx) {
        ctx.drawImage(anh16, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (this.resizeCanvas.width < this.resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6) - this.height;
        }
    }
}

const anh15 = new Image();
anh15.src = 'img/doremon/img-15.png'
class Anh15class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6) - this.height;
        }
    }
    draw(ctx) {
        ctx.drawImage(anh15, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6) - this.height;
        }
    }
}

const anh14 = new Image();
anh14.src = 'img/doremon/img-14.png'
class Anh14class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh14, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh13 = new Image();
anh13.src = 'img/doremon/img-13.png'
class Anh13class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh13, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh12 = new Image();
anh12.src = 'img/doremon/img-12.png'
class Anh12class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh12, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh11 = new Image();
anh11.src = 'img/doremon/img-11.png'
class Anh11class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh11, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh10 = new Image();
anh10.src = 'img/doremon/img-10.png'
class Anh10class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh10, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh9 = new Image();
anh9.src = 'img/doremon/img-9.png'
class Anh9class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh9, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 3 - 2;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 2 - 2 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh8 = new Image();
anh8.src = 'img/doremon/img-8.png'
class Anh8class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh8, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh7 = new Image();
anh7.src = 'img/doremon/img-7.png'
class Anh7class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh7, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh6 = new Image();
anh6.src = 'img/doremon/img-6.png'
class Anh6class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh6, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh5 = new Image();
anh5.src = 'img/doremon/img-5.png'
class Anh5class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh5, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 4 - 4;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 3 - 4 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh4 = new Image();
anh4.src = 'img/doremon/img-4.png'
class Anh4class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh4, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh3 = new Image();
anh3.src = 'img/doremon/img-3.png'
class Anh3class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);

        }

    }
    draw(ctx) {
        ctx.drawImage(anh3, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 2 - 2 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);

        }
    }
}

const anh2 = new Image();
anh2.src = 'img/doremon/img-2.png'
class Anh2class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh2, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 3 - 4 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

const anh1 = new Image();
anh1.src = 'img/doremon/img-1.png'
class Anh1class {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.drawImage(anh1, this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 5 - 6;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}

class AnhTrang {
    constructor(resizeCanvas) {
        this.resizeCanvas = resizeCanvas;
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 6 - 8;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 6 - 8;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 5 - 8 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    reset() {
        if (resizeCanvas.width < resizeCanvas.height) {
            if (this.resizeCanvas.width < 414) {
                this.width = 75;
                this.height = 75;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 6 - 8;
            }
            if (this.resizeCanvas.width >= 414) {
                this.width = 100;
                this.height = 100;
                this.x = this.resizeCanvas.width - this.width * 4 - 6 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
                this.y = this.resizeCanvas.height - this.height * 6 - 8;
            }
        }
        if (this.resizeCanvas.width > this.resizeCanvas.height) {
            this.width = 90;
            this.height = 90;
            this.x = this.resizeCanvas.width - this.width * 5 - 8 - (this.resizeCanvas.width - this.width * 4 - 6) / 2;
            this.y = this.resizeCanvas.height - this.height * 4 - 6 - ((this.resizeCanvas.height - 4 * this.height) / 2 - 6);
        }
    }
}


class ResizeCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.anhGoc = new AnhGoc(this);

        this.anh16class = new Anh16class(this);
        this.anh15class = new Anh15class(this);
        this.anh14class = new Anh14class(this);
        this.anh13class = new Anh13class(this);

        this.anh12class = new Anh12class(this);
        this.anh11class = new Anh11class(this);
        this.anh10class = new Anh10class(this);
        this.anh9class = new Anh9class(this);

        this.anh8class = new Anh8class(this);
        this.anh7class = new Anh7class(this);
        this.anh6class = new Anh6class(this);
        this.anh5class = new Anh5class(this);

        this.anh4class = new Anh4class(this);
        this.anh3class = new Anh3class(this);
        this.anh2class = new Anh2class(this);
        this.anh1class = new Anh1class(this);

        this.anhTrang = new AnhTrang(this);

        window.addEventListener('resize', e => {
            this.resize(e.target.window.innerWidth, e.target.window.innerHeight, ctx);
        });
    }

    resize(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;

        // Lưu tọa độ của ảnh (giá trị lưu không thay đổi khi di chuyển ảnh):
        localStorage.setItem("xTrangcd", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrangcd", JSON.stringify(resizeCanvas.anhTrang.y));
        localStorage.setItem("x1cd", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1cd", JSON.stringify(resizeCanvas.anh1class.y));
        localStorage.setItem("x2cd", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2cd", JSON.stringify(resizeCanvas.anh2class.y));
        localStorage.setItem("x3cd", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3cd", JSON.stringify(resizeCanvas.anh3class.y));
        localStorage.setItem("x4cd", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4cd", JSON.stringify(resizeCanvas.anh4class.y));
        localStorage.setItem("x5cd", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5cd", JSON.stringify(resizeCanvas.anh5class.y));
        localStorage.setItem("x6cd", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6cd", JSON.stringify(resizeCanvas.anh6class.y));
        localStorage.setItem("x7cd", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7cd", JSON.stringify(resizeCanvas.anh7class.y));
        localStorage.setItem("x8cd", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8cd", JSON.stringify(resizeCanvas.anh8class.y));
        localStorage.setItem("x9cd", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9cd", JSON.stringify(resizeCanvas.anh9class.y));
        localStorage.setItem("x10cd", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10cd", JSON.stringify(resizeCanvas.anh10class.y));
        localStorage.setItem("x11cd", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11cd", JSON.stringify(resizeCanvas.anh11class.y));
        localStorage.setItem("x12cd", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12cd", JSON.stringify(resizeCanvas.anh12class.y));
        localStorage.setItem("x13cd", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13cd", JSON.stringify(resizeCanvas.anh13class.y));
        localStorage.setItem("x14cd", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14cd", JSON.stringify(resizeCanvas.anh14class.y));
        localStorage.setItem("x15cd", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15cd", JSON.stringify(resizeCanvas.anh15class.y));
        localStorage.setItem("x16cd", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16cd", JSON.stringify(resizeCanvas.anh16class.y));
        // lưu tọa độ của ảnh trước khi di chuyển:
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));
        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));

        if (resizeCanvas.width > resizeCanvas.height) {
            document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('btn').style.marginLeft = 50 + "px";
            if (resizeCanvas.width <= 667) {
                document.getElementById('btn').style.marginLeft = 10 + "px";
            }
            document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('chuyenDenEnd').style.marginTop = resizeCanvas.height - 250 + "px";
            document.getElementById('exit').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('exit').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('random').style.marginTop = resizeCanvas.height - 160 + "px";
        }
        if (resizeCanvas.width < resizeCanvas.height) {
            document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('btn').style.marginLeft = 10 + "px";
            document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('random').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('chuyenDenEnd').style.marginTop = 10 + "px";
            document.getElementById('exit').style.marginLeft = 10 + "px";
            document.getElementById('exit').style.marginTop = 10 + "px";
        }

        if (this.width > this.height) {
            document.getElementById('textTime').innerText = 'Total Time:';
        }
        else {
            document.getElementById('textTime').innerText = 'Thời gian hoàn thành:';
        }



        ctx.font = '20px Georgia';

        this.anhGoc.reset();

        this.anh16class.reset();
        this.anh15class.reset();
        this.anh14class.reset();
        this.anh13class.reset();

        this.anh12class.reset();
        this.anh11class.reset();
        this.anh10class.reset();
        this.anh9class.reset();

        this.anh8class.reset();
        this.anh7class.reset();
        this.anh6class.reset();
        this.anh5class.reset();

        this.anh4class.reset();
        this.anh3class.reset();
        this.anh2class.reset();
        this.anh1class.reset();

        this.anhTrang.reset();
    }
    update() {
        this.anhGoc.update();
        this.anh16class.draw(ctx);
        this.anh15class.draw(ctx);
        this.anh14class.draw(ctx);
        this.anh13class.draw(ctx);
        this.anh12class.draw(ctx);
        this.anh11class.draw(ctx);
        this.anh10class.draw(ctx);
        this.anh9class.draw(ctx);
        this.anh8class.draw(ctx);
        this.anh7class.draw(ctx);
        this.anh6class.draw(ctx);
        this.anh5class.draw(ctx);
        this.anh4class.draw(ctx);
        this.anh3class.draw(ctx);
        this.anh2class.draw(ctx);
        this.anh1class.draw(ctx);
        this.anhTrang.draw(ctx);
        // Lưu tọa độ của ảnh (giá trị lưu không thay đổi khi di chuyển ảnh):
        localStorage.setItem("xTrangcd", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrangcd", JSON.stringify(resizeCanvas.anhTrang.y));
        localStorage.setItem("x1cd", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1cd", JSON.stringify(resizeCanvas.anh1class.y));
        localStorage.setItem("x2cd", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2cd", JSON.stringify(resizeCanvas.anh2class.y));
        localStorage.setItem("x3cd", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3cd", JSON.stringify(resizeCanvas.anh3class.y));
        localStorage.setItem("x4cd", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4cd", JSON.stringify(resizeCanvas.anh4class.y));
        localStorage.setItem("x5cd", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5cd", JSON.stringify(resizeCanvas.anh5class.y));
        localStorage.setItem("x6cd", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6cd", JSON.stringify(resizeCanvas.anh6class.y));
        localStorage.setItem("x7cd", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7cd", JSON.stringify(resizeCanvas.anh7class.y));
        localStorage.setItem("x8cd", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8cd", JSON.stringify(resizeCanvas.anh8class.y));
        localStorage.setItem("x9cd", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9cd", JSON.stringify(resizeCanvas.anh9class.y));
        localStorage.setItem("x10cd", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10cd", JSON.stringify(resizeCanvas.anh10class.y));
        localStorage.setItem("x11cd", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11cd", JSON.stringify(resizeCanvas.anh11class.y));
        localStorage.setItem("x12cd", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12cd", JSON.stringify(resizeCanvas.anh12class.y));
        localStorage.setItem("x13cd", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13cd", JSON.stringify(resizeCanvas.anh13class.y));
        localStorage.setItem("x14cd", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14cd", JSON.stringify(resizeCanvas.anh14class.y));
        localStorage.setItem("x15cd", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15cd", JSON.stringify(resizeCanvas.anh15class.y));
        localStorage.setItem("x16cd", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16cd", JSON.stringify(resizeCanvas.anh16class.y));
        // lưu tọa độ của ảnh trước khi di chuyển:
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));
        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
        if (resizeCanvas.width > resizeCanvas.height) {
            document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('btn').style.marginLeft = 50 + "px";
            if (resizeCanvas.width <= 667) {
                document.getElementById('btn').style.marginLeft = 10 + "px";
            }
            document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('chuyenDenEnd').style.marginTop = resizeCanvas.height - 250 + "px";
            document.getElementById('exit').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('exit').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('random').style.marginTop = resizeCanvas.height - 160 + "px";
        }
        if (resizeCanvas.width < resizeCanvas.height) {
            document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('btn').style.marginLeft = 10 + "px";
            document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('random').style.marginTop = resizeCanvas.height - 70 + "px";
            document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
            document.getElementById('chuyenDenEnd').style.marginTop = 10 + "px";
            document.getElementById('exit').style.marginLeft = 10 + "px";
            document.getElementById('exit').style.marginTop = 10 + "px";
        }
    }
}
const resizeCanvas = new ResizeCanvas(canvas);
if (resizeCanvas.width > resizeCanvas.height) {
    document.getElementById('textTime').innerText = 'Total Time:';
}
// Lưu tọa độ của ảnh (giá trị lưu không thay đổi khi di chuyển ảnh):
localStorage.setItem("xTrangcd", JSON.stringify(resizeCanvas.anhTrang.x));
localStorage.setItem("yTrangcd", JSON.stringify(resizeCanvas.anhTrang.y));
localStorage.setItem("x1cd", JSON.stringify(resizeCanvas.anh1class.x));
localStorage.setItem("y1cd", JSON.stringify(resizeCanvas.anh1class.y));
localStorage.setItem("x2cd", JSON.stringify(resizeCanvas.anh2class.x));
localStorage.setItem("y2cd", JSON.stringify(resizeCanvas.anh2class.y));
localStorage.setItem("x3cd", JSON.stringify(resizeCanvas.anh3class.x));
localStorage.setItem("y3cd", JSON.stringify(resizeCanvas.anh3class.y));
localStorage.setItem("x4cd", JSON.stringify(resizeCanvas.anh4class.x));
localStorage.setItem("y4cd", JSON.stringify(resizeCanvas.anh4class.y));
localStorage.setItem("x5cd", JSON.stringify(resizeCanvas.anh5class.x));
localStorage.setItem("y5cd", JSON.stringify(resizeCanvas.anh5class.y));
localStorage.setItem("x6cd", JSON.stringify(resizeCanvas.anh6class.x));
localStorage.setItem("y6cd", JSON.stringify(resizeCanvas.anh6class.y));
localStorage.setItem("x7cd", JSON.stringify(resizeCanvas.anh7class.x));
localStorage.setItem("y7cd", JSON.stringify(resizeCanvas.anh7class.y));
localStorage.setItem("x8cd", JSON.stringify(resizeCanvas.anh8class.x));
localStorage.setItem("y8cd", JSON.stringify(resizeCanvas.anh8class.y));
localStorage.setItem("x9cd", JSON.stringify(resizeCanvas.anh9class.x));
localStorage.setItem("y9cd", JSON.stringify(resizeCanvas.anh9class.y));
localStorage.setItem("x10cd", JSON.stringify(resizeCanvas.anh10class.x));
localStorage.setItem("y10cd", JSON.stringify(resizeCanvas.anh10class.y));
localStorage.setItem("x11cd", JSON.stringify(resizeCanvas.anh11class.x));
localStorage.setItem("y11cd", JSON.stringify(resizeCanvas.anh11class.y));
localStorage.setItem("x12cd", JSON.stringify(resizeCanvas.anh12class.x));
localStorage.setItem("y12cd", JSON.stringify(resizeCanvas.anh12class.y));
localStorage.setItem("x13cd", JSON.stringify(resizeCanvas.anh13class.x));
localStorage.setItem("y13cd", JSON.stringify(resizeCanvas.anh13class.y));
localStorage.setItem("x14cd", JSON.stringify(resizeCanvas.anh14class.x));
localStorage.setItem("y14cd", JSON.stringify(resizeCanvas.anh14class.y));
localStorage.setItem("x15cd", JSON.stringify(resizeCanvas.anh15class.x));
localStorage.setItem("y15cd", JSON.stringify(resizeCanvas.anh15class.y));
localStorage.setItem("x16cd", JSON.stringify(resizeCanvas.anh16class.x));
localStorage.setItem("y16cd", JSON.stringify(resizeCanvas.anh16class.y));

// lưu tọa độ của ảnh trước khi di chuyển:
localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));
localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));

let xTrangjs;
let yTrangjs;
let x1js;
let y1js;
let x2js;
let y2js;
let x3js;
let y3js;
let x4js;
let y4js;
let x5js;
let y5js;
let x6js;
let y6js;
let x7js;
let y7js;
let x8js;
let y8js;
let x9js;
let y9js;
let x10js;
let y10js;
let x11js;
let y11js;
let x12js;
let y12js;
let x13js;
let y13js;
let x14js;
let y14js;
let x15js;
let y15js;
let x16js;
let y16js;

let thoiDiemBatDau = 0;
let gioBatDau = 0;
let phutBatDau = 0;
let giayBatDau = 0;

function dieuKhien() {
    document.getElementById('random').style.display = 'none';
    document.getElementById('btn').innerText = 'Playing ...';
    localStorage.setItem("endGame", JSON.stringify("no"));
    localStorage.removeItem("tdBatDau");
    localStorage.removeItem("tdKetThuc");
    document.getElementById('dongHo').innerText = '00 : 00 : 00';
    if (resizeCanvas.width > resizeCanvas.height) {
        document.getElementById('textTime').innerText = 'Total Time:';
    }
    const curDate1 = new Date();
    gioBatDau = curDate1.getHours();
    phutBatDau = curDate1.getMinutes();
    giayBatDau = curDate1.getSeconds();

    thoiDiemBatDau = gioBatDau * 3600 + phutBatDau * 60 + giayBatDau;

    localStorage.setItem("tdBatDau", JSON.stringify(thoiDiemBatDau));

    canvas.addEventListener('click', (e) => {
        let dieukiendichuyenanh = JSON.parse(localStorage.getItem("endGame"));
        if (dieukiendichuyenanh === "no") {
            // ảnh trắng ở trên anh doremon, trong cùng một cột.
            // Hoán đổi ảnh trắng - ảnh 1.
            if (e.pageX > resizeCanvas.anh1class.x && e.pageX < resizeCanvas.anh1class.x + resizeCanvas.anh1class.width && e.pageY > resizeCanvas.anh1class.y && e.pageY < resizeCanvas.anh1class.y + resizeCanvas.anh1class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x1js = JSON.parse(localStorage.getItem("x1"));
                y1js = JSON.parse(localStorage.getItem("y1"));

                if (resizeCanvas.width < resizeCanvas.height) {
                    if (xTrangjs === x1js) {
                        if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y1js) {
                            resizeCanvas.anhTrang.x = x1js;
                            resizeCanvas.anhTrang.y = y1js;

                            resizeCanvas.anh1class.x = xTrangjs;
                            resizeCanvas.anh1class.y = yTrangjs;
                            localStorage.setItem("anh1dichuyen", JSON.stringify(1));
                        }
                    }
                }
                if (resizeCanvas.width > resizeCanvas.height) {
                    if (yTrangjs === y1js) {
                        if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x1js) {
                            resizeCanvas.anhTrang.x = x1js;
                            resizeCanvas.anhTrang.y = y1js;

                            resizeCanvas.anh1class.x = xTrangjs;
                            resizeCanvas.anh1class.y = yTrangjs;
                            localStorage.setItem("anh1dichuyen", JSON.stringify(1));
                        }
                    }
                }

                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
                localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
            }
            // hoán đổi ảnh trắng - ảnh 2.
            if (e.pageX > resizeCanvas.anh2class.x && e.pageX < resizeCanvas.anh2class.x + resizeCanvas.anh2class.width && e.pageY > resizeCanvas.anh2class.y && e.pageY < resizeCanvas.anh2class.y + resizeCanvas.anh2class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x2js = JSON.parse(localStorage.getItem("x2"));
                y2js = JSON.parse(localStorage.getItem("y2"));

                if (xTrangjs === x2js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y2js) {
                        resizeCanvas.anhTrang.x = x2js;
                        resizeCanvas.anhTrang.y = y2js;

                        resizeCanvas.anh2class.x = xTrangjs;
                        resizeCanvas.anh2class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
                localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
            }

            // hoán đổi ảnh trắng - ảnh 3.
            if (e.pageX > resizeCanvas.anh3class.x && e.pageX < resizeCanvas.anh3class.x + resizeCanvas.anh3class.width && e.pageY > resizeCanvas.anh3class.y && e.pageY < resizeCanvas.anh3class.y + resizeCanvas.anh3class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x3js = JSON.parse(localStorage.getItem("x3"));
                y3js = JSON.parse(localStorage.getItem("y3"));

                if (xTrangjs === x3js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y3js) {
                        resizeCanvas.anhTrang.x = x3js;
                        resizeCanvas.anhTrang.y = y3js;

                        resizeCanvas.anh3class.x = xTrangjs;
                        resizeCanvas.anh3class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
                localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 4.
            if (e.pageX > resizeCanvas.anh4class.x && e.pageX < resizeCanvas.anh4class.x + resizeCanvas.anh4class.width && e.pageY > resizeCanvas.anh4class.y && e.pageY < resizeCanvas.anh4class.y + resizeCanvas.anh4class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x4js = JSON.parse(localStorage.getItem("x4"));
                y4js = JSON.parse(localStorage.getItem("y4"));

                if (xTrangjs === x4js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y4js) {
                        resizeCanvas.anhTrang.x = x4js;
                        resizeCanvas.anhTrang.y = y4js;

                        resizeCanvas.anh4class.x = xTrangjs;
                        resizeCanvas.anh4class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
                localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 5.
            if (e.pageX > resizeCanvas.anh5class.x && e.pageX < resizeCanvas.anh5class.x + resizeCanvas.anh5class.width && e.pageY > resizeCanvas.anh5class.y && e.pageY < resizeCanvas.anh5class.y + resizeCanvas.anh5class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x5js = JSON.parse(localStorage.getItem("x5"));
                y5js = JSON.parse(localStorage.getItem("y5"));

                if (xTrangjs === x5js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y5js) {
                        resizeCanvas.anhTrang.x = x5js;
                        resizeCanvas.anhTrang.y = y5js;

                        resizeCanvas.anh5class.x = xTrangjs;
                        resizeCanvas.anh5class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
                localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 6.
            if (e.pageX > resizeCanvas.anh6class.x && e.pageX < resizeCanvas.anh6class.x + resizeCanvas.anh6class.width && e.pageY > resizeCanvas.anh6class.y && e.pageY < resizeCanvas.anh6class.y + resizeCanvas.anh6class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x6js = JSON.parse(localStorage.getItem("x6"));
                y6js = JSON.parse(localStorage.getItem("y6"));

                if (xTrangjs === x6js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y6js) {
                        resizeCanvas.anhTrang.x = x6js;
                        resizeCanvas.anhTrang.y = y6js;

                        resizeCanvas.anh6class.x = xTrangjs;
                        resizeCanvas.anh6class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
                localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 7.
            if (e.pageX > resizeCanvas.anh7class.x && e.pageX < resizeCanvas.anh7class.x + resizeCanvas.anh7class.width && e.pageY > resizeCanvas.anh7class.y && e.pageY < resizeCanvas.anh7class.y + resizeCanvas.anh7class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x7js = JSON.parse(localStorage.getItem("x7"));
                y7js = JSON.parse(localStorage.getItem("y7"));

                if (xTrangjs === x7js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y7js) {
                        resizeCanvas.anhTrang.x = x7js;
                        resizeCanvas.anhTrang.y = y7js;

                        resizeCanvas.anh7class.x = xTrangjs;
                        resizeCanvas.anh7class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
                localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 8.
            if (e.pageX > resizeCanvas.anh8class.x && e.pageX < resizeCanvas.anh8class.x + resizeCanvas.anh8class.width && e.pageY > resizeCanvas.anh8class.y && e.pageY < resizeCanvas.anh8class.y + resizeCanvas.anh8class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x8js = JSON.parse(localStorage.getItem("x8"));
                y8js = JSON.parse(localStorage.getItem("y8"));

                if (xTrangjs === x8js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y8js) {
                        resizeCanvas.anhTrang.x = x8js;
                        resizeCanvas.anhTrang.y = y8js;

                        resizeCanvas.anh8class.x = xTrangjs;
                        resizeCanvas.anh8class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
                localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 9.
            if (e.pageX > resizeCanvas.anh9class.x && e.pageX < resizeCanvas.anh9class.x + resizeCanvas.anh9class.width && e.pageY > resizeCanvas.anh9class.y && e.pageY < resizeCanvas.anh9class.y + resizeCanvas.anh9class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x9js = JSON.parse(localStorage.getItem("x9"));
                y9js = JSON.parse(localStorage.getItem("y9"));

                if (xTrangjs === x9js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y9js) {
                        resizeCanvas.anhTrang.x = x9js;
                        resizeCanvas.anhTrang.y = y9js;

                        resizeCanvas.anh9class.x = xTrangjs;
                        resizeCanvas.anh9class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
                localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 10.
            if (e.pageX > resizeCanvas.anh10class.x && e.pageX < resizeCanvas.anh10class.x + resizeCanvas.anh10class.width && e.pageY > resizeCanvas.anh10class.y && e.pageY < resizeCanvas.anh10class.y + resizeCanvas.anh10class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x10js = JSON.parse(localStorage.getItem("x10"));
                y10js = JSON.parse(localStorage.getItem("y10"));

                if (xTrangjs === x10js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y10js) {
                        resizeCanvas.anhTrang.x = x10js;
                        resizeCanvas.anhTrang.y = y10js;

                        resizeCanvas.anh10class.x = xTrangjs;
                        resizeCanvas.anh10class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
                localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 11.
            if (e.pageX > resizeCanvas.anh11class.x && e.pageX < resizeCanvas.anh11class.x + resizeCanvas.anh11class.width && e.pageY > resizeCanvas.anh11class.y && e.pageY < resizeCanvas.anh11class.y + resizeCanvas.anh11class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x11js = JSON.parse(localStorage.getItem("x11"));
                y11js = JSON.parse(localStorage.getItem("y11"));

                if (xTrangjs === x11js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y11js) {
                        resizeCanvas.anhTrang.x = x11js;
                        resizeCanvas.anhTrang.y = y11js;

                        resizeCanvas.anh11class.x = xTrangjs;
                        resizeCanvas.anh11class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
                localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 12.
            if (e.pageX > resizeCanvas.anh12class.x && e.pageX < resizeCanvas.anh12class.x + resizeCanvas.anh12class.width && e.pageY > resizeCanvas.anh12class.y && e.pageY < resizeCanvas.anh12class.y + resizeCanvas.anh12class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x12js = JSON.parse(localStorage.getItem("x12"));
                y12js = JSON.parse(localStorage.getItem("y12"));

                if (xTrangjs === x12js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y12js) {
                        resizeCanvas.anhTrang.x = x12js;
                        resizeCanvas.anhTrang.y = y12js;

                        resizeCanvas.anh12class.x = xTrangjs;
                        resizeCanvas.anh12class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
                localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 13.
            if (e.pageX > resizeCanvas.anh13class.x && e.pageX < resizeCanvas.anh13class.x + resizeCanvas.anh13class.width && e.pageY > resizeCanvas.anh13class.y && e.pageY < resizeCanvas.anh13class.y + resizeCanvas.anh13class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x13js = JSON.parse(localStorage.getItem("x13"));
                y13js = JSON.parse(localStorage.getItem("y13"));

                if (xTrangjs === x13js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y13js) {
                        resizeCanvas.anhTrang.x = x13js;
                        resizeCanvas.anhTrang.y = y13js;

                        resizeCanvas.anh13class.x = xTrangjs;
                        resizeCanvas.anh13class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
                localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 14.
            if (e.pageX > resizeCanvas.anh14class.x && e.pageX < resizeCanvas.anh14class.x + resizeCanvas.anh14class.width && e.pageY > resizeCanvas.anh14class.y && e.pageY < resizeCanvas.anh14class.y + resizeCanvas.anh14class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x14js = JSON.parse(localStorage.getItem("x14"));
                y14js = JSON.parse(localStorage.getItem("y14"));

                if (xTrangjs === x14js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y14js) {
                        resizeCanvas.anhTrang.x = x14js;
                        resizeCanvas.anhTrang.y = y14js;

                        resizeCanvas.anh14class.x = xTrangjs;
                        resizeCanvas.anh14class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
                localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
            }

            //Hoán đổi ảnh trắng - ảnh 15.
            if (e.pageX > resizeCanvas.anh15class.x && e.pageX < resizeCanvas.anh15class.x + resizeCanvas.anh15class.width && e.pageY > resizeCanvas.anh15class.y && e.pageY < resizeCanvas.anh15class.y + resizeCanvas.anh15class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x15js = JSON.parse(localStorage.getItem("x15"));
                y15js = JSON.parse(localStorage.getItem("y15"));

                if (xTrangjs === x15js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y15js) {
                        resizeCanvas.anhTrang.x = x15js;
                        resizeCanvas.anhTrang.y = y15js;

                        resizeCanvas.anh15class.x = xTrangjs;
                        resizeCanvas.anh15class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
                localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 16.
            if (e.pageX > resizeCanvas.anh16class.x && e.pageX < resizeCanvas.anh16class.x + resizeCanvas.anh16class.width && e.pageY > resizeCanvas.anh16class.y && e.pageY < resizeCanvas.anh16class.y + resizeCanvas.anh16class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x16js = JSON.parse(localStorage.getItem("x16"));
                y16js = JSON.parse(localStorage.getItem("y16"));

                if (xTrangjs === x16js) {
                    if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y16js) {
                        resizeCanvas.anhTrang.x = x16js;
                        resizeCanvas.anhTrang.y = y16js;

                        resizeCanvas.anh16class.x = xTrangjs;
                        resizeCanvas.anh16class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
                localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
            }

            // ảnh trắng ở dưới anh doremon, trong cùng một cột.
            // Hoán đổi ảnh trắng - ảnh 1.
            if (e.pageX > resizeCanvas.anh1class.x && e.pageX < resizeCanvas.anh1class.x + resizeCanvas.anh1class.width && e.pageY > resizeCanvas.anh1class.y && e.pageY < resizeCanvas.anh1class.y + resizeCanvas.anh1class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x1js = JSON.parse(localStorage.getItem("x1"));
                y1js = JSON.parse(localStorage.getItem("y1"));
                if (x1js === xTrangjs) {
                    if (y1js + resizeCanvas.anh1class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x1js;
                        resizeCanvas.anhTrang.y = y1js;

                        resizeCanvas.anh1class.x = xTrangjs;
                        resizeCanvas.anh1class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
                localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 2.
            if (e.pageX > resizeCanvas.anh2class.x && e.pageX < resizeCanvas.anh2class.x + resizeCanvas.anh2class.width && e.pageY > resizeCanvas.anh2class.y && e.pageY < resizeCanvas.anh2class.y + resizeCanvas.anh2class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x2js = JSON.parse(localStorage.getItem("x2"));
                y2js = JSON.parse(localStorage.getItem("y2"));
                if (x2js === xTrangjs) {
                    if (y2js + resizeCanvas.anh2class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x2js;
                        resizeCanvas.anhTrang.y = y2js;

                        resizeCanvas.anh2class.x = xTrangjs;
                        resizeCanvas.anh2class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
                localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 3.
            if (e.pageX > resizeCanvas.anh3class.x && e.pageX < resizeCanvas.anh3class.x + resizeCanvas.anh3class.width && e.pageY > resizeCanvas.anh3class.y && e.pageY < resizeCanvas.anh3class.y + resizeCanvas.anh3class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x3js = JSON.parse(localStorage.getItem("x3"));
                y3js = JSON.parse(localStorage.getItem("y3"));
                if (x3js === xTrangjs) {
                    if (y3js + resizeCanvas.anh3class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x3js;
                        resizeCanvas.anhTrang.y = y3js;

                        resizeCanvas.anh3class.x = xTrangjs;
                        resizeCanvas.anh3class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
                localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 4.
            if (e.pageX > resizeCanvas.anh4class.x && e.pageX < resizeCanvas.anh4class.x + resizeCanvas.anh4class.width && e.pageY > resizeCanvas.anh4class.y && e.pageY < resizeCanvas.anh4class.y + resizeCanvas.anh4class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x4js = JSON.parse(localStorage.getItem("x4"));
                y4js = JSON.parse(localStorage.getItem("y4"));
                if (x4js === xTrangjs) {
                    if (y4js + resizeCanvas.anh4class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x4js;
                        resizeCanvas.anhTrang.y = y4js;

                        resizeCanvas.anh4class.x = xTrangjs;
                        resizeCanvas.anh4class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
                localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 5.
            if (e.pageX > resizeCanvas.anh5class.x && e.pageX < resizeCanvas.anh5class.x + resizeCanvas.anh5class.width && e.pageY > resizeCanvas.anh5class.y && e.pageY < resizeCanvas.anh5class.y + resizeCanvas.anh5class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x5js = JSON.parse(localStorage.getItem("x5"));
                y5js = JSON.parse(localStorage.getItem("y5"));
                if (x5js === xTrangjs) {
                    if (y5js + resizeCanvas.anh5class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x5js;
                        resizeCanvas.anhTrang.y = y5js;

                        resizeCanvas.anh5class.x = xTrangjs;
                        resizeCanvas.anh5class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
                localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 6.
            if (e.pageX > resizeCanvas.anh6class.x && e.pageX < resizeCanvas.anh6class.x + resizeCanvas.anh6class.width && e.pageY > resizeCanvas.anh6class.y && e.pageY < resizeCanvas.anh6class.y + resizeCanvas.anh6class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x6js = JSON.parse(localStorage.getItem("x6"));
                y6js = JSON.parse(localStorage.getItem("y6"));
                if (x6js === xTrangjs) {
                    if (y6js + resizeCanvas.anh6class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x6js;
                        resizeCanvas.anhTrang.y = y6js;

                        resizeCanvas.anh6class.x = xTrangjs;
                        resizeCanvas.anh6class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
                localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 7.
            if (e.pageX > resizeCanvas.anh7class.x && e.pageX < resizeCanvas.anh7class.x + resizeCanvas.anh7class.width && e.pageY > resizeCanvas.anh7class.y && e.pageY < resizeCanvas.anh7class.y + resizeCanvas.anh7class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x7js = JSON.parse(localStorage.getItem("x7"));
                y7js = JSON.parse(localStorage.getItem("y7"));
                if (x7js === xTrangjs) {
                    if (y7js + resizeCanvas.anh7class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x7js;
                        resizeCanvas.anhTrang.y = y7js;

                        resizeCanvas.anh7class.x = xTrangjs;
                        resizeCanvas.anh7class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
                localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 8.
            if (e.pageX > resizeCanvas.anh8class.x && e.pageX < resizeCanvas.anh8class.x + resizeCanvas.anh8class.width && e.pageY > resizeCanvas.anh8class.y && e.pageY < resizeCanvas.anh8class.y + resizeCanvas.anh8class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x8js = JSON.parse(localStorage.getItem("x8"));
                y8js = JSON.parse(localStorage.getItem("y8"));
                if (x8js === xTrangjs) {
                    if (y8js + resizeCanvas.anh8class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x8js;
                        resizeCanvas.anhTrang.y = y8js;

                        resizeCanvas.anh8class.x = xTrangjs;
                        resizeCanvas.anh8class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
                localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 9
            if (e.pageX > resizeCanvas.anh9class.x && e.pageX < resizeCanvas.anh9class.x + resizeCanvas.anh9class.width && e.pageY > resizeCanvas.anh9class.y && e.pageY < resizeCanvas.anh9class.y + resizeCanvas.anh9class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x9js = JSON.parse(localStorage.getItem("x9"));
                y9js = JSON.parse(localStorage.getItem("y9"));
                if (x9js === xTrangjs) {
                    if (y9js + resizeCanvas.anh9class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x9js;
                        resizeCanvas.anhTrang.y = y9js;

                        resizeCanvas.anh9class.x = xTrangjs;
                        resizeCanvas.anh9class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
                localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 10.
            if (e.pageX > resizeCanvas.anh10class.x && e.pageX < resizeCanvas.anh10class.x + resizeCanvas.anh10class.width && e.pageY > resizeCanvas.anh10class.y && e.pageY < resizeCanvas.anh10class.y + resizeCanvas.anh10class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x10js = JSON.parse(localStorage.getItem("x10"));
                y10js = JSON.parse(localStorage.getItem("y10"));
                if (x10js === xTrangjs) {
                    if (y10js + resizeCanvas.anh10class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x10js;
                        resizeCanvas.anhTrang.y = y10js;

                        resizeCanvas.anh10class.x = xTrangjs;
                        resizeCanvas.anh10class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
                localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 11.
            if (e.pageX > resizeCanvas.anh11class.x && e.pageX < resizeCanvas.anh11class.x + resizeCanvas.anh11class.width && e.pageY > resizeCanvas.anh11class.y && e.pageY < resizeCanvas.anh11class.y + resizeCanvas.anh11class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x11js = JSON.parse(localStorage.getItem("x11"));
                y11js = JSON.parse(localStorage.getItem("y11"));
                if (x11js === xTrangjs) {
                    if (y11js + resizeCanvas.anh11class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x11js;
                        resizeCanvas.anhTrang.y = y11js;

                        resizeCanvas.anh11class.x = xTrangjs;
                        resizeCanvas.anh11class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
                localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 12.
            if (e.pageX > resizeCanvas.anh12class.x && e.pageX < resizeCanvas.anh12class.x + resizeCanvas.anh12class.width && e.pageY > resizeCanvas.anh12class.y && e.pageY < resizeCanvas.anh12class.y + resizeCanvas.anh12class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x12js = JSON.parse(localStorage.getItem("x12"));
                y12js = JSON.parse(localStorage.getItem("y12"));
                if (x12js === xTrangjs) {
                    if (y12js + resizeCanvas.anh12class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x12js;
                        resizeCanvas.anhTrang.y = y12js;

                        resizeCanvas.anh12class.x = xTrangjs;
                        resizeCanvas.anh12class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
                localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 13.
            if (e.pageX > resizeCanvas.anh13class.x && e.pageX < resizeCanvas.anh13class.x + resizeCanvas.anh13class.width && e.pageY > resizeCanvas.anh13class.y && e.pageY < resizeCanvas.anh13class.y + resizeCanvas.anh13class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x13js = JSON.parse(localStorage.getItem("x13"));
                y13js = JSON.parse(localStorage.getItem("y13"));
                if (x13js === xTrangjs) {
                    if (y13js + resizeCanvas.anh13class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x13js;
                        resizeCanvas.anhTrang.y = y13js;

                        resizeCanvas.anh13class.x = xTrangjs;
                        resizeCanvas.anh13class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
                localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 14.
            if (e.pageX > resizeCanvas.anh14class.x && e.pageX < resizeCanvas.anh14class.x + resizeCanvas.anh14class.width && e.pageY > resizeCanvas.anh14class.y && e.pageY < resizeCanvas.anh14class.y + resizeCanvas.anh14class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x14js = JSON.parse(localStorage.getItem("x14"));
                y14js = JSON.parse(localStorage.getItem("y14"));
                if (x14js === xTrangjs) {
                    if (y14js + resizeCanvas.anh14class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x14js;
                        resizeCanvas.anhTrang.y = y14js;

                        resizeCanvas.anh14class.x = xTrangjs;
                        resizeCanvas.anh14class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
                localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 15.
            if (e.pageX > resizeCanvas.anh15class.x && e.pageX < resizeCanvas.anh15class.x + resizeCanvas.anh15class.width && e.pageY > resizeCanvas.anh15class.y && e.pageY < resizeCanvas.anh15class.y + resizeCanvas.anh15class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x15js = JSON.parse(localStorage.getItem("x15"));
                y15js = JSON.parse(localStorage.getItem("y15"));
                if (x15js === xTrangjs) {
                    if (y15js + resizeCanvas.anh15class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x15js;
                        resizeCanvas.anhTrang.y = y15js;

                        resizeCanvas.anh15class.x = xTrangjs;
                        resizeCanvas.anh15class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
                localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 16.
            if (e.pageX > resizeCanvas.anh16class.x && e.pageX < resizeCanvas.anh16class.x + resizeCanvas.anh16class.width && e.pageY > resizeCanvas.anh16class.y && e.pageY < resizeCanvas.anh16class.y + resizeCanvas.anh16class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x16js = JSON.parse(localStorage.getItem("x16"));
                y16js = JSON.parse(localStorage.getItem("y16"));
                if (x16js === xTrangjs) {
                    if (y16js + resizeCanvas.anh16class.height + 2 === yTrangjs) {
                        resizeCanvas.anhTrang.x = x16js;
                        resizeCanvas.anhTrang.y = y16js;

                        resizeCanvas.anh16class.x = xTrangjs;
                        resizeCanvas.anh16class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
                localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
            }

            // ảnh trắng ở bên trái ảnh Doremon, trong cùng một hàng.
            // Hoán đổi ảnh trắng - ảnh 1.
            if (e.pageX > resizeCanvas.anh1class.x && e.pageX < resizeCanvas.anh1class.x + resizeCanvas.anh1class.width && e.pageY > resizeCanvas.anh1class.y && e.pageY < resizeCanvas.anh1class.y + resizeCanvas.anh1class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x1js = JSON.parse(localStorage.getItem("x1"));
                y1js = JSON.parse(localStorage.getItem("y1"));
                if (yTrangjs === y1js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x1js) {
                        resizeCanvas.anhTrang.x = x1js;
                        resizeCanvas.anhTrang.y = y1js;

                        resizeCanvas.anh1class.x = xTrangjs;
                        resizeCanvas.anh1class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
                localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
            }

            //hoán đổi ảnh trắng - ảnh 2.
            if (e.pageX > resizeCanvas.anh2class.x && e.pageX < resizeCanvas.anh2class.x + resizeCanvas.anh2class.width && e.pageY > resizeCanvas.anh2class.y && e.pageY < resizeCanvas.anh2class.y + resizeCanvas.anh2class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x2js = JSON.parse(localStorage.getItem("x2"));
                y2js = JSON.parse(localStorage.getItem("y2"));
                if (yTrangjs === y2js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x2js) {
                        resizeCanvas.anhTrang.x = x2js;
                        resizeCanvas.anhTrang.y = y2js;

                        resizeCanvas.anh2class.x = xTrangjs;
                        resizeCanvas.anh2class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
                localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 3.
            if (e.pageX > resizeCanvas.anh3class.x && e.pageX < resizeCanvas.anh3class.x + resizeCanvas.anh3class.width && e.pageY > resizeCanvas.anh3class.y && e.pageY < resizeCanvas.anh3class.y + resizeCanvas.anh3class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x3js = JSON.parse(localStorage.getItem("x3"));
                y3js = JSON.parse(localStorage.getItem("y3"));
                if (yTrangjs === y3js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x3js) {
                        resizeCanvas.anhTrang.x = x3js;
                        resizeCanvas.anhTrang.y = y3js;

                        resizeCanvas.anh3class.x = xTrangjs;
                        resizeCanvas.anh3class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
                localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 4.
            if (e.pageX > resizeCanvas.anh4class.x && e.pageX < resizeCanvas.anh4class.x + resizeCanvas.anh4class.width && e.pageY > resizeCanvas.anh4class.y && e.pageY < resizeCanvas.anh4class.y + resizeCanvas.anh4class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x4js = JSON.parse(localStorage.getItem("x4"));
                y4js = JSON.parse(localStorage.getItem("y4"));
                if (yTrangjs === y4js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x4js) {
                        resizeCanvas.anhTrang.x = x4js;
                        resizeCanvas.anhTrang.y = y4js;

                        resizeCanvas.anh4class.x = xTrangjs;
                        resizeCanvas.anh4class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
                localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 5.
            if (e.pageX > resizeCanvas.anh5class.x && e.pageX < resizeCanvas.anh5class.x + resizeCanvas.anh5class.width && e.pageY > resizeCanvas.anh5class.y && e.pageY < resizeCanvas.anh5class.y + resizeCanvas.anh5class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x5js = JSON.parse(localStorage.getItem("x5"));
                y5js = JSON.parse(localStorage.getItem("y5"));
                if (yTrangjs === y5js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x5js) {
                        resizeCanvas.anhTrang.x = x5js;
                        resizeCanvas.anhTrang.y = y5js;

                        resizeCanvas.anh5class.x = xTrangjs;
                        resizeCanvas.anh5class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
                localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 6.
            if (e.pageX > resizeCanvas.anh6class.x && e.pageX < resizeCanvas.anh6class.x + resizeCanvas.anh6class.width && e.pageY > resizeCanvas.anh6class.y && e.pageY < resizeCanvas.anh6class.y + resizeCanvas.anh6class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x6js = JSON.parse(localStorage.getItem("x6"));
                y6js = JSON.parse(localStorage.getItem("y6"));
                if (yTrangjs === y6js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x6js) {
                        resizeCanvas.anhTrang.x = x6js;
                        resizeCanvas.anhTrang.y = y6js;

                        resizeCanvas.anh6class.x = xTrangjs;
                        resizeCanvas.anh6class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
                localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 7.
            if (e.pageX > resizeCanvas.anh7class.x && e.pageX < resizeCanvas.anh7class.x + resizeCanvas.anh7class.width && e.pageY > resizeCanvas.anh7class.y && e.pageY < resizeCanvas.anh7class.y + resizeCanvas.anh7class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x7js = JSON.parse(localStorage.getItem("x7"));
                y7js = JSON.parse(localStorage.getItem("y7"));
                if (yTrangjs === y7js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x7js) {
                        resizeCanvas.anhTrang.x = x7js;
                        resizeCanvas.anhTrang.y = y7js;

                        resizeCanvas.anh7class.x = xTrangjs;
                        resizeCanvas.anh7class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
                localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 8.
            if (e.pageX > resizeCanvas.anh8class.x && e.pageX < resizeCanvas.anh8class.x + resizeCanvas.anh8class.width && e.pageY > resizeCanvas.anh8class.y && e.pageY < resizeCanvas.anh8class.y + resizeCanvas.anh8class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x8js = JSON.parse(localStorage.getItem("x8"));
                y8js = JSON.parse(localStorage.getItem("y8"));
                if (yTrangjs === y8js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x8js) {
                        resizeCanvas.anhTrang.x = x8js;
                        resizeCanvas.anhTrang.y = y8js;

                        resizeCanvas.anh8class.x = xTrangjs;
                        resizeCanvas.anh8class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
                localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 9.
            if (e.pageX > resizeCanvas.anh9class.x && e.pageX < resizeCanvas.anh9class.x + resizeCanvas.anh9class.width && e.pageY > resizeCanvas.anh9class.y && e.pageY < resizeCanvas.anh9class.y + resizeCanvas.anh9class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x9js = JSON.parse(localStorage.getItem("x9"));
                y9js = JSON.parse(localStorage.getItem("y9"));
                if (yTrangjs === y9js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x9js) {
                        resizeCanvas.anhTrang.x = x9js;
                        resizeCanvas.anhTrang.y = y9js;

                        resizeCanvas.anh9class.x = xTrangjs;
                        resizeCanvas.anh9class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
                localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 10.
            if (e.pageX > resizeCanvas.anh10class.x && e.pageX < resizeCanvas.anh10class.x + resizeCanvas.anh10class.width && e.pageY > resizeCanvas.anh10class.y && e.pageY < resizeCanvas.anh10class.y + resizeCanvas.anh10class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x10js = JSON.parse(localStorage.getItem("x10"));
                y10js = JSON.parse(localStorage.getItem("y10"));
                if (yTrangjs === y10js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x10js) {
                        resizeCanvas.anhTrang.x = x10js;
                        resizeCanvas.anhTrang.y = y10js;

                        resizeCanvas.anh10class.x = xTrangjs;
                        resizeCanvas.anh10class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
                localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 11.
            if (e.pageX > resizeCanvas.anh11class.x && e.pageX < resizeCanvas.anh11class.x + resizeCanvas.anh11class.width && e.pageY > resizeCanvas.anh11class.y && e.pageY < resizeCanvas.anh11class.y + resizeCanvas.anh11class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x11js = JSON.parse(localStorage.getItem("x11"));
                y11js = JSON.parse(localStorage.getItem("y11"));
                if (yTrangjs === y11js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x11js) {
                        resizeCanvas.anhTrang.x = x11js;
                        resizeCanvas.anhTrang.y = y11js;

                        resizeCanvas.anh11class.x = xTrangjs;
                        resizeCanvas.anh11class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
                localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 12.
            if (e.pageX > resizeCanvas.anh12class.x && e.pageX < resizeCanvas.anh12class.x + resizeCanvas.anh12class.width && e.pageY > resizeCanvas.anh12class.y && e.pageY < resizeCanvas.anh12class.y + resizeCanvas.anh12class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x12js = JSON.parse(localStorage.getItem("x12"));
                y12js = JSON.parse(localStorage.getItem("y12"));
                if (yTrangjs === y12js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x12js) {
                        resizeCanvas.anhTrang.x = x12js;
                        resizeCanvas.anhTrang.y = y12js;

                        resizeCanvas.anh12class.x = xTrangjs;
                        resizeCanvas.anh12class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
                localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 13.
            if (e.pageX > resizeCanvas.anh13class.x && e.pageX < resizeCanvas.anh13class.x + resizeCanvas.anh13class.width && e.pageY > resizeCanvas.anh13class.y && e.pageY < resizeCanvas.anh13class.y + resizeCanvas.anh13class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x13js = JSON.parse(localStorage.getItem("x13"));
                y13js = JSON.parse(localStorage.getItem("y13"));
                if (yTrangjs === y13js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x13js) {
                        resizeCanvas.anhTrang.x = x13js;
                        resizeCanvas.anhTrang.y = y13js;

                        resizeCanvas.anh13class.x = xTrangjs;
                        resizeCanvas.anh13class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
                localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 14.
            if (e.pageX > resizeCanvas.anh14class.x && e.pageX < resizeCanvas.anh14class.x + resizeCanvas.anh14class.width && e.pageY > resizeCanvas.anh14class.y && e.pageY < resizeCanvas.anh14class.y + resizeCanvas.anh14class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x14js = JSON.parse(localStorage.getItem("x14"));
                y14js = JSON.parse(localStorage.getItem("y14"));
                if (yTrangjs === y14js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x14js) {
                        resizeCanvas.anhTrang.x = x14js;
                        resizeCanvas.anhTrang.y = y14js;

                        resizeCanvas.anh14class.x = xTrangjs;
                        resizeCanvas.anh14class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
                localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 15.
            if (e.pageX > resizeCanvas.anh15class.x && e.pageX < resizeCanvas.anh15class.x + resizeCanvas.anh15class.width && e.pageY > resizeCanvas.anh15class.y && e.pageY < resizeCanvas.anh15class.y + resizeCanvas.anh15class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x15js = JSON.parse(localStorage.getItem("x15"));
                y15js = JSON.parse(localStorage.getItem("y15"));
                if (yTrangjs === y15js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x15js) {
                        resizeCanvas.anhTrang.x = x15js;
                        resizeCanvas.anhTrang.y = y15js;

                        resizeCanvas.anh15class.x = xTrangjs;
                        resizeCanvas.anh15class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
                localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 16.
            if (e.pageX > resizeCanvas.anh16class.x && e.pageX < resizeCanvas.anh16class.x + resizeCanvas.anh16class.width && e.pageY > resizeCanvas.anh16class.y && e.pageY < resizeCanvas.anh16class.y + resizeCanvas.anh16class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x16js = JSON.parse(localStorage.getItem("x16"));
                y16js = JSON.parse(localStorage.getItem("y16"));
                if (yTrangjs === y16js) {
                    if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x16js) {
                        resizeCanvas.anhTrang.x = x16js;
                        resizeCanvas.anhTrang.y = y16js;

                        resizeCanvas.anh16class.x = xTrangjs;
                        resizeCanvas.anh16class.y = yTrangjs;
                    }

                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
                localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
            }

            // ảnh trắng ở bên phải ảnh Doremon, trong cùng một hàng.
            // Hoán đổi ảnh trắng - ảnh 1.
            if (e.pageX > resizeCanvas.anh1class.x && e.pageX < resizeCanvas.anh1class.x + resizeCanvas.anh1class.width && e.pageY > resizeCanvas.anh1class.y && e.pageY < resizeCanvas.anh1class.y + resizeCanvas.anh1class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x1js = JSON.parse(localStorage.getItem("x1"));
                y1js = JSON.parse(localStorage.getItem("y1"));
                if (yTrangjs === y1js) {
                    if (x1js + resizeCanvas.anh1class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x1js;
                        resizeCanvas.anhTrang.y = y1js;

                        resizeCanvas.anh1class.x = xTrangjs;
                        resizeCanvas.anh1class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
                localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));
            }

            //hoán đổi ảnh trắng - ảnh 2.
            if (e.pageX > resizeCanvas.anh2class.x && e.pageX < resizeCanvas.anh2class.x + resizeCanvas.anh2class.width && e.pageY > resizeCanvas.anh2class.y && e.pageY < resizeCanvas.anh2class.y + resizeCanvas.anh2class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x2js = JSON.parse(localStorage.getItem("x2"));
                y2js = JSON.parse(localStorage.getItem("y2"));
                if (yTrangjs === y2js) {
                    if (x2js + resizeCanvas.anh2class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x2js;
                        resizeCanvas.anhTrang.y = y2js;

                        resizeCanvas.anh2class.x = xTrangjs;
                        resizeCanvas.anh2class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
                localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 3.
            if (e.pageX > resizeCanvas.anh3class.x && e.pageX < resizeCanvas.anh3class.x + resizeCanvas.anh3class.width && e.pageY > resizeCanvas.anh3class.y && e.pageY < resizeCanvas.anh3class.y + resizeCanvas.anh3class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x3js = JSON.parse(localStorage.getItem("x3"));
                y3js = JSON.parse(localStorage.getItem("y3"));
                if (yTrangjs === y3js) {
                    if (x3js + resizeCanvas.anh3class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x3js;
                        resizeCanvas.anhTrang.y = y3js;

                        resizeCanvas.anh3class.x = xTrangjs;
                        resizeCanvas.anh3class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
                localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 4.
            if (e.pageX > resizeCanvas.anh4class.x && e.pageX < resizeCanvas.anh4class.x + resizeCanvas.anh4class.width && e.pageY > resizeCanvas.anh4class.y && e.pageY < resizeCanvas.anh4class.y + resizeCanvas.anh4class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x4js = JSON.parse(localStorage.getItem("x4"));
                y4js = JSON.parse(localStorage.getItem("y4"));
                if (yTrangjs === y4js) {
                    if (x4js + resizeCanvas.anh4class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x4js;
                        resizeCanvas.anhTrang.y = y4js;

                        resizeCanvas.anh4class.x = xTrangjs;
                        resizeCanvas.anh4class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
                localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 5.
            if (e.pageX > resizeCanvas.anh5class.x && e.pageX < resizeCanvas.anh5class.x + resizeCanvas.anh5class.width && e.pageY > resizeCanvas.anh5class.y && e.pageY < resizeCanvas.anh5class.y + resizeCanvas.anh5class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x5js = JSON.parse(localStorage.getItem("x5"));
                y5js = JSON.parse(localStorage.getItem("y5"));
                if (yTrangjs === y5js) {
                    if (x5js + resizeCanvas.anh5class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x5js;
                        resizeCanvas.anhTrang.y = y5js;

                        resizeCanvas.anh5class.x = xTrangjs;
                        resizeCanvas.anh5class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
                localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 6.
            if (e.pageX > resizeCanvas.anh6class.x && e.pageX < resizeCanvas.anh6class.x + resizeCanvas.anh6class.width && e.pageY > resizeCanvas.anh6class.y && e.pageY < resizeCanvas.anh6class.y + resizeCanvas.anh6class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x6js = JSON.parse(localStorage.getItem("x6"));
                y6js = JSON.parse(localStorage.getItem("y6"));
                if (yTrangjs === y6js) {
                    if (x6js + resizeCanvas.anh6class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x6js;
                        resizeCanvas.anhTrang.y = y6js;

                        resizeCanvas.anh6class.x = xTrangjs;
                        resizeCanvas.anh6class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
                localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 7.
            if (e.pageX > resizeCanvas.anh7class.x && e.pageX < resizeCanvas.anh7class.x + resizeCanvas.anh7class.width && e.pageY > resizeCanvas.anh7class.y && e.pageY < resizeCanvas.anh7class.y + resizeCanvas.anh7class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x7js = JSON.parse(localStorage.getItem("x7"));
                y7js = JSON.parse(localStorage.getItem("y7"));
                if (yTrangjs === y7js) {
                    if (x7js + resizeCanvas.anh7class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x7js;
                        resizeCanvas.anhTrang.y = y7js;

                        resizeCanvas.anh7class.x = xTrangjs;
                        resizeCanvas.anh7class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
                localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 8.
            if (e.pageX > resizeCanvas.anh8class.x && e.pageX < resizeCanvas.anh8class.x + resizeCanvas.anh8class.width && e.pageY > resizeCanvas.anh8class.y && e.pageY < resizeCanvas.anh8class.y + resizeCanvas.anh8class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x8js = JSON.parse(localStorage.getItem("x8"));
                y8js = JSON.parse(localStorage.getItem("y8"));
                if (yTrangjs === y8js) {
                    if (x8js + resizeCanvas.anh8class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x8js;
                        resizeCanvas.anhTrang.y = y8js;

                        resizeCanvas.anh8class.x = xTrangjs;
                        resizeCanvas.anh8class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
                localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 9.
            if (e.pageX > resizeCanvas.anh9class.x && e.pageX < resizeCanvas.anh9class.x + resizeCanvas.anh9class.width && e.pageY > resizeCanvas.anh9class.y && e.pageY < resizeCanvas.anh9class.y + resizeCanvas.anh9class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x9js = JSON.parse(localStorage.getItem("x9"));
                y9js = JSON.parse(localStorage.getItem("y9"));
                if (yTrangjs === y9js) {
                    if (x9js + resizeCanvas.anh9class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x9js;
                        resizeCanvas.anhTrang.y = y9js;

                        resizeCanvas.anh9class.x = xTrangjs;
                        resizeCanvas.anh9class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
                localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 10.
            if (e.pageX > resizeCanvas.anh10class.x && e.pageX < resizeCanvas.anh10class.x + resizeCanvas.anh10class.width && e.pageY > resizeCanvas.anh10class.y && e.pageY < resizeCanvas.anh10class.y + resizeCanvas.anh10class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x10js = JSON.parse(localStorage.getItem("x10"));
                y10js = JSON.parse(localStorage.getItem("y10"));
                if (yTrangjs === y10js) {
                    if (x10js + resizeCanvas.anh10class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x10js;
                        resizeCanvas.anhTrang.y = y10js;

                        resizeCanvas.anh10class.x = xTrangjs;
                        resizeCanvas.anh10class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
                localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 11.
            if (e.pageX > resizeCanvas.anh11class.x && e.pageX < resizeCanvas.anh11class.x + resizeCanvas.anh11class.width && e.pageY > resizeCanvas.anh11class.y && e.pageY < resizeCanvas.anh11class.y + resizeCanvas.anh11class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x11js = JSON.parse(localStorage.getItem("x11"));
                y11js = JSON.parse(localStorage.getItem("y11"));
                if (yTrangjs === y11js) {
                    if (x11js + resizeCanvas.anh11class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x11js;
                        resizeCanvas.anhTrang.y = y11js;

                        resizeCanvas.anh11class.x = xTrangjs;
                        resizeCanvas.anh11class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
                localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 12.
            if (e.pageX > resizeCanvas.anh12class.x && e.pageX < resizeCanvas.anh12class.x + resizeCanvas.anh12class.width && e.pageY > resizeCanvas.anh12class.y && e.pageY < resizeCanvas.anh12class.y + resizeCanvas.anh12class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x12js = JSON.parse(localStorage.getItem("x12"));
                y12js = JSON.parse(localStorage.getItem("y12"));
                if (yTrangjs === y12js) {
                    if (x12js + resizeCanvas.anh12class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x12js;
                        resizeCanvas.anhTrang.y = y12js;

                        resizeCanvas.anh12class.x = xTrangjs;
                        resizeCanvas.anh12class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
                localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 13.
            if (e.pageX > resizeCanvas.anh13class.x && e.pageX < resizeCanvas.anh13class.x + resizeCanvas.anh13class.width && e.pageY > resizeCanvas.anh13class.y && e.pageY < resizeCanvas.anh13class.y + resizeCanvas.anh13class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x13js = JSON.parse(localStorage.getItem("x13"));
                y13js = JSON.parse(localStorage.getItem("y13"));
                if (yTrangjs === y13js) {
                    if (x13js + resizeCanvas.anh13class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x13js;
                        resizeCanvas.anhTrang.y = y13js;

                        resizeCanvas.anh13class.x = xTrangjs;
                        resizeCanvas.anh13class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
                localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 14.
            if (e.pageX > resizeCanvas.anh14class.x && e.pageX < resizeCanvas.anh14class.x + resizeCanvas.anh14class.width && e.pageY > resizeCanvas.anh14class.y && e.pageY < resizeCanvas.anh14class.y + resizeCanvas.anh14class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x14js = JSON.parse(localStorage.getItem("x14"));
                y14js = JSON.parse(localStorage.getItem("y14"));
                if (yTrangjs === y14js) {
                    if (x14js + resizeCanvas.anh14class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x14js;
                        resizeCanvas.anhTrang.y = y14js;

                        resizeCanvas.anh14class.x = xTrangjs;
                        resizeCanvas.anh14class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
                localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 15.
            if (e.pageX > resizeCanvas.anh15class.x && e.pageX < resizeCanvas.anh15class.x + resizeCanvas.anh15class.width && e.pageY > resizeCanvas.anh15class.y && e.pageY < resizeCanvas.anh15class.y + resizeCanvas.anh15class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x15js = JSON.parse(localStorage.getItem("x15"));
                y15js = JSON.parse(localStorage.getItem("y15"));
                if (yTrangjs === y15js) {
                    if (x15js + resizeCanvas.anh15class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x15js;
                        resizeCanvas.anhTrang.y = y15js;

                        resizeCanvas.anh15class.x = xTrangjs;
                        resizeCanvas.anh15class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
                localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));
            }

            // Hoán đổi ảnh trắng - ảnh 16.
            if (e.pageX > resizeCanvas.anh16class.x && e.pageX < resizeCanvas.anh16class.x + resizeCanvas.anh16class.width && e.pageY > resizeCanvas.anh16class.y && e.pageY < resizeCanvas.anh16class.y + resizeCanvas.anh16class.height) {
                xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
                yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

                x16js = JSON.parse(localStorage.getItem("x16"));
                y16js = JSON.parse(localStorage.getItem("y16"));
                if (yTrangjs === y16js) {
                    if (x16js + resizeCanvas.anh16class.width + 2 === xTrangjs) {
                        resizeCanvas.anhTrang.x = x16js;
                        resizeCanvas.anhTrang.y = y16js;

                        resizeCanvas.anh16class.x = xTrangjs;
                        resizeCanvas.anh16class.y = yTrangjs;
                    }
                }
                localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
                localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

                localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
                localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
            }
        }
    });
}



let x1jskt;
let y1jskt;
let x2jskt;
let y2jskt;
let x3jskt;
let y3jskt;
let x4jskt;
let y4jskt;
let x5jskt;
let y5jskt;
let x6jskt;
let y6jskt;
let x7jskt;
let y7jskt;
let x8jskt;
let y8jskt;
let x9jskt;
let y9jskt;
let x10jskt;
let y10jskt;
let x11jskt;
let y11jskt;
let x12jskt;
let y12jskt;
let x13jskt;
let y13jskt;
let x14jskt;
let y14jskt;
let x15jskt;
let y15jskt;
let x16jskt;
let y16jskt;

//cố định
let x1jscd;
let y1jscd;
let x2jscd;
let y2jscd;
let x3jscd;
let y3jscd;
let x4jscd;
let y4jscd;
let x5jscd;
let y5jscd;
let x6jscd;
let y6jscd;
let x7jscd;
let y7jscd;
let x8jscd;
let y8jscd;
let x9jscd;
let y9jscd;
let x10jscd;
let y10jscd;
let x11jscd;
let y11jscd;
let x12jscd;
let y12jscd;
let x13jscd;
let y13jscd;
let x14jscd;
let y14jscd;
let x15jscd;
let y15jscd;
let x16jscd;
let y16jscd;

let thoiDiemKetThuc = 0;
let gioKetThuc = 0;
let phutKetThuc = 0;
let giayKetThuc = 0;
function kiemTra() {
    x1jskt = JSON.parse(localStorage.getItem("x1"));
    y1jskt = JSON.parse(localStorage.getItem("y1"));

    x2jskt = JSON.parse(localStorage.getItem("x2"));
    y2jskt = JSON.parse(localStorage.getItem("y2"));

    x3jskt = JSON.parse(localStorage.getItem("x3"));
    y3jskt = JSON.parse(localStorage.getItem("y3"));

    x4jskt = JSON.parse(localStorage.getItem("x4"));
    y4jskt = JSON.parse(localStorage.getItem("y4"));

    x5jskt = JSON.parse(localStorage.getItem("x5"));
    y5jskt = JSON.parse(localStorage.getItem("y5"));

    x6jskt = JSON.parse(localStorage.getItem("x6"));
    y6jskt = JSON.parse(localStorage.getItem("y6"));

    x7jskt = JSON.parse(localStorage.getItem("x7"));
    y7jskt = JSON.parse(localStorage.getItem("y7"));

    x8jskt = JSON.parse(localStorage.getItem("x8"));
    y8jskt = JSON.parse(localStorage.getItem("y8"));

    x9jskt = JSON.parse(localStorage.getItem("x9"));
    y9jskt = JSON.parse(localStorage.getItem("y9"));

    x10jskt = JSON.parse(localStorage.getItem("x10"));
    y10jskt = JSON.parse(localStorage.getItem("y10"));

    x11jskt = JSON.parse(localStorage.getItem("x11"));
    y11jskt = JSON.parse(localStorage.getItem("y11"));

    x12jskt = JSON.parse(localStorage.getItem("x12"));
    y12jskt = JSON.parse(localStorage.getItem("y12"));

    x13jskt = JSON.parse(localStorage.getItem("x13"));
    y13jskt = JSON.parse(localStorage.getItem("y13"));

    x14jskt = JSON.parse(localStorage.getItem("x14"));
    y14jskt = JSON.parse(localStorage.getItem("y14"));

    x15jskt = JSON.parse(localStorage.getItem("x15"));
    y15jskt = JSON.parse(localStorage.getItem("y15"));

    x16jskt = JSON.parse(localStorage.getItem("x16"));
    y16jskt = JSON.parse(localStorage.getItem("y16"));

    // so sánh với.
    x1jscd = JSON.parse(localStorage.getItem("x1cd"));
    y1jscd = JSON.parse(localStorage.getItem("y1cd"));

    x2jscd = JSON.parse(localStorage.getItem("x2cd"));
    y2jscd = JSON.parse(localStorage.getItem("y2cd"));

    x3jscd = JSON.parse(localStorage.getItem("x3cd"));
    y3jscd = JSON.parse(localStorage.getItem("y3cd"));

    x4jscd = JSON.parse(localStorage.getItem("x4cd"));
    y4jscd = JSON.parse(localStorage.getItem("y4cd"));

    x5jscd = JSON.parse(localStorage.getItem("x5cd"));
    y5jscd = JSON.parse(localStorage.getItem("y5cd"));

    x6jscd = JSON.parse(localStorage.getItem("x6cd"));
    y6jscd = JSON.parse(localStorage.getItem("y6cd"));

    x7jscd = JSON.parse(localStorage.getItem("x7cd"));
    y7jscd = JSON.parse(localStorage.getItem("y7cd"));

    x8jscd = JSON.parse(localStorage.getItem("x8cd"));
    y8jscd = JSON.parse(localStorage.getItem("y8cd"));

    x9jscd = JSON.parse(localStorage.getItem("x9cd"));
    y9jscd = JSON.parse(localStorage.getItem("y9cd"));

    x10jscd = JSON.parse(localStorage.getItem("x10cd"));
    y10jscd = JSON.parse(localStorage.getItem("y10cd"));

    x11jscd = JSON.parse(localStorage.getItem("x11cd"));
    y11jscd = JSON.parse(localStorage.getItem("y11cd"));

    x12jscd = JSON.parse(localStorage.getItem("x12cd"));
    y12jscd = JSON.parse(localStorage.getItem("y12cd"));

    x13jscd = JSON.parse(localStorage.getItem("x13cd"));
    y13jscd = JSON.parse(localStorage.getItem("y13cd"));

    x14jscd = JSON.parse(localStorage.getItem("x14cd"));
    y14jscd = JSON.parse(localStorage.getItem("y14cd"));

    x15jscd = JSON.parse(localStorage.getItem("x15cd"));
    y15jscd = JSON.parse(localStorage.getItem("y15cd"));

    x16jscd = JSON.parse(localStorage.getItem("x16cd"));
    y16jscd = JSON.parse(localStorage.getItem("y16cd"));

    if (x1jskt === x1jscd && y1jskt === y1jscd && x2jskt === x2jscd && y2jskt === y2jscd && x3jskt === x3jscd && y3jskt === y3jscd && x4jskt === x4jscd && y4jskt === y4jscd && x5jskt === x5jscd && y5jskt === y5jscd && x6jskt === x6jscd && y6jskt === y6jscd && x7jskt === x7jscd && y7jskt === y7jscd && x8jskt === x8jscd && y8jskt === y8jscd && x9jskt === x9jscd && y9jskt === y9jscd && x10jskt === x10jscd && y10jskt === y10jscd && x11jskt === x11jscd && y11jskt === y11jscd && x12jskt === x12jscd && y12jskt === y12jscd && x13jskt === x13jscd && y13jskt === y13jscd && x14jskt === x14jscd && y14jskt === y14jscd && x15jskt === x15jscd && y15jskt === y15jscd && x16jskt === x16jscd && y16jskt === y16jscd) {
        const ketThucGame = JSON.parse(localStorage.getItem("anh1dichuyen"));
        const anhDung = new Image();
        anhDung.src = '/img/doremon/dung.png';
        // Hiển thị khi mở Game.
        if (resizeCanvas.width < resizeCanvas.height) {
            if (resizeCanvas.width < 414) {
                ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 75, 75);
            }
            if (resizeCanvas.width >= 414) {
                ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 100, 100);
            }
        }
        if (resizeCanvas.width > resizeCanvas.height) {
            ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 90, 90);
        }
        // kết thúc Game.
        if (ketThucGame === 1) {
            const curDate2 = new Date();
            gioKetThuc = curDate2.getHours();
            phutKetThuc = curDate2.getMinutes();
            giayKetThuc = curDate2.getSeconds();

            thoiDiemKetThuc = gioKetThuc * 3600 + phutKetThuc * 60 + giayKetThuc;

            localStorage.setItem("tdKetThuc", JSON.stringify(thoiDiemKetThuc));
            localStorage.setItem("anh1dichuyen", JSON.stringify(2));
            localStorage.setItem("endGame", JSON.stringify("yes"));


            if (resizeCanvas.width < resizeCanvas.height) {
                if (resizeCanvas.width < 414) {
                    ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 75, 75);
                }
                if (resizeCanvas.width >= 414) {
                    ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 100, 100);
                }
            }
            if (resizeCanvas.width > resizeCanvas.height) {
                ctx.drawImage(anhDung, resizeCanvas.anhTrang.x, resizeCanvas.anhTrang.y, 90, 90);
            }

            document.getElementById('random').style.display = 'block';
            document.getElementById('btn').innerText = 'Play';
        }
    }
}

function cssbtn() {
    if (resizeCanvas.width > resizeCanvas.height) {
        document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
        document.getElementById('btn').style.marginLeft = 50 + "px";
        if (resizeCanvas.width <= 667) {
            document.getElementById('btn').style.marginLeft = 10 + "px";
        }
        document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
        document.getElementById('chuyenDenEnd').style.marginTop = resizeCanvas.height - 250 + "px";
        document.getElementById('exit').style.marginLeft = resizeCanvas.width - 145 + "px";
        document.getElementById('exit').style.marginTop = resizeCanvas.height - 70 + "px";
        document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
        document.getElementById('random').style.marginTop = resizeCanvas.height - 160 + "px";
    }
    if (resizeCanvas.width < resizeCanvas.height) {
        document.getElementById('btn').style.marginTop = resizeCanvas.height - 70 + "px";
        document.getElementById('btn').style.marginLeft = 10 + "px";
        document.getElementById('random').style.marginLeft = resizeCanvas.width - 145 + "px";
        document.getElementById('random').style.marginTop = resizeCanvas.height - 70 + "px";
        document.getElementById('chuyenDenEnd').style.marginLeft = resizeCanvas.width - 145 + "px";
    }
}
cssbtn();
let giodgt;
let phutdgt;
let giaydgt;
function thongBao() {
    const tdBatDaujs = JSON.parse(localStorage.getItem("tdBatDau"));
    const tdKetThucjs = JSON.parse(localStorage.getItem("tdKetThuc"))
    const thoiGianGiai = tdKetThucjs - tdBatDaujs;
    const hienGio = Math.floor(thoiGianGiai / 3600);
    const hienPhut = Math.floor((thoiGianGiai - hienGio * 3600) / 60);
    const hienGiay = Math.floor(thoiGianGiai - hienGio * 3600 - hienPhut * 60);
    if (thoiGianGiai > 0) {
        ctx.fillStyle = 'red';
        ctx.font = "25px Georgia";
        if (hienGio < 10) {
            giodgt = '0' + hienGio;
        }
        else {
            giodgt = hienGio;
        }

        if (hienPhut < 10) {
            phutdgt = '0' + hienPhut;
        }
        else {
            phutdgt = hienPhut;
        }

        if (hienGiay < 10) {
            giaydgt = '0' + hienGiay;
        }
        else {
            giaydgt = hienGiay;
        }
        document.getElementById('dongHo').innerText = giodgt + ' : ' + phutdgt + ' : ' + giaydgt;
        localStorage.setItem("luuGio", JSON.stringify(giodgt));
        localStorage.setItem("luuPhut", JSON.stringify(phutdgt));
        localStorage.setItem("luuGiay", JSON.stringify(giaydgt));
    }

}

// Xóa dữ liệu khi nhấn vào nút Go Home.
const goHom = document.getElementById('exit');
goHom.addEventListener('click', (e) => {
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
});

function randomImage() {
    const random1den4 = Math.round(Math.random() * 4);
    // 1 - ảnh trắng ở trên ảnh Doremon.
    // 2 - ảnh trắng ở dưới ảnh Doremon.
    // 3 - ảnh trắng ở bên trái ảnh Doremon.
    // 4 - ảnh trắng ở bên phải ảnh Doremon.
    localStorage.removeItem("tdBatDau");
    localStorage.removeItem("tdKetThuc");
    document.getElementById('dongHo').innerText = '00 : 00 : 00';
    if (resizeCanvas.width > resizeCanvas.height) {
        document.getElementById('textTime').innerText = 'Total Time:';
    }

    document.getElementById('btn').style.display = 'none';

    if (random1den4 === 1) {
        // ảnh trắng ở trên anh doremon, trong cùng một cột.
        // Hoán đổi ảnh trắng - ảnh 1.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x1js = JSON.parse(localStorage.getItem("x1"));
        y1js = JSON.parse(localStorage.getItem("y1"));
        if (resizeCanvas.width < resizeCanvas.height) {
            if (xTrangjs === x1js) {
                if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y1js) {
                    resizeCanvas.anhTrang.x = x1js;
                    resizeCanvas.anhTrang.y = y1js;

                    resizeCanvas.anh1class.x = xTrangjs;
                    resizeCanvas.anh1class.y = yTrangjs;
                }
            }
        }
        if (resizeCanvas.width > resizeCanvas.height) {
            if (yTrangjs === y1js) {
                if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x1js) {
                    resizeCanvas.anhTrang.x = x1js;
                    resizeCanvas.anhTrang.y = y1js;

                    resizeCanvas.anh1class.x = xTrangjs;
                    resizeCanvas.anh1class.y = yTrangjs;
                }
            }
        }

        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));

        // Hoán đổi ảnh trắng - ảnh 2.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x2js = JSON.parse(localStorage.getItem("x2"));
        y2js = JSON.parse(localStorage.getItem("y2"));

        if (xTrangjs === x2js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y2js) {
                resizeCanvas.anhTrang.x = x2js;
                resizeCanvas.anhTrang.y = y2js;

                resizeCanvas.anh2class.x = xTrangjs;
                resizeCanvas.anh2class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));

        // Hoán đổi ảnh trắng - ảnh 3.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x3js = JSON.parse(localStorage.getItem("x3"));
        y3js = JSON.parse(localStorage.getItem("y3"));

        if (xTrangjs === x3js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y3js) {
                resizeCanvas.anhTrang.x = x3js;
                resizeCanvas.anhTrang.y = y3js;

                resizeCanvas.anh3class.x = xTrangjs;
                resizeCanvas.anh3class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));

        // Hoán đổi ảnh trắng - ảnh 4.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x4js = JSON.parse(localStorage.getItem("x4"));
        y4js = JSON.parse(localStorage.getItem("y4"));

        if (xTrangjs === x4js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y4js) {
                resizeCanvas.anhTrang.x = x4js;
                resizeCanvas.anhTrang.y = y4js;

                resizeCanvas.anh4class.x = xTrangjs;
                resizeCanvas.anh4class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));

        // Hoán đổi ảnh trắng - ảnh 5.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x5js = JSON.parse(localStorage.getItem("x5"));
        y5js = JSON.parse(localStorage.getItem("y5"));

        if (xTrangjs === x5js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y5js) {
                resizeCanvas.anhTrang.x = x5js;
                resizeCanvas.anhTrang.y = y5js;

                resizeCanvas.anh5class.x = xTrangjs;
                resizeCanvas.anh5class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));

        // Hoán đổi ảnh trắng - ảnh 6.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x6js = JSON.parse(localStorage.getItem("x6"));
        y6js = JSON.parse(localStorage.getItem("y6"));

        if (xTrangjs === x6js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y6js) {
                resizeCanvas.anhTrang.x = x6js;
                resizeCanvas.anhTrang.y = y6js;

                resizeCanvas.anh6class.x = xTrangjs;
                resizeCanvas.anh6class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));

        // Hoán đổi ảnh trắng - ảnh 7.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x7js = JSON.parse(localStorage.getItem("x7"));
        y7js = JSON.parse(localStorage.getItem("y7"));

        if (xTrangjs === x7js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y7js) {
                resizeCanvas.anhTrang.x = x7js;
                resizeCanvas.anhTrang.y = y7js;

                resizeCanvas.anh7class.x = xTrangjs;
                resizeCanvas.anh7class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));

        // Hoán đổi ảnh trắng - ảnh 8.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x8js = JSON.parse(localStorage.getItem("x8"));
        y8js = JSON.parse(localStorage.getItem("y8"));

        if (xTrangjs === x8js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y8js) {
                resizeCanvas.anhTrang.x = x8js;
                resizeCanvas.anhTrang.y = y8js;

                resizeCanvas.anh8class.x = xTrangjs;
                resizeCanvas.anh8class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));

        // Hoán đổi ảnh trắng - ảnh 9.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x9js = JSON.parse(localStorage.getItem("x9"));
        y9js = JSON.parse(localStorage.getItem("y9"));

        if (xTrangjs === x9js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y9js) {
                resizeCanvas.anhTrang.x = x9js;
                resizeCanvas.anhTrang.y = y9js;

                resizeCanvas.anh9class.x = xTrangjs;
                resizeCanvas.anh9class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));

        // Hoán đổi ảnh trắng - ảnh 10.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x10js = JSON.parse(localStorage.getItem("x10"));
        y10js = JSON.parse(localStorage.getItem("y10"));

        if (xTrangjs === x10js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y10js) {
                resizeCanvas.anhTrang.x = x10js;
                resizeCanvas.anhTrang.y = y10js;

                resizeCanvas.anh10class.x = xTrangjs;
                resizeCanvas.anh10class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));

        // Hoán đổi ảnh trắng - ảnh 11.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x11js = JSON.parse(localStorage.getItem("x11"));
        y11js = JSON.parse(localStorage.getItem("y11"));

        if (xTrangjs === x11js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y11js) {
                resizeCanvas.anhTrang.x = x11js;
                resizeCanvas.anhTrang.y = y11js;

                resizeCanvas.anh11class.x = xTrangjs;
                resizeCanvas.anh11class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));

        // Hoán đổi ảnh trắng - ảnh 12.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x12js = JSON.parse(localStorage.getItem("x12"));
        y12js = JSON.parse(localStorage.getItem("y12"));

        if (xTrangjs === x12js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y12js) {
                resizeCanvas.anhTrang.x = x12js;
                resizeCanvas.anhTrang.y = y12js;

                resizeCanvas.anh12class.x = xTrangjs;
                resizeCanvas.anh12class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));

        // Hoán đổi ảnh trắng - ảnh 13.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x13js = JSON.parse(localStorage.getItem("x13"));
        y13js = JSON.parse(localStorage.getItem("y13"));

        if (xTrangjs === x13js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y13js) {
                resizeCanvas.anhTrang.x = x13js;
                resizeCanvas.anhTrang.y = y13js;

                resizeCanvas.anh13class.x = xTrangjs;
                resizeCanvas.anh13class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));

        // Hoán đổi ảnh trắng - ảnh 14.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x14js = JSON.parse(localStorage.getItem("x14"));
        y14js = JSON.parse(localStorage.getItem("y14"));

        if (xTrangjs === x14js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y14js) {
                resizeCanvas.anhTrang.x = x14js;
                resizeCanvas.anhTrang.y = y14js;

                resizeCanvas.anh14class.x = xTrangjs;
                resizeCanvas.anh14class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));

        // Hoán đổi ảnh trắng - ảnh 15.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x15js = JSON.parse(localStorage.getItem("x15"));
        y15js = JSON.parse(localStorage.getItem("y15"));

        if (xTrangjs === x15js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y15js) {
                resizeCanvas.anhTrang.x = x15js;
                resizeCanvas.anhTrang.y = y15js;

                resizeCanvas.anh15class.x = xTrangjs;
                resizeCanvas.anh15class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));

        // Hoán đổi ảnh trắng - ảnh 16.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x16js = JSON.parse(localStorage.getItem("x16"));
        y16js = JSON.parse(localStorage.getItem("y16"));

        if (xTrangjs === x16js) {
            if (yTrangjs + resizeCanvas.anhTrang.height + 2 === y16js) {
                resizeCanvas.anhTrang.x = x16js;
                resizeCanvas.anhTrang.y = y16js;

                resizeCanvas.anh16class.x = xTrangjs;
                resizeCanvas.anh16class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
    }
    if (random1den4 === 2) {
        // ảnh trắng ở dưới anh doremon, trong cùng một cột.
        // Hoán đổi ảnh trắng - ảnh 1.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x1js = JSON.parse(localStorage.getItem("x1"));
        y1js = JSON.parse(localStorage.getItem("y1"));
        if (x1js === xTrangjs) {
            if (y1js + resizeCanvas.anh1class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x1js;
                resizeCanvas.anhTrang.y = y1js;

                resizeCanvas.anh1class.x = xTrangjs;
                resizeCanvas.anh1class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));

        // Hoán đổi ảnh trắng - ảnh 2.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x2js = JSON.parse(localStorage.getItem("x2"));
        y2js = JSON.parse(localStorage.getItem("y2"));
        if (x2js === xTrangjs) {
            if (y2js + resizeCanvas.anh2class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x2js;
                resizeCanvas.anhTrang.y = y2js;

                resizeCanvas.anh2class.x = xTrangjs;
                resizeCanvas.anh2class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));

        // Hoán đổi ảnh trắng - ảnh 3.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x3js = JSON.parse(localStorage.getItem("x3"));
        y3js = JSON.parse(localStorage.getItem("y3"));
        if (x3js === xTrangjs) {
            if (y3js + resizeCanvas.anh3class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x3js;
                resizeCanvas.anhTrang.y = y3js;

                resizeCanvas.anh3class.x = xTrangjs;
                resizeCanvas.anh3class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));

        // Hoán đổi ảnh trắng - ảnh 4.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x4js = JSON.parse(localStorage.getItem("x4"));
        y4js = JSON.parse(localStorage.getItem("y4"));
        if (x4js === xTrangjs) {
            if (y4js + resizeCanvas.anh4class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x4js;
                resizeCanvas.anhTrang.y = y4js;

                resizeCanvas.anh4class.x = xTrangjs;
                resizeCanvas.anh4class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));

        // Hoán đổi ảnh trắng - ảnh 5.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x5js = JSON.parse(localStorage.getItem("x5"));
        y5js = JSON.parse(localStorage.getItem("y5"));
        if (x5js === xTrangjs) {
            if (y5js + resizeCanvas.anh5class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x5js;
                resizeCanvas.anhTrang.y = y5js;

                resizeCanvas.anh5class.x = xTrangjs;
                resizeCanvas.anh5class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));

        // Hoán đổi ảnh trắng - ảnh 6.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x6js = JSON.parse(localStorage.getItem("x6"));
        y6js = JSON.parse(localStorage.getItem("y6"));
        if (x6js === xTrangjs) {
            if (y6js + resizeCanvas.anh6class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x6js;
                resizeCanvas.anhTrang.y = y6js;

                resizeCanvas.anh6class.x = xTrangjs;
                resizeCanvas.anh6class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));

        // Hoán đổi ảnh trắng - ảnh 7.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x7js = JSON.parse(localStorage.getItem("x7"));
        y7js = JSON.parse(localStorage.getItem("y7"));
        if (x7js === xTrangjs) {
            if (y7js + resizeCanvas.anh7class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x7js;
                resizeCanvas.anhTrang.y = y7js;

                resizeCanvas.anh7class.x = xTrangjs;
                resizeCanvas.anh7class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));

        // Hoán đổi ảnh trắng - ảnh 8.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x8js = JSON.parse(localStorage.getItem("x8"));
        y8js = JSON.parse(localStorage.getItem("y8"));
        if (x8js === xTrangjs) {
            if (y8js + resizeCanvas.anh8class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x8js;
                resizeCanvas.anhTrang.y = y8js;

                resizeCanvas.anh8class.x = xTrangjs;
                resizeCanvas.anh8class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));

        // Hoán đổi ảnh trắng - ảnh 9.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x9js = JSON.parse(localStorage.getItem("x9"));
        y9js = JSON.parse(localStorage.getItem("y9"));
        if (x9js === xTrangjs) {
            if (y9js + resizeCanvas.anh9class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x9js;
                resizeCanvas.anhTrang.y = y9js;

                resizeCanvas.anh9class.x = xTrangjs;
                resizeCanvas.anh9class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));

        // Hoán đổi ảnh trắng - ảnh 10.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x10js = JSON.parse(localStorage.getItem("x10"));
        y10js = JSON.parse(localStorage.getItem("y10"));
        if (x10js === xTrangjs) {
            if (y10js + resizeCanvas.anh10class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x10js;
                resizeCanvas.anhTrang.y = y10js;

                resizeCanvas.anh10class.x = xTrangjs;
                resizeCanvas.anh10class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));

        // Hoán đổi ảnh trắng - ảnh 11.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x11js = JSON.parse(localStorage.getItem("x11"));
        y11js = JSON.parse(localStorage.getItem("y11"));
        if (x11js === xTrangjs) {
            if (y11js + resizeCanvas.anh11class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x11js;
                resizeCanvas.anhTrang.y = y11js;

                resizeCanvas.anh11class.x = xTrangjs;
                resizeCanvas.anh11class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));

        // Hoán đổi ảnh trắng - ảnh 12.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x12js = JSON.parse(localStorage.getItem("x12"));
        y12js = JSON.parse(localStorage.getItem("y12"));
        if (x12js === xTrangjs) {
            if (y12js + resizeCanvas.anh12class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x12js;
                resizeCanvas.anhTrang.y = y12js;

                resizeCanvas.anh12class.x = xTrangjs;
                resizeCanvas.anh12class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));

        // Hoán đổi ảnh trắng - ảnh 13.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x13js = JSON.parse(localStorage.getItem("x13"));
        y13js = JSON.parse(localStorage.getItem("y13"));
        if (x13js === xTrangjs) {
            if (y13js + resizeCanvas.anh13class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x13js;
                resizeCanvas.anhTrang.y = y13js;

                resizeCanvas.anh13class.x = xTrangjs;
                resizeCanvas.anh13class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));

        // Hoán đổi ảnh trắng - ảnh 14.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x14js = JSON.parse(localStorage.getItem("x14"));
        y14js = JSON.parse(localStorage.getItem("y14"));
        if (x14js === xTrangjs) {
            if (y14js + resizeCanvas.anh14class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x14js;
                resizeCanvas.anhTrang.y = y14js;

                resizeCanvas.anh14class.x = xTrangjs;
                resizeCanvas.anh14class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));

        // Hoán đổi ảnh trắng - ảnh 15.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x15js = JSON.parse(localStorage.getItem("x15"));
        y15js = JSON.parse(localStorage.getItem("y15"));
        if (x15js === xTrangjs) {
            if (y15js + resizeCanvas.anh15class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x15js;
                resizeCanvas.anhTrang.y = y15js;

                resizeCanvas.anh15class.x = xTrangjs;
                resizeCanvas.anh15class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));

        // Hoán đổi ảnh trắng - ảnh 16.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x16js = JSON.parse(localStorage.getItem("x16"));
        y16js = JSON.parse(localStorage.getItem("y16"));
        if (x16js === xTrangjs) {
            if (y16js + resizeCanvas.anh16class.height + 2 === yTrangjs) {
                resizeCanvas.anhTrang.x = x16js;
                resizeCanvas.anhTrang.y = y16js;

                resizeCanvas.anh16class.x = xTrangjs;
                resizeCanvas.anh16class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
    }
    if (random1den4 === 3) {
        // ảnh trắng ở bên trái ảnh Doremon, trong cùng một hàng.
        // Hoán đổi ảnh trắng - ảnh 1.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x1js = JSON.parse(localStorage.getItem("x1"));
        y1js = JSON.parse(localStorage.getItem("y1"));
        if (yTrangjs === y1js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x1js) {
                resizeCanvas.anhTrang.x = x1js;
                resizeCanvas.anhTrang.y = y1js;

                resizeCanvas.anh1class.x = xTrangjs;
                resizeCanvas.anh1class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));

        // Hoán đổi ảnh trắng - ảnh 2.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x2js = JSON.parse(localStorage.getItem("x2"));
        y2js = JSON.parse(localStorage.getItem("y2"));
        if (yTrangjs === y2js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x2js) {
                resizeCanvas.anhTrang.x = x2js;
                resizeCanvas.anhTrang.y = y2js;

                resizeCanvas.anh2class.x = xTrangjs;
                resizeCanvas.anh2class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));

        // Hoán đổi ảnh trắng - ảnh 3.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x3js = JSON.parse(localStorage.getItem("x3"));
        y3js = JSON.parse(localStorage.getItem("y3"));
        if (yTrangjs === y3js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x3js) {
                resizeCanvas.anhTrang.x = x3js;
                resizeCanvas.anhTrang.y = y3js;

                resizeCanvas.anh3class.x = xTrangjs;
                resizeCanvas.anh3class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));

        // Hoán đổi ảnh trắng - ảnh 4.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x4js = JSON.parse(localStorage.getItem("x4"));
        y4js = JSON.parse(localStorage.getItem("y4"));
        if (yTrangjs === y4js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x4js) {
                resizeCanvas.anhTrang.x = x4js;
                resizeCanvas.anhTrang.y = y4js;

                resizeCanvas.anh4class.x = xTrangjs;
                resizeCanvas.anh4class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));

        // Hoán đổi ảnh trắng - ảnh 5.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x5js = JSON.parse(localStorage.getItem("x5"));
        y5js = JSON.parse(localStorage.getItem("y5"));
        if (yTrangjs === y5js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x5js) {
                resizeCanvas.anhTrang.x = x5js;
                resizeCanvas.anhTrang.y = y5js;

                resizeCanvas.anh5class.x = xTrangjs;
                resizeCanvas.anh5class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));

        // Hoán đổi ảnh trắng - ảnh 6.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x6js = JSON.parse(localStorage.getItem("x6"));
        y6js = JSON.parse(localStorage.getItem("y6"));
        if (yTrangjs === y6js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x6js) {
                resizeCanvas.anhTrang.x = x6js;
                resizeCanvas.anhTrang.y = y6js;

                resizeCanvas.anh6class.x = xTrangjs;
                resizeCanvas.anh6class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));

        // Hoán đổi ảnh trắng - ảnh 7.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x7js = JSON.parse(localStorage.getItem("x7"));
        y7js = JSON.parse(localStorage.getItem("y7"));
        if (yTrangjs === y7js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x7js) {
                resizeCanvas.anhTrang.x = x7js;
                resizeCanvas.anhTrang.y = y7js;

                resizeCanvas.anh7class.x = xTrangjs;
                resizeCanvas.anh7class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));

        // Hoán đổi ảnh trắng - ảnh 8.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x8js = JSON.parse(localStorage.getItem("x8"));
        y8js = JSON.parse(localStorage.getItem("y8"));
        if (yTrangjs === y8js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x8js) {
                resizeCanvas.anhTrang.x = x8js;
                resizeCanvas.anhTrang.y = y8js;

                resizeCanvas.anh8class.x = xTrangjs;
                resizeCanvas.anh8class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));

        // Hoán đổi ảnh trắng - ảnh 9.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x9js = JSON.parse(localStorage.getItem("x9"));
        y9js = JSON.parse(localStorage.getItem("y9"));
        if (yTrangjs === y9js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x9js) {
                resizeCanvas.anhTrang.x = x9js;
                resizeCanvas.anhTrang.y = y9js;

                resizeCanvas.anh9class.x = xTrangjs;
                resizeCanvas.anh9class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));

        // Hoán đổi ảnh trắng - ảnh 10.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x10js = JSON.parse(localStorage.getItem("x10"));
        y10js = JSON.parse(localStorage.getItem("y10"));
        if (yTrangjs === y10js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x10js) {
                resizeCanvas.anhTrang.x = x10js;
                resizeCanvas.anhTrang.y = y10js;

                resizeCanvas.anh10class.x = xTrangjs;
                resizeCanvas.anh10class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));

        // Hoán đổi ảnh trắng - ảnh 11.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x11js = JSON.parse(localStorage.getItem("x11"));
        y11js = JSON.parse(localStorage.getItem("y11"));
        if (yTrangjs === y11js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x11js) {
                resizeCanvas.anhTrang.x = x11js;
                resizeCanvas.anhTrang.y = y11js;

                resizeCanvas.anh11class.x = xTrangjs;
                resizeCanvas.anh11class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));

        // Hoán đổi ảnh trắng - ảnh 12.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x12js = JSON.parse(localStorage.getItem("x12"));
        y12js = JSON.parse(localStorage.getItem("y12"));
        if (yTrangjs === y12js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x12js) {
                resizeCanvas.anhTrang.x = x12js;
                resizeCanvas.anhTrang.y = y12js;

                resizeCanvas.anh12class.x = xTrangjs;
                resizeCanvas.anh12class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));

        // Hoán đổi ảnh trắng - ảnh 13.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x13js = JSON.parse(localStorage.getItem("x13"));
        y13js = JSON.parse(localStorage.getItem("y13"));
        if (yTrangjs === y13js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x13js) {
                resizeCanvas.anhTrang.x = x13js;
                resizeCanvas.anhTrang.y = y13js;

                resizeCanvas.anh13class.x = xTrangjs;
                resizeCanvas.anh13class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));

        // Hoán đổi ảnh trắng - ảnh 14.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x14js = JSON.parse(localStorage.getItem("x14"));
        y14js = JSON.parse(localStorage.getItem("y14"));
        if (yTrangjs === y14js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x14js) {
                resizeCanvas.anhTrang.x = x14js;
                resizeCanvas.anhTrang.y = y14js;

                resizeCanvas.anh14class.x = xTrangjs;
                resizeCanvas.anh14class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));

        // Hoán đổi ảnh trắng - ảnh 15.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x15js = JSON.parse(localStorage.getItem("x15"));
        y15js = JSON.parse(localStorage.getItem("y15"));
        if (yTrangjs === y15js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x15js) {
                resizeCanvas.anhTrang.x = x15js;
                resizeCanvas.anhTrang.y = y15js;

                resizeCanvas.anh15class.x = xTrangjs;
                resizeCanvas.anh15class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));

        // Hoán đổi ảnh trắng - ảnh 16.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x16js = JSON.parse(localStorage.getItem("x16"));
        y16js = JSON.parse(localStorage.getItem("y16"));
        if (yTrangjs === y16js) {
            if (xTrangjs + resizeCanvas.anhTrang.width + 2 === x16js) {
                resizeCanvas.anhTrang.x = x16js;
                resizeCanvas.anhTrang.y = y16js;

                resizeCanvas.anh16class.x = xTrangjs;
                resizeCanvas.anh16class.y = yTrangjs;
            }

        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));

    }
    if (random1den4 === 4) {
        // ảnh trắng ở bên phải ảnh Doremon, trong cùng một hàng.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x1js = JSON.parse(localStorage.getItem("x1"));
        y1js = JSON.parse(localStorage.getItem("y1"));
        if (yTrangjs === y1js) {
            if (x1js + resizeCanvas.anh1class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x1js;
                resizeCanvas.anhTrang.y = y1js;

                resizeCanvas.anh1class.x = xTrangjs;
                resizeCanvas.anh1class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x1", JSON.stringify(resizeCanvas.anh1class.x));
        localStorage.setItem("y1", JSON.stringify(resizeCanvas.anh1class.y));

        // Hoán đổi ảnh trắng - ảnh 2.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x2js = JSON.parse(localStorage.getItem("x2"));
        y2js = JSON.parse(localStorage.getItem("y2"));
        if (yTrangjs === y2js) {
            if (x2js + resizeCanvas.anh2class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x2js;
                resizeCanvas.anhTrang.y = y2js;

                resizeCanvas.anh2class.x = xTrangjs;
                resizeCanvas.anh2class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x2", JSON.stringify(resizeCanvas.anh2class.x));
        localStorage.setItem("y2", JSON.stringify(resizeCanvas.anh2class.y));

        // Hoán đổi ảnh trắng - ảnh 3.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x3js = JSON.parse(localStorage.getItem("x3"));
        y3js = JSON.parse(localStorage.getItem("y3"));
        if (yTrangjs === y3js) {
            if (x3js + resizeCanvas.anh3class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x3js;
                resizeCanvas.anhTrang.y = y3js;

                resizeCanvas.anh3class.x = xTrangjs;
                resizeCanvas.anh3class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x3", JSON.stringify(resizeCanvas.anh3class.x));
        localStorage.setItem("y3", JSON.stringify(resizeCanvas.anh3class.y));

        // Hoán đổi ảnh trắng - ảnh 4.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x4js = JSON.parse(localStorage.getItem("x4"));
        y4js = JSON.parse(localStorage.getItem("y4"));
        if (yTrangjs === y4js) {
            if (x4js + resizeCanvas.anh4class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x4js;
                resizeCanvas.anhTrang.y = y4js;

                resizeCanvas.anh4class.x = xTrangjs;
                resizeCanvas.anh4class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x4", JSON.stringify(resizeCanvas.anh4class.x));
        localStorage.setItem("y4", JSON.stringify(resizeCanvas.anh4class.y));

        // Hoán đổi ảnh trắng - ảnh 5.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x5js = JSON.parse(localStorage.getItem("x5"));
        y5js = JSON.parse(localStorage.getItem("y5"));
        if (yTrangjs === y5js) {
            if (x5js + resizeCanvas.anh5class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x5js;
                resizeCanvas.anhTrang.y = y5js;

                resizeCanvas.anh5class.x = xTrangjs;
                resizeCanvas.anh5class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x5", JSON.stringify(resizeCanvas.anh5class.x));
        localStorage.setItem("y5", JSON.stringify(resizeCanvas.anh5class.y));

        // Hoán đổi ảnh trắng - ảnh 6.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x6js = JSON.parse(localStorage.getItem("x6"));
        y6js = JSON.parse(localStorage.getItem("y6"));
        if (yTrangjs === y6js) {
            if (x6js + resizeCanvas.anh6class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x6js;
                resizeCanvas.anhTrang.y = y6js;

                resizeCanvas.anh6class.x = xTrangjs;
                resizeCanvas.anh6class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x6", JSON.stringify(resizeCanvas.anh6class.x));
        localStorage.setItem("y6", JSON.stringify(resizeCanvas.anh6class.y));

        // Hoán đổi ảnh trắng - ảnh 7.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x7js = JSON.parse(localStorage.getItem("x7"));
        y7js = JSON.parse(localStorage.getItem("y7"));
        if (yTrangjs === y7js) {
            if (x7js + resizeCanvas.anh7class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x7js;
                resizeCanvas.anhTrang.y = y7js;

                resizeCanvas.anh7class.x = xTrangjs;
                resizeCanvas.anh7class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x7", JSON.stringify(resizeCanvas.anh7class.x));
        localStorage.setItem("y7", JSON.stringify(resizeCanvas.anh7class.y));

        // Hoán đổi ảnh trắng - ảnh 8.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x8js = JSON.parse(localStorage.getItem("x8"));
        y8js = JSON.parse(localStorage.getItem("y8"));
        if (yTrangjs === y8js) {
            if (x8js + resizeCanvas.anh8class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x8js;
                resizeCanvas.anhTrang.y = y8js;

                resizeCanvas.anh8class.x = xTrangjs;
                resizeCanvas.anh8class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x8", JSON.stringify(resizeCanvas.anh8class.x));
        localStorage.setItem("y8", JSON.stringify(resizeCanvas.anh8class.y));

        // Hoán đổi ảnh trắng - ảnh 9.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x9js = JSON.parse(localStorage.getItem("x9"));
        y9js = JSON.parse(localStorage.getItem("y9"));
        if (yTrangjs === y9js) {
            if (x9js + resizeCanvas.anh9class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x9js;
                resizeCanvas.anhTrang.y = y9js;

                resizeCanvas.anh9class.x = xTrangjs;
                resizeCanvas.anh9class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x9", JSON.stringify(resizeCanvas.anh9class.x));
        localStorage.setItem("y9", JSON.stringify(resizeCanvas.anh9class.y));

        // Hoán đổi ảnh trắng - ảnh 10.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x10js = JSON.parse(localStorage.getItem("x10"));
        y10js = JSON.parse(localStorage.getItem("y10"));
        if (yTrangjs === y10js) {
            if (x10js + resizeCanvas.anh10class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x10js;
                resizeCanvas.anhTrang.y = y10js;

                resizeCanvas.anh10class.x = xTrangjs;
                resizeCanvas.anh10class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x10", JSON.stringify(resizeCanvas.anh10class.x));
        localStorage.setItem("y10", JSON.stringify(resizeCanvas.anh10class.y));

        // Hoán đổi ảnh trắng - ảnh 11.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x11js = JSON.parse(localStorage.getItem("x11"));
        y11js = JSON.parse(localStorage.getItem("y11"));
        if (yTrangjs === y11js) {
            if (x11js + resizeCanvas.anh11class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x11js;
                resizeCanvas.anhTrang.y = y11js;

                resizeCanvas.anh11class.x = xTrangjs;
                resizeCanvas.anh11class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x11", JSON.stringify(resizeCanvas.anh11class.x));
        localStorage.setItem("y11", JSON.stringify(resizeCanvas.anh11class.y));

        // Hoán đổi ảnh trắng - ảnh 12.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x12js = JSON.parse(localStorage.getItem("x12"));
        y12js = JSON.parse(localStorage.getItem("y12"));
        if (yTrangjs === y12js) {
            if (x12js + resizeCanvas.anh12class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x12js;
                resizeCanvas.anhTrang.y = y12js;

                resizeCanvas.anh12class.x = xTrangjs;
                resizeCanvas.anh12class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x12", JSON.stringify(resizeCanvas.anh12class.x));
        localStorage.setItem("y12", JSON.stringify(resizeCanvas.anh12class.y));

        // Hoán đổi ảnh trắng - ảnh 13.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x13js = JSON.parse(localStorage.getItem("x13"));
        y13js = JSON.parse(localStorage.getItem("y13"));
        if (yTrangjs === y13js) {
            if (x13js + resizeCanvas.anh13class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x13js;
                resizeCanvas.anhTrang.y = y13js;

                resizeCanvas.anh13class.x = xTrangjs;
                resizeCanvas.anh13class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x13", JSON.stringify(resizeCanvas.anh13class.x));
        localStorage.setItem("y13", JSON.stringify(resizeCanvas.anh13class.y));

        // Hoán đổi ảnh trắng - ảnh 14.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x14js = JSON.parse(localStorage.getItem("x14"));
        y14js = JSON.parse(localStorage.getItem("y14"));
        if (yTrangjs === y14js) {
            if (x14js + resizeCanvas.anh14class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x14js;
                resizeCanvas.anhTrang.y = y14js;

                resizeCanvas.anh14class.x = xTrangjs;
                resizeCanvas.anh14class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x14", JSON.stringify(resizeCanvas.anh14class.x));
        localStorage.setItem("y14", JSON.stringify(resizeCanvas.anh14class.y));

        // Hoán đổi ảnh trắng - ảnh 15.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x15js = JSON.parse(localStorage.getItem("x15"));
        y15js = JSON.parse(localStorage.getItem("y15"));
        if (yTrangjs === y15js) {
            if (x15js + resizeCanvas.anh15class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x15js;
                resizeCanvas.anhTrang.y = y15js;

                resizeCanvas.anh15class.x = xTrangjs;
                resizeCanvas.anh15class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x15", JSON.stringify(resizeCanvas.anh15class.x));
        localStorage.setItem("y15", JSON.stringify(resizeCanvas.anh15class.y));

        // Hoán đổi ảnh trắng - ảnh 16.
        xTrangjs = JSON.parse(localStorage.getItem("xTrang"));
        yTrangjs = JSON.parse(localStorage.getItem("yTrang"));

        x16js = JSON.parse(localStorage.getItem("x16"));
        y16js = JSON.parse(localStorage.getItem("y16"));
        if (yTrangjs === y16js) {
            if (x16js + resizeCanvas.anh16class.width + 2 === xTrangjs) {
                resizeCanvas.anhTrang.x = x16js;
                resizeCanvas.anhTrang.y = y16js;

                resizeCanvas.anh16class.x = xTrangjs;
                resizeCanvas.anh16class.y = yTrangjs;
            }
        }
        localStorage.setItem("xTrang", JSON.stringify(resizeCanvas.anhTrang.x));
        localStorage.setItem("yTrang", JSON.stringify(resizeCanvas.anhTrang.y));

        localStorage.setItem("x16", JSON.stringify(resizeCanvas.anh16class.x));
        localStorage.setItem("y16", JSON.stringify(resizeCanvas.anh16class.y));
    }
}

document.getElementById('random').addEventListener('click', () => {
    let randomLienTuc = setInterval(() => { randomImage() }, 500);
    setTimeout(() => { clearInterval(randomLienTuc); document.getElementById('btn').style.display = 'block'; }, 30000);
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resizeCanvas.update();
    kiemTra();
    thongBao();

    requestAnimationFrame(animate);
}
animate();

