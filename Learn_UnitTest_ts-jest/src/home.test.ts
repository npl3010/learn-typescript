import { isPositive } from "./home";

describe('isPositive()', () => {
    it('should return true when n > 0', () => {
        expect(isPositive(1)).toBe(true);
        expect(isPositive(5)).toBe(true);
        expect(isPositive(10)).toBe(true);
    });
    it('should return false when n = 0', () => {
        expect(isPositive(0)).toBe(false);
    });
    it('should return false when n < 0', () => {
        expect(isPositive(-1)).toBe(false);
    });
});