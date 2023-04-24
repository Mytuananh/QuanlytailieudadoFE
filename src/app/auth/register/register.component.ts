import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }




  onSubmit() {
    // Ẩn thông báo lỗi
    console.log(29);
    const errorMessages = document.querySelectorAll<HTMLElement>('.error-message');
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].style.display = 'none';
    }
    if (!this.validateUsername(this.username)) {
      document.getElementById('error-username')!.innerText = 'Tên đăng nhập không được bỏ trống.';
      document.getElementById('error-username')!.style.display = 'block';
      return;
    }

    if (!this.validateEmail(this.email)) {
      document.getElementById('error-email')!.innerText = 'Email không hợp lệ. Vui lòng kiểm tra lại.';
      document.getElementById('error-email')!.style.display = 'block';
      return;
    }

    if (!this.validatePhone(this.phone)) {
      document.getElementById('error-phone')!.innerText = 'Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.';
      document.getElementById('error-phone')!.style.display = 'block';
      return;
    }

    if (!this.validatePassword(this.password)) {
      document.getElementById('error-password')!.innerText = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.';
      document.getElementById('error-password')!.style.display = 'block';
      return;
    }

    if (this.password !== this.confirmPassword) {
      document.getElementById('error-confirm-password')!.innerText = 'Mật khẩu không khớp. Vui lòng kiểm tra lại.';
      document.getElementById('error-confirm-password')!.style.display = 'block';
      return;
    }

    // Thực hiện việc đăng ký tại đây (gọi API, lưu vào cơ sở dữ liệu, ...)
    const form = {
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone,
    }
    console.log('form', form);
    this.userService.register(form).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/login']);
    })

    // // Xóa dữ liệu trên form
    // const form = document.getElementsByTagName('form')[0];
    // form.reset();

  }

  validateUsername(username: string): boolean {
    return username.trim().length > 0;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phone);
  }

}
