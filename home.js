const head = `<div class="nav2">
        <div class="nleft2">
          <img src="./assets/images/1699454256646.png" alt="" />
          <p><span>Fractalslab</span><br />app startup</p>
        </div>
        <div class="center">
          <a href="#">home</a>
          <a href="#">company</a>
          <a href="#">products</a>
          <a href="#">events</a>
          <a href="./AboutUs.html">about us</a>
          <a href="#">news</a>
          <a href="#">contact</a>
        </div>
        <div class="nright2">
          <i class="ri-search-line"></i>
        </div>
      </div>
      <div class="upColor">
        <div class="work1"></div>
        <div class="work2"></div>
        <div class="work3"></div>
        <div class="work4"></div>
      </div>`;

class screenTop extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = head;
    }
}

customElements.define("head", screenTop);