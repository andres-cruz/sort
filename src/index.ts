import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  45,
  -12,
  10,
  3,
  -5,
  0,
  88,
  9,
  22,
  32
]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'Xaybijkwiewhdksjubsjwojsnyqrafshokqsjkanchyk'
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-50);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(23);
linkedList.add(48);
linkedList.add(89);
linkedList.add(24);

linkedList.sort();
linkedList.print();
