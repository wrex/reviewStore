import { get } from "svelte/store";
import { reviewStore } from "../stores/reviewStore";

describe("reviewStore", () => {
  test("implements a svelte store", () => {
    const value = get(reviewStore);
    expect(value).toEqual([]);
  });
});

// required with this small example
// to make the isolatedModules config happy
export {};
