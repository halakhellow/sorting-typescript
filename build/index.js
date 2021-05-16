"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([0, -5, 23, 16, 3, -4]);
numbersCollection.sort();
console.log("Numbers sorting: " + numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("yXabaIeS");
charactersCollection.sort();
console.log("String sorting: " + charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(50);
linkedList.add(-29);
linkedList.add(3);
linkedList.add(0);
linkedList.sort();
linkedList.print();