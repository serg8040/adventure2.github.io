function yes(x)
{
    var x;
    var c1;
   
    rspeak(x);

    for(;;)
    {
        fl_yes = 1;
        //text.focus();
        fl_yes = 0;
        console.log("yes");
       // var c = str_in[0];  раскомментировать эту строчку
        c1 = 'y';
        if( c1 == '' )  
        {
            yes(22);
        }
        if( c1 == 'y' || c1 == 'Y' || c1 == 'д' || c1 == 'Д' )
        {
            x = 1;
            break;
        }
        if( c1 == 'n' || c1 == 'N' || c1 == 'н' || c1 == 'Н' )
        {
            x = 0;
            break;
        }
        rspeak(40);
    }
    return x;
}