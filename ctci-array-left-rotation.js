// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
    const sliceLast = a.slice(d);
    const sliceFirst = a.slice(0, d);
    const result = [...sliceLast, ...sliceFirst];
    
    return result;
}
