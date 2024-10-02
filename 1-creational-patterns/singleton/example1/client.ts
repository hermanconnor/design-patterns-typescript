class Singleton {
  private static instance: Singleton;
  public id: number;

  private constructor(id: number) {
    this.id = id;
  }

  public static getInstance(id: number): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(id);
    }
    return Singleton.instance;
  }
}

// Usage
const OBJECT1 = Singleton.getInstance(1); // id is set to 1
const OBJECT2 = Singleton.getInstance(2); // will not create a new instance

console.log(OBJECT1 === OBJECT2); // true
console.log(OBJECT1.id); //  1
console.log(OBJECT2.id); //  1
