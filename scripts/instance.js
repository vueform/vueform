const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const util = require('util');
const argv = require('argv');
const exec = util.promisify(require('child_process').exec);

const args = argv.option([
  {
    name: 'domains',
    short: 'd',
    type: 'csv,string'
  },
  {
    name: 'key',
    short: 'k',
    type: 'string'
  },
  {
    name: 'version',
    short: 'v',
    type: 'string'
  },
  {
    name: 'apiPath',
    short: 'a',
    type: 'string'
  },
]).run()

const key = args.options.key
const version = args.options.version
const domains = args.options.domains
const apiPath = args.options.apiPath

// package.json

async function createInstance () {
 await exec(`npm run build:instance --prefix ${path.resolve(__dirname, '../')} -- --configKey=${key} --configDomains=${domains.join(',')} --configVersion=${version} --apiPath=${apiPath}`)
}

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

function createLicense() {
  let license = fs.readFileSync(path.resolve(__dirname, './../LICENSE.txt'), 'UTF-8')
  const vars = {
    domains,
  }

  Object.keys(vars).forEach((key) => {
    var value = vars[key]

    if (Array.isArray(value)) {
      value = value.join(', ')
    }

    var regex = new RegExp(`\{${key}\}`, 'g')

    license = license.replace(regex, value)
  })


  fs.writeFileSync(path.resolve(__dirname, apiPath +'/storage/app/instances/'+key+'/'+version+'/vueform/LICENSE.txt'), license)
}

function createPackageJson() {
  let packageJson = fs.readFileSync(path.resolve(__dirname, './../package.json.template'), 'UTF-8')

  fs.writeFileSync(path.resolve(__dirname, apiPath +'/storage/app/instances/'+key+'/'+version+'/vueform/package.json'), packageJson)
}

async function run () {
  try {
    // console.log('obfuscating installer.js')
    await createInstance()
    // console.log('installer.js was copied to destination')

    files.forEach((file) => {
      copyFile(path.resolve(__dirname, './../' + file), path.resolve(__dirname, apiPath +'/storage/app/instances/'+key+'/'+version+'/vueform/' + file), (err) => {
        if (err) throw err;
        // console.log(file + ' was copied to destination');
      });
    })

    ncp(path.resolve(__dirname, './../src/themes'), path.resolve(__dirname, apiPath +'/storage/app/instances/'+key+'/'+version+'/vueform/themes'), function (err) {
      if (err) {
        return console.error(err);
      }
      // console.log('themes was copied to destination');
    });

    ncp(path.resolve(__dirname, './../src/locales'), path.resolve(__dirname, apiPath +'/storage/app/instances/'+key+'/'+version+'/vueform/locales'), function (err) {
      if (err) {
        return console.error(err);
      }
      // console.log('locales was copied to destination');
    });

    createLicense()
    createPackageJson()
    console.log('true')
  } catch (e) {
    console.log('false', e)
  }
}

const files = [
  'dist/index.js',
  'dist/partials/components.js',
  'dist/partials/config.js',
  'dist/partials/useVueform.js',
  'dist/partials/Vueform.js',
  'README.md',
  'tailwind.js',
]

run()
