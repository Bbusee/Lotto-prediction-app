import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ToTopComponent {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isShow = scrollPosition >= this.topPosToStartShowing;
  }
  scrollToTop() {
    const scrollStep = -window.scrollY / (150 / 15); // 500ms duration, adjust as needed
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Scroll interval, adjust as needed
  }

  // scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     // behavior: 'smooth',
  //   });
  // }
}
