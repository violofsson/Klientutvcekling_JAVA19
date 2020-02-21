function getSize(width, height, depth) {
    let area = Number(width) * Number(height);
    let volume = area * Number(depth);
    let sizes = [area, volume];
    return sizes;
}

let sizes = getSize(3, 2, 3);
console.log("Area: " + sizes[0]);
console.log("Volym: " + sizes[1]);