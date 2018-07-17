import {Challenge, CompanyRole, Pivot, Project, TeamRole} from "../definitions";

const replaceVehicle = {name: "Replace Vehicle", client: "Farmers", challenges: [Challenge.STAMINA, Challenge.STAKEHOLDER_MANAGERMENT]};
const foxipedia = {name: "Foxipedia", client: "Fox", challenges: [Challenge.APP_TX, Challenge.STAKEHOLDER_MANAGERMENT]};
const storeFront = {name: "storeFront", client: "CoreLogic", challenges: [Challenge.REFACTORING, Challenge.STAKEHOLDER_MANAGERMENT]};
const AIG = {name: "Store Front", client: "CoreLogic", challenges: [Challenge.INNOVATION]};
export const projects = [replaceVehicle, foxipedia, AIG];

const Jonathan = {firstName: "Jonathan", lastName: "Sirlin", teamRole: TeamRole.PRODUCT_MANAGER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Dan = {firstName: "Dan", lastName: "Kaplan", teamRole: TeamRole.ENGINEER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Joe = {firstName: "Joe", lastName: "Greubel", teamRole: TeamRole.ANCHOR, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Desmond = {firstName: "Desmond", lastName: "Pompa Alarcón Rawls", teamRole: TeamRole.ENGINEER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Cari = {firstName: "Cari", lastName: "Dean", teamRole: TeamRole.ENGINEER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Dirk = {firstName: "Dirk", lastName: "Janssen", teamRole: TeamRole.ENGINEER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Mallory = {firstName: "Mallory", lastName: "Sirlin", teamRole: TeamRole.ENGINEER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Paul = {firstName: "Paul", lastName: "Farino", teamRole: TeamRole.DESIGNER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
const Bryan = {firstName: "Bryan", lastName: "Villagonzalo", teamRole: TeamRole.DESIGNER, companyRole: CompanyRole.DIRECT_CONTRIBUTOR, desiredChallenges: [Challenge.STAKEHOLDER_MANAGERMENT]};
export const pivots = [Jonathan, Dan, Joe, Desmond, Cari, Dirk, Mallory, Paul, Bryan];

export interface AllocationsState {
  projects: Project[],
  pivots: Pivot[]
}

export const initialState: AllocationsState = {
  projects: projects,
  pivots: pivots
};
