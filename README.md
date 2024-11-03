# Используемые технологии:

- Front-end:

  - TS
  - SCSS(BEM)
  - React(Vite)
  - React-router-dom
  - Redux
  - Antd
  - React-hook-form
  - React-YouTube
  - Axios
  - React Query

- [Back-end:](https://github.com/Vardoxx/tt-cadex-server)
  - TS
  - Nest
  - PostgreSQL
  - Prisma
  - Class-validator
  - Class-transformer

# Основные подробности о разработке:

- Для типизации и создания ООП обстановки использовал <u>TypeScript</u>.
- Для быстрой и строгой вёрстки использовал <u>BEM</u> методологию с <u>SCSS</u> препроцессором.
- В качестве сборщика выбрал <u>Vite</u>, потому-что не заметил что в ТЗ было разрешено использовать фреймворк <u>Next</u>.
- Для UI выбрал Antd, т.к считаю что это лучшая UI библиотека из-за её гибкости, красоты, удобства, подробной документации с живым примером.
- Для валидации форм выбрал <u>React-hook-form</u>, простая, гибкая, удобная библиотека с отличной документацией.
- Для построения запросов(написания сервисов) выбрал <u>Axios</u> + <u>React Query(tanstack)</u>, для большей компактности по сравнению с <u>RTK Query</u>, т.к проект небольшой.

- Для управлением db выбрал <u>PostgreSQL</u> из-за удобного десктоп приложения <u>pgAdmin4</u>.
- В качестве фреймворка выбрал <u>Nest</u>, из-за его удобного CLI, структуру <u>Angular</u> и огромного выбора нужных библиотек.
- Для ORM выбрал <u>Prisma</u>, крайне удобная штука позволяющая заранее спроектировать таблицы и редактировать их в по ходу разработки, не бегая по файлам в поисках Entity.

# Инструкции по использованию:

- Client

```js
  git clone https://github.com/Vardoxx/tt-CADEX.git
  cd tt-CADEX
  yarn
  yarn start
```

- Server

```js
  git clone https://github.com/Vardoxx/tt-cadex-server.git
  cd tt-cadex-server
  yarn
  yarn start:dev
```

# ВАЖНО!!!

- В серверной части в .env файле находится шаблон конфигурации по которому надо его настроить, в качестве СУБД использовать <u>PostgreSQL</u>. Далее написать в консоль 'yarn prisma db push'

- Если после запроса с клиента браузер ругается на CORS, то перейдите в серверную часть /src/main.ts и вставьте данный фрагмент кода:

```js
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.listen(3006)
	app.enableCors({
		origin: true,
	})
}
bootstrap()
```
