// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
    let total = -Infinity;

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            const middle = arr[i + 1][j + 1];
            const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            total = total < (top + middle + bottom) ? top + middle + bottom : total;
        }
    }

    return total;
}
