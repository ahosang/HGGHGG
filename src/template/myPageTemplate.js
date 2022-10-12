import logo from '../assets/simple__logo.png';
export function myPageTemplate(){
    return `
    <body>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <img width="110px" height="50px" src=${logo} alt="simple__logo"/> 
            </div>
            <div class="header__buttons">
                    <input type="button" value="마이페이지">
                    <input type="button" value="로그아웃">
            </div>
        </div>
    </header>
    <main class="main">
        <section class="main__section">
            <div class="main__profile">
                    <img width="100px" height="100px" src="../../../assets/elice_rabbit.png" alt="elice_rabbit"/>
                    <h2>엘리스 토끼</h2>
            </div>
            <div class="category">
                <div>계정 설정</div>
                <div>모임 히스토리</div>
            </div>
            <div class="middle">
                <div class="edit">
                    <ul>
                        <li><a href="#">닉네임 변경</a></li>
                        <li><a href="#">비밀번호 변경</a></li>
                        <li><a href="#">프로필 사진 변경</a></li>
                        <li><a href="#">회원 탈퇴</a></li>
                    </ul>
                </div>
                <div class="history">
                    <a href="#">10월 4일, (모임 이름)과 함께 있었어요!</a>
                </div>
            </div>
        </section>
    </main>
</body>
    `
}