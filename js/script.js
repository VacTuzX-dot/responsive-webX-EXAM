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

// toggle component
class togglewrap extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      .toggle-wrapper {
      position: absolute;
      top: 30px;
      right: 30px;
      display: inline-block;
      vertical-align: middle;
      z-index: 9999;
     }
      .toggle {
      display: none;
      }
      .toggle-label {
      display: block;
      cursor: pointer;
      width: 110px;
      height: 30px;
      background-color: #222;
      border-radius: 20px;
      position: relative;
      transition: 0.4s ease;
      transition: background-color 0.45s ease-in-out;
      }
      .toggle-label:before {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.4s ease-out;
     }
      .toggle:checked + .toggle-label:before {
        transform: translateX(0px);
      }
      .toggle:checked + .toggle-label:before {
        transform: translateX(80px);
      }
      .toggle-text {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 17px;
        color: white;
        text-align: center;
        line-height: 30px;
        transition: opacity 0.2s ease-in-out;
        opacity: 0.8;
        transition: 0.4s ease-in-out;
      }
      .toggle:checked + .toggle-label .toggle-text {
        font-weight: bold;
        opacity: 1;
        color: black;
        transition: 0.4s ease-in-out;
      }
      .dark-mode .content {
        background: #1f1f1f;
        transition: background 0.4s ease-out;
      }
      .dark-mode .content-heading {
        color: whitesmoke;
        opacity: 0.85;
        transition: 0.5s ease-out;
      }
      .dark-mode .content-teams-item h2 {
        color: azure;
        opacity: 0.7;
        transition: 0.5s ease-out;
      }
      .dark-mode header {
        background-color: rgb(43, 43, 43);
      }
      .light-mode .toggle {
        display: inline-block;
      }
    </style>
      <div class="toggle-wrapper">
        <input type="checkbox" id="toggle" class="toggle" />
        <label for="toggle" class="toggle-label">
          <span class="toggle-text">Light</span>
        </label>
      </div>
    `;
  }
}
customElements.define("toggle-comp", togglewrap);

// toggle dark ND light theme

const toggleSwitch = document.querySelector(".toggle");
const toggleText = document.querySelector(".toggle-text");
const container = document.querySelector(".container");

toggleSwitch.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");
  if (e.target.checked) {
    toggleText.textContent = "Dark";
  } else {
    toggleText.textContent = "Light";
  }
});
