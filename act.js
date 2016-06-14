//подключить .\common\advexter.h" и get.js и не только

var actfla;

function act(indx, object)
{
    const not = 128;
    const isobj = 64;
    var ntflag, obflag, condit, obimpl, cmnd, kod, obj, ncarry, i;
    var indx, object, data;
    //var k = adr;
    iniget(indx);
 //   console.log(pevents);
    

L2000:  for(;;) 
        {                         /* проверка следующего условия */
            cmnd=get();
            if( cmnd==0 ) break;
            obimpl=object;

L1000:      for(;;) 
            {
               // console.log(cmnd);
                if( cmnd==0 )
                {
L5000:              for(;;) 
                    {
                        cmnd=get();
                        if( cmnd==0 ) 
                        {
                            break L5000;
                        }
                        kod=cmnd%isobj                     /*  загрузил код условия */
                        obj = obimpl;    /*  загрузил обьект */
                        console.log("ob: " + obj);
                        if (~~((cmnd % not) / isobj) != 0)
                        {
                            obj = get();
                        }
                           

                        switch( kod ) 
                        {
                            case (1):
                                _place[obj-1] = loc;                           /* drop object here */
                                if (actfla == 1) {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (2):
                                
                                _place[obj-1] = 0;
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;
                                
                            case (3): 
                                _place[obj-1]=caried  
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;
                                
                            case (4):
                                console.log("obj4: " + obj);
                                rspeak(obj);
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (5):
                                rspeak(obj+255);
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;

                            case (6):
                                _prop[obj-1] = get()-1;  
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (7):
                                chnloc(obj); 
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (8):
                                specia(obj);   
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (9):
                                _place[obj-1]=get()-1; 
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (10):
                                _prop[obj - 1] = +_prop[obj - 1] + 1;
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (11):
                                indobj();
                                if( actfla==1 )
                                {
                                    continue L2000;            /* оценить след.условие */
                                }
                                return 1;
                                break;

                            case (12):
                                object = obj;
                                iniget(indx);
                                continue L2000;

                            default: fatal(101);
                        }           
                    }  
                }

                
                    kod = (cmnd % isobj);              /*  загрузил код условия */
                   // console.log("cmnd: " + cmnd);
                   // console.log("not: " + not);
                   // console.log("qqq: " + ~~(cmnd / not));
                    ntflag = (~~(cmnd / not) != 0);        /*  загрузил +/- флаг */
                    //console.log("nt: " + ntflag);
                    obj=obimpl;                      /*  загрузил об"ekt */
                    if (~~((cmnd % not) / isobj) != 0)
                    {
                        obj = get();
                    }
                    
                    switch(kod) 
                    {
                        case (1):
                            obimpl = obj;                           /* об"ekt=заданному? */
                            condit = (obj == object);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (2):
                            condit = at(obj)
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (3):
                            condit = (at(obj) || _place[obj-1] == caried);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (4):
                            condit = (_place[obj-1] == caried);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            //break;
                            continue L1000;

                        case (5):
                            condit = pct(obj);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (6):
                            condit = ((prop(obj) & 0377) == (get() - 1));
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (7):
                            condit = (_place[obj-1] < 0);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (8):
                            condit = 1;
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (9):
                             condit = yes(obj);
                            //  condit = 1;
                             //console.log(ntflag);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (10):
                            condit = (loc == obj);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (11):
                            ncarry = 0                            /* carry > obj objects */;
                            for (i = 1; i <= objt; ++i)
                            {
                                if (_place[i-1] == caried)
                                {
                                    ncarry++;
                                }
                            }
                            condit = (ncarry > obj);
                            if ((!condit) == (!ntflag)) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                        case (12):   
                            condit = ((rndini>>2) & 037777);   /* init. probability = obj% */
                            condit = ((rndini % 100) < obj);
                            if( (!condit) == (!ntflag) ) break L1000;
                            cmnd = get();
                            continue L1000;
                            //break;

                    }

                    condit = 0                      /* one of next words */;
                    for (i = 1; i <= kod - 13; ++i)
                    {
                        if (get() == obj)
                        {
                            condit = 1;
                        }
                    }
                    if ((!condit) == (!ntflag)) break L1000;
                    cmnd = get();     
            }
            //console.log("a");
            do {       
            } while( get() != 0 );       
            do {
            } while( get() != 0 );
            
        }
    return 0;   
}