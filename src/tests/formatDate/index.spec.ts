import { formatDateMMDDYY } from '@utils/formatDate';
import { describe, it, expect } from 'vitest';

describe('formatDateMMDDYY', () => {
    it('formats a Date object in MM/DD/YY format', () => {
        const dateObj = new Date(2025, 2, 5);
        const result = formatDateMMDDYY(dateObj);
        expect(result).toBe('03/05/25');
    });

    it('formats a string date in MM/DD/YY format', () => {
        const dateString = '2025-03-05';
        const result = formatDateMMDDYY(dateString);
        expect(result).toBe('03/05/25');
    });

    it('handles different string date formats', () => {
        const dateString = '03/05/2025';
        const result = formatDateMMDDYY(dateString);
        expect(result).toBe('03/05/25');
    });

    it('handles an invalid date string gracefully', () => {
        const dateString = 'invalid-date';
        const result = formatDateMMDDYY(dateString);
        expect(result).toBe('Invalid Date');
    });
});
