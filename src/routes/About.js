import { Component } from "../core/core";
import aboutStore from "../store/about"
import photo from "../public/about.gif"

export default class About extends Component {
  render() {
    const {name, bio, email, github } = aboutStore.state

    this.el.classList.add('container', 'about')
    this.el.innerHTML = /* html */ `
      <div class="photo">
        <img src="${photo}" alt="">
      </div>
      <p class="name">${name}</p>
      <p class="bio">${bio}</p>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}"
          target="_blank">
          ${email}
        </a>
      </p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
    `
  }
}