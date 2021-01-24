# truncateStringAtWhitespace

Truncates a string up to specified length, respecting whitespace when possible.

## Implementation

```javascript
const truncateStringAtWhitespace = (str, lim, ending = '...') => {
  if (str.length <= lim) return str;

  const lastSpace = str.slice(0, lim - ending.length + 1).lastIndexOf(' ');

  return str.slice(0, lastSpace > 0 ? lastSpace : lim - ending.length) + ending;
};
```

## Usage

```javascript
const loremIpsum = truncateStringAtWhitespace(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  20
);
```

### Output

```javascript
// loremIpsum
'Lorem ipsum dolor...';
```
