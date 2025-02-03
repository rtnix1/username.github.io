document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');
    const currentPhone = document.getElementById('currentPhone');
    const editPhoneButton = document.getElementById('editPhone');

    registerForm.addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`ثبت نام با موفقیت انجام شد! \nنام کاربری: ${username}`);
    });

    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('usernameLogin').value;
        const password = document.getElementById('passwordLogin').value;
        alert(`ورود با موفقیت انجام شد! \nنام کاربری: ${username}`);
    });

    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        currentPhone.textContent = phone;
        alert(`شماره تماس ذخیره شد: ${phone}`);
    });

    editPhoneButton.addEventListener('click', () => {
        const phone = prompt('شماره تماس جدید را وارد کنید:', currentPhone.textContent);
        if (phone) {
            currentPhone.textContent = phone;
        }
    });

    const blogForm = document.getElementById('blogForm');
    const encyclopediaForm = document.getElementById('encyclopediaForm');

    blogForm.addEventListener('submit', event => {
        event.preventDefault();
        const blogTitle = document.getElementById('blogTitle').value;
        const blogContent = document.getElementById('blogContent').value;
        const blogImage = document.getElementById('blogImage').files[0];
        alert(`وبلاگ منتشر شد! \nعنوان: ${blogTitle} \nمحتوا: ${blogContent} \nفایل: ${blogImage ? blogImage.name : 'بدون فایل'}`);
    });

    encyclopediaForm.addEventListener('submit', event => {
        event.preventDefault();
        const encyclopediaTitle = document.getElementById('encyclopediaTitle').value;
        const encyclopediaContent = document.getElementById('encyclopediaContent').value;
        const encyclopediaImage = document.getElementById('encyclopediaImage').files[0];
        alert(`دانشنامه منتشر شد! \nعنوان: ${encyclopediaTitle} \nمحتوا: ${encyclopediaContent} \nفایل: ${encyclopediaImage ? encyclopediaImage.name : 'بدون فایل'}`);
    });
});