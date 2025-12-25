# Hello World Test

Erster Test, roter Test, TDD Einstieg.

## Kurzüberblick
In diesem Kapitel lernst du:
- den ersten Test zu schreiben
- wie ein roter Test aussieht
- warum Tests zuerst geschrieben werden (TDD)

**Dieses Kapitel ist für dich, wenn …**
- du noch nie automatisierte Tests geschrieben hast
- du TDD praktisch erleben willst

**Du kannst dieses Kapitel überspringen, wenn …**
- du bereits Erfahrung mit Unit-Tests in JS/TS hast


## Motivation
Wir beginnen mit einem einfachen Test, bevor wir Code schreiben.  
Dies illustriert das zentrale TDD-Prinzip:

> *Schreibe zuerst den Test, dann den Code.*



## Unser erster Test
```ts
// tests/hello.test.ts
import { describe, it, expect } from 'vitest';

describe("HelloWorld", () => {
  it("sollte 'Hello World' zurückgeben", () => {
    // TODO: Implementieren
    expect(hello()).toBe("Hello World");
  });
});
```

⚠️ Dieser Test schlägt jetzt fehl – roter Test ist gut!

> ## QA-Box: Warum roter Test?
> * Das ist eine wichtige Information.
> * Roter Test signalisiert: Erwartung definiert, Implementierung fehlt.
> * QA & Entwickler teilen Sprache: Wir testen das gewünschte Verhalten.

