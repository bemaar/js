# getColonTimeFromDate

Returns a string of the form `HH:MM:SS` from a `Date` object.

## Implementation

```javascript
const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);
```

## Usage

```javascript
const now = getColonTimeFromDate(new Date());
```

### Output

```javascript
// now
'20:24:28';

```
