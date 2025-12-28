# Integrationstests – mehrere Module

## Kurzüberblick

In diesem Kapitel lernst du:

* was Integrationstests von Unit-Tests unterscheidet
* wie mehrere Module gemeinsam getestet werden
* warum Integrationstests für QA unverzichtbar sind

## Motivation

Unit-Tests testen einzelne Bausteine. Integrationstests prüfen, **ob diese Bausteine zusammen funktionieren**.

> Merksatz: Integrationstests finden Fehler, die Unit-Tests nicht sehen können.

## Beispiel: UserService + PermissionService
```
// src/permissionService.ts
export function isAdmin(role: string): boolean {
  return role === 'admin';
}
// src/userService.ts
import { User } from './types';
import { isAdmin } from './permissionService';

export function canEdit(user: User): boolean {
  return isAdmin(user.role);
}
```

## Integrationstest
```
import { describe, it, expect } from 'vitest';
import { canEdit } from '../src/userService';
import { adminUser, guestUser } from './fixtures/userFixtures';


describe('Integration – UserService + PermissionService', () => {
  it('Admin kann editieren', () => {
    expect(canEdit(adminUser)).toBe(true);
  });


  it('Guest kann nicht editieren', () => {
    expect(canEdit(guestUser)).toBe(false);
  });
});
```

> ## QA-Box
> Integrationstests sind besonders wertvoll für QA, da sie reale Fehlerbilder abdecken, die im Zusammenspiel entstehen.

## Zusammenfassung

* Integrationstests prüfen das Zusammenspiel mehrerer Module
* Sie ergänzen Unit-Tests, ersetzen sie aber nicht
* QA profitiert besonders von Integrationstests

