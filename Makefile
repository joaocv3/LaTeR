.PHONY: setup
setup:
	bundle
	rake db:migrate

.PHONY: test
test:
	bundle exec cucumber

.PHONY: start
start:
	bundle exec rails s
