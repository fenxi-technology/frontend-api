import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { FciframeComponent } from './fciframe/fciframe.component';
export const Routers = [
    {
        path: 'fciframe',
        component: FciframeComponent
    },
    {
        path: 'fcg2',
        component: Fcg2Component
    },
    {
        path: '',
        loadChildren: './fctemplate/fctemplate.module#FctemplateModule'
    }
];
//# sourceMappingURL=fcdemo.route.js.map