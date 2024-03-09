enum EGroupVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export const getGroupVisibility = (isClosed: boolean) => {
  if (isClosed) return EGroupVisibility.PRIVATE;
  return EGroupVisibility.PUBLIC;
};
