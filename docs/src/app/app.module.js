import * as tslib_1 from "tslib";
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FccoreModule } from 'src/fccore/fccore.module';
import { UserService } from 'src/fccore/service/user.service';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { SyseditpasswordComponent } from './components/dialog/syseditpassword.dialog';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LayoutService } from './service/layout.service';
import { FcRouteReuseStrategy } from './service/routereusestrategy.service';
import { ShareService } from './share.service';
registerLocaleData(zh);
let AppModule = class AppModule {
    constructor() { }
};
AppModule = tslib_1.__decorate([
    NgModule({
        entryComponents: [SyseditpasswordComponent],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            RouterModule.forRoot(AppRoutes),
            FccoreModule,
            NgZorroAntdModule
        ],
        declarations: [
            AppComponent,
            LayoutComponent,
            ErrorComponent,
            SigninComponent,
            ForgotComponent,
            LockscreenComponent,
            SignupComponent,
            SyseditpasswordComponent
        ],
        providers: [
            UserService,
            ShareService,
            LayoutService,
            { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy },
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            }
        ],
        bootstrap: [AppComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map