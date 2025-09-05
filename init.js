const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats  = [
    {
    from : "rahe",
    to : "ruhi",
    msg : "send me your exam sheets",
    created_at : new Date()
    },
    {
    from : "raju",
    to : "raja",
    msg : "send me your exam sheets",
    created_at : new Date()
    },
    {
    from : "komal",
    to : "nitu",
    msg : "send me your exam sheets",
    created_at : new Date()
    },
    {
    from : "kuldeep",
    to : "rakesh",
    msg : "send me your exam sheets",
    created_at : new Date()
    },
    {
    from : "raushan",
    to : "sonu",
    msg : "send me your exam sheets",
    created_at : new Date()
    },
    
];

Chat.insertMany(allChats);
    
    
