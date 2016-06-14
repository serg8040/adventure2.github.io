//подключить include "..\common\advexter.h"
function action(verb, object)
{
    var kk;
    kk = actkey(verb);

    if (kk == 0 && verb != 1)
        fatal(102);
    if (!act(kk, object))
        rspeak(12);

}

function motion(verb)
{
    var k;
    k = trvkey(loc);
    console.log("trv: " + k);
    console.log("verb: " + verb);
    //if (k == 0 && loc != 1)
        //fatal(103);
    if ( !act(k, verb) )
    {
        if (pct(50))
        {
            rspeak(9);
        }
        else
        {
            rspeak(12);
        }       
    }        
}