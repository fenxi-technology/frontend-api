
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fc-templatedetail',
    templateUrl: './fctemplatedetail.component.html',
    styles: [
        `
     
    `
    ]
})
export class FctemplatedetailComponent {
    constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
