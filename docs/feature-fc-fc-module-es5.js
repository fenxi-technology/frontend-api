(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-fc-fc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/building/building.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fc-building\">\n  <span>正</span>\n  <span>在</span>\n  <span>开</span>\n  <span>发</span>\n  <span>中</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/home/home.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe style=\"width:100%;height:800px;\" [src]=\"iframeUrl\">\n</iframe>\n\n<!--<div class=\"fc-home-page\">-->\n<!--  <div nz-row [nzGutter]=\"20\">-->\n<!--    &lt;!&ndash; 图表状态 &ndash;&gt;-->\n<!--    <div nz-col [nzSpan]=\"24\">-->\n<!--      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"图表状态\" [nzBordered]=\"false\">-->\n<!--        <div class=\"fc-chart-box\">-->\n<!--          <fc-g2bar fcId=\"chartBar\" [fcData]=\"chartBarData\"></fc-g2bar>-->\n<!--        </div>-->\n<!--      </nz-card>-->\n<!--    </div>-->\n<!--    &lt;!&ndash; 对比图 &ndash;&gt;-->\n<!--    <div nz-col [nzSpan]=\"24\">-->\n<!--      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"对比图\" [nzBordered]=\"false\">-->\n<!--        <div class=\"fc-chart-box\">-->\n<!--          <fc-g2line fcId=\"chartLine\" [fcData]=\"chartLineData\"></fc-g2line>-->\n<!--        </div>-->\n<!--      </nz-card>-->\n<!--    </div>-->\n<!--    &lt;!&ndash; 工作计划 &ndash;&gt;-->\n<!--    <div nz-col [nzSpan]=\"12\">-->\n<!--      <nz-card class=\"sys-home-card\" nzTitle=\"工作计划\" [nzBordered]=\"false\">-->\n<!--        <nz-calendar class=\"fc-calendar\">-->\n<!--          <ul *nzDateCell=\"let date\" class=\"events\">-->\n<!--            <ng-container [ngSwitch]=\"date.getDate()\">-->\n<!--              <ng-container *ngSwitchCase=\"8\">-->\n<!--                <li *ngFor=\"let item of listDataMap.eight\">-->\n<!--                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>-->\n<!--                </li>-->\n<!--              </ng-container>-->\n<!--              <ng-container *ngSwitchCase=\"10\">-->\n<!--                <li *ngFor=\"let item of listDataMap.ten\">-->\n<!--                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>-->\n<!--                </li>-->\n<!--              </ng-container>-->\n<!--              <ng-container *ngSwitchCase=\"11\">-->\n<!--                <li *ngFor=\"let item of listDataMap.eleven\">-->\n<!--                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>-->\n<!--                </li>-->\n<!--              </ng-container>-->\n<!--            </ng-container>-->\n<!--          </ul>-->\n<!--          <ng-container *nzMonthCell=\"let month\">-->\n<!--            <div *ngIf=\"getMonthData(month) as monthData\" class=\"notes-month\">-->\n<!--              <section>{{ monthData }}</section>-->\n<!--              <span>Backlog number</span>-->\n<!--            </div>-->\n<!--          </ng-container>-->\n<!--        </nz-calendar>-->\n<!--      </nz-card>-->\n<!--    </div>-->\n<!--    &lt;!&ndash; 待办任务 &ndash;&gt;-->\n<!--    <div nz-col [nzSpan]=\"12\">-->\n<!--      <nz-card class=\"sys-home-card\" nzTitle=\"待办任务\" [nzBordered]=\"false\">-->\n<!--        <nz-list [nzDataSource]=\"toDoTaks\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">-->\n<!--          <ng-template #item let-item>-->\n<!--            <nz-list-item>-->\n<!--              <nz-list-item-meta [nzTitle]=\"nzTitle\"-->\n<!--                nzAvatar=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"-->\n<!--                nzDescription=\"报表任务还未完成，请在2019年6月1日之前完成。\">-->\n<!--                <ng-template #nzTitle>-->\n<!--                  <a href=\"https://ng.ant.design\">{{ item.title }}</a>-->\n<!--                </ng-template>-->\n<!--              </nz-list-item-meta>-->\n<!--            </nz-list-item>-->\n<!--          </ng-template>-->\n<!--        </nz-list>-->\n<!--      </nz-card>-->\n<!--    </div>-->\n<!--    &lt;!&ndash; 系统公告 &ndash;&gt;-->\n<!--    <div nz-col [nzSpan]=\"12\">-->\n<!--      <nz-card class=\"sys-home-card\" nzTitle=\"系统公告\" [nzBordered]=\"false\">-->\n<!--        <nz-timeline class=\"fc-timeline\">-->\n<!--          <nz-timeline-item nzColor=\"green\">-->\n<!--            <div class=\"timelie-title\">-->\n<!--              <span> 星期一</span>-->\n<!--              <span class=\"time\">11:24</span>-->\n<!--            </div>-->\n<!--            系统维护，资料卡功能暂时受限 2015-09-01-->\n<!--          </nz-timeline-item>-->\n<!--          <nz-timeline-item nzColor=\"green\">-->\n<!--            <div class=\"timelie-title\">-->\n<!--              <span> 星期一</span>-->\n<!--              <span class=\"time\">11:24</span>-->\n<!--            </div>系统正在优化中，敬请期待 2015-09-01-->\n<!--          </nz-timeline-item>-->\n<!--          <nz-timeline-item nzColor=\"red\">-->\n<!--            <div class=\"timelie-title\">-->\n<!--              <span> 星期一</span>-->\n<!--              <span class=\"time\">11:24</span>-->\n<!--            </div>-->\n<!--            <p>系统正在优化中，敬请期待 1</p>-->\n<!--            <p>系统正在优化中，敬请期待 2</p>-->\n<!--            <p>系统正在优化中，敬请期待s 3 2015-09-01</p>-->\n<!--          </nz-timeline-item>-->\n<!--          <nz-timeline-item>-->\n<!--            <div class=\"timelie-title\">-->\n<!--              <span>星期一</span>-->\n<!--              <span class=\"time\">11:24</span>-->\n<!--            </div>-->\n<!--            <p>系统正在优化中，敬请期待 1</p>-->\n<!--            <p>系统正在优化中，敬请期待 2</p>-->\n<!--            <p>系统正在优化中，敬请期待 3 2015-09-01</p>-->\n<!--          </nz-timeline-item>-->\n<!--        </nz-timeline>-->\n<!--      </nz-card>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/components/building/building.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/building/building.component.ts ***!
  \***********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(router) {
        this.router = router;
    }
    BuildingComponent.prototype.ngOnInit = function () { };
    BuildingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'building',
            template: __webpack_require__(/*! raw-loader!./building.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fc.module.ts":
/*!*************************************!*\
  !*** ./src/feature/fc/fc.module.ts ***!
  \*************************************/
/*! exports provided: FcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcModule", function() { return FcModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fc_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fc.route */ "./src/feature/fc/fc.route.ts");
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");
/* harmony import */ var src_fccomponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/fccomponents */ "./src/fccomponents/index.ts");








