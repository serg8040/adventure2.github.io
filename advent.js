// перед запуском main, запустить ini()
var moves;
ini();
//act(2675, 39);
//rspeak(9);
//inicom();
//mes(1581);
//console.log("data: " + dataAdv);

for (i = 0; i < _place.length; i++)
{
    console.log(i + ": " + _place[i]);
}
/*
console.log("pstat: " + _pstat[9]);
console.log("tevent: " + tevent);
console.log("eevent: " + eevent);
console.log("tiniti: " + tiniti);
*/
//mes(7317);
main();
//text.focus();

var fl_getanse;


function vocab(word) {
    var word;
    var _vocab, i;
    i = 1;

    for (; ;) {
        _vocab = ktab(i);

        if (_vocab == 0)
            break;

        if (word.length > 4) {
            word = word.substr(0, 4);
        }

        if (word.length < 4) {
            for (i = 0; i < (4 - word.length) ; i++) {
                word = word + " ";
            }
        }

        if (atab(i) == word) {
            return (_vocab);
        }
        i++;
    }
    return (-1);
}



function main()
{
    var word1, word2, type1, type2;
    var oldob, oldobj;
    console.log("main");

   // if (fl_getanse != 1)
    //{
    events();
    //}     
    text.focus();
}


text.onblur = function (e)
{
    
    
        //rspeak(61);
        //здесь начинается код getanse
        var work, kk;

        G: for (; ;) {
            word1 = word2 = type1 = type2 = -1;
            //console.log("wrd1: " + wrd1.charCodeAt(0) + " wrd2: " + wrd2);
            if (wrd1 != 0) {
             //   console.log("vocab wrd1");
                work = vocab(wrd1);
                console.log(work);
                if (work >= 1) {
                    word1 = work % 1000;
                    type1 = ~~(work / 1000);
                }
            }

            if (wrd2 !== undefined) {
                work = vocab(wrd2);
                if (work >= 1) {
                    word2 = work % 1000;
                    type2 = ~~(work / 1000);
                }
            }


            if (type1 != -1) {
                if (wrd1[0] == "!") {
                    kk = 60;
                    if (pct(50)) kk = 61;
                    if (pct(33)) kk = 13;
                }
                else {
                    //fl_getanse = 0;
                    break G;
                }
            }
            else {
                kk = 61;
            }
            rspeak(kk);
            fl_getanse = 1;
            break;
            //main();
        }

        console.log("вышел");
        //здесь заканчивается код getanse
        for (; ;) {

            if (fl_getanse == 1)
            {
                fl_getanse = 0;
                break;
            }

            ++moves;
            oldob = 0;

            if (type1 == specwr) {      // спец-слово 
                rspeak(word1);

            } else if (type2 == specwr) {
                rspeak(word2);

            } else if (type1 == movewr) {      // передвижения 
                motion(word1);

            } else if (type2 == movewr) {
                motion(word2);

            } else {

                if (type1 == objcwr) {
                    if (!here(word1)) {
                        rspeak(203);
                        oldobj = oldob;
                        break; //убрал continue
                    }
                }
                if (type2 == objcwr) {
                    if (!here(word2)) {
                        rspeak(203);
                        oldobj = oldob;
                        break; // убрал continue
                    }
                }

                if (type1 == actnwr) {           // действие +
                    if (type2 == objcwr) {          //    + об"ekt 
                        action(word1, word2);

                    } else if (oldobj != 0) {        //     + старый об"ekt 
                        action(word1, oldobj);

                    } else {                          //     + het об"ekta 
                        action(word1, 255);

                    }
                } else if (type2 == actnwr) {      // об"ekt + действие //
                    action(word2, word1);


                } else if (type1 == objcwr) {      // об"ekt 
                    rspeak(90);                     //    что делать c ? 
                    oldob = word1;
                }

            }
            oldobj = oldob;
            break;
        }
        //indobj();
        main();
    
}




