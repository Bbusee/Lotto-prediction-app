import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { BaseUrlInterceptor } from "./interceptors/base-url.interceptor";

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
// import { MainScreenComponent } from './screens/main-screen/main-screen.component';
// import { IstatistikScreenComponent } from './screens/istatistik-screen/istatistik-screen.component';
// import { SayisalLatestComponent } from './component/sayisal-loto/sayisal-latest/sayisal-latest.component';
import { SuperLotoComponent } from './component/super-loto/super-loto/super-loto.component';
import { OnNumaraComponent } from "./component/on-numara/on-numara/on-numara.component";
import { SansTopuComponent } from "./component/sans-topu/sans-topu/sans-topu.component";
import { TopComponent } from "./component/toplar/top/top.component";
import { SayisalLotoTahminleriComponent } from './component/sayisal-loto/sayisal-loto-tahminleri/sayisal-loto-tahminleri.component';
import { SayisalLotoMakineTahminleriKosesiComponent } from './component/sayisal-loto/sayisal-loto-makine-tahminleri-kosesi/sayisal-loto-makine-tahminleri-kosesi.component';
import { IstatistikselSayisalLotoTahminleriKosesiComponent } from './component/istatisik/istatiksel-sayisal-loto-tahminleri-kosesi/istatiksel-sayisal-loto-tahminleri-kosesi.component';
import { SayisalLotoTumSonuclarComponent } from './component/sayisal-loto/sayisal-loto-tum-sonuclar/sayisal-loto-tum-sonuclar.component';

