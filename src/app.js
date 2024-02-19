import DonateForm from "./modules/donate-input";

export default class App {
  #DonateForm;

  constructor() {
    this.#DonateForm = new DonateForm();
  }

  run() {
    // this.#DonateForm.inputDonate();
  }
}
