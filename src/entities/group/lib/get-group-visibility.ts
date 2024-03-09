enum EGroupVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export const getGroupVisibility = (isClosed: boolean) =>
  isClosed ? EGroupVisibility.PRIVATE : EGroupVisibility.PUBLIC;
