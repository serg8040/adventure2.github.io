/*печатает сообщение с номером  #n */
//подгрузить файл \common\advexter.h
function rspeak(n)
{
    var adr;
    if( !(adr = rtext(n)) )
    {
        fatal(3);
    }
    mes(adr)
}