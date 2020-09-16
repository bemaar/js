# getDaysDiffBetweenDates

Returns the difference (in days) between two dates.

## Implementation

```javascript
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

## Usage

```javascript
const daysDiff = getDaysDiffBetweenDates(
  new Date('2020-09-16'),
  new Date('2020-09-26')
);
```

### Output

```javascript
// daysDiff
10;
```
