import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule,
            ReactiveFormsModule,
            NgZorroAntdModule
        ],
        exports: [
            CommonModule,
            FormsModule,
            RouterModule,
            ReactiveFormsModule,
            NgZorroAntdModule
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map