// Import stylesheets
import './style.css';
import { from } from 'linq-to-typescript';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// To Use With Wrappers
const evenNumbers = from([1, 2, 3, 4, 5, 6, 7, 8, 9])
  .where((x) => x % 2 === 0)
  .toArray();

console.log(evenNumbers);

interface KV {
  key: number;
  value: string;
}

let list1: KV[] = [
  { key: 0, value: 'a' },
  { key: 1, value: 'b' },
  { key: 2, value: 'c' },
  { key: 3, value: 'd' },
];

let list2: KV[] = [
  { key: 0, value: 'aa' },
  { key: 1, value: 'bb' },
  { key: 3, value: 'dd' },
];

let retval = from(list1)
  .where((l1) => from(list2).any((l2) => l2.key == l1.key))
  .toArray();

console.log(retval);

let retval2 = from(list1)
  .joinByKey(
    from(list2),
    (x) => x.key,
    (x) => x.key,
    (x, y) => ({ x, y })
  )
  .toArray();

console.log(retval2);

let wrapped = from(list1).first();
console.log(wrapped);
