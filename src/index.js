import {createModal} from "./utils/createModal.js"
import {loginCheck} from "./utils/loginCheck.js"
import {loginModalTemplate} from "./template/loginModalTemplate.js"
import {modalPostTemplate} from "./template/modalPostTemplate.js"


console.log("main")
loginCheck()
document.querySelector('#add_post_btn').addEventListener('click', ()=>createModal(modalPostTemplate));
document.querySelector('#header_login').addEventListener('click',()=>createModal(loginModalTemplate));
document.querySelector('#header_mypage').addEventListener('click',goToMyPage);



function goToMyPage(){
    console.log("goToMyPage")
    location.href='./mypage/myPageTemplate.html'
}
