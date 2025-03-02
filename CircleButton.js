class CircleButton {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.clickHandler = null; // クリック時のイベント関数
    }

    // 円を描画する
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // クリックされたか判定
    isClicked(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        return distance < this.radius;
    }

    // クリック時のイベントを設定
    onClick(callback) {
        this.clickHandler = callback;
    }

    // クリックされた時の処理
    handleClick() {
        if (this.clickHandler) {
            this.clickHandler(this);
        }
    }
}