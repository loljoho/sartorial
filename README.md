# Sartorial


## Prerequisites

 - Node.js v0.12+ and npm v2.15+


## Setup

### Install Global Modules
```
npm install --global gulp bower
```

### Clone Repository
```
git clone https://github.com/loljoho/sartorial.git
cd sartorial/
```

### Install Development Tools with `npm`
This will automatically run the `bower install` command, so you can skip the next step.
```
npm install
```
For a full list of project dependencies, see the `package.json` manifest file.

### Install Front-End Dependences with `bower`
This command should have been run by `npm install`.
```
bower install
```
For a full list of project dependencies, see the `bower.json` manifest file.


## Usage

The Gulp serve tasks utilise Browser-Sync.  When called, they will launch a new browser tab or window pointed to https://localhost:3000/ 

### Serve from Source
This command watches for changes in `client/` and automatically injects files and/or reloads browser.
```
gulp serve
```
Sometimes this command may crash if you manipulate files and directories (e.g. moving, deleting)

### Build Project
This command runs all build tasks and deposits the finished, production-ready files in `dist/`.
```
gulp build
```
Alternatively, to run the `build` task and then serve from `dist/`, use:
```
gulp serve:dist
```
