export const readwiseTrack = new Proxy(
  {},
  {
    get() {
      return () => {};
    },
  }
);
