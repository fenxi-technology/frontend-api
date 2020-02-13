import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { SysuseraddComponent } from './useradd.dialog';
let SysuserComponent = class SysuserComponent {
    constructor(router, activedRoute, modalService) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.modalService = modalService;
        this.listOfData = [];
        this.controlArray = [];
        this.isCollapse = true;
        this.searchObj = {
            name: '',
            position: '',
            auth: '',
            description: ''
        };
    }
    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `张三 ${i}`,
                position: '科长',
                auth: `权限. ${i}`,
                description: '123123'
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
};
SysuserComponent = tslib_1.__decorate([
    Component({
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
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, NzModalService])
], SysuserComponent);
export { SysuserComponent };
//# sourceMappingURL=sysuser.component.js.map