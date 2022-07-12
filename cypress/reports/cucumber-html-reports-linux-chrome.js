const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/json",
    reportPath: "./cypress/reports/html-reports/linux/chrome",
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Krieger DeinBett Framework'},
            {label: 'Release', value: '1.0.0'},
        ]
    }
})