document.getElementById("convert").addEventListener("click", function() {

    var initialZAR = document.getElementById("base").value ; 

    var finUsd = initialZAR * 0.068238 ;
    var finEur = initialZAR * 0.063079 ;
    var finGbp = initialZAR * 0.052213 ;
    var finNzd = initialZAR * 0.100644 ;
    var finAud = initialZAR * 0.092100 ;
    var finCad = initialZAR * 0.085965 ;
    
    document.getElementById("toUsd").innerHTML = finUsd.toPrecision(4) ;    
    document.getElementById("toEur").innerHTML = finEur.toPrecision(4) ;    
    document.getElementById("toGbp").innerHTML = finGbp.toPrecision(4) ;    
    document.getElementById("toNzd").innerHTML = finNzd.toPrecision(4) ;    
    document.getElementById("toAud").innerHTML = finAud.toPrecision(4) ;    
    document.getElementById("toCad").innerHTML = finCad.toPrecision(4) ;    
});

function date(){
var d = new Date();
var strng = d.getFullYear() +"/"+ (d.getMonth()+1) + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
document.getElementById("date").innerHTML = strng ;
};

setInterval(date,1000) ;

var information = [
    { "currency" : "Dollar" ,
      "established" : "1792" ,
      "centralbank" : "Federal Reserve of America"
    },
    { "currency" : "Rand" ,
      "established" : "1961" ,
      "centralbank" : "Reserve Bank of South Africa"
    },
    { "currency" : "Pound" ,
      "established" : "1489" ,
      "centralbank" : "Bank of England"
    },    
    { "currency" : "euro" ,
      "established" : "1991" ,
      "centralbank" : "Europian Union"
    }     
];

document.getElementById("curr").innerHTML = information[0].currency ;
document.getElementById("est").innerHTML = information[0].established ;
document.getElementById("cntbnk").innerHTML = information[0].centralbank ;

let number = 0 ;

function forward() {
    number++ ;
 
   if(number >= information.length)
   {number = 0}
 
   document.getElementById("curr").innerHTML = information[number].currency ;
   document.getElementById("est").innerHTML = information[number].established ;
   document.getElementById("cntbnk").innerHTML = information[number].centralbank ;   
    
}

function backward(){
    number-- ;
 
   if(number < 0)
   {number = information.length-1}
 
   document.getElementById("curr").innerHTML = information[number].currency ;
   document.getElementById("est").innerHTML = information[number].established ;
   document.getElementById("cntbnk").innerHTML = information[number].centralbank ; 
}

setInterval(forward, 5000);
