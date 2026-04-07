

## Plan: Отправка заявок в MAX

### Что будет сделано

1. **Сохранить секреты** `MAX_BOT_TOKEN` и `MAX_CHAT_ID` — токен бота и ID чата для уведомлений.

2. **Создать backend-функцию `notify-max`** (`supabase/functions/notify-max/index.ts`):
   - Принимает JSON с данными заявки (name, phone, email, service, profession)
   - Формирует текстовое сообщение с данными заявки
   - Отправляет через MAX Bot API: `POST https://botapi.max.ru/messages?access_token={TOKEN}&chat_id={CHAT_ID}`
   - Включает CORS-заголовки для вызова с фронтенда
   - Возвращает успех/ошибку

3. **Обновить `CTABlock.tsx`** — после успешной записи в базу вызывать `notify-max` для отправки уведомления в MAX.

4. **Обновить `Services.tsx`** — аналогично добавить вызов `notify-max` после записи заявки в базу.

### Формат сообщения в MAX

```text
📋 Новая заявка с сайта!

👤 Имя: Иван Петров
📞 Телефон: +7 922 850 60 01
📧 Email: ivan@mail.ru
🏷 Услуга: Ритейл
👷 Профессия: Кассир
```

### Технические детали

- Секреты: `MAX_BOT_TOKEN` и `MAX_CHAT_ID` хранятся в backend-секретах, доступны только серверной функции
- Уведомление отправляется параллельно — если MAX недоступен, заявка все равно сохраняется в базу
- API MAX: `POST https://botapi.max.ru/messages?access_token={token}&chat_id={chat_id}` с телом `{ "text": "..." }`

