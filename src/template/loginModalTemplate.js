import close from '../assets/close.png';

export function loginModalTemplate(){
    return `<article id="modalLogin">
    <div class="modal__close">
        <img src=${close} alt="close_icon_logo"/>
    </div>
    <form action="#" accept-charset="utf-8" name="login" method="post">
        <div class="login__form">
            <h2 class="login__title">함께, 한끼</h2>
            <div class="login__input">
                <div><h3>아이디</h3><input type="text" name="username" ></div>
                <div><h3>비밀번호</h3><input type="password" name="password" ></div>
            </div>
            <div class="btn">
                <input type="submit" class="myBtn" value="로그인">
                <input type="button" class="myBtn" value="회원가입">
            </div>
        </div>
    </form>
</article>
    `;
}
