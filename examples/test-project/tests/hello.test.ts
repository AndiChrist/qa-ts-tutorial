// tests/hello.test.ts
import { describe, it, expect } from 'vitest';
import { hello } from '../src/hello';

describe("HelloWorld", () => {
  it("sollte 'Hello World' zurückgeben", () => {
    // TODO: Implementieren
    expect(hello()).toBe("Hello World");
  });
});
