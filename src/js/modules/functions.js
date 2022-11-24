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

export function classToggle() {
    let ul_element = document.querySelector('.menu__list');
    ul_element.onclick = function(e){
        let li_elements = ul_element.querySelector('.menu__list-item_active');
        li_elements.classList.remove('menu__list-item_active');
        let li_target = e.target;
        li_target.classList.add('menu__list-item_active');
    }
}