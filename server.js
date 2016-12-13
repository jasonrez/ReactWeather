let express = require('express');

let app = express();


app.use(express.static('public'));

app.listen(3000, function(){
  console.log('server listening on 3000');
});
