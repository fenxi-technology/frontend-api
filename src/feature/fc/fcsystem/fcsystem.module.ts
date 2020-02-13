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

@NgModule({
  entryComponents: [SysuseraddComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    SysmessagedetailComponent, // 消息详情
    SysuserComponent, // 用户管理
    SysmenuComponent, // 菜单管理
    SysroleComponent, // 权限管理
    SyslogComponent, // 日志管理
    SysuseraddComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule { }
