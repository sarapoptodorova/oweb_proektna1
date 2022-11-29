var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
document.querySelectorAll('.slika').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.src=item.name+".jpg";
    })
})
document.querySelectorAll('.slika').forEach(item => {
    item.addEventListener('mouseout', event => {
      item.src=item.name+"_bw.jpg";
    })
})
function turnRed(element){
  element.style.color="red";
}
var like1=document.getElementById('like1');
like1.addEventListener('click',turnRed(like1));
var like2=document.getElementById('like2');
like2.addEventListener('click',turnRed(like2));
var like3=document.getElementById('like3');
like3.addEventListener('click',turnRed(like3));
var like4=document.getElementById('like4');
like4.addEventListener('click',turnRed(like4));
var like5=document.getElementById('like5');
like5.addEventListener('click',turnRed(like5));
var like6=document.getElementById('like6');
like6.addEventListener('click',turnRed(like6));
