import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

let numbersCollection = new NumbersCollection([0, -5, 23, 16, 3, -4]);
numbersCollection.sort();
console.log(`Numbers sorting: ${numbersCollection.data}`);

let charactersCollection = new CharactersCollection("yXabaIeS");
charactersCollection.sort();
console.log(`String sorting: ${charactersCollection.data}`);

let linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-29);
linkedList.add(3);
linkedList.add(0);
linkedList.sort();
linkedList.print();
