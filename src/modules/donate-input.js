import moment from "moment";
import DonatesList from "./donate-list";
import { formatDonate } from "../utils/formatDonate";

export default class DonateForm {
  #total;
  #input;
  #btnDonate;
  #currentDonate;
  #date;
  #donateSum;
  #errorSpan;

  constructor() {
    this.#total = document.querySelector("#total-amount");
    this.#input = document.querySelector(".donate-form__donate-input");
    this.#btnDonate = document.querySelector(".donate-form__submit-button");
    this.#errorSpan = document.querySelector(".donate-form__error");
    this.#btnDonate.addEventListener("click", (event) => {
      event.preventDefault();
      this.inputDonate(Number(event.target.form[0].value));
    });
  }

  inputDonate(value) {
    if (value <= 0) {
      this.#input.value = "";
      this.#errorSpan.removeAttribute("hidden");
      return;
    }

    if (value > 0) {
      this.#errorSpan.setAttribute("hidden", "true");
    }

    this.#currentDonate = formatDonate(value);
    this.#input.value = "";
    this.#date = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.#donateSum =
      Number.parseInt(this.#total.innerHTML) + this.#currentDonate;
    this.#total.innerHTML = `${this.#donateSum}$`;

    const donateList = new DonatesList();
    donateList.addDonate(this.#currentDonate, this.#date);
  }
}
