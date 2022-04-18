let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/',function(request,response)
{
 response.sendFile(__dirname+"/public/showtimes.html"); 

}
)



app.listen(8000,function(){
    console.log("Server listening on port 8000");
 
})
