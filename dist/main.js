
console.log("main")
loginCheck()
document.querySelector('#add_post_btn').addEventListener('click', createModal(modalPostTemplate));

function createModal(modalTemplate){
    console.log(modalTemplate)

    const modalEl = document.createElement("div")
    modalEl.setAttribute("class", "modal__layout")
    modalEl.innerHTML = modalTemplate()
    document.querySelector("body").prepend(modalEl)

    const modalCloseEl = document.querySelector(".modal__close");

    modalCloseEl.addEventListener("click", function () {
        document.querySelector("body").removeChild(modalEl);
    });
}

function loginCheck(){
    let isLogin = true;
    if(isLogin){
        document.querySelector('#logoutBox').classList.add("hidden");
        document.querySelector('#loginBox').classList.remove("hidden");
    }else{
        document.querySelector('#loginBox').classList.add("hidden");
        document.querySelector('#logoutBox').classList.remove("hidden");
    }
}

//------------------ modal Template
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
