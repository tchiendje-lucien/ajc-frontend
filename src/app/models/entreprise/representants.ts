import { EntrepriseAccount } from "./entreprise";

export class RespoEntreprise {
  oid: number;
  name: string;
  surname: string;
  civility: string;
  email: string;
  numPortable: string;
  numFixe: string;
  function: string;
  logo: string;
  created_at: string;
  updated_at: string;
  entrepriseAccount: EntrepriseAccount;
}
