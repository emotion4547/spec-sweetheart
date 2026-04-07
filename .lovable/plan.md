

## Интеграция Яндекс.Метрики (счётчик 108428947)

### 1. Добавить счётчик в `index.html`

Вставить скрипт Метрики в `<head>`, а `<noscript>` блок с пикселем — в `<body>` (HTML5 не допускает `<img>` внутри `<noscript>` в `<head>`).

### 2. Добавить TypeScript-декларацию

Создать файл `src/types/ym.d.ts` с объявлением глобальной функции `ym()`, чтобы TypeScript не ругался на вызовы.

### 3. Добавить `reachGoal` во все формы

Вызывать `ym(108428947, 'reachGoal', '...')` после успешной отправки формы:

| Файл | Цель (goal) |
|------|------------|
| `Hero.tsx` | `hero_form_submit` |
| `Services.tsx` | `service_form_submit` |
| `CTABlock.tsx` | `cta_form_submit` |

Вставить вызов перед `navigate("/thank-you")`.

### 4. Отслеживание скачивания презентации

В `Presentation.tsx` добавить `onClick` на ссылку скачивания с целью `download_presentation`.

### 5. Отслеживание клика по телефону

В `Header.tsx` и `Footer.tsx` добавить `onClick` на ссылки с телефоном с целью `phone_click`.

### Затрагиваемые файлы
- `index.html` — скрипт + noscript-пиксель
- `src/types/ym.d.ts` — новый файл, декларация типов
- `src/components/landing/Hero.tsx`
- `src/components/landing/Services.tsx`
- `src/components/landing/CTABlock.tsx`
- `src/components/landing/Presentation.tsx`
- `src/components/landing/Header.tsx`
- `src/components/landing/Footer.tsx`

