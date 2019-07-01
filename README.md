# glitch-local-development-playground

Develop [Glitch](https://glitch.com) apps locally.  Based on [noise-machines/git-glitched](https://github.com/noise-machines/git-glitched).
The default Glitch development experience is to use the browser based editor.  This allows you to use your favorite local editor.

## Resources

* [Possible to code locally and push to glitch with git?](https://support.glitch.com/t/possible-to-code-locally-and-push-to-glitch-with-git/2704/3)
* [Code locally, push to glitch via git?](https://support.glitch.com/t/code-locally-push-to-glitch-via-git/4227/5?u=tim)

## Initial Project Setup

* Get the writable git repo location from the Glitch UI via `Tools | Git Import, Import, Export`
* Get the URL + User Name.  The User Name acts as the username+password.  It is a GUID.  e.g. `a63dde92-f3db-411b-a4cf-e2834ed707e4`
* Clone glitch repo locally

**Example Clone (this doesn't work.  username changed)**

```sh
git clone https://a63dde92-f3db-411b-a4cf-e2834ed707e4@api.glitch.com/git/glitch-local-development-playground
```

![](https://www.evernote.com/l/AAGIRoW8xEpJrrMq7J8uOiLFDgAjdZBhwJAB/image.png)

## Development (live reload from local changes)

```sh
npm run dev
```

> You must have the browser based editor view open for live reload to work.

## Pushing Changes to Github

There are two remotes, one for glitch and one for github.  The branch named `local` contains the most recent up to date changes.  Run the following to push to github.

```sh
git push -u github local
git push -u github master
```

> When viewing on github in browser be sure to change branch to `local` to see the latest.