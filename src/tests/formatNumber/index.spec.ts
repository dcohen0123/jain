import { formatDecimal0, formatDecimal2 } from '@utils/formatNumber';
import { describe, it, expect } from 'vitest';

describe('formatDecimal0', () => {
    it('formats a whole number without decimal places', () => {
        const input = 12345;
        const result = formatDecimal0(input);
        expect(result).toBe('12,345');
    });

    it('truncates decimal part when formatting with 0 decimals', () => {
        const input = 12345.6789;
        const result = formatDecimal0(input);
        expect(result).toBe('12,346');
    });

    it('handles negative numbers correctly', () => {
        const input = -9876.543;
        const result = formatDecimal0(input);
        expect(result).toBe('-9,877');
    });
});

describe('formatDecimal2', () => {
    it('formats a number to two decimal places', () => {
        const input = 12345;
        const result = formatDecimal2(input);
        expect(result).toBe('12,345.00');
    });

    it('keeps two decimal places for decimal inputs', () => {
        const input = 123.4;
        const result = formatDecimal2(input);
        expect(result).toBe('123.40');
    });

    it('rounds beyond two decimal places correctly', () => {
        const input = 123.4567;
        const result = formatDecimal2(input);
        expect(result).toBe('123.46');
    });

    it('handles negative numbers correctly', () => {
        const input = -9876.543;
        const result = formatDecimal2(input);
        expect(result).toBe('-9,876.54');
    });
});
