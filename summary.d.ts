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
