import { loadStdlib } from "@reach-sh/stdlib";


const Reach = loadStdlib('ALGO');
export const fmt = (x) => Reach.formatCurrency(x, 4);

export const baseImageUrl = "https://gateway.pinata.cloud/ipfs/";