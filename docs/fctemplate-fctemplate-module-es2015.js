(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fctemplate-fctemplate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fc-templateform\">\n  <div class=\"fc-toolbar fc-toolbarform\">\n    <button nz-button nzType=\"default\">返回</button>\n    <button nz-button nzType=\"primary\">保存</button>\n  </div>\n  <div class=\"fc-templateform-content\">\n    <div nz-row>\n      <div nz-col nzSpan=\"12\">\n        <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n          <form nz-form [formGroup]=\"validateForm\">\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">E-mail</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"The input is not valid E-mail!\">\n                <input nz-input formControlName=\"email\" id=\"email\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>Password</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your password!\">\n                <input nz-input type=\"password\" id=\"password\" formControlName=\"password\"\n                  (ngModelChange)=\"updateConfirmValidator()\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>Confirm Password</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzErrorTip]=\"errorTpl\">\n                <input nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\" />\n                <ng-template #errorTpl let-control>\n                  <ng-container *ngIf=\"control.hasError('required')\">\n                    Please confirm your password!\n                  </ng-container>\n                  <ng-container *ngIf=\"control.hasError('confirm')\">\n                    Two passwords that you enter is inconsistent!\n                  </ng-container>\n                </ng-template>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"nickname\" nzRequired>\n                <span>\n                  Nickname\n                  <i nz-icon nz-tooltip nzTitle=\"What do you want other to call you\" nzType=\"question-circle\"\n                    nzTheme=\"outline\"></i>\n                </span>\n              </nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your nickname!\">\n                <input nz-input id=\"nickname\" formControlName=\"nickname\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phoneNumber\" nzRequired>Phone Number</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['phoneNumber']\"\n                nzErrorTip=\"Please input your phone number!\">\n                <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n                  <ng-template #addOnBeforeTemplate>\n                    <nz-select formControlName=\"phoneNumberPrefix\" class=\"phone-select\">\n                      <nz-option nzLabel=\"+86\" nzValue=\"+86\"></nz-option>\n                      <nz-option nzLabel=\"+87\" nzValue=\"+87\"></nz-option>\n                    </nz-select>\n                  </ng-template>\n                  <input formControlName=\"phoneNumber\" id=\"'phoneNumber'\" nz-input />\n                </nz-input-group>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"website\" nzRequired>Website</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input website!\">\n                <input nz-input id=\"website\" formControlName=\"website\" placeholder=\"website\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"captcha\" nzRequired>Captcha</nz-form-label>\n            </nz-form-item>\n          </form>\n        </nz-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fc-templatelist\">\n  <div class=\"fc-toolbar\">\n    <button nz-button nzType=\"primary\" (click)=\"sensorRegistry()\">传感器注册</button>\n    <button nz-button nzType=\"primary\">查看</button>\n  </div>\n  <form class=\"fc-searchbar\">\n    <div nz-row [nzGutter]=\"30\">\n      <div nz-col [nzSpan]=\"6\" class=\"fc-searchbar-item\">\n        <label for=\"name\" class=\"fc-searchbar-label\">传感器名称</label>\n        <input class=\"fc-searchbar-control\" nz-input placeholder=\"请输入传感器名称\" [(ngModel)]=\"searchObj.name\" name=\"name\" />\n      </div>\n\n      <div nz-col [nzSpan]=\"6\" class=\"fc-searchbar-btn\">\n        <button nz-button nzType=\"primary\">查询</button>\n      </div>\n    </div>\n  </form>\n  <div class=\"fc-templatelist-content\">\n    <nz-table #headerTable [nzData]=\"listOfData\" [nzPageSize]=\"50\" [nzScroll]=\"{ y: '500px' }\" [nzBordered]=\"true\">\n      <thead>\n        <tr>\n          <th nzWidth=\"150px\">传感器名称</th>\n          <th nzWidth=\"150px\">图片</th>\n          <th nzWidth=\"150px\">类型</th>\n          <th>描述</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of headerTable.data\">\n          <td>{{ data.name }}</td>\n          <td>{{ data.img }}</td>\n          <td>{{ data.type }}</td>\n          <td>{{ data.description }}</td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registrysensor-dialog\">\n  <form nz-form [formGroup]=\"validateForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"tableName\">图片</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"图片不能为空!\">\n        <input nz-input formControlName=\"tableName\" id=\"tableName\" />\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"sensorName\" nzRequired>传感器名字</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"传感器名字不能为空!\">\n        <input nz-input  id=\"sensorName\" formControlName=\"sensorName\" />\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"function\" nzRequired>传感器功能</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"传感器功能不能为空!\">\n        <input nz-input id=\"function\" formControlName=\"function\" />\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"type\" nzRequired>类型</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"类型不能为空!\">\n        <input nz-input id=\"type\" formControlName=\"type\" />\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"description\" nzRequired>描述</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" >\n        <input nz-input  id=\"description\" formControlName=\"description\" />\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <div class=\"edituser-dialog-footer\">\n    <button nz-button nzSize=\"large\" style=\"margin-right: 10px;\" [nzType]=\"'default'\"\n      (click)=\"handleCancel()\">取消</button>\n    <button nz-button nzSize=\"large\" [nzType]=\"'primary'\" (click)=\"handleOk()\">确认修改</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FctemplatedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctemplatedetailComponent", function() { return FctemplatedetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FctemplatedetailComponent = class FctemplatedetailComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
FctemplatedetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FctemplatedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-templatedetail',
        template: __webpack_require__(/*! raw-loader!./fctemplatedetail.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.html"),
        styles: ["\n     \n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FctemplatedetailComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctemplate.module.ts":
/*!***************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctemplate.module.ts ***!
  \***************************************************************/
/*! exports provided: FctemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctemplateModule", function() { return FctemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fctemplate_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fctemplate.route */ "./src/feature/fc/fcdemo/fctemplate/fctemplate.route.ts");
/* harmony import */ var _fctempatedetail_fctemplatedetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fctempatedetail/fctemplatedetail.component */ "./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.ts");
/* harmony import */ var _fctemplateform_fctemplateform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fctemplateform/fctemplateform.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.ts");
/* harmony import */ var _fctemplatelist_fctemplatelist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fctemplatelist/fctemplatelist.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.ts");
/* harmony import */ var _fctemplatetreelist_fctemplatetreelist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fctemplatetreelist/fctemplatetreelist.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.ts");
/* harmony import */ var _sensorRegistry_sensorregistry_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sensorRegistry/sensorregistry.dialog */ "./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-16 15:53:24
 */










let FctemplateModule = class FctemplateModule {
};
FctemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_sensorRegistry_sensorregistry_dialog__WEBPACK_IMPORTED_MODULE_10__["FcRegistrySensorComponent"]],
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fctemplate_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
            src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
        ],
        declarations: [
            _fctempatedetail_fctemplatedetail_component__WEBPACK_IMPORTED_MODULE_6__["FctemplatedetailComponent"],
            _fctemplateform_fctemplateform_component__WEBPACK_IMPORTED_MODULE_7__["FctemplateformComponent"],
            _fctemplatelist_fctemplatelist_component__WEBPACK_IMPORTED_MODULE_8__["FctemplatelistComponent"],
            _fctemplatetreelist_fctemplatetreelist_component__WEBPACK_IMPORTED_MODULE_9__["FctemplatetreelistComponent"],
            _sensorRegistry_sensorregistry_dialog__WEBPACK_IMPORTED_MODULE_10__["FcRegistrySensorComponent"],
        ],
        providers: []
    })
], FctemplateModule);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctemplate.route.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctemplate.route.ts ***!
  \**************************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fctemplatelist_fctemplatelist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fctemplatelist/fctemplatelist.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.ts");
