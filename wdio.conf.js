const binaryPath = process.env.BINARY || 'C:\\Users\\Nguyen Luan\\AppData\\Local\\Programs\\msgr-client-electron\\HalomeSB.exe';

exports.config = {
    // specs: ['./test/specs/**/*.ts'],
    specs: ['./test/specs/**/anonymous-firsttime.e2e.ts'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                binary: binaryPath,
                args: [],
            },
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
};
