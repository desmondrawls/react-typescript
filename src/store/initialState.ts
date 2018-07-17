import {Challenge, CompanyRole, TeamRole} from "../definitions";

const replaceVehicle = {name: "Replace Vehicle", client: "Farmers", challenges: [Challenge.stamina, Challenge.stakeholderManagement]};
const foxipedia = {name: "Foxipedia", client: "Fox", challenges: [Challenge.appTx, Challenge.stakeholderManagement]};
const storeFront = {name: "storeFront", client: "CoreLogic", challenges: [Challenge.refactoring, Challenge.stakeholderManagement]};
const AIG = {name: "Store Front", client: "CoreLogic", challenges: [Challenge.innovation]};
export const projects = [replaceVehicle, foxipedia, AIG];

const Jonathan = {firstName: "Jonathan", lastName: "Sirlin", teamRole: TeamRole.productManager, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Dan = {firstName: "Dan", lastName: "Kaplan", teamRole: TeamRole.engineer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Joe = {firstName: "Joe", lastName: "Greubel", teamRole: TeamRole.anchor, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Desmond = {firstName: "Desmond", lastName: "Pompa Alarcón Rawls", teamRole: TeamRole.engineer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Cari = {firstName: "Cari", lastName: "Dean", teamRole: TeamRole.engineer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Dirk = {firstName: "Dirk", lastName: "Janssen", teamRole: TeamRole.engineer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Mallory = {firstName: "Mallory", lastName: "Sirlin", teamRole: TeamRole.engineer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Paul = {firstName: "Paul", lastName: "Sirlin", teamRole: TeamRole.designer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
const Bryan = {firstName: "Bryan", lastName: "Sirlin", teamRole: TeamRole.designer, companyRole: CompanyRole.directContributor, desiredChallenges: [Challenge.stakeholderManagement]};
export const pivots = [Jonathan, Dan, Joe, Desmond, Cari, Dirk, Mallory, Paul, Bryan];

export const initialState = {
  projects: projects,
  pivots: pivots
};
