import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
import { CacheService } from 'src/fccore/service/cache.service';
const PROJECT_NAME = environment.projectName;
let SigninComponent = class SigninComponent {
    constructor(router) {
        this.router = router;
        this.hasError = false;
        this.msg = '用户名或者密码错误';
        this.userId = 'admin';
        this.password = 'admin';
    }
    ngOnInit() {
        if (this.loginValid(this.userId, this.password)) {
            this.router.navigate([
                '/' + environment.pid.toLocaleLowerCase() + '/home'
            ]);
        }
    }
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    login() {
        if (this.loginValid(this.userId, this.password)) {
            this.hasError = false;
            CacheService.setS('userinfo', { USERCODE: 'admin' });
            CacheService.setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
            this.router.navigate([
                '/' + environment.pid.toLocaleLowerCase() + '/home'
            ]);
        }
        else {
            this.hasError = true;
        }
    }
    loginValid(userId, password) {
        if (userId === 'admin' && password === 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
};
SigninComponent = tslib_1.__decorate([
    Component({
        selector: 'signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.less']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map