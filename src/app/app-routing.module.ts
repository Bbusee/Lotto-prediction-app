import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './screen/main-screen/main-screen.component';

import { GizlilikSozlesmesiComponent } from './component/gizlilik-sozlesmesi/gizlilik-sozlesmesi.component';
import { SayisalLotoTahminleriComponent } from './component/sayisal-loto/sayisal-loto-tahminleri/sayisal-loto-tahminleri.component';
import { SayisalLotoTumSonuclarComponent } from './component/sayisal-loto/sayisal-loto-tum-sonuclar/sayisal-loto-tum-sonuclar.component';
import { SuperLotoTahminleriComponent } from './component/super-loto/super-loto-tahminleri/super-loto-tahminleri.component';
import { SansTopuTahminleriComponent } from './component/sans-topu/sans-topu-tahminleri/sans-topu-tahminleri.component';
import { SayisalLotoAzCikanSayfasiComponent } from './component/sayisal-loto/sayisal-loto-az-cikan-sayfasi/sayisal-loto-az-cikan-sayfasi.component';
import { SayisalLotodaYakinZamandaCikanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi/sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi.component';
import { SayisalLotodaEnCokCikanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-en-cok-cikan-toplar-sayfasi/sayisal-lotoda-en-cok-cikan-toplar-sayfasi.component';
import { SayisalLotodaUzunZamandirCikmayanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-uzun-zamandir-cikmayan-toplar-sayfasi/sayisal-lotoda-uzun-zamandir-cikmayan-toplar-sayfasi.component';
import { SuperLotoTumSonuclarComponent } from './component/super-loto/super-loto-tum-sonuclar/super-loto-tum-sonuclar.component';
import { SuperLotoAzCikanSayfasiComponent } from './component/super-loto/super-loto-az-cikan-sayfasi/super-loto-az-cikan-sayfasi.component';
import { SuperLotoCokCikanSayfasiComponent } from './component/super-loto/super-loto-cok-cikan-sayfasi/super-loto-cok-cikan-sayfasi.component';
import { SuperLotoYakinZamandaCikanlarSayfasiComponent } from './component/super-loto/super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi/super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi.component';
import { SuperLotoUzunZamandirCikmayanlarSayfasiComponent } from './component/super-loto/super-loto-uzun-zamandir-cikmayanlar-sayfasi/super-loto-uzun-zamandir-cikmayanlar-sayfasi.component';
import { SansTopuTumSonuclarComponent } from './component/sans-topu/sans-topu-tum-sonuclar/sans-topu-tum-sonuclar.component';
import { SansTopuAzCikanSayfasiComponent } from './component/sans-topu/sans-topu-az-cikan-sayfasi/sans-topu-az-cikan-sayfasi.component';
import { SansTopuCokCikanSayfasiComponent } from './component/sans-topu/sans-topu-cok-cikan-sayfasi/sans-topu-cok-cikan-sayfasi.component';
import { SansTopuYakinZamandaCikanlarSayfasiComponent } from './component/sans-topu/sans-topu-yakin-zamanda-cikanlar-sayfasi/sans-topu-yakin-zamanda-cikanlar-sayfasi.component';
import { SansTopuUzunZamandirCikmayanlarSayfasiComponent } from './component/sans-topu/sans-topu-uzun-zamandir-cikmayanlar-sayfasi/sans-topu-uzun-zamandir-cikmayanlar-sayfasi.component';
import { OnNumaraTumSonuclarComponent } from './component/on-numara/on-numara-tum-sonuclar/on-numara-tum-sonuclar.component';
import { OnNumaraAzCikanSayfasiComponent } from './component/on-numara/on-numara-az-cikan-sayfasi/on-numara-az-cikan-sayfasi.component';
import { OnNumaraCokCikanSayfasiComponent } from './component/on-numara/on-numara-cok-cikan-sayfasi/on-numara-cok-cikan-sayfasi.component';
import { OnNumaraYakinZamandaCikanlarSayfasiComponent } from './component/on-numara/on-numara-yakin-zamanda-cikanlar-sayfasi/on-numara-yakin-zamanda-cikanlar-sayfasi.component';
import { OnNumaraUzunZamandirCikmayanlarSayfasiComponent } from './component/on-numara/on-numara-uzun-zamandir-cikmayanlar-sayfasi/on-numara-uzun-zamandir-cikmayanlar-sayfasi.component';
import { OnNumaraTahminleriComponent } from './component/on-numara/on-numara-tahminleri/on-numara-tahminleri.component';

const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: MainScreenComponent },
  {
    path: 'sayisal-loto-tahminleri',
    component: SayisalLotoTahminleriComponent,
  },
  {
    path: 'sayisal-loto-tum-yillarin-sonuclari',
    component: SayisalLotoTumSonuclarComponent,
  },
  {
    path: 'super-loto-tahminleri',
    component: SuperLotoTahminleriComponent,
  },
  {
    path: 'sans-topu-tahminleri',
    component: SansTopuTahminleriComponent,
  },
  {
    path: 'sayisal-lotoda-en-az-cikan-toplar-sayfasi',
    component: SayisalLotoAzCikanSayfasiComponent,
  },
  {
    path: 'sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi',
    component: SayisalLotodaYakinZamandaCikanToplarSayfasiComponent,
  },
  {
    path: 'sayisal-lotoda-en-cok-cikan-toplar-sayfasi',
    component: SayisalLotodaEnCokCikanToplarSayfasiComponent,
  },
  {
    path: 'sayisal-lotoda-uzun-zamandir-cikmayan-toplar-sayfasi',
    component: SayisalLotodaUzunZamandirCikmayanToplarSayfasiComponent,
  },
  {
    path: 'super-loto-tum-sonuclar',
    component: SuperLotoTumSonuclarComponent,
  },
  {
    path: 'super-loto-az-cikan-sayfasi',
    component: SuperLotoAzCikanSayfasiComponent,
  },
  {
    path: 'super-loto-cok-cikan-sayfasi',
    component: SuperLotoCokCikanSayfasiComponent,
  },
  {
    path: 'super-loto-yakin-zamanda-cikanlar-sayfasi',
    component: SuperLotoYakinZamandaCikanlarSayfasiComponent,
  },
  {
    path: 'super-loto-uzun-zamandir-cikmayanlar-sayfasi',
    component: SuperLotoUzunZamandirCikmayanlarSayfasiComponent,
  },
  {
    path: 'sans-topu-tum-sonuclar',
    component: SansTopuTumSonuclarComponent,
  },
  {
    path: 'sans-topu-az-cikan-sayfasi',
    component: SansTopuAzCikanSayfasiComponent,
  },
  {
    path: 'sans-topu-cok-cikan-sayfasi',
    component: SansTopuCokCikanSayfasiComponent,
  },
  {
    path: 'sans-topu-yakin-zamanda-cikanlar-sayfasi',
    component: SansTopuYakinZamandaCikanlarSayfasiComponent,
  },
  {
    path: 'sans-topu-uzun-zamandir-cikmayanlar-sayfasi',
    component: SansTopuUzunZamandirCikmayanlarSayfasiComponent,
  },
  {
    path: 'on-numara-tum-sonuclar',
    component: OnNumaraTumSonuclarComponent,
  },
  {
    path: 'on-numara-az-cikan-sayfasi',
    component: OnNumaraAzCikanSayfasiComponent,
  },
  {
    path: 'on-numara-cok-cikan-sayfasi',
    component: OnNumaraCokCikanSayfasiComponent,
  },
  {
    path: 'on-numara-yakin-zamanda-cikanlar-sayfasi',
    component: OnNumaraYakinZamandaCikanlarSayfasiComponent,
  },
  {
    path: 'on-numara-uzun-zamandir-cikmayanlar-sayfasi',
    component: OnNumaraUzunZamandirCikmayanlarSayfasiComponent,
  },
  {
    path: 'on-numara-tahminleri',
    component: OnNumaraTahminleriComponent,
  },
  {
    path: 'gizlilik-sozlesmesi',
    component: GizlilikSozlesmesiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
