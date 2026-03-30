import type { CanActivate } from '@nestjs/common';
import { Injectable, UseGuards } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate() {
    // Single-user local-first: no admin gating
    return true;
  }
}

/**
 * This guard is used to protect routes/queries/mutations that require a user to be administrator.
 *
 * @example
 *
 * ```typescript
 * \@Admin()
 * \@Mutation(() => UserType)
 * createAccount(userInput: UserInput) {
 *   // ...
 * }
 * ```
 */
export const Admin = () => {
  return UseGuards(AdminGuard);
};
