import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { CacheService } from './cache.service';
// @Injectable() 装饰器会接受该服务的元数据对象
let UserService = class UserService {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * @param route
     * @param state
     */
    canActivate(route, state) {
        var user = this.getUserInfo();
        // 判断是否登录成功
        if (user && user.USERCODE !== undefined) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
    /**
     * @description 系统登录
     * @param userId 用户编码
     * @param password 用户密码
     */
    login(userId, password) {
        var param = {
            USERID: CommonService.enCode64(userId),
            PASSWORD: CommonService.enCode64(password),
            AID: 'SYSUSER'
        };
        // this.logService.writeAction(this.moduleId, this.serviceId, InterfaceMethod.LOGIN, param, '登录', '')
        return this.daoService.getFromAuth(CommonService.getUrlBy(this.moduleId, this.serviceId, 'LOGIN'), param);
    }
    /**
     * @description 存储用户数据
     * @param data 登陆后返回数据
     */
    storeUserInfo(data) {
        CacheService.setS('userinfo', data.DATA);
        CacheService.setS('token', data.TOKEN);
    }
    /**
     * @description 获取登录用户数据内容
     */
    getUserInfo() {
        CacheService.setS('admin', { USERCODE: 'admin' });
        return CacheService.getS('userinfo');
    }
    /**
     * @description 用户注销
     */
    logout(userInfo) {
        if (userInfo) {
            var param = { USERID: userInfo.USERCODE, AID: 'SYSUSER' };
            // 请求注销
            this.logService.writeAction(this.moduleId, this.serviceId, 'LOGOUT', param, '注销', '');
            return this.daoService.getFromAuth(CommonService.getUrlBy(this.moduleId, this.serviceId, 'LOGOUT'), param);
        }
        else {
            return CommonService.createObservable({ CODE: '0', MSG: '操作成功' });
        }
    }
    /**
     * 清除用户信息
     */
    clearUserinfo() {
        CacheService.clearSByKey('userinfo');
        CacheService.clearSByKey('token');
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map