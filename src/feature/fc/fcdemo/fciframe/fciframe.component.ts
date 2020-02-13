
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'fciframe',
  templateUrl: './fciframe.component.html',
  styles: [``]
})
export class FciframeComponent {
  // iframe地址
  iframeUrl: SafeResourceUrl
  constructor(public router: Router, public activedRoute: ActivatedRoute, public sanitizer: DomSanitizer) {
    let url: string = 'http://localhost:8100/#/pages/user'
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
