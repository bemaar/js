# selectPropertiesFromAnObject

Select any number of properties from a JavaScript object.

## Implementation

```javascript
const selectPropertiesFromAnObject = (obj, ...props) =>
  props.reduce((result, prop) => {
    result[prop] = obj[prop];

    return result;
  }, {});
```

## Usage

```javascript
const person = {
  age: 33,
  firstName: 'Paul',
  lastName: 'Brown',
  position: 'CEO',
};

const agePosition = selectPropertiesFromAnObject(person, 'age', 'position');
```

### Output

```javascript
// agePosition
{age: 33, position: 'CEO'}
```
