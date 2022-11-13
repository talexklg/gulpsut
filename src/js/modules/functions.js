// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
    // Поддержка проверки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoBAAEAAQAcJaACdLoB+AAETAAA/vW4f/6aR40jxpHxcP/ugT90CfugT/3NoAAA"
    }
    // Добавление класса webp или no-webp для HTML
    testWebP(function(support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}