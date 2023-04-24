// // Hàm kiểm tra tên đăng nhập
// function validateUsername(username) {
//     return username.trim().length > 0;
// }

// // Hàm kiểm tra email
// function validateEmail(email) {
//     var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     return emailRegex.test(email);
// }

// // Hàm kiểm tra mật khẩu
// function validatePassword(password) {
//     var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     return passwordRegex.test(password);
// }

// // Hàm kiểm tra số điện thoại
// function validatePhone(phone) {
//     var phoneRegex = /^0[0-9]{9}$/;
//     return phoneRegex.test(phone);
// }

// $(document).ready(function () {
//     $('form').on('submit', function (event) {
//         event.preventDefault();

//         // Ẩn thông báo lỗi
//         $('.error-message').hide();

//         var username = $('#username').val();
//         var email = $('#email').val();
//         var phone = $('#phone').val();
//         var password = $('#password').val();
//         var confirmPassword = $('#confirm-password').val();

//         if (!validateUsername(username)) {
//             $('#error-username').text('Tên đăng nhập không được bỏ trống.').show();
//             return;
//         }

//         if (!validateEmail(email)) {
//             $('#error-email').text('Email không hợp lệ. Vui lòng kiểm tra lại.').show();
//             return;
//         }

//         if (!validatePhone(phone)) {
//             $('#error-phone').text('Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.').show();
//             return;
//         }

//         if (!validatePassword(password)) {
//             $('#error-password').text('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.').show();
//             return;
//         }

//         if (password !== confirmPassword) {
//             $('#error-confirm-password').text('Mật khẩu không khớp. Vui lòng kiểm tra lại.').show();
//             return;
//         }

//         // Thực hiện việc đăng ký tại đây (gọi API, lưu vào cơ sở dữ liệu, ...)
//         alert('Đăng ký thành công!');

//         // Xóa dữ liệu trên form
//         $('form')[0].reset();
//     });
// });
