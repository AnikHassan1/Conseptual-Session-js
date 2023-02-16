let seriul=0;

// frist btn clicked
document.getElementById('btn-first').addEventListener('click',function(){
   
    seriul +=1;
    
const nameP=document.getElementById('btn-name').innerText;
const price=document.getElementById('btn-price').innerText;
const quantity=document.getElementById('btn-quantitu').innerText;
const total=parseInt(price) * parseInt(quantity);

appenText(nameP,price,quantity,total);
toTalvalue(total);
DisableButton('btn-first');
})
// second btn Clicked
document.getElementById('secound-btn').addEventListener('click',function(){
    seriul +=1;
   const pname=innetText('text1');
   const pPrice=innetText('Pricr2');
   const pQuantitye=innetText('Quantity2');
   const Ptotal=parseInt(pPrice) +parseInt(pQuantitye);
   
   appenText(pname,pPrice,pQuantitye,Ptotal);
   toTalvalue(Ptotal);
   DisableButton('secound-btn');
})
// third btn Clicked
document.getElementById('btn-third').addEventListener('click',function(){
    seriul +=1;
   const Thname=innetText('text1');
   const ThPrice=innetText('price3');
   const ThQuantitye=innetText('quantity3');
   const Thtotal=parseInt(ThPrice) - parseInt(ThQuantitye);
   appenText(Thname,ThPrice,ThQuantitye,Thtotal);
   toTalvalue(Thtotal);
   DisableButton('btn-third');
})
//  Five btn clicked
document.getElementById('btn-Five').addEventListener('click',function(){
    seriul +=1;
    const inputname = document.getElementById('vue-name').innerText;
   
    const inputPrice=document.getElementById('quantity-no').value;
        

    const inputquantity=document.getElementById('price-5').value;
    // if (
    //     productPrice == "" ||
    //     productQuantity == "" ||
    //     productPrice <= 0 ||
    //     productQuantity <= 0
    //   ) {
    //     return alert("please enter any valid number");
    //   }
        if(inputPrice == ''|| inputquantity == ''|| inputPrice <=0 || inputquantity <=0){
        return alert('Please Type OF Number');
        
  }
if(inputPrice == ''|| inputPrice <=0){
    return alert('type a Number');
 }
    const total=parseInt(inputPrice) ** parseInt(inputquantity);

   

    appenText(inputname,inputPrice,inputquantity,total);
    toTalvalue(total);
    DisableButton('btn-Five')
})
// four btn clicked
document.getElementById('btn-four').addEventListener('click',function(){
    seriul +=1;
   const fourname=innetText('text4');
   const fourPrice=innetText('price4');
   const fourQuantitye=innetText('quan');
   const fourtotal=parseInt(fourPrice) +parseInt(fourQuantitye);
   appenText(fourname,fourPrice,fourQuantitye,fourtotal);
   toTalvalue(fourtotal);
   DisableButton('btn-four');
})

// common function innerHtml Tags
function appenText(nameP,price,quantity,total){
    const parent=document.getElementById('perent-constinar');

const tr=document.createElement('tr');
tr.innerHTML=`
<td>${seriul}</td>
<td>${nameP}</td>
<td>${price}</td>
<td>${quantity}</td>
<td>${total}</td>
<button id='vtn-cencel' class="btn btn-active">Cencel</button>

`
parent.appendChild(tr)
document.getElementById('seriul-List').innerText=seriul;


}
// common function call get element by id
function innetText(id){
    const nameP=document.getElementById(id).innerText;
    return nameP;
}
// disable button
function DisableButton(idm){
   document.getElementById(idm).setAttribute("disabled",true);
}
// total Calculate
// let toTalid=document.getElementById('total-btn').innerText;
// function toTalvalue(setid){
//     let sum=parseInt(toTalid)+parseInt(setid);
//     toTalid=sum;
//     let set=document.getElementById('total-btn');
//     set.innerText=toTalid;
// }
   
  
let totalId=document.getElementById('total-btn').innerText;
function toTalvalue(textid){
    let sum=parseFloat(totalId)+parseFloat(textid);
    totalId=sum;
    let set=document.getElementById('total-btn');
    set.innerText=totalId;
}

