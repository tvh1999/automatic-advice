import "core-js/stable";

class AdviceView {
  #data;
  #curEl = document.querySelector(`.app`);

  #resetDisplay(el) {
    el.innerHTML = ``;
  }

  #displayMarkup(el, text) {
    el.insertAdjacentHTML(`beforeend`, text);
  }

  render(data) {
    this.#data = data;
    const adviceNumberDisplay = this.#curEl.querySelector(`.advice-identify`);
    const displayAdviceContainer =
      this.#curEl.querySelector(`.app__text-quote`);
    this.#resetDisplay(adviceNumberDisplay);
    this.#resetDisplay(displayAdviceContainer);
    this.#displayMarkup(adviceNumberDisplay, this.#data.id);
    this.#displayMarkup(displayAdviceContainer, `"${this.#data.advice}"`);
  }

  addHandlerAdviceDisplay(handler) {
    this.#curEl.addEventListener(`click`, function (e) {
      const eventBtn = e.target.closest(`.app__btn`);
      if (!eventBtn) return;
      handler();
    });
  }
}

export default new AdviceView();
