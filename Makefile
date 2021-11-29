.PHONY: deploy
deploy:
	heroku container:login
	heroku container:push --app=sf-liveagent-demo web
	heroku container:release --app=sf-liveagent-demo web