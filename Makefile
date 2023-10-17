# .SILENT: - убирает вывод команд в терминале;
.SILENT: 

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js
	
lint:
	npx eslint .	

publish:
	npm publish --dry-run

