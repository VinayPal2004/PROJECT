const imgbox = document.getElementById('imgbox');
const qrimg = document.getElementById('imgqr');
const qrText = document.getElementById('qrtext');
const button = document.querySelector("button");
button.addEventListener('click',()=>{
    generate();
   
    
});

function generate(){
      qrimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgbox.classList.add("show-img");

}