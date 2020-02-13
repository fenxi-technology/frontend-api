import * as tslib_1 from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents';
import { SharedModule } from 'src/shared';
import { SyslogComponent } from './components/syslog/syslog.component';
import { SysmenuComponent } from './components/sysmenu/sysmenu.component';
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
import { SysroleComponent } from './components/sysrole/sysrole.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
import { Routers } from './fcsystem.route';
import { SysuseraddComponent } from './components/sysuser/useradd.dialog';
let FcsystemModule = class FcsystemModule {
};
FcsystemModule = tslib_1.__decorate([
    NgModule({
        entryComponents: [SysuseraddComponent],
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule
        ],
        declarations: [
            SysmessagedetailComponent,
            SysuserComponent,
            SysmenuComponent,
            SysroleComponent,
            SyslogComponent,
            SysuseraddComponent
        ],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
    })
], FcsystemModule);
export { FcsystemModule };
//# sourceMappingURL=fcsystem.module.js.map