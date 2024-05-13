export enum RESIZE_ORDER {
  FIRST = -100000,
  DEVICE,
  CSS_VARIABLE,
  MEDIA,
  SOURCE_MANAGER,
  SCROLL,
  SEGMENT,
  LAYOUT_BOX,
  EN3,
  LAST = 100000,
}

export enum TICK_ORDER {
  FIRST = -100000,
  SCROLL,
  ANIMATION,
  LAYOUT_BOX,
  LADDER,
  EN3,
  LAST = 100000,
}
