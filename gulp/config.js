global.SRC_FOLDER = 'client/src';
global.BUILD_FOLDER = 'client/build';
global.TMP_FOLDER = '.tmp';
global.SERVER_FOLDER = 'server';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/**/*',
      scripts: SRC_FOLDER + '/{app,components}/**/**/*.coffee',
      scriptsGlob: SRC_FOLDER + '/app/app.coffee',
      vendors: 'client/vendors',
      stylesGlob: SRC_FOLDER + '/app/app.scss',
      templates: SRC_FOLDER + '/{app,components}/**/**/*.jade',
      templatesHTML: SRC_FOLDER + '/{app,components}/**/**/*.html',
      templatesCompiled: TMP_FOLDER
    },
    dest: {
      build: {
        styles: TMP_FOLDER,
        scripts: TMP_FOLDER,
        images: TMP_FOLDER + '/assets/images',
        assets: TMP_FOLDER + '/assets',
        index: TMP_FOLDER,
        server: SERVER_FOLDER
      },
      release: {
        styles: BUILD_FOLDER,
        scripts: BUILD_FOLDER,
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
      scripts: 'bundle.js'
    },
    release: {
      styles: 'bundle.min.css',
      scripts: 'bundle.min.js'
    }
  },
  ports: {
    staticServer: 3000
  }
};
