import { ISensor } from './../../../../../fccore/sensor';
import { DaoService } from './../../../../../fccore/service/dao.service';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';

declare var angular: any;

@Component({
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
})
export class FcRegistrySensorComponent implements OnInit {
  //
  validateForm: FormGroup;
  @Input()
  tableName: string;
  @Input()
  codeName: string;
  @Input()
  sensorFunc: string;
  @Input()
  type: string;
  @Input()
  description: string;
  @Input()
  imgaddr: string;
  // 用户信息
  userInfo: any;


  constructor(private fb: FormBuilder, private subject: NzModalRef, public daoService: DaoService
  ) { }
  ngOnInit(): void {
    // 表单验证
    this.validateForm = this.fb.group({
      tableName :  [null, [Validators.required]],
      codeName:  [null, [Validators.required]],
      sensorFunc:  [null, [Validators.required]],
      type:  [null, [Validators.required]],
      description:  [null, [Validators.required]],
      imgFile: ['']
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.validateForm.get('imgFile').setValue(file);
    }
  }

  onChanged(event) {
    if (event.target.value > 0) {
      const text = event.target.value;
      this.validateForm.get(event.target.id).setValue(text);
    }
  }

  handleOK() {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    // }

    const fd = new FormData();
    fd.append('imgFile', this.validateForm.get('imgFile').value);console.log(this.validateForm.get('imgFile').value);
    fd.append('tableName', this.validateForm.get('tableName').value);console.log(this.validateForm.get('tableName').value);
    fd.append('codeName', this.validateForm.get('codeName').value);console.log(this.validateForm.get('codeName').value);
    fd.append('sensorFunc', this.validateForm.get('sensorFunc').value);console.log(this.validateForm.get('sensorFunc').value);
    fd.append('type', this.validateForm.get('type').value);console.log(this.validateForm.get('type').value);
    fd.append('description', this.validateForm.get('description').value);console.log(this.validateForm.get('description').value);

    this.daoService.registerSensors(fd);
    this.handleCancel();
  }
  handleCancel() {
    this.subject.destroy('onCancel');
  }
}
