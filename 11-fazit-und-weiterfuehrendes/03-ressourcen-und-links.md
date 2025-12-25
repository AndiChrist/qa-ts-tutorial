# Ressourcen & Links

Offizielle Docs, weiterführende Artikel.


examples/test-project/src/types.ts 
```
export interface User { 
    id: string; 
    name: string; 
    role: 'admin' | 'guest'; 
}
```
examples/test-project/src/userService.ts 
```
import { User } from './types';

export function canEdit(user: User): boolean {      
    return user.role === 'admin'; 
}
```

examples/test-project/tests/fixtures/userFixtures.ts 
```
import { User } from '../../src/types';

export const adminUser: User = { 
    id: 'u1', 
    name: 'Alice', 
    role: 'admin', 
};

export const guestUser: User = { 
    id: 'u2', 
    name: 'Bob', 
    role: 'guest', 
};
```

examples/test-project/tests/userService.test.ts 
```
import { describe, it, expect } from 'vitest'; import { adminUser, guestUser } from './fixtures/userFixtures'; 
import { canEdit } from '../src/userService';

describe('UserService – canEdit', () => { 
    it('Admin kann editieren', () => { 
        expect(canEdit(adminUser)).toBe(true); 
    });

    it('Guest kann nicht editieren', () => { 
        expect(canEdit(guestUser)).toBe(false); 
    }); 
});
```
