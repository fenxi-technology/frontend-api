import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
let FciframeComponent = class FciframeComponent {
    constructor(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        let url = 'http://localhost:8100/#/pages/user';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
FciframeComponent = tslib_1.__decorate([
    Component({
        selector: 'fciframe',
        templateUrl: './fciframe.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, DomSanitizer])
], FciframeComponent);
export { FciframeComponent };
//# sourceMappingURL=fciframe.component.js.map