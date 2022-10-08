import close from '../../assets/close.png';

export function loginModalTemplate(){
    return `<div class="modal__close">
            <img width="22px" height="22px" src=${close} alt="close_icon_logo"/>
            </div>
            
            <form action="#" accept-charset="utf-8" name="login" method="post">
            <h1 class="login__title" align="center">로그인</h1>
            <div class="login__input">
                <input type="text" name="username" placeholder="아이디" >
                <input type="password" name="password" placeholder="비밀번호">
            </div>
            <div class="login__btn">
                <input type="submit" id="btn-login" value="로그인">
                <input type="button" value="회원가입">
            </div>
            </form>
    `;
}
