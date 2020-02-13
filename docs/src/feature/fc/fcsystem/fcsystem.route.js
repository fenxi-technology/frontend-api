import { SyslogComponent } from './components/syslog/syslog.component';
import { SysmenuComponent } from './components/sysmenu/sysmenu.component';
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
import { SysroleComponent } from './components/sysrole/sysrole.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
export const Routers = [
    {
        path: 'sysmessageDetail',
        component: SysmessagedetailComponent
    },
    {
        path: 'sysuserList',
        component: SysuserComponent
    },
    {
        path: 'sysmenuList',
        component: SysmenuComponent
    },
    {
        path: 'sysroleList',
        component: SysroleComponent
    },
    {
        path: 'syslogList',
        component: SyslogComponent
    }
];
//# sourceMappingURL=fcsystem.route.js.map