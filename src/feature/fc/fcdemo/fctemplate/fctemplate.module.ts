/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-16 15:53:24
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Routers } from './fctemplate.route';
import { FctemplatedetailComponent } from './fctempatedetail/fctemplatedetail.component';
import { FctemplateformComponent } from './fctemplateform/fctemplateform.component';
import { FctemplatelistComponent } from './fctemplatelist/fctemplatelist.component';
import { FctemplatetreelistComponent } from './fctemplatetreelist/fctemplatetreelist.component';
import { FcRegistrySensorComponent } from './sensorRegistry/sensorregistry.dialog';
import { SyseditpasswordComponent } from '../../../../app/components/dialog/syseditpassword.dialog';
@NgModule({
  entryComponents: [FcRegistrySensorComponent],

  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FctemplatedetailComponent,
    FctemplateformComponent,
    FctemplatelistComponent,
    FctemplatetreelistComponent,
    FcRegistrySensorComponent,
  ],
  providers: []
})
export class FctemplateModule { }
