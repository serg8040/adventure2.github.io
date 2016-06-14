
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pct(n) {
    var r;    
    r = (getRandomInt(0,32767)>>2) & 037777 ;
    return( (r%100) < n );
}