global.SRC_FOLDER = 'client/src';
global.BUILD_FOLDER = 'client/build';
global.TMP_FOLDER = '.tmp';
global.SERVER_FOLDER = 'server';
global.MODULE_NAME = "angulpifyExpressApp"

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/**/*',
      scripts: SRC_FOLDER + '/modules/{app,components}/**/*.coffee',
      module: './' + SRC_FOLDER + '/modules/index.coffee',
      vendors: SRC_FOLDER + '/vendors',
      stylesGlob: SRC_FOLDER + '/modules/index.scss',
      styles: SRC_FOLDER + '/modules/{app,components}/**/**/*.scss',
      templates: SRC_FOLDER + '/modules/{app,components}/**/**/*.jade',
      templatesHTML: SRC_FOLDER + '/modules/{app,components}/**/**/*.html',
      templatesJS: SRC_FOLDER + "/modules/templates.js"
    },
    dest: {
      build: {
        index: TMP_FOLDER,
        server: SERVER_FOLDER,
        vendors: TMP_FOLDER,
        html: TMP_FOLDER,
        styles: TMP_FOLDER + "/modules",
        scripts: TMP_FOLDER+"/modules",
        images: TMP_FOLDER + '/assets/images',
        assets: TMP_FOLDER + '/assets'
      },
      release: {
        index: BUILD_FOLDER,
        server: SERVER_FOLDER,
        vendors: BUILD_FOLDER,
        template: SRC_FOLDER+"/modules",
        styles: BUILD_FOLDER + "/modules",
        scripts: BUILD_FOLDER + "/modules",
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets'
      }
    }
  },
  filenames: {
    build: {
      styles: 'bundle.css',
      scripts: 'bundle.js',
      vendors: "libs.js"
    },
    release: {
      styles: 'bundle.min.css',
      scripts: 'bundle.min.js',
      vendors: "libs.js"
    }
  },
  ports: {
    staticServer: 3000
  }
};
