document.getElementById("mybutton").addEventListener("click", function () {
  const button = this;
  button.classList.add("active"); // اضافه کردن کلاس برای تغییر رنگ
  const originalText = button.innerText; // ذخیره متن اصلی
  button.innerText = "copied"; // تغییر متن

  setTimeout(function () {
    button.classList.remove("active"); // حذف کلاس برای برگرداندن رنگ
    button.innerText = originalText; // برگرداندن متن اصلی
  }, 2000); // 2000 میلی‌ثانیه = 2 ثانیه
});

function copyToClipboard() {
  var input = document.getElementById("myInput"); // انتخاب اینپوت

  input.select(); // انتخاب مقدار اینپوت

  navigator.clipboard.writeText(input.value);
}
