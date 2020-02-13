import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.dev';
let SignupComponent = class SignupComponent {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
        this._projectName = environment.projectName;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            uname: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
};
SignupComponent = tslib_1.__decorate([
    Component({
        selector: 'signup',
        templateUrl: './signup.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, FormBuilder])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map