export class SonCikanResponse {
    toplarStr: string = '';
    cekilisTarihi: string = '';
    cekilisNo: number = 0;
  
    getToplar(): string[] {
    return this.toplarStr.split(',');
  }
  }
  