//var str_in, str_out, fl_in;

//str_out = "вывод программы";

var f = 0;
var text = document.getElementById("txt");
var wrd1;
var wrd2;
text.onfocus = function (e) {
    
        this.value = this.value + ">";
     
}

text.onkeypress = function (e) {
    if (e.charCode == '13') {
        
        var str = this.value;
		var strN = str.split(">");
		str_in = strN[strN.length -1];
      //  fl_in = 0;
	     wrd1 = str_in.split(" ")[0];
	     wrd2 = str_in.split(" ")[1];
	     //console.log(wrd1 == 0);
	     //console.log(wrd2 !== undefined);
		//console.log(wrd1 + " " + wrd2);
		//alert(wrd1 + " " + wrd2);
      //  module.exports = { wrd1, wrd2 };
        
       // var mod1 = require("C:/node/adv/inpans.js")
       // var w, q;
       // mod1();    
      //  this.value += "\n\n" + str_out + "\n\n>"; 
	     text.value += "\n";
	     //fl_getanse = 0;
		text.blur();
		return false;
    }
}
//document.getElementById("txt").value += ">";
