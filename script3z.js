
//объявляем переменные
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0; 

//функция для старта секундомера
function startTIME() { 
    var cdateObj = new Date(); 
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
    if (t>999) { s++; } 
    if (s>=(m*base)) { 
        ts=0; 
        m++; 
    } else { 
        ts=parseInt((ms/100)+s); 
        if(ts>=base) { ts=ts-((m-1)*base); } 
    } 
    if (m>(h*base)) { 
        tm=1; 
        h++; 
    } else { 
        tm=parseInt((ms/100)+m); 
        if(tm>=base) { tm=tm-((h-1)*base); } 
    } 
    ms = Math.round(t/10); 
    if (ms>99) {ms=0;} 
    if (ms==0) {ms='00';} 
    if (ms>0&&ms<=9) { ms = '0'+ms; } 
    if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
    dm=tm-1; 
    if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
    dh=h-1; 
    if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
    readout = dh + ':' + dm + ':' + ds + '.' + ms; 
    if (show==true) { document.TestForm.stopwatch.value = readout; } 
    clocktimer = setTimeout("startTIME()",1); 
} 
//функция для запуска таймера
function start() { 
    if (init==0) { dateObj = new Date(); 
        startTIME(); 
        Colors();
    } 
} 



//-- функция, генерирующая цвета
function Colors()
{
    var indexes=["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4"];
    var arrColors=["red","red","orange","orange","yellow","yellow","green","green","blue","blue","cyan","cyan","gray","gray","purple","purple"];
    arrColors2 = shuffleArray(arrColors);
/*for(var i=0;i<16;i++)
{
    
   document.getElementsByTagName("td")[i].style.background=arrColors2[i];
}*/
var countFound = 0;
var id1 = 0;
var colo;


var divs = document.getElementsByTagName("td");  
for (var i = 0; i < divs.length; i++) 
{
    divs[i].addEventListener("click", myFunction);
}

 var isBlock=0;

function myFunction() {
    function clear() {
        isBlock=0;
      document.getElementById(id1).style.background="white";
      document.getElementById(idDiv).style.background="white";
      id1=0;
      console.log('9999999')

  }

  idDiv = this.id;
  let col = arrColors2[indexes.indexOf(idDiv)];
  console.log('id1=',id1)
  if (id1==0) {
    id1=idDiv; colo=col;
    document.getElementById(idDiv).style.background=col;
    console.log('+id1=',id1,' colo=',colo)
}
else 
if (isBlock==1) {}
  else if (colo==col) {
    document.getElementById(idDiv).style.background=col;
    console.log('2222222222222')
    id1=0;
    countFound++;
    if (countFound==8) {
                //--остановить таймер
                clearTimeout(clocktimer);
                //--вызов модального окна с результами
                $('#results').modal('show');
                document.getElementsByClassName("modal-body")[0].innerHTML+=document.getElementById("input1").value;

            }
        }
        else {
            document.getElementById(idDiv).style.background=col;
            isBlock=1;
            setTimeout(clear, 300);            

        }
  

    };



}

//--функция перемешивания элементов массива
function shuffleArray(arr) {
    var arr1=[];
    for (let i = 0; i <= 15; i++) {
        let rand = Math.floor((Math.random() * arr.length)+0);           
        let colo=arr[rand];     
        arr1.push(colo);
        arr.splice(rand,1); 
    }
    return arr1;
}




