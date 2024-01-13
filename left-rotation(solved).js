function rotateLeft(d, arr) {
    // check if the array is empty or has only one element
    if (arr.length <= 1) {
        return arr;
    }
    // check if the number of positions is valid
    if (d < 0 || d > arr.length) {
        return arr;
    }
    // use modulo to calculate the effective number of positions
    d = d % arr.length;
    // create a copy of the array
    var rotatedArray = arr.concat();
    // loop for the number of positions
    for (let i = 0; i < d; i++) {
        // remove the first element and add it to the end
        var frontItem = rotatedArray.shift();
        rotatedArray.push(frontItem);
    }
    // return the rotated array
    return rotatedArray;
}

