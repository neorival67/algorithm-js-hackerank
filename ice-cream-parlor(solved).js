function icecreamParlor(m, arr) {
    // Write your code here
    let d = new Map(); // use a map to store the cost and index of each flavor
    for (let i = 0; i < arr.length; i++) {
        if (m - arr[i] in d) { // check if the complement of the current cost is in the map
            return [d[m - arr[i]] + 1, i + 1]; // return the indices of the two flavors
        }
        d[arr[i]] = i; // add the current cost and index to the map
    }
}