// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    const socksStatuses = {};
    let result = 0;

    ar.forEach(sock => {
        socksStatuses[sock] = ++socksStatuses[sock] || 1;

        if (socksStatuses[sock] % 2 === 0) {
            result += 1;
        }
    });
        
    return result;
}
