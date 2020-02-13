import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { CommonService } from './common.service';
import { DaoService } from './dao.service';
let LogService = class LogService {
    constructor(daoService, cacheService) {
        this.daoService = daoService;
        this.cacheService = cacheService;
        this.moduleId = 'SYSTEM';
        this.resId = 'SYSLOG';
    }
    debug(msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    }
    info(msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    }
    error(msg) {
        throw new Error(msg);
    }
    /**
     * 记录行为日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeBehavior(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.BEHAVIOR, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info('App ' + act + ':' + result + ' ' + reason ? reason : '');
    }
    /**
     * 记录操作日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeAction(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.ACTION, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info('App ' + act + ':' + result + ' ' + reason ? reason : '');
    }
    /**
     * 记录错误日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    writeError(moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(LOGTYPE.ERROR, moduleId, resId, act, LOGLEVEL.ERROR, param, result, reason ? reason : '');
        }
        this.error('App ' + act + ':' + result + ' ' + reason ? reason : '');
    }
    /**
     *
     * @param type 日志类型 操作日志：ACTION;错误日志：ERROR；行为日志：BEHAVIOR；
     * @param act 操作
     * @param level 级别
     * @param param 输入参数
     * @param result 结果
     * @param reason 原因
     */
    write(type, moduleId, resId, act, level, param, result, reason) {
        let userInfo = CacheService.getS('userinfo');
        let log = {
            LOGTIME: CommonService.getTimestamp(),
            SYSTEM: this.daoService.FCCONFIG.pid,
            USERID: userInfo ? userInfo.USERCODE : '',
            ACTION: act,
            MODULEID: moduleId,
            RESID: resId,
            LOGTYPE: type,
            LEVEL: level,
            PARAMS: JSON.stringify(param),
            RESULT: result,
            REASON: reason,
            CLIENTTYPE: 'CLIENT'
        };
        this.daoService
            .postFromLog(CommonService.getUrlBy(this.moduleId, this.resId, 'CREATE'), log)
            .subscribe(function () { });
    }
};
LogService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [DaoService, CacheService])
], LogService);
export { LogService };
//# sourceMappingURL=log.service.js.map