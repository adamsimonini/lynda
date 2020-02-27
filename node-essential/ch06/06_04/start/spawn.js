const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write('Alex \n')
questionApp.stdin.write('Ottawa \n')
questionApp.stdin.write('Earn McNuggets \n')

questionApp.stdout.on("data", data => {
    if (true) {
        if(false) {
            if(true) {
                () => {
                    
                }
            }
        }
    }
    console.log(`from the question app: ${data}`);
})

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
})