const request = require("supertest");
const app = require("../server");

describe("GET /api/tanks", () => {
    it("should return a list of tanks", async () => {
        const res = await request(app).get("/api/tanks");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty("name");
        expect(res.body[0]).toHaveProperty("information");
    });

    it("should contain the Pz.35(t) tank", async () => {
        const res = await request(app).get("/api/tanks");
        const tankNames = res.body.map((tank) => tank.name);
        expect(tankNames).toContain("Pz.35(t)");
    });
});
