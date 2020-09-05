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
