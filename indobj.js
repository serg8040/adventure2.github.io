//подключить "..\common\advexter.h"
//убрал & 0377
function indobj() 
{
    var obj, kk, p;
    if (1) //!dark())
    {
        console.log("loc: " + loc);
        //console.log("indobj");
        for (obj = 1; obj <= objt; ++obj)
        {
            //console.log("indobj1");
            if (ptext(obj) != 0)
            {
                //console.log("indobj2");
                kk = (prop(obj) & 0377);
               
                if (kk == inipro)
                {
                    //console.log("indobj3");
                    kk = 0;
                }
                
                var pt = +_ptext[obj - 1] + kk;
                kk = +_pstat[pt];
               // console.log("kk: " + kk);
                
                p = place(obj);

                if (p == loc)
                {
                    console.log("kk: " + kk);

                    console.log("indobj4");
                    /* подвижный об"ekt */
                    if ((prop(obj) & 0377) == inipro)
                    {                            /* впервые увидел */
                        //console.log("indobj5");
                        _prop[obj-1] = 0     /*        сокровище */;
                        tally = tally - 1;
                    }
                    
                    mes(kk);

                } else if (p < 0)
                {                      /* не -"- -"- */
                   // console.log("sdfasdsa: " + p);
                    p = - p;
                    console.log("fixed(25): " + fixed(25));
                    console.log("loc: " + loc);
                    //for (p = 0; p <= 81; ++p)
                    while (fixed(p) != 0)
                    {
                        //console.log("indobj7");
                        if ((fixed(p) & 0377)  == loc)
                        {
                            //console.log("indobj8");
                            mes(kk);
                        }
                        p = p + 1;
                    }
                }
            }
        }
    }
}