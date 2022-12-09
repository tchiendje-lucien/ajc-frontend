import { MissionsOffre } from './missionsOffre';
import { CompetenceOffre } from "./competenceOffre";
import { ActivitySectors } from "./settings";
import { EntrepriseAccount } from "./entreprise";
export class OffreEmplois {
  oid: number;
  title: string;
  detail: string;
  nbPlace: number;
  state: boolean;
  isDelete: boolean;
  dateline: string;
  pays: string;
  ville: string;
  typeEmploi: string;
  image: string;
  typeContrat: string;
  created_at: string;
  update_at: string;
  activitySectors: ActivitySectors;
  entrepriseAccount: EntrepriseAccount;
  competenceOffres: Array<CompetenceOffre>;
  missionsOffres: Array<MissionsOffre>;
}
