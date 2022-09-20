function slow(){
    var yazi=document.getElementById('consul')
    
}
function hesab (){
    var amount = document.getElementById("miqdar").value;
    var mounth=document.getElementById("aylar").value;
    var percent=document.getElementById("faizler").value;
    var ekran=document.getElementById("consul");
    
    var faiz = amount* percent/100;
    var aylar = (parseFloat(amount)+parseFloat(faiz))/mounth;
    ekran.innerHTML=`${Math.round(aylar )} manat`

}

