import close from `../assets/close.png`

export function modalPostTemplate() {
  return `<div class="modal__close">
                <img
                width="60px"
                height="60px"
                src=${close}
                alt="close_icon_logo"
                />
            </div>
            <div class="modal__post">
                <form
                <div class="modal__header">
                    <div class="modal__back">
                        <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                    </div>
                    <h2>새 게시물 만들기</h2>
                    <p>공유하기</p>
                </div>
                <div class="modal__main">
                <img src=${media} alt="media_icon" />
                <h3>사진과 동영상을 업로드 해보세요.</h3>
                <label for="file">
                    <p>컴퓨터에서 선택</p>
                </label>
                <input type="file" name="file" id="file" />
                </div>
            </div>`;
}