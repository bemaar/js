# createTreeStructure

Converts a flat list items to tree structure.

### Implementation

```javascript
const createTreeStructure = ({
  depth = 1,
  id = null,
  items = [],
  parentKey = 'parent',
}) =>
  items
    .filter((item) => item[parentKey] === id)
    .map((item) => {
      const { id: itemId } = item;

      return {
        ...item,
        children: createTreeStructure({
          items,
          id: itemId,
          depth: depth + 1,
        }),
        depth,
        key: !!id ? `${depth}-${id}-${itemId}` : `${depth}-${itemId}`,
      };
    });
```

## Usage

```javascript
const flatList = [
  { id: 4, name: 't4', parent: 3 },
  { id: 6, name: 't6', parent: 2 },
  { id: 3, name: 't3', parent: 1 },
  { id: 5, name: 't5', parent: null },
  { id: 1, name: 't1', parent: null },
  { id: 2, name: 't2', parent: null },
];

const treeStructure = createTreeStructure({ items: flatList });
```

### Output

```javascript
[
  {
    children: [],
    depth: 1,
    id: 5,
    key: '1-5',
    name: 't5',
    parent: null,
  },
  {
    children: [
      {
        children: [
          {
            children: [],
            depth: 3,
            id: 4,
            key: '3-3-4',
            name: 't4',
            parent: 3,
          },
        ],
        depth: 2,
        id: 3,
        key: '2-1-3',
        name: 't3',
        parent: 1,
      },
    ],
    depth: 1,
    id: 1,
    key: '1-1',
    name: 't1',
    parent: null,
  },
  {
    children: [
      {
        children: [],
        depth: 2,
        id: 6,
        key: '2-2-6',
        name: 't6',
        parent: 2,
      },
    ],
    depth: 1,
    id: 2,
    key: '1-2',
    name: 't2',
    parent: null,
  },
];
```
