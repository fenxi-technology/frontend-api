import { ISensor, IResponse, IOneResponse } from './../sensor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { CacheService } from './cache.service';
import { CommonService } from './common.service';
import {HttpParams} from '@angular/common/http';

export const FCCONFIG = environment;

@Injectable({providedIn:'root'})
export class DaoService {
  http: HttpClient;
  private cacheService;
  private commonService;
  ws: WebSocket;

  private _url_reg = 'http://localhost:3001/sensor/registrySensor';
  // private _url_query = 'http://localhost:3000/data';
  private _url_query = 'http://localhost:3001/sensor/querySensor';
  private _url_del = 'http://localhost:3001/sensor/del';

  FCCONFIG = environment;
  constructor(http: HttpClient) {
    this.http = http;
    this.cacheService = CacheService;
    this.commonService = CommonService;
  }

  registerSensors(sensor: FormData) {

    return this.http.post(this._url_reg, sensor).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  getSensors(): Observable<IResponse> {
    return this.http.get<IResponse>(this._url_query);
  }

  getOneSensor(codeName: string): Observable<IOneResponse> {
    // http://localhost:3001/sensor/querySensor?codeName=LSV1
    const params = new HttpParams().set('codeName', codeName);
    return this.http.get<IOneResponse>(this._url_query, {params});
  }

  deleteSensor(codeName: string): Observable<IOneResponse> {
    // http://localhost:3001/sensor/del?sensorname=LSV2
    console.log(codeName);
    const httpParams = new HttpParams().set('sensorname', codeName);
    const options = {params: httpParams};
    return this.http.delete<IOneResponse>(this._url_del, options);
    // this.http.delete(this._url_del, options).subscribe(
    //   data => {
    //     console.log('DELETE Request is successful ', data);
    //   },
    //   error => {
    //     console.log('Error', error);
    //   }
    // );
  }









  /**
   * 获取请求选项对象
   */
  getOptions(): any {
    const options = {};
    return options;
  }
  /**
   * 获取参数列对象
   * @param param 参数
   * @param isArray 是否是数组 默认为false
   */
  getParamOpt(param: any): any {
    if (param instanceof Array) {
      return { DATA: param };
    } else {
      return { DATA: [param] };
    }
  }
  /**
   * 获取默认的参数,url中的参数
   *
   */
  getDefaultParams(): string {
    let str = 'TOKEN=';
    const token = this.cacheService.getS('token', '');
    if (token !== null) {
      str += token + '&';
    } else {
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
  // getWithPromise(url: string, params: any): Promise<any> {
  //   let rtn = '';
  //   Object.keys(params).forEach(key => {
  //     if (params[key] instanceof String) {
  //       rtn += key + '=' + encodeURIComponent(params[key]) + '&';
  //     }
  //   });
  //   return this.http
  //     .get(url + '?' + rtn)
  //     .toPromise()
  //     .catch(this.handleError);
  // }
  /**
   * 执行get查询，如http://ip:port/url?param=
   * @param url 请求全路径
   * @param params 参数内容
   */
  getBase(url: string, params: any): Observable<any> {
    let rtn = '';
    Object.keys(params).forEach(function(key) {
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
  postBase(url: string, body: any): Observable<Object> {
    return this.http.post(url, body);
  }
  /**
   * 通过post方法
   * @param url 请求资源
   * @param reqOpts 请求参数
   */
  postByParams(url: string, body: any): Observable<Object> {
    return this.http.post(url, this.getParamOpt(body));
  }
//   /**
//    * @description 异常统一处理，抛出异常内容
//    * @param err 错误内容
//    */
//   private handleError(error) {
//     if (error.status === 401) {
//     } else {
//       return Promise.reject(error.message || error);
//     }
//   }
//   /**
//    * 应用系统接口get请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   getFromApi(url: string, params: any): Observable<any> {
//     return this.getBase(FCCONFIG.apiurl + url, params);
//   }
//   /**
//    * 应用系统接口post请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   postFromApi(url: string, params: any): Observable<any> {
//     return this.postByParams(FCCONFIG.apiurl + url, params);
//   }
//   /**
//    * 应用系统接口get请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   getFromSystem(url: string, params: any): Observable<any> {
//     return this.getBase(FCCONFIG.systemurl + url, params);
//   }
//   /**
//    * 应用系统接口post请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   postFromSystem(url: string, params: any): Observable<any> {
//     return this.postByParams(FCCONFIG.systemurl + url, params);
//   }
//   /**
//    * 应用系统接口get请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
  // getFromLog(url: string, params: any): Observable<any> {
  //   return this.getBase(FCCONFIG.logurl + url, params);
  // }
//   /**
//    * 应用系统接口post请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
  postFromLog(url: string, params: any): Observable<any> {
    return this.postByParams(FCCONFIG.logurl + url, params);
  }
//   /**
//    * 应用系统接口get请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   getFromAuth(url: string, params: any): Observable<any> {
//     return this.getBase(FCCONFIG.authurl + url, params);
//   }
//   /**
//    * 应用系统接口post请求
//    * @param url 请求url，不包含主机及
//    * @param params
//    */
//   postFromAuth(url: string, params: any): Observable<any> {
//     return this.postByParams(FCCONFIG.authurl + url, params);
//   }
//   /**
//    * 连接ws并监听消息
//    */
//   connectionWs(userId: string): Observable<any> {
//     let _this = this;
//     this.ws = new WebSocket(FCCONFIG.wsurl + '/' + userId);
//     return new Observable(function(observer) {
//       (_this.ws.onmessage = function(event) {
//         observer.next(event.data);
//       }),
//         (_this.ws.onerror = function(event) {
//           observer.error(event);
//         }),
//         (_this.ws.onclose = function() {
//           observer.complete();
//         });
//     });
//   }
//   /**
//    * 发送消息
//    * @param message 发送消息体
//    */
//   sendMessage(message: string): void {
//     this.ws.send(message);
//   }
}
