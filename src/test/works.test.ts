import { describe, expect, it } from "vitest";
import { getNeighbors, getWorkBySlug, getWorksByCollection, works } from "@/data/works";

describe("works collections", () => {
  it("has the 9 current works all in the poster collection", () => {
    expect(works).toHaveLength(9);
    expect(getWorksByCollection("poster")).toHaveLength(9);
  });

  it("carte postale and dibond are empty for now", () => {
    expect(getWorksByCollection("carte-postale")).toHaveLength(0);
    expect(getWorksByCollection("dibond")).toHaveLength(0);
  });

  it("prev/next stay within the same collection", () => {
    const first = getWorksByCollection("poster")[0]!;
    const { prev, next } = getNeighbors(first);
    expect(prev).toBeUndefined();
    expect(next?.collection).toBe("poster");
  });

  it("slugs are unique", () => {
    expect(new Set(works.map((w) => w.slug)).size).toBe(works.length);
    expect(getWorkBySlug("ete-62")?.title).toBe("Été 62");
  });
});
