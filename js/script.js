$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".nav-grid").toggleClass("open");
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

// kdosa,do0qwm,oc,al,pcas,w,cpal,s
window.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".content-meet h1");
  const text = textElement.innerHTML;
  textElement.innerHTML = "";

  const typingEffect = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          textElement.innerHTML = "";
          typingEffect();
        }, 5000);
      }
    }, 80);
  };

  typingEffect();
});
// heaDing Comp
class contentheading extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="content-heading">
          <h1 class="animate__animated animate__fadeIn animate__delay-1s">
            Taweesak Numma <br />
            018 IT <i id="terminal" class="fa-solid fa-terminal fa-xs"></i>
          </h1>
        </div>
    `;
  }
}
customElements.define("heading-component", contentheading);
// LOGO Comp
class logo extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
       <div class="logo">
          <a href="https://www.cmtc.ac.th" target="_blank"><h1>CMTC</h1></a>
          <span> ChiangMai Technical College </span>
       </div>
    `;
  }
}
customElements.define("logo-component", logo);