/* harmony import */ var _fctemplateform_fctemplateform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fctemplateform/fctemplateform.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.ts");
/* harmony import */ var _fctempatedetail_fctemplatedetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fctempatedetail/fctemplatedetail.component */ "./src/feature/fc/fcdemo/fctemplate/fctempatedetail/fctemplatedetail.component.ts");
/* harmony import */ var _fctemplatetreelist_fctemplatetreelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fctemplatetreelist/fctemplatetreelist.component */ "./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.ts");




const Routers = [
    {
        path: 'fctemplatelist',
        component: _fctemplatelist_fctemplatelist_component__WEBPACK_IMPORTED_MODULE_0__["FctemplatelistComponent"]
    },
    {
        path: 'fctemplateform',
        component: _fctemplateform_fctemplateform_component__WEBPACK_IMPORTED_MODULE_1__["FctemplateformComponent"]
    },
    {
        path: 'fctemplatedetail',
        component: _fctempatedetail_fctemplatedetail_component__WEBPACK_IMPORTED_MODULE_2__["FctemplatedetailComponent"]
    },
    {
        path: 'fctemplatetreelist',
        component: _fctemplatetreelist_fctemplatetreelist_component__WEBPACK_IMPORTED_MODULE_3__["FctemplatetreelistComponent"]
    },
];


