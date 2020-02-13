import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
let SysuseraddComponent = class SysuseraddComponent {
    constructor(fb, subject) {
        this.fb = fb;
        this.subject = subject;
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            postion: [null, [Validators.required]],
            auth: [null, [Validators.required]],
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    handleOk() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        //提交请求
    }
    handleCancel() {
        this.subject.destroy('onCancel');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SysuseraddComponent.prototype, "userName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SysuseraddComponent.prototype, "postion", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SysuseraddComponent.prototype, "auth", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SysuseraddComponent.prototype, "description", void 0);
SysuseraddComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-useradd',
        templateUrl: './useradd.dialog.html',
        styles: [`
  ::ng-deep .adduser-dialog-wrap .ant-modal-body{
    padding: 16px 0 0;
  }
  ::ng-deep .adduser-dialog .edituser-dialog-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 16px 10px 10px;
    text-align: right;
    border-radius: 0 0 4px 4px;
  }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, NzModalRef])
], SysuseraddComponent);
export { SysuseraddComponent };
//# sourceMappingURL=useradd.dialog.js.map