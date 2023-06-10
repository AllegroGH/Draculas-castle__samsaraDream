install: # установить зависимости
	npm ci

lint: # запуск линтера
	npx eslint .

play: # играть
	node bin/game.js
