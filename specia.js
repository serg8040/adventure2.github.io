/*d* === specia ===           07.01.85   version   13 */
/* обработка спецслучая #n */

//include "..\common\advexter.h"
//добавить обработку 9 спецслучая


function specia(n) {
    var flag, obj;

    switch (n) {
        case 1:
            break;
        case 2:
            score();
            break;
        case 3:
            score();
            break;
        case 4:
            abb = 1;
            break;
        case 5:
            flag = 0                                 /* invent */;
            for (obj = 1; obj <= objt; ++obj) {
                if (place(obj) == caried) {
                    if (flag == 0)
                    {
                        rspeak(99);
                        flag = 1;
                    }
                    mes(pstat(ptext(obj)));
                }
            }
            if (flag == 0)
                rspeak(98);

        case 6:
            drkfla = 0                         /* look */;
            if (abrev(loc) == 1) {
                rspeak(15);
            }
            descr2();
            _abrev[loc-1] = 1;
            break;
        case 7:
            if (dark())
            {
                darkflag1++;
                descr2();
            }
            break;
        case 8:
            if (dark()) rspeak(16);
            break;
        case 9:
           // freeze();
            break;
        default: fatal(104);
    }
}

//module.exports = {drkfla, darkflag1}; 
