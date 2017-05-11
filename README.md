Sartorial
=========

Bespoke AngularJS web application boilerplate/seed project




## Overview

__Sartorial__ is a bespoke boilerplate/seed project for building AngularJS web applications.

This project was generated with the [Yeoman][yo] [Gulp-Angular][yo-gulp-ng] generator.


### Application Structure

__Directory Structure__
```
app/
│   
├── .tmp/                                   --> Temporary Directory
├── dist/                                   --> Build Destination
│   
├── bower_components/                       --> Bower Dependencies
├── node_modules/                           --> npm Dependencies
│   
├── e2e/                                    --> End-to-End Tests
│   
├── gulp/                                   --> Gulp Tasks
│   ├── .eslintrc
│   ├── build.js
│   ├── conf.js
│   ├── e2e-tests.js
│   ├── inject.js
│   ├── markups.js
│   ├── scripts.js
│   ├── server.js
│   ├── styles.js
│   ├── unit-tests.js
│   └── watch.js
│   
│   
│   
│   
├── client/
│   │   
│   │
│   ├── app/
│   │   │   
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── components.module.js
│   │   │   
│   │   ├── core/
│   │   │   ├── style/
│   │   │   │   ├── _variables.scss
│   │   │   │   ├── _utilities.scss
│   │   │   │   ├── _bootstrap.scss
│   │   │   │   ├── _base.scss
│   │   │   │   └── _layout.scss
│   │   │   ├── services/
│   │   │   │   ├── data.service.js
│   │   │   │   └── routeHelper.provider.js
│   │   │   ├── util/
│   │   │   │   ├── core.config.js
│   │   │   │   ├── core.constants.js
│   │   │   │   ├── core.run.js
│   │   │   │   └── route.config.js
│   │   │   └── core.module.js
│   │   │   
│   │   ├── main/
│   │   │   ├── main.controller.js
│   │   │   ├── main.jade
│   │   │   ├── main.scss
│   │   │   └── main.module.js
│   │   ├── tech/
│   │   │   ├── tech.controller.js
│   │   │   ├── tech.jade
│   │   │   ├── tech.scss
│   │   │   └── tech.module.js
│   │   ├── help/
│   │   │   ├── help.controller.js
│   │   │   ├── help.jade
│   │   │   ├── help.scss
│   │   │   └── help.module.js
│   │   │   
│   │   ├── app.jade
│   │   ├── app.js
│   │   └── app.scss
│   │
│   │   
│   ├── assets/
│   │   │   
│   │   ├── data/
│   │   │   
│   │   ├── fonts/
│   │   │   
│   │   └── images/
│   │
│   │   
│   ├── 
│   │   
│   ├── favicon.ico
│   │   
│   └── index.html
│   
│   
│   
│   
├── .bowerrc
├── .editorconfig
├── .gitignore
│   
├── bower.json
├── package.json
│   
├── karma.conf.js
├── protractor.conf.js
│   
├── gulpfile.js
│   
├── README.md
└──
```




## Getting Started

### Prerequisites

- [Git][git]
- [Node.js][node] and [npm][npm]
- [Gulp][gulp]
- [Bower][bower]


### Installing

1. Clone the repository with git and enter the directory:
```
git clone https://github.com/loljoho/sartorial.git
cd sartorial/
```

2. Install dependencies with (this will automatically call `bower install`):
```
npm install
```

3. Start the development server, which will automatically open the client in your browser:
```
gulp serve
```


### Developing

To build the project into `dist/`, run:
```
gulp build
```

To build the project, and then serve it from the `dist/` directory, run:
```
gulp serve:dist
```

To run Karma for unit tests, or Protractor for end-to-end tests:
```
gulp test
gulp protractor
```




## Contributing

Lorem ipsum dolor sit amet.



[zenhub]:https://www.zenhub.com/
[gitflow]:https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

[ergast]:http://ergast.com/mrd/
[ergast-toc]:http://ergast.com/mrd/terms/
[license-nc-sa]:http://creativecommons.org/licenses/by-nc-sa/3.0/

[git]:https://git-scm.com/
[node]:https://nodejs.org
[npm]:https://npmjs.org
[bower]:https://bower.io
[yo-gulp-ng]:https://github.com/Swiip/generator-gulp-angular
[yo]:https://yeoman.io
[gulp]:https://gulpjs.com
