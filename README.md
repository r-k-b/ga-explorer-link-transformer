Transform 'GA Core Reporting API Explorer' urls into something a little easier to use in Power BI. Like:

```
https://ga-dev-tools.appspot.com/query-explorer/?ids=ga%3A59361446&start-date=2010-01-01&end-date=2017-01-01&metrics=ga%3Asessions%2Cga%3Apageviews&dimensions=ga%3AyearMonth%2Cga%3AuserAgeBracket&sort=-ga%3Asessions%2C-ga%3AyearMonth
```
↓
```
/v3/data/ga?ids=ga%3A59361446&start-date=MONTHSTART&start-date=MONTHEND&metrics=ga%3Asessions%2Cga%3Apageviews&dimensions=ga%3AyearMonth%2Cga%3AuserAgeBracket&sort=-ga%3Asessions%2C-ga%3AyearMonth

```


# Usage example (bash on windows)

Read the url from the clipboard, sets the clipboard to the transformed URL:

```
cat /dev/clipboard | ./pojs.js | clip
```


# todo

- [ ] in-browser version (elm powered?)
