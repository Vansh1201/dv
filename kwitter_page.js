var firebaseConfig = {
      apiKey: "AIzaSyDPv_EGzjR0bFRk3kYb6rhMbMn1-RYcXKo",
      authDomain: "kwitter-9d6fd.firebaseapp.com",
      databaseURL: "https://kwitter-9d6fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d6fd",
      storageBucket: "kwitter-9d6fd.appspot.com",
      messagingSenderId: "1092041671894",
      appId: "1:1092041671894:web:7a61ee2aa2e537311bf577"
    };
    
   
    firebase.initializeApp(firebaseConfig);
     
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
console.log(user_name)
    function send()
    {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

}
);

document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
