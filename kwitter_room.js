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

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purope : "adding room name"
}

)
 localStorage.setItem('room_name', room_name);

 window.location = "kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);

      row =" <div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+" </div><hr>";



      document.getElementById("output").innerHTML += row;
     
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout (){
      localStoarge.removeItem("user_name");
      localStoarge.removeItem("room_name");
      window.location ="index.html"
}
