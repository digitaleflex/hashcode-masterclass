import { pathToFileURL } from "node:url";
export function createCounter(initial = 0) {
  if (!Number.isFinite(initial)) throw new TypeError("initial doit être un nombre fini");
  let value = initial;
  return {
    next() { value += 1; return value; },
    current() { return value; },
    reset() { value = initial; }
  };
}

export function* paginate(items, pageSize) {
  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new RangeError("pageSize doit être un entier positif");
  }
  for (let i = 0; i < items.length; i += pageSize) yield items.slice(i, i + pageSize);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const counter = createCounter(3);
  console.log(counter.next(), counter.current());
  console.log([...paginate([1, 2, 3, 4, 5], 2)]);
}
