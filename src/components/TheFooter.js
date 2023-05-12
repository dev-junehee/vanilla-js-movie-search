import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <div>
          copyright ©<span> ${new Date().getFullYear()} </span>
          KIMJUNEHEE. All Rights Rreserved
        </div>
      </div>
    `
  }
}