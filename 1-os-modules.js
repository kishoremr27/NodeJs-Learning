const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
const sec = os.uptime();
console.log(`The system uptime is ${sec} seconds`);


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);