# Redux Saga: Список и детали услуг

[![Build & Deploy](https://github.com/dm-morozov/netology_76_react-redux-saga/actions/workflows/web.yaml/badge.svg)](https://github.com/dm-morozov/netology_76_react-redux-saga/actions/workflows/web.yaml)

Учебный проект по заданию Нетологии: реализовать приложение на React с маршрутизацией и Redux-Saga, которое показывает список услуг и страницу деталей услуги с обработкой состояний загрузки и ошибок.

## Демо

- Frontend (GitHub Pages): https://dm-morozov.github.io/netology_76_react-redux-saga/
- Backend (Render): https://netology-76-react-redux-saga.onrender.com/

## Задача

Нужно было реализовать:

- Главную страницу `/` со списком услуг.
- Страницу `/:id/details` с деталями выбранной услуги.
- Асинхронные запросы через Redux-Saga (`call`, `put`, `takeLatest`).
- UI-состояния `loading / error / success` для списка и деталей отдельно.
- Повторный запрос по кнопке «Повторить запрос».

## Что реализовано

- Разделены состояния `services.list` и `services.details`.
- Вынесены action'ы `*Requested/*Succeeded/*Failed` для list/details.
- Реализованы saga-обработчики для загрузки списка и деталей.
- Добавлен API-слой с обработкой HTTP-ошибок (`!res.ok`).
- Настроены маршруты `/` и `/:id/details`.
- Сделаны переиспользуемые компоненты `Spinner` и `ErrorView`.
- Добавлена типизация store (`RootState`, `AppDispatch`) и typed hooks.
- Для корректной работы на GitHub Pages настроен `BrowserRouter basename={import.meta.env.BASE_URL}`.

## Что изучено в процессе

- Практика разделения ответственности: `domain -> store -> pages/components`.
- Поток данных в Redux-Saga: `dispatch -> saga -> API -> reducer -> UI`.
- Работа с асинхронными сценариями и retry-механикой.
- Организация типобезопасного Redux-кода на TypeScript.

## Стек

- React
- TypeScript
- React Router
- Redux Toolkit
- Redux-Saga
- Vite

## Локальный запуск

1. Установить зависимости:

```bash
yarn
```

2. Запустить frontend:

```bash
yarn dev
```

3. Backend для задачи `main-details` запускать отдельно (локально или использовать деплой на Render).

## Контакты

Если у вас возникли вопросы или предложения по коду:

- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
