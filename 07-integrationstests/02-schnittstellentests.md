# Schnittstellentests

## Motivation

Schnittstellen sind klassische Fehlerquellen. Schnittstellentests prüfen, ob Verträge eingehalten werden.

## Beispiel
```
export interface ApiResponse {
  success: boolean;
}


export function parseResponse(response: unknown): ApiResponse {
  return response as ApiResponse;
}
import { describe, it, expect } from 'vitest';


describe('Schnittstellentest – API Response', () => {
  it('akzeptiert gültige Antwort', () => {
    const response = { success: true };
    expect(parseResponse(response).success).toBe(true);
  });
});
```

> ## QA-Hinweis
> Schnittstellentests schützen vor stillen API-Brüchen.

## Zusammenfassung

* Schnittstellentests prüfen Verträge
* TypeScript hilft bei der Definition klarer Interfaces
