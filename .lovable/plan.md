

## Причины лагов при скролле на мобильных и план оптимизации

### Выявленные проблемы

1. **`backdrop-blur-md` на анимированных элементах** — 6 плавающих карточек в Hero с `animate-float` + `backdrop-blur-md`. Браузер пересчитывает blur каждый кадр анимации — основная причина лагов.

2. **`backdrop-blur-md` на фиксированном Header** — при каждом скролле перерисовывается blur под шапкой.

3. **Большие `blur-3xl` блобы** — декоративные круги 60–96rem с гауссовым размытием в Hero, CTABlock, Presentation, ThankYou. На мобильных GPU это дорого.

4. **6 бесконечных CSS-анимаций** (`animate-float` / `animate-float-delayed`) работают постоянно, даже когда карточки за пределами экрана.

### План исправлений

#### 1. Hero — убрать `backdrop-blur` с плавающих карточек
Заменить `bg-white/10 backdrop-blur-md` на непрозрачный фон без blur: `bg-[#1a2b4a]/90`. Визуально почти идентично, но без пересчёта blur на каждом кадре.

#### 2. Header — заменить `backdrop-blur` на сплошной фон
При скролле: `bg-navy-deep/98` вместо `bg-navy-deep/95 backdrop-blur-md`. На тёмном фоне разница незаметна.

#### 3. Формы в Hero и CTABlock — убрать `backdrop-blur`
Заменить на `bg-[#1a2b4a]/80` — blur на статичных элементах менее критичен, но на мобильных всё равно дорог.

#### 4. Декоративные блобы — скрыть на мобильных
Добавить `hidden md:block` к blur-3xl блобам в Hero, CTABlock, Presentation. На маленьких экранах они не видны за контентом.

#### 5. Плавающие карточки — скрыть на мобильных (уже скрыты)
Они уже в блоке `hidden lg:flex` — анимации не работают на мобильных. Но добавить `will-change: transform` на десктопе для GPU-ускорения.

#### 6. CSS — добавить `will-change` и `transform: translateZ(0)`
Для анимированных элементов — принудительный GPU-слой.

### Затрагиваемые файлы

- `src/components/landing/Hero.tsx` — карточки, блобы, форма
- `src/components/landing/Header.tsx` — фиксированная шапка
- `src/components/landing/CTABlock.tsx` — блоб, форма
- `src/components/landing/Presentation.tsx` — блобы
- `src/index.css` — `will-change` для анимаций

