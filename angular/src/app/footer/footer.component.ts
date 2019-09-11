import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private router:Router) {
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/facebook.svg')
      );
      iconRegistry.addSvgIcon(
      'twittor',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/iconmonstr-twitter-1.svg')
      );
      iconRegistry.addSvgIcon(
        'instagram',
        sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/iconmonstr-instagram-12.svg')
        );
        iconRegistry.addSvgIcon(
          'copyright',
          sanitizer.bypassSecurityTrustResourceUrl('assets/pictures/copyright-symbol.svg')
          );
   }

  ngOnInit() {
  }
  about() {
    this.router.navigateByUrl("about");
  }
}
