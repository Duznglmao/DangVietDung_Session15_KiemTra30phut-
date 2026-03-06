const btnDangKy = document.getElementById("btnDangKy");

btnDangKy.addEventListener("click", () => {
    const emailValue = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value.trim();
    const rePasswordValue = document.getElementById("rePassword").value.trim();

    if (emailValue === "" || passwordValue === "" || rePasswordValue === "") {
        alert("Vui lòng nhập đầy đủ thông tin vào tất cả các ô!");
        return; 
    }

    if (passwordValue !== rePasswordValue) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    const user = {
        email: emailValue,
        password: passwordValue,
        rePassword: rePasswordValue
    };
    console.log("user:", user);
});