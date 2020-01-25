import calculateWinner from "./GameStatus";

test('no winner returns null', () => {
    var didWin = calculateWinner([1, 2, 3]);
    expect(didWin).toBe(null);
});

test('correctly calculates the winner', () => {
    var didWin = calculateWinner([0, 1, 2]);
    expect(didWin).toBe(null);
});
