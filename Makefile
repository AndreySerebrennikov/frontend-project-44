# .SILENT: - убирает вывод команд в терминале;
.SILENT: 

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

