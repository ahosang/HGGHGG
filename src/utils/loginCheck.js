export function loginCheck(){
    let isLogin = false;
    if(isLogin){
        document.querySelector('#logoutBox').classList.add("hidden");
        document.querySelector('#loginBox').classList.remove("hidden");
    }else{
        document.querySelector('#loginBox').classList.add("hidden");
        document.querySelector('#logoutBox').classList.remove("hidden");
    }
}