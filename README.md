# Установка
---
1. В первую очередь необходимо подготовить сайт перед установкой:

```в папке ./src/contex находим файл index.js```


Здесь необходимо поменять const SERVER_NAME 
```export const SERVER_NAME = "http://your_server_name"```

2. Изменяем index.html 
```в папке ./public/ находим файл index.html```
Здесь необходимо поменять ссылки на подключение нужной библиотеки и иконки
строчка 6:
```<link href="http://your_server_name/assets/libs/fontawesome/css/all.css" rel="stylesheet">```

строчка 7:
```<link rel="shortcut icon" href="http://your_server_name/assets/img/logo.png" type="image/png">```

3. Запуск
Осталось только прописать команды
```npm install```
```npm start```
