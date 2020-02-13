import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { CacheService } from './cache.service';
import { CommonService } from './common.service';
import { HttpParams } from '@angular/common/http';
export const FCCONFIG = environment;
let DaoService = class DaoService {
    constructor(http) {
        this._url_reg = 'http://localhost:3001/sensor/registrySensor';
        this._url_query = 'http://localhost:3000/data';
        // private _url_query = 'http://localhost:3001/sensor/querySensor';
        this._url_del = 'http://localhost:3001/sensor/del';
        this.FCCONFIG = environment;
        this.http = http;
        this.cacheService = CacheService;
        this.commonService = CommonService;
    }
    getSensors() {
        return this.http.get(this._url_query);
    }
    registerSensors(sensor) {
        return this.http.post(this._url_reg, sensor).subscribe(data => {
            console.log('POST Request is successful ', data);
        }, error => {
            console.log('Error', error);
        });
        // this.http.post(this._url_reg,{
        //   codeName: 'LSV8',
        //   tableName: '0拉丝机',
        //   sensorFunc: '测长',
        //   type: 'LS',
        //   description: '备注',
        //   imgFile: 'http://localhost:3000/uploads/img/LSV1.jpg'
        //   })
        //   .subscribe(
        //   data => {
        //   console.log('POST Request is successful ', data);
        //   },
        //   error => {
        //   console.log('Error', error);
        //   }
        //   );
    }
    getOneSensor(codeName) {
        // http://localhost:3001/sensor/querySensor?codeName=LSV1
        const params = new HttpParams().set('codeName', codeName);
        return this.http.get(this._url_query, { params });
        // this.sensorObservable = this.http.request<ISensor[]>('GET',this._url_query,{responseType:'json',params});
    }
    deleteSensor(codeName) {
        // http://localhost:3001/sensor/del?sensorname=LSV2
        const params = new HttpParams().set('codeName', codeName);
        this.http.delete(this._url_del, { params })
            .subscribe(data => {
            console.log('DELETE Request is successful ', data);
        }, error => {
            console.log('Error', error);
        });
    }
    /**
     * 获取请求选项对象
     */
    getOptions() {
        const options = {};
        return options;
    }
    /**
     * 获取参数列对象
     * @param param 参数
     * @param isArray 是否是数组 默认为false
     */
    getParamOpt(param) {
        if (param instanceof Array) {
            return { DATA: param };
        }
        else {
            return { DATA: [param] };
        }
    }
    /**
     * 获取默认的参数,url中的参数
     *
     */
    getDefaultParams() {
        let str = 'TOKEN=';
        const token = this.cacheService.getS('token', '');
        if (token !== null) {
            str += token + '&';
        }
        else {
            str += '&';
        }
        str += 'LAT=0&LNG=0&TIMESTAMP=' + this.commonService.getTimestamp();
        return str;
    }
    /**
     *
     * @param url 请求url
     * @param params
     */
    getWithPromise(url, params) {
        let rtn = '';
        Object.keys(params).forEach(key => {
            if (params[key] instanceof String) {
                rtn += key + '=' + encodeURIComponent(params[key]) + '&';
            }
        });
        return this.http
            .get(url + '?' + rtn)
            .toPromise()
            .catch(this.handleError);
    }
    /**
     * 执行get查询，如http://ip:port/url?param=
     * @param url 请求全路径
     * @param params 参数内容
     */
    getBase(url, params) {
        let rtn = '';
        Object.keys(params).forEach(function (key) {
            rtn += key + '=' + encodeURIComponent(params[key]) + '&';
        });
        rtn += this.getDefaultParams();
        return this.http.get(url + '?' + rtn);
    }
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    postBase(url, body) {
        return this.http.post(url, body);
    }
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    postByParams(url, body) {
        return this.http.post(url, this.getParamOpt(body));
    }
    /**
     * @description 异常统一处理，抛出异常内容
     * @param err 错误内容
     */
    handleError(error) {
        if (error.status === 401) {
        }
        else {
            return Promise.reject(error.message || error);
        }
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromApi(url, params) {
        return this.getBase(FCCONFIG.apiurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromApi(url, params) {
        return this.postByParams(FCCONFIG.apiurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromSystem(url, params) {
        return this.getBase(FCCONFIG.systemurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromSystem(url, params) {
        return this.postByParams(FCCONFIG.systemurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromLog(url, params) {
        return this.getBase(FCCONFIG.logurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromLog(url, params) {
        return this.postByParams(FCCONFIG.logurl + url, params);
    }
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    getFromAuth(url, params) {
        return this.getBase(FCCONFIG.authurl + url, params);
    }
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    postFromAuth(url, params) {
        return this.postByParams(FCCONFIG.authurl + url, params);
    }
    /**
     * 连接ws并监听消息
     */
    connectionWs(userId) {
        let _this = this;
        this.ws = new WebSocket(FCCONFIG.wsurl + '/' + userId);
        return new Observable(function (observer) {
            (_this.ws.onmessage = function (event) {
                observer.next(event.data);
            }),
                (_this.ws.onerror = function (event) {
                    observer.error(event);
                }),
                (_this.ws.onclose = function () {
                    observer.complete();
                });
        });
    }
    /**
     * 发送消息
     * @param message 发送消息体
     */
    sendMessage(message) {
        this.ws.send(message);
    }
};
DaoService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DaoService);
export { DaoService };
//# sourceMappingURL=dao.service.js.map