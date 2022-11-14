// Импортируем основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";
// Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импортируем задачу
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

//Создаем функцию наблюдатель
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}
// Последовательная обработкашрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение задачи по умолчанию
gulp.task('default', dev);

