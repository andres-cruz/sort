import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 88, 9, 22, 32]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
