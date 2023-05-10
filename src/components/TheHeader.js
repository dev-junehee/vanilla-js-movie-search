import { Component } from "../core/core";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/">MAIN</a>
      <a href="#/about">About</a>
    `
  }
}