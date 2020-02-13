import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent = tslib_1.__decorate([
    Component({
        selector: 'error',
        templateUrl: './error.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map