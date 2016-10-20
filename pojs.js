#!/usr/bin/env node

const { compose } = require('ramda');
const getStdin = require('get-stdin');

let setPrefix = s => s.replace('https://ga-dev-tools.appspot.com/query-explorer/', '/v3/data/ga');

let replaceStartDate = s => s.replace(
    /start\-date\=[\d\-]{10}/i,
    'start-date=MONTHSTART'
);

let replaceEndDate = s => s.replace(
    /end\-date\=[\d\-]{10}/i,
    'start-date=MONTHEND'
);

let run = compose(
    replaceEndDate,
    replaceStartDate,
    setPrefix
);

getStdin().then(str => {
    let explorerUrl = run(str);

    console.log(explorerUrl);
});

