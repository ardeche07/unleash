/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ServiceAccountSchema } from './serviceAccountSchema';
import type { RoleSchema } from './roleSchema';

export interface ServiceAccountsSchema {
    serviceAccounts: ServiceAccountSchema[];
    rootRoles?: RoleSchema[];
}