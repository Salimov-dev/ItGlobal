const useFindMenuItemById = (arr, targetId) => {
  for (const obj of arr) {
    if (obj.id === targetId) {
      return obj;
    }
    if (obj.items) {
      const foundObj = useFindMenuItemById(obj.items, targetId);
      if (foundObj) {
        return foundObj;
      }
    }
  }
  return null;
};

export default useFindMenuItemById;
