import { expect, test } from "vitest"
import { add } from "./math.helerper";

test('should add two positives numbers', () => {
    // 1. Arrange => Preparar
    const a: number = 1;
    const b: number = 2;

    // 2. Act => Proporcionar estímulo
    const result: number = add(a, b);

    // 3. Assert => Resultado esperado
    expect(result).toBe(a + b);
});