/* ввод следующего байта из файла данных  a=get() */
/* установ начального адреса чтения   iniget(adr) */

// подключить "..\common\advexter.h"
//работу с файлами доделать
var adv_data = "http://localhost:8888/data.txt"
//var adv_data2 = "\advent\data.adv"

//var cb; //ФАЙЛ
var  bevents, pevents; //строки

var count = 0;//отступ символов от начала файла;
function iniget(adr)
{
    dataAdv = dataAdv.slice(0, 7043);
   // console.log(dataAdv[7043]);
   
    if (count == 0)
    {
        bevents = dataAdv.slice(tevent); 
        count = eevent;
    }   

    if (tevent <= adr && adr < eevent)
    {
        pevents = bevents.slice(adr-tevent);
    }
    else
    {
        pevents = null;
        count = adr;
    }    
}



function get()
{    
    var c;//символ 
    if (pevents == null)
    {     
        c = dataAdv[count];     
            count++;      
    }
    else
    {
        c = pevents[0];
        pevents = pevents.slice(1);
    }
  //  console.log(pevents);
    return (c & 0377);
}


var data;
var dataAdv;
function inidat()
{   
    jQuery.ajax({
        async: false,
        url: adv_data,
        dataType: "text",
        success: function (val) {            
            data = val;            
        }
    });
    dataAdv = data.split(" ");
}


