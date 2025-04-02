export interface CarouselSlots<T> {
  default(props: { item: T; index: number }): any;
}
