'use strict';
let dabchik = prompt('как дела БРОУ?');
function aboba (a) {
    if(typeof a != 'string') {
        alert('ЭТО НЕ СТРОКА ЕБЛАН!!!');
    } else if (a.length > 30) {
        a = a.substring(0, 30);
        a = a + '...';
        return a.replaceAll(' ','');
        }
    else{
        return a.replaceAll(' ','');
        }};
const zebra = aboba(dabchik);
console.log(zebra);
