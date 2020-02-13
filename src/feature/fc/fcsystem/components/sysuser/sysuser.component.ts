

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SyseditpasswordComponent } from '../../../../../app/components/dialog/syseditpassword.dialog';
import { NzModalService } from 'ng-zorro-antd';
import { FcRegistrySensorComponent } from '../../../fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog';
import { SysuseraddComponent } from './useradd.dialog';

@Component({
  selector: 'sys-user',
  templateUrl: './sysuser.component.html',
  styles: [
    `
        .fc-searchbar-item {
            display: flex;
            flex-direction: row;
        }
        .fc-searchbar-label {
            width: 25%;
            text-align: right;
            padding-right: 10px;
            line-height: 32px;
        }
        .fc-searchbar-control {
            width: 75%;
        }
    `
  ]
})
export class SysuserComponent implements OnInit {
  listOfData: any[] = [];
  validateForm: FormGroup;
  controlArray: any[] = [];
  isCollapse = true;
  searchObj = {
    name: '',
    position: '',
    auth: '',
    description:''
  }
  constructor(public router: Router, public activedRoute: ActivatedRoute, public modalService: NzModalService,
  ) { }
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `张三 ${i}`,
        position: '科长',
        auth: `权限. ${i}`,
        description:'123123'
      });
    }
  }

  addUser() {
    const modal = this.modalService.create({
      nzTitle: '添加用户',
      nzContent: SysuseraddComponent,
      nzWrapClassName: 'adduser-dialog-wrap',
      nzComponentParams: {
        userName: 'userName',
        auth: 'auth',
        description: 'description',
      },
      nzFooter: null
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
    setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.auth = 'passWord is changed';
    }, 2000);
  }


}


