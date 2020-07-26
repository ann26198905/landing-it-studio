$(document).ready(function() {
    console.log('функция не работает ?');
    function testCycle(a, b) {
        var x;
        if (a > b) {
            while (a%b != 0) {
            a = a%b;
            }
            x = b;
            return x;
        } else if (b > a) {
            while (b%a != 0) {
                x = b%a;
                b = x;
                }
            a = x;
            return x;
        } 
    }
    testCycle(13, 182);
});