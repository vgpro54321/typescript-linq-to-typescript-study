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
