function talk(){  
    var know = {  
    "Hello" : "Hello there, how can i help you",
     "hello" : "Hello there, how can i help you",
    "hi" : "Hello there, how can i help you",
    "Hi" : "Hello there, how can i help you",
     "Who are you" : "Hello, Ivan Hunter  here ð",  
     "who are you" : "Hello, Ivan Hunter  here ð",  
     "whom do you love" : "Sheryl Ivan ð",  
     "Whom do you love" : "Sheryl Ivan ð",  
     "who are you" : "Hello, Ivan Hunter  here ð",       
     "who is your perfect love" : " Sheryl Ivan ð",  
     "Who is your perfect love" : " Sheryl Ivan ð",  
     "Hey" : "Hello, Ivan Hunter  here ð",  
     "hey" : "Hello, Ivan Hunter  here ð",  
     "hi" : "Hello, Ivan Hunter  here ð",  
     "How are you" : "Good :)",  
     "What can i do for you" : "Please Give us A Follow & Like.",  
     "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiyðª ",  
     "ok" : "Thank You So Much ",  
     "nice time" : "Thank You So Much ",  
     "Nice time" : "Thank You So Much ",  
     "Bye" : "Okay! Will meet soon.."  
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }  