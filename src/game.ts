export class Game {
    private currentScore: number;
    private previousRollKnockedPins: number;
    private previousFrameEndedWithASpare: boolean;
    private isNewFrame: boolean;

    private readonly pinsInAFrame: number = 10;

    constructor() {
        this.isNewFrame = true;
        this.currentScore = 0;
        this.previousRollKnockedPins = 0;
        this.previousFrameEndedWithASpare = false;
    }

    roll(knockedPins: number): void {
        this.incrementScore(knockedPins);
        this.applySpareBonus(knockedPins);
        const frameKnockedPins = this.previousRollKnockedPins + knockedPins;
        this.previousFrameEndedWithASpare = this.isSpare(frameKnockedPins);
        if (!this.previousFrameEndedWithASpare) {
            this.previousRollKnockedPins = knockedPins;
        }
        this.changeFrame();
    }

    private incrementScore(pins: number): void {
        this.currentScore += pins;
    }

    private changeFrame(): void {
        this.isNewFrame = !this.isNewFrame;
    }

    score(): number {
        return this.currentScore;
    }

    private applySpareBonus(knockedPins: number): void {
        if (this.previousFrameEndedWithASpare) {
            this.incrementScore(knockedPins);
        }
    }

    private isSpare(score: number): boolean {
        return this.allPinsknocked(score) && !this.isNewFrame;
    }

    private allPinsknocked(score: number): boolean {
        return score === this.pinsInAFrame;
    }
}
