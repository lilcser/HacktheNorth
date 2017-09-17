# SendGrid-nodejs

Same as: https://github.com/sendgrid/sendgrid-nodejs but with support for stats endpoint

```
var data, sendgrid;

sendgrid = require('sendgrid')(sendgridApiUser, sendgridApiKey);

data = {
  days: 5
};

sendgrid.stats(data, function(err, json) {
  
});
```

## License

Licensed under the MIT License.

