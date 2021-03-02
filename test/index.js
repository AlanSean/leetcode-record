//查阅得知ip范围 0-252
function getIp(n) {
    let m=0;

    while (n > 0) {
        m = m * 10 + n % 10;
        n = parseInt(n/10,10);
    }
    return m;
}

const ip = [];

for (let ip1 = 0; ip1 <= 255; ip1++) {
    let newip1 = parseInt(ip1,10).toString(2),
        ipreserver1 = getIp(newip1);

    for (let ip2 = 0; ip2 <= 255; ip2++) {
        let newip2 = parseInt(ip2,10).toString(2),
            ipreserver2 = getIp(newip2);

            ip.push([newip1,newip2,ipreserver2,ipreserver1]);
    }
}


const newip = ip.map( number => number.map( n => parseInt(n,2).toString(10)) )
Math.pow(ip.length,2);

