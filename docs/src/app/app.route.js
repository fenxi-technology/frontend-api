import { UserService } from 'src/fccore/service/user.service';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
const SignIn = 'signin';
export const AppRoutes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [UserService],
        children: [
            {
                path: 'error',
                component: ErrorComponent
            },
            {
                path: 'fc',
                loadChildren: '../feature/fc/fc.module#FcModule'
            }
        ]
    },
    {
        path: SignIn,
        component: SigninComponent
    },
    {
        path: 'forgot',
        component: ForgotComponent
    },
    {
        path: 'lockscreen',
        component: LockscreenComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
//# sourceMappingURL=app.route.js.map