//подключить ..\common\advexter.h"
var darkflag1 = 0;
//var carried = 1000;
 function dark()
{
    let lamp, light;
    lamp = 0;
    if( lamp == 0 ) {                       /* инициализация */
        lamp = ( vocab("lamp")   % 1000 );
        light = ( vocab("!light") % 1000 );
    }
    if( darkflag1 )
    {        
        return (darkflag1 = 0);
    }

    return 0;//( !at(light) && (!here(lamp) || prop(lamp) == 0) );
}


function at(object) 
{
    var _at, p;
    p = place(object);
    _at = 0;
    if( p == loc ) 
    {
        _at= 1;
    }
    else 
    {
        if( p < 0 ) 
        {
            p = -p;
            while( fixed(p) != 0 ) 
            {
                if( (fixed(p) & 0377) == loc ) 
                {
                    _at = 1;
                    return( _at );
                }
                p = p + 1;
            }
        }
    }
    return( _at );
}


function here(object)
{
    return( place(object) == caried || at(object) );
}