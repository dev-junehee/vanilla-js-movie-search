import { Component } from "../core/core";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input placeholder="영화 이름을 검색해보세요!"/>
      <button class="btn btn-primary">
        🔍
      </button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}