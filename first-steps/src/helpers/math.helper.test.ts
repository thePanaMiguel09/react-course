import { describe, expect, test } from "vitest"
import { add, multiply, substract } from "./math.helerper";


describe('add', () => {
    test('should add two positives numbers', () => {
        // 1. Arrange => Preparar
        const a: number = 1;
        const b: number = 2;

        // 2. Act => Proporcionar estímulo
        const result: number = add(a, b);

        // 3. Assert => Resultado esperado
        expect(result).toBe(a + b);
    });

    test('should add two negatives numbers', () => {
        const a: number = -3;
        const b: number = -2;

        const result: number = add(a, b);

        expect(result).toBe(a + b);
    });
});

describe('substract', () => {
    test('should substract two positive numbers', () => {

        const a: number = 4;
        const b: number = 3;

        const result = substract(a, b);

        expect(result).toBe(a - b);

    });

    test('should substract two negative numbers', () => {

        const a: number = -2;
        const b: number = -3;

        const result = substract(a, b);

        expect(result).toBe(a - b);

    });
});

describe('multiply', () => {
    test('multiply two positive numbers', () => {
        const a: number = 3;
        const b: number = 2;

        const result: number = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('multiply one positive number by one negative number', () => {
        const a: number = 3;
        const b:number = -5;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('multiply one positive number by zero (0)', () => {
        const a: number = 2;
        const b: number = 0;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    })
});

