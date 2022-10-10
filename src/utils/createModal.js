import { modalPostTemplate } from "../template/modalPostTemplate/modalPostTemplate.js";

export function createModal(){
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