export enum Challenge { refactoring, appTx, enablement, stakeholderManagement, innovation, stamina }
export enum TeamRole { productManager, engineer, anchor, designer }
export enum CompanyRole { directContributor, intern }
export interface Pivot { firstName: string, lastName: string, teamRole: TeamRole, companyRole: CompanyRole, desiredChallenges: Challenge[]}
export interface Project { name: string, client: string, challenges: Challenge[]}
