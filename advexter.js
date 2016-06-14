/* - parameters --- current limits: */

var vocw = 550;
var loct = 254;
var objt = 127;
var fixt = 200;
var sttt = objt * 2;
var actw = 60;
var ranm = 400;
var plcl = 12;


var movewr = 0;
var objcwr = 1;
var actnwr = 2;
var specwr = 3;

/* --- messages --- */

var abb;
var _rtext = [];
//_rtext[ranm-1] = null;
function rtext(x) {return _rtext[x-1];}

var _ltext = [];
_ltext[loct-1] = null;
function ltext(x) {return _ltext[x-1];}

var _stext = [];
_stext[loct-1] = null;
function stext(x) {return _stext[x-1];}

var _ctext = [];
_ctext[plcl-1] = null;
function ctext(x) {return _ctext[x-1];}

var _cval = [];
_cval[plcl-1] = null;
function cval(x) {return _cval[x-1];}

var _ptext = [];
_ptext[objt-1] = null;
function ptext(x) {return _ptext[x-1];}

var _pstat = [];
_pstat[sttt-1] = null;
function pstat(x) {return _pstat[x-1];}

var _abrev = [];
_abrev[loct-1] = null;
function abrev(x) {return _abrev[x-1];}

/* --- travels + actions --- */

var _trvkey = [];
_trvkey[loct-1] = null;
function trvkey(x) {return _trvkey[x-1];}

var _actkey = [];
_actkey[actw-1] = null;
function actkey(x) {return _actkey[x-1];}

/* --- vocabulary --- */

var nvoc;

var _ktab = [];
_ktab[vocw-1] = null;
function ktab(x) {return _ktab[x-1];}

var _atab = [];
_atab[vocw-1] = null;
function atab(x) {return _atab[x-1];}

/* --- state --- */

var inipro = 255;
var nulobj = 255;
var caried = 1000;

var rndini;
var loc;
var tally;
var treasr;

var tevent;
var eevent;
var tiniti; 

var _place = [];
_place[loct-1] = null;
function place(x) {return _place[x-1];}

var _fixed = [];
_fixed[fixt-1] = null;
function fixed(x) {return _fixed[x-1];}

var _prop = [];
_prop[objt-1] = null;
function prop(x) {return _prop[x-1];}