import { HomeComponent } from './fcsystem/components/home/home.component';
import { BuildingComponent } from 'src/app/components/building/building.component';
export const Routers = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'building',
        component: BuildingComponent
    },
    {
        path: '',
        loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
    },
    {
        path: '',
        loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
    }
];
//# sourceMappingURL=fc.route.js.map