var FcModule = /** @class */ (function () {
    function FcModule() {
    }
    FcModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                src_fccomponents__WEBPACK_IMPORTED_MODULE_7__["FccomponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fc_route__WEBPACK_IMPORTED_MODULE_4__["Routers"])
            ],
            declarations: [
                _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_6__["BuildingComponent"]
            ],
            providers: []
        })
    ], FcModule);
    return FcModule;
}());



/***/ }),

/***/ "./src/feature/fc/fc.route.ts":
/*!************************************!*\
  !*** ./src/feature/fc/fc.route.ts ***!
  \************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");


var Routers = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'building',
        component: src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_1__["BuildingComponent"]
    },
    {
        path: '',
        loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
    },
    {
        path: '',
        loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
    }
];


/***/ }),

/***/ "./src/feature/fc/fcsystem/components/home/home.component.less":
/*!*********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/home/home.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\n.fc-home-page {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 10px;\n}\n\n.sys-home-card {\n  background: #fff;\n  margin-top: 10px;\n}\n\n.sys-home-box {\n  width: 100%;\n  height: 92px;\n  border-radius: 4px;\n  color: #fff;\n  padding: 16px;\n}\n\n::ng-deep .sys-home-box .ant-statistic-title {\n  color: #fff;\n}\n\n.sys-home-box1 {\n  background-color: #1890ff;\n}\n\n.sys-home-box2 {\n  background-color: #52c41a;\n}\n\n.sys-home-box3 {\n  background-color: #fa8c16;\n}\n\n.sys-home-box4 {\n  background-color: #eb2f96;\n}\n\n.minibar {\n  margin-top: 6px;\n  margin-left: 35px;\n}\n\n// 时间轴\n::ng-deep .fc-timeline .ant-timeline {\n  padding-left: 150px;\n}\n\n::ng-deep .fc-timeline .ant-timeline .ant-timeline-item {\n  padding-bottom: 40px;\n}\n\n::ng-deep .fc-timeline .ant-timeline .timelie-title {\n  position: absolute;\n  left: -150px;\n  width: 115px;\n  text-align: right;\n}\n\n::ng-deep .fc-timeline .ant-timeline .time {\n  display: block;\n}\n\n// 日历\n::ng-deep .fc-calendar .events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n::ng-deep .fc-calendar .events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n\n::ng-deep .fc-calendar .notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n\n::ng-deep .fc-calendar .notes-month section {\n  font-size: 28px;\n}\n\n.fc-chart-box {\n  position: relative;\n}\n*!\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlL2ZjL2Zjc3lzdGVtL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStGQyIsImZpbGUiOiJzcmMvZmVhdHVyZS9mYy9mY3N5c3RlbS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/feature/fc/fcsystem/components/home/home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/home/home.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        var url = 'http://localhost:8100/#/pages/user';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/feature/fc/fcsystem/components/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());

/*
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import * as G2 from '@antv/g2'
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // 首页卡片样式
  homeBodyStyle = {
    background: '#fff'
  }
  // 柱状图的数据
  chartBarData = [
    {
      year: '1 月',
      sales: 58
    },
    {
      year: '2 月',
      sales: 52
    },
    {
      year: '3 月',
      sales: 61
    },
    {
      year: '4 月',
      sales: 145
    },
    {
      year: '5 月',
      sales: 148
    },
    {
      year: '6 月',
      sales: 138
    },
    {
      year: '7 月',
      sales: 178
    },
    {
      year: '8 月',
      sales: 38
    },
    {
      year: '9 月',
      sales: 58
    },
    {
      year: '10 月',
      sales: 38
    },
    {
      year: '11 月',
      sales: 88
    },
    {
      year: '12 月',
      sales: 38
    }
  ]
  // 迷你柱状图1的数据
  miniBarData_1 = [
    {
      index: 0,
      value: 74
    },
    {
      index: 1,
      value: 60
    },
    {
      index: 2,
      value: 50
    },
    {
      index: 3,
      value: 10
    },
    {
      index: 4,
      value: 30
    },
    {
      index: 5,
      value: 50
    },
    {
      index: 6,
      value: 35
    },
    {
      index: 7,
      value: 60
    },
    {
      index: 8,
      value: 90
    },
    {
      index: 9,
      value: 100
    }
  ]
  // 折线图
  chartLine: any
  // 折线图数据
  chartLineData = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176
    }
  ]
  // 待办任务
  toDoTaks = [
    {
      title: ' 报表任务 1'
    },
    {
      title: '报表任务 2'
    },
    {
      title: '报表任务 3'
    },
    {
      title: '报表任务 4'
    }
  ];
  // 日历数据
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
  /!**
   * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
   *!/
  ngOnInit(): void { }
  /!**
   * 每当 Angular 初始化完组件视图及其子视图之后调用。
   *!/
  ngAfterViewInit(): void {

  }
  /!**
   * @description: 日历
   * @param {type}
   * @return:
   *!/
  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
}
*/


/***/ })

}]);
//# sourceMappingURL=feature-fc-fc-module-es5.js.map