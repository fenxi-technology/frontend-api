import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
import { CacheService } from 'src/fccore/service/cache.service';
const PROJECT_NAME = environment.projectName;

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.less']
})
export class SigninComponent implements OnInit {
  hasError = false;
  msg = '用户名或者密码错误';
  userId = 'admin';
  password = 'admin';
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.loginValid(this.userId, this.password)) {
      this.router.navigate([
        '/' + environment.pid.toLocaleLowerCase() + '/home'
      ]);
    }
  }
  /**
   * 根据用户密码登录，并存储当前用户的相关信息
   */
  login() {
    if (this.loginValid(this.userId, this.password)) {
      this.hasError = false;
      CacheService.setS('userinfo', { USERCODE: 'admin' });
      CacheService.setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
      this.router.navigate([
        '/' + environment.pid.toLocaleLowerCase() + '/home'
      ]);
    } else {
      this.hasError = true;
    }
  }

  loginValid(userId, password): boolean {
    if (userId === 'admin' && password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
