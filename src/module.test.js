import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 22
    const got = mut.div(44, 2);
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 0
    const got = mut.div(0, 1);
    expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("             ");
    expect(got).toBe(expected)
});

test('Testing containsNumbers -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("          2   ");
    expect(got).toBe(expected)
});