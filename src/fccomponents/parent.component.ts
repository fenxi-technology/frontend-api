import { OnInit } from '@angular/core';


export abstract class ParentComponent {
    // 主表对象
    mainObj: any;
    // 查询对象
    searchObj: any;
    // 列表数据
    pageList: any[]=[];
    constructor() {
    }
    abstract event(eventName: string, context?: any): void;
}
