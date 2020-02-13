import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { Routers } from './fcdemo.route';
import { FciframeComponent } from './fciframe/fciframe.component';
let FcdemoModule = class FcdemoModule {
};
FcdemoModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            SpreadSheetsModule,
            FccomponentModule
        ],
        declarations: [
            FciframeComponent,
            Fcg2Component,
        ],
        providers: []
    })
], FcdemoModule);
export { FcdemoModule };
//# sourceMappingURL=fcdemo.module.js.map