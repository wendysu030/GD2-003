var txt = document.getElementById('txt');
var btn = document.getElementById('btn');
var UL = document.querySelector('#list ul');

function toTwo( num ) {
    return num*1<10?"0"+num:num;

}
btn.onclick = function(){
    var goudan = new Date();
    var YY = goudan.getFullYear();
    var MM = goudan.getMonth() + 1;
    var DD = goudan.getDate();
    var hh = goudan.getHours();
    var mm = goudan.getMinutes();
    var day = goudan.getDay();
    if(txt.value){
    var time ="Published in "+YY+"."+MM+"."+DD+" "+toTwo(hh)+":"+toTwo(mm);
    var val = txt.value;
    txt.value ='';
    var oLi = document.createElement("li");
    oLi.innerHTML = '<p>'+val+'</p><span>'+time+'</span>';
    UL.insertBefore(oLi,UL.firstChlld);
    }else{
    alert('Please write any comments for us!');
    }
}