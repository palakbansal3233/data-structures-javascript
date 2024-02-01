/** Difference between Sets & Arrays:
 * 1. Arrays can contain duplicate values
 * 2. Insertion order is maintained in arrays
 * 3. Searching and deleting an element in the set is faster compared to arrays
 */

const set = new Set([1, 2, 3]);

set.add(4);
console.log(set.has(1));
set.delete(3);
console.log(set.size);
set.clear();

for (const item of set) {
  console.log(item);
}
