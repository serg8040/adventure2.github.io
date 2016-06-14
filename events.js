//подключаем ..\common\advexter.h"
var actfla;
//var File F1;// нужно заменить чтение из файла на куки браузера
var actres;
function events() 
{
   // console.log("event");
   // var actres;
    actfla = 1;
    actres = act(tevent, 0);
    actfla = 0;
}

function getRandomInt(min, max) 
{
    return Math.floor( Math.random() * (max - min) ) + min;
}

function ini() 
{
    //var actres;
	
    inicom();
    inidat();
    inimes();
   // console.log(dataAdv);
   // console.log("d " + dataAdv[6403].charCodeAt(0));


  //  if( (F1=fopen("frozen.adv","rb")) != NULL ) { //заменить на чтение из куков браузера
   //     loadfr();

   // } else {
        
    loc = 1;
    rndini = getRandomInt(1, 32767);
    actfla = 1;
    actres = act(tiniti, 0);
    actfla = 0;
    // }
    console.log("r: " + _rtext[15]);
    descr2();
}


