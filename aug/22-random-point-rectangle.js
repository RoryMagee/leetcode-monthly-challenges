/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    this.rects.sort((a,b) => this.area(a) - this.area(b));
    this.pointsArray = this.rects.map(rect => this.area(rect));
    this.totalPoints = this.pointsArray.reduce((total, points) => total+points);
};

Solution.prototype.area = function(rect) {
    return (rect[2]-rect[0] + 1) * (rect[3]-rect[1] + 1);
}

Solution.prototype.getRandomRectangle = function() {
    let pointNumber = Math.floor(Math.random() * this.totalPoints);
    let index = 0;
    while (pointNumber - this.pointsArray[index] >= 0) {
        pointNumber -= this.pointsArray[index];
        index++;
    }
    return index;
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let index = this.getRandomRectangle();
    return this.getPointFromRect(this.rects[index]);
};

Solution.prototype.getPointFromRect = function(rect) {
    console.log(rect);
    const length = rect[2] - rect[0] + 1;
    const width = rect[3] - rect[1] + 1;
    const x = rect[0] + Math.floor(Math.random()*length);
    const y = rect[1] + Math.floor(Math.random()*width);
    return [x,y];
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
