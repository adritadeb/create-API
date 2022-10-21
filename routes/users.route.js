const express = require('express');
const fs = require('fs');

const router = express.Router();

// router.get('/random', (req, res) => {       
//     const users = fs.readFileSync('users.json');
//     const parsedUsers = JSON.parse(users);
//     let randomUsers = [];
//     let count = 0;
//     for(let i = 0; i < parsedUsers.length; i++){ 
//         randomUsers.push(parsedUsers[i]);
//     };
//     randomUsers.forEach(user => {
//         console.log(user)
//         // res.send(user);
//         count++;
//         if(count++){
//             res.end();

//         }
//     });
    // for(let i = parsedUsers.length; i < parsedUsers.length; i--){
    //     console.log(i)
    // }
// });

router.get('/all', (req, res) => {       
    const users = fs.readFileSync('users.json');
    const parsedUsers = JSON.parse(users);
    res.send(parsedUsers);
});

router.post('/save', (req, res) => {       
    const users = fs.readFileSync('users.json');
    const parsedUsers = JSON.parse(users);
    parsedUsers.push(req.body);
    const newUser = JSON.stringify(parsedUsers);
    fs.writeFileSync("users.json", newUser);
    res.send(parsedUsers);
});

router.delete('/delete/:id', (req, res) => {  
    const { id } = req.params;     
    const users = fs.readFileSync('users.json');
    let parsedUsers = JSON.parse(users);
    parsedUsers = parsedUsers.filter(user => user.id !== Number(id));
    const newUsers = JSON.stringify(parsedUsers);
    fs.writeFileSync("users.json", newUsers);
    res.send(parsedUsers);
});

// router.patch('/update/:id', (req, res) => {       
//     const { id } = req.params;
//     const users = fs.readFileSync('users.json');
//     const parsedUsers = JSON.parse(users);
//     let findUser = parsedUsers.find(user => user.id === Number(id));
//     findUser = req.body;
//     // console.log(newUser)
//     // const parsedUsers = JSON.parse(users);
//     // parsedUsers.push(req.body);
//     const newUser = JSON.stringify(findUser);
//     fs.writeFileSync("users.json", newUser);
//     res.send(newUser);
// });

module.exports = router;