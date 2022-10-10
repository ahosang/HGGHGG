document.querySelector('#add_post_btn').addEventListener('click', createModal);
document.querySelector('#header_logout').addEventListener('click',createLoginModal);
document.querySelector('#header_mypage').addEventListener('click',goToMyPage);
console.log("main")


function createModal(){
    console.log("createModal")

    const modalEl = document.createElement("div")
    modalEl.setAttribute("class", "modal__layout")
    modalEl.innerHTML = modalPostTemplate()
    document.querySelector("body").prepend(modalEl)

    const modalCloseEl = document.querySelector(".modal__close");

    modalCloseEl.addEventListener("click", function () {
        document.querySelector("body").removeChild(modalEl);
    });
}
function createLoginModal(){
    console.log("createLoginModal")

    const modalLoginEl = document.createElement("div")
    modalLoginEl.setAttribute("class", "modal__layout")
    modalLoginEl.innerHTML = loginModalTemplate()
    document.querySelector("body").prepend(modalLoginEl)

    const modalLoginCloseEl = document.querySelector(".modal__close");

    modalLoginCloseEl.addEventListener("click", function () {
        document.querySelector("body").removeChild(modalLoginEl);
    });
}

function goToMyPage(){
    console.log("goToMyPage")
    location.href='./mypage/myPageTemplate.html'
}

function modalPostTemplate() {
  return `<article id="modalPost">
      <div class="modal__close">
          <img
          width="60px"
          height="60px"
          src="../src/assets/close.png"
          alt="close_icon_logo"
          />
      </div>
      <form action="#" accept-charset="utf-8" name="post" method="post">
          <div class="container__post">
              <div id="title__post"><input type="text" name="title" placeholder="제  목"></div>
              <div id="elements__post">
                  <div><h3>장 소</h3><input type="text" name="palce" placeholder="비어 있음"></div>
                  <div><h3>날 짜</h3><input type="date" name="date" placeholder="비어 있음" id="input_date"></div>
                  <div><h3>메 뉴</h3><input type="text" name="menu" placeholder="비어 있음"></div>
                  <div><h3>예상비용</h3><input type="text" name="price" placeholder="비어 있음"></div>
                  <div><h3>희망인원</h3><input type="text" name="how_many" placeholder="비어 있음"></div>
              </div>
              <div id="content__post">
                  <textarea name="content" id="content"  style="width:100%;" rows="10" placeholder="간단하게 모임을 소개해주세요!"></textarea>
              </div>
          </div>
          <button>작성완료</button>
      </form>
  </article>
  <script>
      let curDate = new Date().toISOString().substring(0,10)
      document.getElementById("input_date").setAttribute("min",curDate)
  </script>`
}

function loginModalTemplate(){
    return `
    <article id="modalLogin">
        <div class="modal__close">
            <img width="60px" height="60px" style="cursor:pointer;" src='../src/assets/close.png'/>
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
    `
}