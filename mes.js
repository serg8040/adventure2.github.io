/* вывод сообщения по заданному адресу */

//include "..\common\advexter.h"
//#define empty     '>'

function inimes()
{   
    jQuery.ajax({
        async: false,
        url:  "http://localhost:8888/text.adv",
        dataType: 'text',
        success: function (val) {            
            textAdv = val;            
        }
    });  
}

var textAdv;

function mes(iadr)
{
    var buf = "";
    adr = iadr * 2;
    if (textAdv[adr].charCodeAt(0) == 0)
    {
        adr++;
    }
    while (textAdv[adr].charCodeAt(0) != 0)
    {
        buf += textAdv[adr];
        adr++;
    }
    
    text.value += buf;
}