import { SayisalLotoCokCikanComponent } from "./component/sayisal-loto/sayisal-loto-cok-cikan/sayisal-loto-cok-cikan.component";
import { SayisalLotoAzCikanComponent } from './component/sayisal-loto/sayisal-loto-az-cikan/sayisal-loto-az-cikan.component';
import { SayisalLotoUzunZamandirCikmayanlarComponent } from './component/sayisal-loto/sayisal-loto-uzun-zamandir-cikmayanlar/sayisal-loto-uzun-zamandir-cikmayanlar.component';
import { SayisalLotoYakinZamandaCikanlarComponent } from './component/sayisal-loto/sayisal-loto-yakin-zamanda-cikanlar/sayisal-loto-yakin-zamanda-cikanlar.component';
import { SuperLotoTahminleriComponent } from './component/super-loto/super-loto-tahminleri/super-loto-tahminleri.component';
import { IstatistikselSuperLotoTahminleriKosesiComponent } from './component/istatisik/istatiksel-super-loto-tahminleri-kosesi/istatiksel-super-loto-tahminleri-kosesi.component';
import { SuperLotoMakineTahminleriKosesiComponent } from './component/super-loto/super-loto-makine-tahminleri-kosesi/super-loto-makine-tahminleri-kosesi.component';
import { SansTopuMakineTahminleriKosesiComponent } from './component/sans-topu/sans-topu-makine-tahminleri-kosesi/sans-topu-makine-tahminleri-kosesi.component';
import { SansTopuTahminleriComponent } from './component/sans-topu/sans-topu-tahminleri/sans-topu-tahminleri.component';
import { IstatistikselSansTopuTahminleriKosesiComponent } from './component/istatisik/istatiksel-sans-topu-tahminleri-kosesi/istatiksel-sans-topu-tahminleri-kosesi.component';
import { SayisalLotoAzCikanSayfasiComponent } from './component/sayisal-loto/sayisal-loto-az-cikan-sayfasi/sayisal-loto-az-cikan-sayfasi.component';
import { SayisalLotodaEnCokCikanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-en-cok-cikan-toplar-sayfasi/sayisal-lotoda-en-cok-cikan-toplar-sayfasi.component';
import { SayisalLotodaUzunZamandirCikmayanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-uzun-zamandir-cikmayan-toplar-sayfasi/sayisal-lotoda-uzun-zamandir-cikmayan-toplar-sayfasi.component';
import { SayisalLotodaYakinZamandaCikanToplarSayfasiComponent } from './component/sayisal-loto/sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi/sayisal-lotoda-yakin-zamanda-cikan-toplar-sayfasi.component';
import { SuperLotoAzCikanComponent } from './component/super-loto/super-loto-az-cikan/super-loto-az-cikan.component';
import { SuperLotoAzCikanSayfasiComponent } from './component/super-loto/super-loto-az-cikan-sayfasi/super-loto-az-cikan-sayfasi.component';
import { SuperLotoTumSonuclarComponent } from './component/super-loto/super-loto-tum-sonuclar/super-loto-tum-sonuclar.component';
import { SayisalLotoComponent } from './component/sayisal-loto/sayisal-loto/sayisal-loto.component';
import { BonusTopComponent } from "./component/toplar/bonus-top/bonus-top.component";
import { SuperLotoYakinZamandaCikanlarComponent } from './component/super-loto/super-loto-yakin-zamanda-cikanlar/super-loto-yakin-zamanda-cikanlar.component';
import { SuperLotoYakinZamandaCikanlarSayfasiComponent } from './component/super-loto/super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi/super-loto-yakin-zamanda-zamanda-cikanlar-sayfasi.component';
import { SuperLotoCokCikanComponent } from './component/super-loto/super-loto-cok-cikan/super-loto-cok-cikan.component';
import { SuperLotoCokCikanSayfasiComponent } from './component/super-loto/super-loto-cok-cikan-sayfasi/super-loto-cok-cikan-sayfasi.component';
import { SuperLotoUzunZamandirCikmayanlarComponent } from './component/super-loto/super-loto-uzun-zamandir-cikmayanlar/super-loto-uzun-zamandir-cikmayanlar.component';
import { SuperLotoUzunZamandirCikmayanlarSayfasiComponent } from './component/super-loto/super-loto-uzun-zamandir-cikmayanlar-sayfasi/super-loto-uzun-zamandir-cikmayanlar-sayfasi.component';
import { SansTopuTumSonuclarComponent } from './component/sans-topu/sans-topu-tum-sonuclar/sans-topu-tum-sonuclar.component';
import { SansTopuAzCikanComponent } from './component/sans-topu/sans-topu-az-cikan/sans-topu-az-cikan.component';
import { SansTopuAzCikanSayfasiComponent } from './component/sans-topu/sans-topu-az-cikan-sayfasi/sans-topu-az-cikan-sayfasi.component';
import { SansTopuYakinZamandaCikanlarComponent } from './component/sans-topu/sans-topu-yakin-zamanda-cikanlar/sans-topu-yakin-zamanda-cikanlar.component';
import { SansTopuYakinZamandaCikanlarSayfasiComponent } from './component/sans-topu/sans-topu-yakin-zamanda-cikanlar-sayfasi/sans-topu-yakin-zamanda-cikanlar-sayfasi.component';
import { SansTopuCokCikanComponent } from './component/sans-topu/sans-topu-cok-cikan/sans-topu-cok-cikan.component';
import { SansTopuCokCikanSayfasiComponent } from './component/sans-topu/sans-topu-cok-cikan-sayfasi/sans-topu-cok-cikan-sayfasi.component';
import { SansTopuUzunZamandirCikmayanlarComponent } from './component/sans-topu/sans-topu-uzun-zamandir-cikamayanlar/sans-topu-uzun-zamandir-cikamayanlar.component';
import { SansTopuUzunZamandirCikmayanlarSayfasiComponent } from './component/sans-topu/sans-topu-uzun-zamandir-cikmayanlar-sayfasi/sans-topu-uzun-zamandir-cikmayanlar-sayfasi.component';
import { OnNumaraTumSonuclarComponent } from './component/on-numara/on-numara-tum-sonuclar/on-numara-tum-sonuclar.component';
import { OnNumaraAzCikanComponent } from './component/on-numara/on-numara-az-cikan/on-numara-az-cikan.component';
import { OnNumaraAzCikanSayfasiComponent } from './component/on-numara/on-numara-az-cikan-sayfasi/on-numara-az-cikan-sayfasi.component';
import { OnNumaraYakinZamandaCikanlarComponent } from './component/on-numara/on-numara-yakin-zamanda-cikanlar/on-numara-yakin-zamanda-cikanlar.component';
import { OnNumaraYakinZamandaCikanlarSayfasiComponent } from './component/on-numara/on-numara-yakin-zamanda-cikanlar-sayfasi/on-numara-yakin-zamanda-cikanlar-sayfasi.component';
import { OnNumaraCokCikanComponent } from './component/on-numara/on-numara-cok-cikan/on-numara-cok-cikan.component';
import { OnNumaraCokCikanSayfasiComponent } from './component/on-numara/on-numara-cok-cikan-sayfasi/on-numara-cok-cikan-sayfasi.component';
import { OnNumaraUzunZamandirCikmayanlarComponent } from './component/on-numara/on-numara-uzun-zamandir-cikmayanlar/on-numara-uzun-zamandir-cikmayanlar.component';
import { OnNumaraUzunZamandirCikmayanlarSayfasiComponent } from './component/on-numara/on-numara-uzun-zamandir-cikmayanlar-sayfasi/on-numara-uzun-zamandir-cikmayanlar-sayfasi.component';
import { OnNumaraMakineTahminleriComponent } from './component/on-numara/on-numara-makine-tahminleri/on-numara-makine-tahminleri.component';
import { OnNumaraTahminleriComponent } from './component/on-numara/on-numara-tahminleri/on-numara-tahminleri.component';
import { IstatistikselOnNumaraTahminleriKosesiComponent } from './component/istatisik/istatiksel-on-numara-tahminleri-kosesi/istatiksel-on-numara-tahminleri-kosesi.component';

import { GizlilikSozlesmesiComponent } from './component/gizlilik-sozlesmesi/gizlilik-sozlesmesi.component';
import { Routes } from '@angular/router';
import { JokerTopComponent } from './component/toplar/joker-top/joker-top.component';
import { ToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import { EkstraTopComponent } from './component/toplar/ekstra-top/ekstra-top.component';
import { MainScreenComponent } from "./screen/main-screen/main-screen.component";
import { IstatistikScreenComponent } from './screen/istatistik-screen/istatistik-screen.component';
//   {
//     path: '',
//     component: MainScreenComponent,
//   },
// ];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SuperLotoComponent, 
    // ScreenComponent, 
    IstatistikScreenComponent, 
    MainScreenComponent,
    OnNumaraComponent,
    SansTopuComponent,
    TopComponent,
    SayisalLotoTahminleriComponent,
    SayisalLotoMakineTahminleriKosesiComponent,
    IstatistikselSayisalLotoTahminleriKosesiComponent,
    SayisalLotoTumSonuclarComponent,
    SayisalLotoCokCikanComponent,
    SayisalLotoAzCikanComponent,
    SayisalLotoUzunZamandirCikmayanlarComponent,
    SayisalLotoYakinZamandaCikanlarComponent,
    SuperLotoTahminleriComponent,
    IstatistikselSuperLotoTahminleriKosesiComponent,
    SuperLotoMakineTahminleriKosesiComponent,
    SansTopuMakineTahminleriKosesiComponent,
    SansTopuTahminleriComponent,
    IstatistikselSansTopuTahminleriKosesiComponent,
    SayisalLotoAzCikanSayfasiComponent,
    SayisalLotodaEnCokCikanToplarSayfasiComponent,
    SayisalLotodaUzunZamandirCikmayanToplarSayfasiComponent,
    SayisalLotodaYakinZamandaCikanToplarSayfasiComponent,
    SuperLotoAzCikanComponent,
    SuperLotoAzCikanSayfasiComponent,
    SuperLotoTumSonuclarComponent,
    SayisalLotoComponent,
    BonusTopComponent,
    SuperLotoYakinZamandaCikanlarComponent,
    SuperLotoYakinZamandaCikanlarSayfasiComponent,
    SuperLotoCokCikanComponent,
    SuperLotoCokCikanSayfasiComponent,
    SuperLotoUzunZamandirCikmayanlarComponent,
    SuperLotoUzunZamandirCikmayanlarSayfasiComponent,
    SansTopuTumSonuclarComponent,
    SansTopuAzCikanComponent,
    SansTopuAzCikanSayfasiComponent,
    SansTopuYakinZamandaCikanlarComponent,
    SansTopuYakinZamandaCikanlarSayfasiComponent,
    SansTopuCokCikanComponent,
    SansTopuCokCikanSayfasiComponent,
    SansTopuUzunZamandirCikmayanlarComponent,
    SansTopuUzunZamandirCikmayanlarSayfasiComponent,
    OnNumaraTumSonuclarComponent,
    OnNumaraAzCikanComponent,
    OnNumaraAzCikanSayfasiComponent,
    OnNumaraYakinZamandaCikanlarComponent,
    OnNumaraYakinZamandaCikanlarSayfasiComponent,
    OnNumaraCokCikanComponent,
    OnNumaraCokCikanSayfasiComponent,
    OnNumaraUzunZamandirCikmayanlarComponent,
    OnNumaraUzunZamandirCikmayanlarSayfasiComponent,
    OnNumaraMakineTahminleriComponent,
    OnNumaraTahminleriComponent,
    IstatistikselOnNumaraTahminleriKosesiComponent,
    GizlilikSozlesmesiComponent,
    JokerTopComponent,
    ToTopComponent,
    EkstraTopComponent







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
export const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
];