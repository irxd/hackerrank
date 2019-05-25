// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let jumps = 0;
    let next = 0;
    for (let i = 0; i <= c.length; i++) {
        if (i === next) {
            if (c[i + 2] === 0) {
                jumps++;
                next = i + 2;
            } else if (c[i + 1] === 0) {
                jumps++;
                next = i + 1;
            }
        }
    }
    return jumps;
}
