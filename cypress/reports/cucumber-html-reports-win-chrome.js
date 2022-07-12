const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/json",
    reportPath: "./cypress/reports/html-reports/windows/chrome",
	metadata:{
        browser: {
            name: 'chrome',
            version: '103'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
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