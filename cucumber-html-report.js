const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumberReports/',
	reportPath: './cypress/cucumberReports/cucumber-htmlreports.html',
	metadata:{
        browser: {
            name: 'Chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Uday'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Dec 27th 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Dec 27th 2022, 02:56 PM EST'}
        ]
    }
});