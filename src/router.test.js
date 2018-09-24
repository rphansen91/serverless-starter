/* global describe jest it expect */

const router = require("./router");

describe("Router", () => {
  it("Should have a root get", () => {
    const writeHead = jest.fn();
    const end = jest.fn();
    router(
      { url: "/", method: "GET" },
      { writeHead, end }
    );
    expect(writeHead).toBeCalledWith(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    expect(end).toBeCalledWith(JSON.stringify({ active: true }));
  });
});
