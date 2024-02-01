/** Objects Vs Maps
 * 1. Objects are ordered whereas maps are unordered
 * 2. Keys in objects can only be string or symbol type whereas in maps, they can be of any time
 * 3. An object has a prototype and may contain a few default keys which may collide with your
 *    own keys if you're not careful. A map on the other hand does not contain any keys by default
 * 4. Objects are not iterable whereas Maps are.
 * 5. The number of items in an object must be determined manually whereas it is readily available with the size
 *    property in map
 * 6. Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data
 */

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
console.log(map.has("a"));
console.log(map.size);
map.clear();

map.delete("c");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
