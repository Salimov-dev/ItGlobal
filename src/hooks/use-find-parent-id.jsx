const useFindParentId = (arr, targetId) => {
  for (const obj of arr) {
    if (obj.items) {
      for (const item of obj.items) {
        if (item.id === targetId) {
          return obj.id;
        }
      }
      const parentId = useFindParentId(obj.items, targetId);
      if (parentId) {
        return parentId;
      }
    }
  }
  return null;
};

export default useFindParentId;
