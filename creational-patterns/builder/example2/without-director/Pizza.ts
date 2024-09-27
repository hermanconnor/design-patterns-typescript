export default class Pizza {
  private size: string = '';
  private cheese: boolean = false;
  private pepperoni: boolean = false;
  private mushrooms: boolean = false;

  public setSize(size: string) {
    this.size = size;
  }

  public addCheese() {
    this.cheese = true;
  }

  public addPepperoni() {
    this.pepperoni = true;
  }

  public addMushrooms() {
    this.mushrooms = true;
  }

  public describe() {
    return `Pizza with size ${this.size}, cheese: ${this.cheese}, pepperoni: ${this.pepperoni}, mushrooms: ${this.mushrooms}`;
  }
}
