import sum from "./sum";

test("testing for sum function", () => {
    let a = 10, b = 10, output = 20
    expect(sum(a, b)).toBe(output)
})


test(" 123 testing for sum function 2", () => {
    let a = 100, b = 200, output = 300
    expect(sum(a, b)).toBe(output)
})