/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FctemplateformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctemplateformComponent", function() { return FctemplateformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let FctemplateformComponent = class FctemplateformComponent {
    constructor(router, activedRoute, fb) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.fb = fb;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.confirmationValidator]],
            nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            agree: [false]
        });
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
};
FctemplateformComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
FctemplateformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-templateform',
        template: __webpack_require__(/*! raw-loader!./fctemplateform.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplateform/fctemplateform.component.html"),
        styles: ["\n    .fc-templateform {\n        position: relative;\n        width: 100%;\n        height: 100%;\n    }\n    .fc-templateform-content {\n        height: calc(100% - 38px);\n        overflow: auto;\n        padding: 10px;\n    }\n    .fc-toolbarform {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        z-index: 100;\n        text-align: center;\n        background-color: #e6f7ff;\n    }\n     \n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], FctemplateformComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FctemplatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctemplatelistComponent", function() { return FctemplatelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _sensorRegistry_sensorregistry_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sensorRegistry/sensorregistry.dialog */ "./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.ts");





let FctemplatelistComponent = class FctemplatelistComponent {
    constructor(router, activedRoute, modalService) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.modalService = modalService;
        this.listOfData = [];
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
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King ${i}`,
                img: 32,
                type: `London, Park Lane no. ${i}`,
                description: '123123'
            });
        }
    }
    sensorRegistry() {
        const modal = this.modalService.create({
            nzTitle: '注册传感器',
            nzContent: _sensorRegistry_sensorregistry_dialog__WEBPACK_IMPORTED_MODULE_4__["FcRegistrySensorComponent"],
            nzWrapClassName: 'registrysensor-dialog-wrap',
            nzComponentParams: {
                tableName: 'tableName',
                sensorName: 'sensorName',
                function: 'function',
                type: 'type',
                description: 'description',
            },
            nzFooter: null
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.function = 'passWord is changed';
        }, 2000);
    }
};
FctemplatelistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
FctemplatelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-templatelist',
        template: __webpack_require__(/*! raw-loader!./fctemplatelist.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplatelist/fctemplatelist.component.html"),
        styles: ["\n        .fc-searchbar-item {\n            display: flex;\n            flex-direction: row;\n        }\n        .fc-searchbar-label {\n            width: 25%;\n            text-align: right;\n            padding-right: 10px;\n            line-height: 32px;\n        }\n        .fc-searchbar-control {\n            width: 75%;\n        }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]])
], FctemplatelistComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FctemplatetreelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctemplatetreelistComponent", function() { return FctemplatetreelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FctemplatetreelistComponent = class FctemplatetreelistComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
FctemplatetreelistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FctemplatetreelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-temp;atetreelist',
        template: __webpack_require__(/*! raw-loader!./fctemplatetreelist.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/fctemplatetreelist/fctemplatetreelist.component.html"),
        styles: ["\n     \n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FctemplatetreelistComponent);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.ts":
/*!**********************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.ts ***!
  \**********************************************************************************/
/*! exports provided: FcRegistrySensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRegistrySensorComponent", function() { return FcRegistrySensorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




let FcRegistrySensorComponent = class FcRegistrySensorComponent {
    constructor(fb, subject) {
        this.fb = fb;
        this.subject = subject;
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            tableName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sensorName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            function: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
FcRegistrySensorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FcRegistrySensorComponent.prototype, "tableName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FcRegistrySensorComponent.prototype, "sensorName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FcRegistrySensorComponent.prototype, "function", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FcRegistrySensorComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FcRegistrySensorComponent.prototype, "description", void 0);
FcRegistrySensorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sys-sensorregistry',
        template: __webpack_require__(/*! raw-loader!./sensorregistry.dialog.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctemplate/sensorRegistry/sensorregistry.dialog.html"),
        styles: ["\n  ::ng-deep .registrysensor-dialog-wrap .ant-modal-body{\n    padding: 16px 0 0;\n  }\n  ::ng-deep .registrysensor-dialog .edituser-dialog-footer {\n    border-top: 1px solid #e9e9e9;\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    border-radius: 0 0 4px 4px;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"]])
], FcRegistrySensorComponent);



/***/ })

}]);
//# sourceMappingURL=fctemplate-fctemplate-module-es2015.js.map
