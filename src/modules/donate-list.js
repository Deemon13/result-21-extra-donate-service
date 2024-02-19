export default class DonatesList {
  #donates;
  constructor() {
    this.#donates = document.querySelector(".donates-container__donates");
  }

  addDonate(donate, time) {
    const item = document.createElement("div");
    const donateValue = document.createElement("b");
    donateValue.innerHTML = `${donate}$`;
    item.className = "donate-item";
    item.innerHTML = `${time} - `;
    item.append(donateValue);
    this.#donates.append(item);
  }
}
