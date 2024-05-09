import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SonCikanResponse } from './models/son-cikan.model';

@Injectable({
  providedIn: 'root',
})
export class SonCikanService {
  constructor(private readonly http: HttpClient) {}

  onNumaraSonCikan(): Observable<SonCikanResponse> {
    const url: string = `/OnNumara/SonSonucGet`;
    return this.http.get<SonCikanResponse>(url);
  }

  sansTopuSonCikan(): Observable<SonCikanResponse> {
    const url: string = `/SansTopu/SonSonucGet`;
    return this.http.get<SonCikanResponse>(url);
  }

  sayisalLotoSonCikan(): Observable<SonCikanResponse> {
    const url: string = `/SayisalLoto/SonSonucGet`;
    return this.http.get<SonCikanResponse>(url);
  }

  superLotoSonCikan(): Observable<SonCikanResponse> {
    const url: string = `/SuperLoto/SonSonucGet`;
    return this.http.get<SonCikanResponse>(url);
  }
}
