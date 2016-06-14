/*d* === getans ===        07.01.85   version    9 */
/* ввод одного или 2-x слов */
/* out: word1,word2 - найденные по словарю значения слов */
/*      type1,type2 - их типы (-1 - слова het) */

/* === vocab === 08.08.84 version 2 */
/*  look up 'word' in the vocabulary ('atab' real array) */
/*  and return its "definition" (ktab), or -1 if not found */
/* out: vocab=-1  - слово he найдено */
/*      vocab     - код слова */
//подключить "advexter.h"
//подключить inpans
/*
function vocab(word)
{   
    var word;    
    var _vocab, i;
    i=1;

    for(;;)
    {
        _vocab = ktab(i);

        if( _vocab == 0 ) 
            break;

        if (word.length > 4)
        {
            word = word.substr(0, 4);
        }
        
        if (word.length < 4)
        {
            for(i = 0; i < (4 - word.length); i++)
            {
                 word = word + " ";
            }            
        }        

        if (atab(i) == word)
        {
            return (_vocab);
        }
        i++;
    }
    return( -1 );    
}

*/




     
    


   

       
 