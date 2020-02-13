import { Routes } from '@angular/router'
import { HomeComponent } from './fcsystem/components/home/home.component';
import { BuildingComponent } from 'src/app/components/building/building.component';
export const Routers: Routes = [
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
    path: 'building', // 正在开发中
    component: BuildingComponent
  },
  {
    path: '', // demo组件
    loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
  },
  {
    path: '', // system
    loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
  }
]
