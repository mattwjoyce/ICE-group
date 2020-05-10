export class Ladder {
  constructor (
    public round: number,
    public wins: number,
    public rank: number,
    public year: number,
    public source: string,
    public percentage: number,
    public team: string,
    public sourceid: number,
    public teamid: number,
    public mean_rank: number
  ) {}
}
