var unirest = require("unirest");

export default {
  getTranslate(userInput, userLang) {

    return new Promise(function(resolve, reject){

      var req = unirest(
        "POST",
        "https://google-translate1.p.rapidapi.com/language/translate/v2"
      );
  
      req.headers({
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "1f30152838msh1d395b18d17479ep11841ejsnbafefc6e06df",
        "accept-encoding": "application/gzip",
        "content-type": "application/x-www-form-urlencoded",
        useQueryString: true,
      });
  
      req.form({
        q: userInput,
        target: userLang,
      });
  
      req.end(function (res) {
        if (res.error) {
          reject(res.error)
          // throw new Error(res.error);
        }

  
  
        //let translateRes = res.body;
        resolve(res.body)
        console.log(res.body);
        
      });
    })


  },
};
