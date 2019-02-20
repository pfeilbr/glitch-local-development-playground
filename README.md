# glitch-local-development-playground

Develop [Glitch](https://glitch.com) apps locally.  Based on [noise-machines/git-glitched](https://github.com/noise-machines/git-glitched).
The default Glitch development experience is to use the browser based editor.  This allows you to use your favorite local editor.

## Resources

* [Possible to code locally and push to glitch with git?](https://support.glitch.com/t/possible-to-code-locally-and-push-to-glitch-with-git/2704/3)
* [Code locally, push to glitch via git?](https://support.glitch.com/t/code-locally-push-to-glitch-via-git/4227/5?u=tim)

### live reload from local changes

```sh
./node_modules/.bin/nodemon --exec "git add .; git commit -a -m \"local changes\"; git push; curl https://app01.glitch.me/deploy" --ignore node_modules/ --watch "**/*.*"
```