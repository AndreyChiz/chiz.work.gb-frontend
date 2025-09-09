## Реализовать проверку аутентификации при первичном рендере
https://github.com/AndreyChiz/chiz.work.gb-frontend/issues/4

## Требования
- ->get /refresh:
    - <- response 2xx:
      -  установить access_token в storage: access_token 
      - -> get /me (withCredentials):
         -  <- response 2xx:
             - установить ответ в storage: user_login_data
         - <- response !2xx:
           - do nothing 
    - <- response !2xx:
      - do nothing
## Use case

Пользователь:
- пльзователь входит в приложение.

Приложение:
- оценивает входил ли пользователь ранее
    - вердикт -> Входил:
        - проверяет есть ли refresh_token(httponly) путем отправки запроса на api/refresh
        - если api/refresh возвращает access_token, значит пользователь уже входил
        - приложение устанавливает access_token в authorization bearer
        - загружает данные пользователя - get api/me - отправляет только access_token в authorization
        - бэкенд парсит id пользователя из sub access_token, по id возвращает json с данными пользователя
        - приложение получает данные пользователя и ставит их в storage user_login_data
        - приложение считает чтопользоваетль аутентифицированным и использует данные в рамках сессии
     - вердикт -> Первичный вход:
       - код ответа отличный от 2xx на любом из этапов означает что пользователь входит впервые
       -  проверка прекращается при первом не 2xx коде
