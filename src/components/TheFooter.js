import { Component } from "../core/core"
import aboutStore from "../store/about"

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github } = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <div>
          copyright ©<span> ${new Date().getFullYear()} </span>
          <a href="${github}">KIMJUNEHEE</a>. All Rights Rreserved.
        </div>
      </div>
    `
  }
}