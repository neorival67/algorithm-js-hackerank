function flatlandSpaceStations(n, c) {
    let max = [];
    c= c.sort((a, b) => a - b);
    max = [c [ 0 ], n - c [c.length - 1] - 1 ];
    for (let i = 1; i < c.length ; i++) {
        max.push (Math.floor ((c [i] - c [i - 1 ]) / 2));
    }
    
    return Math.max.apply(null, max);

}

