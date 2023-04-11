class calculatorHashMap {
  constructor() {
    this.hashDict = {};
    this.size = 0;
  }

  addition(array) {
    if(array.length <= 1 | typeof array !== 'object') {
      throw new Error("Its needed to send to method an array with at least 2 elements");
    }
    if(!this.hashDict.hasOwnProperty('addition')) {
      this.hashDict['addition'] = array.reduce((acc,current) => acc + current,0);
      this.size += 1;
    } else {
      this.hashDict['addition'] = array
        .reduce((acc,current) => acc + current, 0);
    }  
  }

  subtraction(array) {
    if(array.length <= 1 | typeof array !== 'object') {
      throw new Error("Its needed to send to method an array with at least 2 elements");
    }
    if(!this.hashDict.hasOwnProperty('subtraction')) {
      this.hashDict['subtraction'] = array.reduce(
        (acc,current) => acc - current);
      this.size += 1;
    } else {
      this.hashDict['subtraction'] = array
        .reduce((acc,current) => acc - current);
    }  
  }
  multiplication(array) {
    if(array.length <= 1 || typeof array !== 'object') {
      throw new Error("Its needed to send to method an array with at least 2 elements");
    }
    if(!this.hashDict.hasOwnProperty('multiplication')) {
      this.hashDict['multiplication'] = array.reduce(
        (acc,current) => acc * current);
      this.size += 1;
    } else {
      this.hashDict['multiplication'] = array
        .reduce((acc,current) => acc * current);
    }  
  }
  
  division(firstNumber, secondNumber) {
    if(!firstNumber || !secondNumber) {
      throw new Error("Its needed to send to method two numbers");
    }
    if(secondNumber === 0) throw new Error("Its not possible to divide by zero");
    if(!this.hashDict.hasOwnProperty('division')) {
      this.hashDict['division'] = firstNumber/secondNumber;
      this.size += 1;
    } else this.hashDict['division'] = firstNumber/secondNumber;
  }

  get(key) {
    if(this.hashDict.hasOwnProperty(key)) {
      return this.hashDict[key];
    } else {
      throw new Error("Key not found: " + key);
    }
  }
}

const myHash = new calculatorHashMap();
myHash.addition([1,2,3,4,5]);
console.log(myHash.get('addition'));
// Error must be throw if didn't send an array with at least 2 elements.
// myHash.addition(1,2);
// console.log(myHash.get('addition'));

myHash.subtraction([1,2,3,4,5]);
console.log(myHash.get('subtraction'));
// Error must be throw if didn't send an array with at least 2 elements.
// myHash.subtraction(1,2);
// console.log(myHash.get('subtraction'));

myHash.multiplication([1,2,3,4]);
console.log(myHash.get('multiplication'));
// Error must be throw if didn't send an array with at least 2 elements.
// myHash.multiplication(1,2);
// console.log(myHash.get('multiplication'));

myHash.division(4,2);
console.log(myHash.get('division'));
// Error must be throw if didn't send two parameters to method.
// myHash.division([4,4]);
// console.log(myHash.get('division'));
// Error must be throw if user try to divide by zero.
// myHash.division(4,0);
// console.log(myHash.get('division'));
// Error must be throw if didn't exist the key in the HashMap.
// console.log(myHash.get('power'));
