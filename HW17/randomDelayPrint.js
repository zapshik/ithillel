
function randomDelayPrint(message) {
    message.split('').forEach((char, index) => {
        setTimeout(() => {
            process.stdout.write(char);
            if (index === message.length - 1) process.stdout.write('\n');
        }, Math.random() * 1000);
    });
}


function intervalRace(functions, t) {
    return new Promise(resolve => {
        let results = [];
        let count = 0;

        function executeFunction(index) {
            if (index >= functions.length) {
                resolve(results);
                return;
            }

            setTimeout(() => {
                results.push(functions[index]());
                executeFunction(index + 1);
            }, t);
        }

        executeFunction(0);
    });
}


randomDelayPrint("Привіт, світ!");


const funcs = [
    () => "Функція 1",
    () => "Функція 2",
    () => "Функція 3"
];

intervalRace(funcs, 1000).then(results => console.log("Результати: ", results));
