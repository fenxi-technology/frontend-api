import { Routes } from '@angular/router';
import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { FciframeComponent } from './fciframe/fciframe.component';


export const Routers: Routes = [

  {
    path: 'fciframe', // iframe
    component: FciframeComponent
  },
  {
    path: 'fcg2', // 图表
    component: Fcg2Component
  },
  {
    path: '',
    loadChildren: './fctemplate/fctemplate.module#FctemplateModule'
  }
];
