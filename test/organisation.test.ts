import { expect, test } from "bun:test";
import { Organisation } from "../src/organisation.js";

test("2 + 2", () => {
    expect(2 + 2).toBe(4);
});

test("Organisation", () => {
    const organisation = new Organisation().update("{\"type\": \"PersonCreated\", \"payload\": {\"id\": \"guybrush\", \"name\": \"Guybrush Threepwood\"}}");
    expect(organisation.teamCount()).toBe(0);
    expect(organisation.personCount()).toBe(1);
    expect(organisation.managerWithMostDirectReport()).toBe(null);
    expect(organisation.teamWithMostPeopleAssigned()).toBe(null);
});
