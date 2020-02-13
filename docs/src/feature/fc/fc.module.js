import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';
import { HomeComponent } from './fcsystem/components/home/home.component';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { FccomponentModule } from 'src/fccomponents';
let FcModule = class FcModule {
};
FcModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            FccomponentModule,
            RouterModule.forChild(Routers)
        ],
        declarations: [
            HomeComponent,
            BuildingComponent
        ],
        providers: []
    })
], FcModule);
export { FcModule };
//# sourceMappingURL=fc.module.js.map