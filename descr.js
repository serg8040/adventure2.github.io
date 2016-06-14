//подключить "..\common\advexter.h"

function descr()
{
    ds(0);
}

function descr2()
{
    ds(1);
}

function ds(n) 
{
    var kk;

    if (n)
    {
        kk = ltext(loc);
        if (kk == 0)
        {
            kk = ltext(loc);
        }
        
        mes(kk);

        if (abb != 0)
        {
            _abrev[loc-1]=2;
        }
        else
        {
            _abrev[loc-1] = ((+_abrev[loc-1]+1)) % 4;
        }
        indobj();
    }
    else
    {
        if ( dark() )
        {
            rspeak(16);
        }
        else
        {
            kk = 0;
            if (_abrev[loc-1] != 0)
            {
                kk = stext(loc);
            }
            else
            {
                kk = ltext(loc);
            }

            if (kk == 0)
            {
                kk = ltext(loc);
            }               
            mes(kk);

            if (abb != 0)
            {
                _abrev[loc-1] = 2;
            }
            else
            {
                _abrev[loc-1] = (+_abrev[loc-1] + 1) % 4;
            }
            indobj();
        }
    }    
}
