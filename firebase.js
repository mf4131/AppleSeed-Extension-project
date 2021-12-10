// use firebase.js as backgroud.js
console.log("firebase")
try{ 
  // version 8.10.0
  self.importScripts('firebase/firebase-app.js', 'firebase/firebase-database.js');

  var firebaseConfig = {
    apiKey: "AIzaSyBH8OKhXXOXnDv7tyRWbQBF9LtivzLlu_k",
    authDomain: "network-project-demo.firebaseapp.com",
    projectId: "network-project-demo",
    storageBucket: "network-project-demo.appspot.com",
    messagingSenderId: "372449508560",
    appId: "1:372449508560:web:22ceb4e3e17f4236c432d5",
    measurementId: "${config.measurementId}"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  console.log(firebase);

  // var db = firebase.firestore();

 // send to resp to app.js
  chrome.runtime.onMessage.addListener((msg, sender, resp) => {
    if(msg.command == "post"){
        var domain = msg.data.domain
        console.log("domain-post", domain)

        // db.collection("users").doc("test-doc").set({
        //   data: msg.data
        // })
        // .then(function(){
        //   console.log('Document successfully written');
        // })
        // .catch(function(error){
        //   console.error('Error written in', error)
        // });
    }
    if(msg.command == "fetch"){
      var domain = msg.data.domain
      console.log("domain-fetch", domain)
      // var docRef = db.collection("users").doc("u1");
      
      // docRef.get().then(function(doc){
       
      // });

  }


});
}catch(e){
  console.log(e);
}



