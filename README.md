# Инструкция запуска

Первым делом делаем бэкенд

```sh
cd ./backend
npm i
npm run build
npm run start
```

> Для запуска бэка в "dev" режиме можно использовать `npm run develop`
> -После делаем фронт

```sh
cd ./frontend
npm i
npm run build
npm start
```

> Для запуска фронта в "dev" режиме можно использовать `npm run dev`

## Файл .env

> Для отправки данных использую smtp mail.ru но можно использовать любой другой, достаточно в файле указать данные для отправки

- EMAIL = "логин"
- PASS = "пароль"
- HOST = "smtp.mail.ru"
- PORT = "465"

## Файл const.js в "frontend/src/lib"

- URLAPI: нужен для запросов формат http(s)://backend_link/graphql
- PATH_IMAGE: нужен для подругзки изображений http(s)://backend_link
- DOMAIN: http(s)://frontend_link

## rss.xml и sitemap.xml

> Они генерируются автоматически

[x] - Добавить микроразметку
[x] - Подключить метрику
