import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';
import { Fcg2radarComponent } from './fcg2radar/fcg2radar.component';
import { Fcg2barComponent } from './fcg2bar/fcg2bar.component';
import { Fcg2linerComponent } from './fcg2line/fcg2line.component';
import { Fcg2minibarComponent } from './fcg2minibar/fcg2minibar.component';
import { Fcg2pieComponent } from './fcg2pie/fcg2pie.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FcimgviewComponent, // 组件-图片查看
    Fcg2radarComponent,
    Fcg2barComponent,
    Fcg2linerComponent,
    Fcg2minibarComponent,
    Fcg2pieComponent
  ],
  exports: [
    FcimgviewComponent,
    Fcg2radarComponent,
    Fcg2barComponent,
    Fcg2linerComponent,
    Fcg2minibarComponent,
    Fcg2pieComponent
  ]
})
export class FccomponentModule { }
