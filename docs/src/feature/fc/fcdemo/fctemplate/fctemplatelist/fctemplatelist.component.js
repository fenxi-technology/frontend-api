import * as tslib_1 from "tslib";
import { DaoService } from './../../../../../fccore/service/dao.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FcRegistrySensorComponent } from '../sensorRegistry/sensorregistry.dialog';
let FctemplatelistComponent = class FctemplatelistComponent {
    constructor(router, activedRoute, modalService, daoService) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.modalService = modalService;
        this.daoService = daoService;
        this.listOfData = [];
        this.selector = 'LSV1';
        this.controlArray = [];
        this.isCollapse = true;
        this.searchObj = {
            name: '',
            img: '',
            type: '',
            description: ''
        };
    }
    //数据绑定循环添加测试数据
    ngOnInit() {
        this.daoService.getSensors().subscribe(data => this.listOfData = data);
    }
    sensorQueryAll() {
        this.daoService.getSensors().subscribe(data => this.listOfData = data);
    }
    sensorQuery() {
        this.daoService.getOneSensor(this.selector).subscribe(data => this.listOfData = data);
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
                imgFile: 'imageAdress'
            },
            nzFooter: null
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.sensorFunc = 'passWord is changed';
        }, 2000);
    }
};
FctemplatelistComponent = tslib_1.__decorate([
    Component({
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
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute,
        NzModalService, DaoService])
], FctemplatelistComponent);
export { FctemplatelistComponent };
//# sourceMappingURL=fctemplatelist.component.js.map