# isAfterDate

Inverts the key-value pairs of an object, without mutating it.

## Implementation

```javascript
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];

    acc[val] = acc[val] || [];
    acc[val].push(key);

    return acc;
  }, {});
```

## Usage

```javascript
const data = {
  a: 10,
  b: 10,
  c: 20,
  d: 30,
  e: 20,
  f: 25,
  g: 30,
};

const groupByKey = invertKeyValues(data);
const groupWithCustomKeys = invertKeyValues(data, (value) => `val${value}`);
```

### Output

```javascript
// groupByKey
{
  10: ['a', 'b'],
  20: ['c', 'e'],
  25: ['f'],
  30: ['d', 'g'],
}

// groupWithCustomKeys
{
  val10: ['a', 'b'],
  val20: ['c', 'e'],
  val25: ['f'],
  val30: ['d', 'g'],
}
```
