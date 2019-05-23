// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
    let altitude = 0;
    let startCounter = false;
    let valleyCounter = 0;

    for (let i = 0; i <= n; i++) {
        if (s[i] === 'D') {
            altitude--;
        } else {
            altitude++;
        }

        if (altitude === -1) startCounter = true; // valley start, go below sea level
        if (altitude === 0 && startCounter) { // valley end, go up to sea level
            valleyCounter++;
            startCounter = false;
        }
    }

    return valleyCounter;
}
