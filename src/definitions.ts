export enum Challenge { REFACTORING, APP_TX, ENABLEMENT, STAKEHOLDER_MANAGERMENT, INNOVATION, STAMINA }
export enum TeamRole { PRODUCT_MANAGER, ENGINEER, ANCHOR, DESIGNER }
export enum CompanyRole { DIRECT_CONTRIBUTOR, INTERN, MANAGER }
export interface Pivot { firstName: string, lastName: string, teamRole: TeamRole, companyRole: CompanyRole, desiredChallenges: Challenge[]}
export interface Project { id: number, name: string, client: string, challenges: Challenge[]}
