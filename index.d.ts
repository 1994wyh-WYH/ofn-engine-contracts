declare module "ofn-engine-contracts" {
  export const ActivityLimiter : any;
  export const AssetRegistry : any;
  export const BalanceManager : any;
  export const ContractProvider : any;
  export const Document : any;
  export const DoublyLinkedList : any;
  export const Endorsement : any;
  export const EntityRegistry : any;
  export const Settlement : any;

  export const summary : Summary;
  export const addresses : any;
}

// Type declarations 

export interface Entity {
  balances: AssociatedShares[];
  delegates: string[];
  email: string;
  id: string;
  name: string;
  owner: string;
  password: string;
  phone: string;
  privateKey: string;
  tokens: {
    ofn: string;
  };
}

export interface AssociatedShares {
  id: string;
  shares: number;
}

export interface Asset {
  id: string;
  name: string;
  shareNumber: number;
  approvals: Identity[];
  distribution: AssociatedShares[];
}

export interface Identity {
  id: string;
  owner: string;
}

export interface Transaction {
  buyerIx: number;
  sellerIx: number;
  asset: string;
  numberOfShares: number;
  price: number;
}

export interface Summary {
  controller: string;
  accounts: Entity[];
  assets: Asset[];
  endorsements: {
    entities: [number, number[]][];
    assets: number[][];
  };
  transactions: Transaction[];
  ofnToken: string;
}
