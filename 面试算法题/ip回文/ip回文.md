IPV4 的 IP 地址是32位的二进制数，为增强可读性，通常我们以8位为1组进行分割，
    用十进制来表示每一部分，并用点号连接，譬如 192.168.1.1。显然，存在这样的 IP 地址，
    0到9十个数字各出现一次。具备这样特征的 IP 地址里，表示成二进制数时，二进制数左右对称
    （也就是“回文”，表示成32位二进制不省略0）的情况有几种，分别是哪些？要求性能尽可能高


```
ip范围0.0.0.0-255.255.255.255
二进制0-255都有回文数 
所以只计算ip前两位可得出也就是256*256

//代码算法
//获取回文数
function getIp(n) {
    let m=0;

    while (n > 0) {
        m = m * 10 + n % 10;
        n = parseInt(n/10,10);
    }
    return m;
}
//二进制ip池
const ip = [];

for (let ip1 = 0; ip1 <= 255; ip1++) {
    let newip1 = parseInt(ip1,10).toString(2),
        ipreserver1 = getIp(newip1);

    for (let ip2 = 0; ip2 <= 255; ip2++) {
        let newip2 = parseInt(ip2,10).toString(2),
            ipreserver2 = getIp(newip2);
            ip = [...ip,[newip1,newip2,ipreserver2,ipreserver1]]
    }
}

//十进制ip池
const newip = ip.map( number => number.map( n => parseInt(n,2).toString(10)))


```