import { ActivitySectors } from "./settings";
import { RespoEntreprise } from "./representants";
import { Users } from "./users";
import { DemandeProfil } from "./demandeProfil";

export class EntrepriseAccount {
  oid: number;
  name: string;
  social_reason: string;
  another_activitySector: string;
  adress: string;
  pays: string;
  villes: string;
  state: boolean;
  isDelete: boolean;
  logo: string;
  created_at: string;
  updated_at: string;
  activitySectors: ActivitySectors;
  users: Users;
  respoEntreprises: Array<RespoEntreprise>;
  demandeProfil: Array<DemandeProfil>;
}
