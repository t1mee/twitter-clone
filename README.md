# Twitter-app
## Стэк
* React 
* react-router-dom
* Redux
* TypeScript
* Material UI
* Firebase
* Axios
* Tasty Cookies
## Логика приложения
* Реализован функционал логирования (при успешной валидации данных с формы, в куки заносится флаг для проверки авторизации пользователя) 
* Валидация формы
* Права доступа (удалять или редактировать посты "пользователя" до авторизации запрещено)
## Роутинг
Приложение обернуто в layout в виде панели навигации и шапки, содержимое рендерится динамически. 
## Стейт менеджер
В глобальный стор вынесены данные постов и флаги загрузки. При запросе на сервер, отображается индикатор лоудинга
## API
Данные “чужих” пользователей взято с jsonplaceholder
Данные были взяты с мотивацией сделать приложение более “натуральным, менее пустым и не отражают необходимость приложения :)
## DB 
Она же и основное API в логике приложения. Все посты залогиненного пользователя загружаются с Firebase, парсятся для формата jsonplaceholder и заносятся в глобальный стор. После чего рендерятся в постах.
## Посты
Залогиненный пользователь имеет функционал удаления, добавления и редактирования поста.
При этом, все манипуляции происходят с данными в БД на удаленном сервере. 
