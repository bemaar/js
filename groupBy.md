# groupBy

Groups the elements of an array based on the given function.

## Implementation

```javascript
const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
```

## Usage

```javascript
const cars = [
  { brand: 'Porsche', model: '911' },
  { brand: 'BMW', model: 'Z' },
  { brand: 'Mercedes', model: 'A' },
  { brand: 'Mercedes', model: 'S' },
  { brand: 'Porsche', model: '356' },
];
const words = ['test', 'development', 'area', 'programming', 'class'];

const groupedCarsByBrand = groupBy(cars, 'brand');
const groupedWordsByLength = groupBy(words, 'length');
```

### Output

```javascript
// groupedCarsByBrand
{
  BMW: [
    {
      brand: 'BMW',
      model: 'Z',
    },
  ],
  Mercedes: [
    {
      brand: 'Mercedes',
      model: 'A',
    },
    {
      brand: 'Mercedes',
      model: 'S',
    },
  ],
  Porsche: [
    {
      brand: 'Porsche',
      model: '911',
    },
    {
      brand: 'Porsche',
      model: '356',
    },
  ],
}

// groupedWordsByLength
{
  11: ['development', 'programming'],
  4: ['test', 'area'],
  5: ['class'],
}
```
