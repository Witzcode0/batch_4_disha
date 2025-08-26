class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set widthVal(w) {
        this.width = w;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);
rect.widthVal= 200;
console.log(rect.area);