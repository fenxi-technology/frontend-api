import { ISensor } from './../../../../../fccore/sensor';
import { DaoService } from './../../../../../fccore/service/dao.service';


import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SyseditpasswordComponent } from '../../../../../app/components/dialog/syseditpassword.dialog';
import { NzModalService } from 'ng-zorro-antd';
import { FcRegistrySensorComponent } from '../sensorRegistry/sensorregistry.dialog';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

@Component({
    selector: 'fc-templatelist',
    templateUrl: './fctemplatelist.component.html',
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
export class FctemplatelistComponent implements OnInit {
    listOfData: ISensor[] = [];
    selector = '';
    validateForm: FormGroup;
    controlArray: any[] = [];
    isCollapse = true;
    searchObj = {
      name: '',
      img: '',
      type: '',
      description:''
    };
    // checkedValue: boolean[] = [];

    constructor(public router: Router, public activedRoute: ActivatedRoute,
                public modalService: NzModalService, public daoService: DaoService) { }
    ngOnInit(): void {
      this.daoService.getSensors().subscribe(data => this.listOfData = data.data);
    }

    sensorQueryAll() {
      this.daoService.getSensors().subscribe(data => this.listOfData = data.data);
    }

    sensorQuery() {
      if(this.searchObj.name!=='') {
        this.daoService.getOneSensor(this.searchObj.name).subscribe(
          data => {
            this.listOfData = [];
            console.log(data.code);
            if(data.code===200) {
              this.listOfData.push(data.data);}
            this.searchObj.name = '';
        });
      }
    }

    sensorDelete() {
      const checkedValue: boolean[] = [];
      const inputElements = document.getElementsByTagName('input');
      for(let i=0; inputElements[i]; ++i) {
        if(inputElements[i].type === 'checkbox') {
            checkedValue.push(inputElements[i].checked);
        }
      }
      console.log(checkedValue);

      if(checkedValue.length !== this.listOfData.length) {
        console.log('checkbox and listOfData items numbers are not equal!');
      } else {
        for(let i=0; i<checkedValue.length; i++) {
          if(checkedValue[i]) {
            this.daoService.deleteSensor(this.listOfData[i].codeName).subscribe(data => {this.sensorQueryAll();});
            }
          }
        }
      // document.getElementById('all').click();
    }

    sensorRegistry() {
      const modal = this.modalService.create({
        nzTitle: '注册传感器',
        nzContent: FcRegistrySensorComponent,
        nzWrapClassName: 'registrysensor-dialog-wrap',
        nzComponentParams: {
          tableName: 'tableName',
          codeName: 'sensorName',
          sensorFunc: 'function',
          type: 'type',
          description: 'description',
          imgaddr: 'imageAdress'
        },
        nzFooter: null
    });
      modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
      modal.afterClose.subscribe(result => {console.log('[afterClose] The result is:', result); this.sensorQueryAll();});
      setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.sensorFunc = 'passWord is changed';
    }, 2000);
  }
}
