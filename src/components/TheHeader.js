import { Component } from '../core/core'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt0073629'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">OMDb API</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            return /* html */ `
              <li>
                <a href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="../video.png" alt="User">
      </a>
    `
  }
}