import { describe, expect, it } from "vitest";
import { services } from "../src/data/services";
import { site } from "../src/site.config";

describe("site config", () => {
  it("keeps the phone as digits only", () => {
    expect(site.phone).toMatch(/^\d{10}$/);
  });

  it("shows the phone with spaces", () => {
    expect(site.phoneDisplay.replaceAll(" ", "")).toBe(site.phone);
  });
});

describe("services", () => {
  it("gives every service a title and a blurb", () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.blurb.length).toBeGreaterThan(0);
    }
  });
});
