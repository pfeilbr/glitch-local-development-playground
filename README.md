### live reload from local changes

```sh
./node_modules/.bin/nodemon --exec "git add .; git commit -a -m \"local changes\"; git push; curl https://app01.glitch.me/deploy" --ignore node_modules/ --watch "**/*.*"
```