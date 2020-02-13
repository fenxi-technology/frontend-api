
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from 'src/environments/environment.dev';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fc-templateform',
    templateUrl: './fctemplateform.component.html',
    styles: [
        `
    .fc-templateform {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .fc-templateform-content {
        height: calc(100% - 38px);
        overflow: auto;
        padding: 10px;
    }
    .fc-toolbarform {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 100;
        text-align: center;
        background-color: #e6f7ff;
    }
     
    `
    ]
})
export class FctemplateformComponent implements OnInit {
    validateForm: FormGroup;
    constructor(public router: Router, public activedRoute: ActivatedRoute,
        private fb: FormBuilder) { }
    ngOnInit(): void {
        this.validateForm = this.fb.group({
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
            checkPassword: [null, [Validators.required, this.confirmationValidator]],
            nickname: [null, [Validators.required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [Validators.required]],
            website: [null, [Validators.required]],
            captcha: [null, [Validators.required]],
            agree: [false]
        });
    }
    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.validateForm.controls.password.value) {
            return { confirm: true, error: true };
        }
        return {};
    };
}
