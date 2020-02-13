import * as tslib_1 from "tslib";
import { DaoService } from './../../../../../fccore/service/dao.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
let FcRegistrySensorComponent = class FcRegistrySensorComponent {
    constructor(fb, subject, daoService) {
        this.fb = fb;
        this.subject = subject;
        this.daoService = daoService;
        this.imageName = '';
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            tableName: [null, [Validators.required]],
            codeName: [null, [Validators.required]],
            sensorFunc: [null, [Validators.required]],
            type: [null, [Validators.required]],
            description: [null, [Validators.required]],
            imgFile: ['']
            //imgFile:  [null, [Validators.required]],
        });
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.validateForm.get('imgFile').setValue(file);
        }
    }
    onSubmit() {
        // const formData = new FormData();
        // formData.append('file', this.validateForm.get('profile').value);
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    handleOk() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        // this.sensor = {
        //   codeName: 'LSV8',
        //   tableName: '0拉丝机',
        //   sensorFunc: '测长',
        //   type: 'LS',
        //   description: '备注',
        //   imgFile: 'http://localhost:3000/uploads/img/LSV1.jpg'
        //   };
        // const test = {
        //   codeName: 'LSV8',
        //   tableName: '0拉丝机',
        //   sensorFunc: '测长',
        //   type: 'LS',
        //   description: '备注'
        // };
        const fd = new FormData();
        fd.append('file', this.validateForm.get('imgFile').value);
        fd.append('string', this.validateForm.get('tableName').value);
        fd.append('string', this.validateForm.get('codeName').value);
        fd.append('string', this.validateForm.get('sensorFunc').value);
        fd.append('string', this.validateForm.get('type').value);
        fd.append('string', this.validateForm.get('description').value);
        //fd.append('data', angular.toJson(test));
        this.daoService.registerSensors(fd);
    }
    handleCancel() {
        this.subject.destroy('onCancel');
    }
    openPath() {
        const docu = document.getElementById('tableName').click();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "tableName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "codeName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "sensorFunc", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "description", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FcRegistrySensorComponent.prototype, "imgFile", void 0);
FcRegistrySensorComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-sensorregistry',
        templateUrl: './sensorregistry.dialog.html',
        styles: [`
  ::ng-deep .registrysensor-dialog-wrap .ant-modal-body{
    padding: 16px 0 0;
  }
  ::ng-deep .registrysensor-dialog .edituser-dialog-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 16px 10px 10px;
    text-align: right;
    border-radius: 0 0 4px 4px;
  }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, NzModalRef, DaoService])
], FcRegistrySensorComponent);
export { FcRegistrySensorComponent };
//# sourceMappingURL=sensorregistry.dialog.js.map