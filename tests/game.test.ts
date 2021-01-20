import { Game } from '../src/game';

describe('Bowling game', (): void => {
    it('shoud return a zero when the game starts', (): void => {
        const bowlingGame = new Game();
        expect(bowlingGame.score()).toBe(0);
    });

    it('shoud return the score with the value of the first roll', (): void => {
        const bowlingGame = new Game();
        bowlingGame.roll(5);
        expect(bowlingGame.score()).toBe(5);
    });
    it('shoud return the score with the value of the first frame', (): void => {
        const bowlingGame = new Game();
        bowlingGame.roll(5);
        bowlingGame.roll(3);
        expect(bowlingGame.score()).toBe(8);
    });
    it('should return the score when the player do a spare', (): void => {
        const bowlingGame = new Game();
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        expect(bowlingGame.score()).toBe(10);
        bowlingGame.roll(6);
        expect(bowlingGame.score()).toBe(22);
    });

    it('should return the score when the player do a spare and the bonus is only in the next roll', (): void => {
        const bowlingGame = new Game();
        bowlingGame.roll(5);
        bowlingGame.roll(5);
        expect(bowlingGame.score()).toBe(10);
        bowlingGame.roll(6);
        expect(bowlingGame.score()).toBe(22);
        bowlingGame.roll(2);
        expect(bowlingGame.score()).toBe(24);
    });

    it('should only apply the bonus when the player do a spare in a frame', (): void => {
        const bowlingGame = new Game();
        bowlingGame.roll(3);
        bowlingGame.roll(5);
        expect(bowlingGame.score()).toBe(8);
        bowlingGame.roll(5);
        bowlingGame.roll(3);
        expect(bowlingGame.score()).toBe(16);
    });
});
