// JavaScript source code
var commonAdv;
var atabAdv;
var locAdv;
function inicom()
{
    //console.log( String.fromCharCode(1076) );
   // text.focus();
    jQuery.ajax({
        async: false,
        url: "http://localhost:8888/com.txt",
        dataType: 'text',
        success: function (val) {
            commonAdv = val;
        }
    });

    jQuery.ajax({
        async: false,
        url: "http://localhost:8888/atabnum.txt",
        dataType: 'text',
        success: function (val) {
            atabAdv = val;
        }
    });

    jQuery.ajax({
        async: false,
        url: "http://localhost:8888/loc.txt",
        dataType: 'text',
        success: function (val) {
            locAdv = val;
        }
    });
  

  

    var arr = commonAdv.split("\n");
 
    _rtext = arr[0].split(" ");
    _ltext = arr[1].split(" ");
    _stext = arr[2].split(" ");
    _ctext = arr[3].split(" ");
    _cval = arr[4].split(" ");
    _ptext = arr[5].split(" ");
    _pstat = arr[6].split(" ");
    _trvkey = arr[7].split(" ");
    _actkey = arr[8].split(" ");
    nvoc = arr[9]
    _ktab = arr[10].split(" ");
    //_atab = arr[11].split(" ");
    tally = arr[12];
    treasr = arr[13];



    rndini = arr[17];
    tevent = arr[18];
    eevent = arr[19];
    tiniti = arr[20];

    var arrLoc = locAdv.split("\n");
    
    _place = arrLoc[0].split(" ");
    _fixed = arrLoc[1].split(" ");
    _prop = arrLoc[2].split(" ");
    /*rndini = arrPlace[3];
    tevent = arrPlace[4];
    eevent = arrPlace[5];
    tiniti = arrPlace[6];
    */
    /*
    for (i = 0; i < _place.length; i++) {
        _place[i] = (_place[i] & 0377);
    }
    */
    /*
    for (i = 0; i < _fixed.length; i++) {
        _fixed[i] = _fixed[i] & 0377;
    }
    */
    /*
    for (i = 0; i < _prop.length; i++) {
        _prop[i] = (_prop[i] & 0377);
    }
    */
    
    //console.log(atabAdv);
    //var testatab = atabAdv.substr(0, 8);
    //console.log(unescape(testatab));
    //console.log(atabAdv[0].charCodeAt(0));
    
    var atabnum = atabAdv.split(",");
    console.log(atabnum.length);

    
    w = "";
    var m = 0;
    for (i = 0; i < atabnum.length; i++) {
        if (i == (atabnum.length - 1)) {
            //w.push(atabnum[i]);
            w += String.fromCharCode(atabnum[i]);
            _atab[m] = w;
        }
        else {
            if (w.length == 4) {
                _atab[m] = w;
                w = "";
                m++;
            }
            w += String.fromCharCode(atabnum[i]);     //.push(atabnum[i]);
        }
    }

  

   
    //text.value = encodeURI("ôûà");
    //console.log(text(value[0].charCodeAt(0)));



}

