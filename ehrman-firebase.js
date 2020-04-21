var addScript=function(src,id){
    var jq=document.createElement("script")
    jq.id=id
    jq.src=src
    var head=document.querySelector("head")
    if(!head.querySelector(`script[src="${src}"]`))
         head.appendChild(jq)
}

addScript("https://code.jquery.com/jquery-3.5.0.min.js","jquery")
addScript("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js","firebaseApp")
addScript("https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js","firebaseAnalytics");

eval(`// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDWXJsbdzrShjKmJ6tnt5c7HFr-65HUDU",
    authDomain: "ehr-blog.firebaseapp.com",
    databaseURL: "https://ehr-blog.firebaseio.com",
    projectId: "ehr-blog",
    storageBucket: "ehr-blog.appspot.com",
    messagingSenderId: "209149035144",
    appId: "1:209149035144:web:2f8130dfd29e736e05553d",
    measurementId: "G-K4ERC9FB1H"
  };
  // Initialize Firebase
setTimeout(function(){
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
},3*1000)`)
