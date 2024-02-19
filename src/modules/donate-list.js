export default class DonatesList {
  #donates;
  constructor() {
    this.#donates = document.querySelector(".donates-container__donates");
  }

  addDonate(donate, time) {
    const item = document.createElement('li');
    item.className = 'donate-item'
    const date = new Date(time);
  }
}
