brain-games:
    node bin/brain-games.js
brain-even:
    node bin/brain-even.js
brain-calc:
    node bin/brain-calc.js
brain-gcd:
    node bin/brain-gcd.js

all: help

help:
	echo help

babel:
	babel lib/ -d src/

test: babel
	mocha -R spec

eslint:
	DEBUG="eslint:cli-engine" eslint .

watch:
	watchd lib/**.js test/**.js package.json -c 'bake babel'

release: version push publish

version:
	standard-version -m '%s'

push:
	git push origin master --tags

publish:
	npm publish --dry-run

