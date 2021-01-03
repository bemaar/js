# omitPropertiesFromAnObject

Omit any number of properties from a JavaScript object.

## Implementation

```javascript
const omitPropertiesFromAnObject = (obj, ...props) => {
  const result = { ...obj };

  props.forEach((prop) => delete result[prop]);

  return result;
};
```

## Usage

```javascript
const person = {
  age: 33,
  firstName: 'Paul',
  lastName: 'Brown',
  position: 'CEO',
};

const withoutAge = omitPropertiesFromAnObject(person, 'age');
const withoutAgeAndPosition = omitPropertiesFromAnObject(
  person,
  'age',
  'position'
);
```

### Output

```javascript
// withoutAge
{firstName: 'Paul', lastName: 'Brown', position: 'CEO'}

// withoutAgeAndPosition
{firstName: 'Paul', lastName: 'Brown'}
```
