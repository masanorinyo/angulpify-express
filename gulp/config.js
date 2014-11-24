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
      scripts: SRC_FOLDER + '/{app,components}/**/**/*.coffee',
      scriptsGlob: './' + SRC_FOLDER + '/app/app.coffee',
      vendors: SRC_FOLDER + '/vendors',
      stylesGlob: SRC_FOLDER + '/app/app.scss',
      styles: SRC_FOLDER + '/{app,components}/**/**/*.scss',
      templates: SRC_FOLDER + '/{app,components}/**/**/*.jade',
      templatesHTML: SRC_FOLDER + '/{app,components}/**/**/*.html',
      templatesJS: SRC_FOLDER + "/templates.js"
    },
    dest: {
      build: {
        styles: TMP_FOLDER,
        scripts: TMP_FOLDER+"/app",
        vendors: TMP_FOLDER,
        html: TMP_FOLDER,
        images: TMP_FOLDER + '/assets/images',
        assets: TMP_FOLDER + '/assets',
        index: TMP_FOLDER,
        server: SERVER_FOLDER
      },
      release: {
        styles: BUILD_FOLDER,
        vendors: BUILD_FOLDER,
        scripts: BUILD_FOLDER + "/app",
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets',
        index: BUILD_FOLDER,
        server: SERVER_FOLDER
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
