const button = document.querySelector('.buttons');
const toastbox =document.getElementById('tostbox');

let SuccessMsg = "successfully submitted";

let ErrorMsg = "Please fix the error";

let InvalidMsg = "Invalid Input ,check again";


function showtoast(msg ,type){
    let tost = document.createElement('div');
    tost.classList.add('tost',type)
     let icon = "";
    if (type === "success") icon = '<i class="fa-solid fa-circle-check"></i>';
    else if (type === "error") icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    else if (type === "invalid") icon = '<i class="fa-solid fa-circle-info"></i>';

    tost.innerHTML = `${icon} ${msg}`;
    toastbox.appendChild(tost);
     setTimeout(() => tost.remove(), 5000);
}
button.addEventListener('click',(event)=>{
       if (event.target.tagName === 'BUTTON') {
        let btnText = event.target.innerText.trim().toLowerCase();

        if (btnText === "success") {
            showtoast(SuccessMsg, "success");
        } else if (btnText === "error") {
            showtoast(ErrorMsg, "error");
        } else if (btnText === "invalid") {
            showtoast(InvalidMsg, "invalid");
        }
    }
});