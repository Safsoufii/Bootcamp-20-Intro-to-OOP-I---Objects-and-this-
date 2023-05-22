class Shoes {
    constructor(name, productCode, quantity, valuePerItem) {
      this.name = name;
      this.productCode = productCode;
      this.quantity = quantity;
      this.valuePerItem = valuePerItem;
    }
    
    // Method to search for a shoe within the array
    search(array, name) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
          return array[i];
        }
      }
      return null;
    }
    
    // Method to find the shoe with the lowest value per item
    findLowest(array) {
      let lowest = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i].valuePerItem < lowest.valuePerItem) {
          lowest = array[i];
        }
      }
      return lowest;
    }
    
    // Method to find the shoe with the highest value per item
    findHighest(array) {
      let highest = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i].valuePerItem > highest.valuePerItem) {
          highest = array[i];
        }
      }
      return highest;
    }
    
    // Method to edit any aspect of an instance of the shoes class
    edit(shoe, attribute, value) {
      shoe[attribute] = value;
    }
    
    // Method to order all of the objects in ascending order
    sort(array) {
      array.sort((a, b) => a.valuePerItem - b.valuePerItem);
    }
  }
  
  // Create 5 instances of the Shoes class and push them to an array
  const shoesArray = [
    new Shoes('Nike', '093', 5, 150),
    new Shoes('Adidas', '137', 3, 175),
    new Shoes('Yeezy', '720', 8, 185),
    new Shoes('Converse', '340', 12, 65),
    new Shoes('Puma', '011', 6, 55)
  ];
  
  // Create an instance of the Shoes class
  const shoes = new Shoes();
  
  // Search for a shoe in the array
  const Nike = shoes.search(shoesArray, 'Nike');
  console.log(`Searching for a shoe with the name Nike in the array:`);
  console.log(Nike);
  
  // Find the shoe with the lowest value per item
  const lowestShoe = shoes.findLowest(shoesArray);
  console.log(`Searching for a shoe with the lowest value per item:`);
  console.log(lowestShoe);
  
  // Find the shoe with the highest value per item
  const highestShoe = shoes.findHighest(shoesArray);
  console.log(`Searching for a shoe with the highest value per item:`);
  console.log(highestShoe);
  
  // Edit an aspect of a shoe
  shoes.edit(Nike, 'quantity', 10);
  console.log(`Additional Nike stock has been delivered. The quantity has increased from 5 units to 10 units of shoes.`);
  console.log(Nike);
  
  // Sort the array in ascending order of price
  shoes.sort(shoesArray);
  console.log(`The shoe stock is sorted in ascending order of value per item.`);
  console.log(shoesArray);
  
