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
### Пример:

![Неавторизованный и авторизованный пользователь](https://sun9-83.userapi.com/impg/k17EmibqeeApMr151S-iG4mvkJ3IJ-MDnU4r5Q/JWsp9OaV33Q.jpg?size=595x509&quality=96&sign=3a4b4e54884a96afdec921de0b5f018f&type=album)
***
![Пост до авторизации](https://sun9-79.userapi.com/impg/9k3NHfli0Bzs5yleEg0S2eDqAuvxz2zNtg-d2w/BoOMrjBNGZk.jpg?size=672x496&quality=96&sign=0556134f083794c115f3047b2aeddf85&type=album)
![Пост после авторизации](https://sun9-59.userapi.com/impg/oeFia3906scSxG3kc4SkNsPxTV_3N0Y_nMDe5w/sUF2GgqMk9M.jpg?size=672x486&quality=96&sign=6a9bf898ee1438c8f3b6554c24cf3e1a&type=album)
## Роутинг
Приложение обернуто в layout в виде панели навигации и шапки, содержимое рендерится динамически. 
## Стейт менеджер
В глобальный стор вынесены данные постов и флаги загрузки. При запросе на сервер, отображается индикатор лоудинга
![loading](https://sun9-27.userapi.com/impg/J9Z40lNtPwA5avjecYN8v9AcRMpoyZIk5dDIog/yFIlsG86Pa0.jpg?size=534x333&quality=96&sign=7f0ba29303863f75d715cab738907a1d&type=album)
## API
Данные “чужих” пользователей взято с jsonplaceholder
Данные были взяты с мотивацией сделать приложение более “натуральным, менее пустым и не отражают необходимость приложения :)
## DB 
Она же и основное API в логике приложения. Все посты залогиненного пользователя загружаются с Firebase, парсятся для формата jsonplaceholder и заносятся в глобальный стор. После чего рендерятся в постах.
## Посты
Залогиненный пользователь имеет функционал удаления, добавления и редактирования поста.
При этом, все манипуляции происходят с данными в БД на удаленном сервере. 
![firebase](https://sun9-77.userapi.com/impg/iTAWJmDs3lxxhkqxEfAnLCbIK1V8-NAgc6B5KA/dlKVYF0a9gs.jpg?size=726x597&quality=96&sign=70648726b8832d02fb1e092dc69e35a3&type=album)
