const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizer = appetizerIn;
  },

  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },

  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    menu[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    var dishes = menu[courseName];
    var index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal this evening shall be the ${appetizer.name} for £${appetizer.price}, followed by the ${main.name} for £${main.price}. For dessert, you will be enjoying the ${dessert.name} for £${dessert.price}. The total cost of your meal will be £${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Pan-fried Scallops', 12);
menu.addDishToCourse('appetizers', 'Chorizo bites', 8);
menu.addDishToCourse('appetizers', 'Chicken Liver Pate', 10);

menu.addDishToCourse('mains', 'Fillet Steak', 25);
menu.addDishToCourse('mains', 'Fish + Chips', 17);
menu.addDishToCourse('mains', 'Roast Chicken', 18);

menu.addDishToCourse('desserts', 'Tarte Tatin', 9);
menu.addDishToCourse('desserts', 'Chocolate Brownie', 8);
menu.addDishToCourse('desserts', 'Crepe Suzette', 10);

var meal = menu.generateRandomMeal();

console.log(meal);
