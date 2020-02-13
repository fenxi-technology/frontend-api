import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ShareService = class ShareService {
    constructor() {
        // 切换项目名称
        this.switchProjectSubject = new Subject();
    }
};
ShareService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ShareService);
export { ShareService };
//# sourceMappingURL=share.service.js.map