export default class DonateForm {
  #total;
  #input;
  #btnDonate;
  #currentDonate;
  #date;
  #donateSum;

  constructor(donate, timestamp) {
    this.#total = document.querySelector("#total-amount");
    this.#input = document.querySelector(".donate-form__donate-input");
    this.#btnDonate = document.querySelector(".donate-form__submit-button");
    this.#btnDonate.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event.target);
      console.log(event);
      console.log(Number(event.target.form[0].value));
      this.inputDonate(Number(event.target.form[0].value));
    });
    this.#currentDonate = donate;
    this.#date = timestamp;
  }

  inputDonate(value) {
    this.#currentDonate = value;
    console.log("Задонатено:", this.#currentDonate);
    this.#input.value = '';
    this.#date = new Date().getTime();
    console.log(this.#date);
     this.#donateSum = Number.parseInt(this.#total.innerHTML)+ this.#currentDonate;
    // console.log(Number.parseInt(this.#total.innerHTML) + this.#currentDonate);
    console.log(this.#donateSum);
     this.#total.innerHTML = `${this.#donateSum}$`
  }
}
