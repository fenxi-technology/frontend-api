
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
@Component({
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
})
export class  SysuseraddComponent implements OnInit {
  //
  validateForm: FormGroup;
  @Input()
  userName: string;
  @Input()
  postion: string;
  @Input()
  auth: string;
  @Input()
  description: string;
  // 用户信息
  userInfo: any;

  constructor(private fb: FormBuilder, private subject: NzModalRef,
  ) { }
  ngOnInit(): void {
    // 表单验证
    this.validateForm = this.fb.group({
      username :  [null, [Validators.required]],
      postion:  [null, [Validators.required]],
      auth:  [null, [Validators.required]],
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

}
