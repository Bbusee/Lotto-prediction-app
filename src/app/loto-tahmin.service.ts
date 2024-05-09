import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TekrarTip } from './constants/tekrar-tip';
import { ZamanTip } from './constants/zaman-tip';
import { TahminTip } from './constants/tahmin-tip';
import { Observable } from 'rxjs';
import { SayisalLotoResponse } from './models/sayisal-loto.model';

@Injectable({
  providedIn: 'root',
})
export class LotoTahminService {
  constructor(private readonly http: HttpClient) {}
}
