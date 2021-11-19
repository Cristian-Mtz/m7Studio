document.addEventListener("DOMContentLoaded", function () {
    var navbarShrink = function () {
        const navbar = document.body.querySelector("#menu");
        if (!navbar) {
            return;
        }
        if (window.scrollY === 0) {
            navbar.classList.add("changueMenu");
        } else {
            navbar.classList.remove("changueMenu");
        }
    };
    
    document.addEventListener('scroll', navbarShrink);

    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    setTimeout(function(){ toast.show(); }, 3000);
});

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('modalImage'));
        myModal.show();
    }
}) 

function scrollWin(dest) {
    var position = document.getElementById(dest).offsetTop;
    window.scrollTo(0, position);
}