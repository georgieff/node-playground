const server = require('net').createServer();
let counter = 0;
let sockets = {}

server.on('connection', socket => {
    console.log('Client connected');
    socket.write('Please gimme your name: \n');

    socket.on('data', data => {
        if(!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.id = counter++;
            sockets[socket.id] = socket;
            socket.write('welcome ' + socket.name + '!\n');
            return;
        }
        Object.entries(sockets).forEach(([key ,soc]) => {
            if(socket.id == key) return;
            soc.write(`${socket.name} said: `);
            soc.write(data);
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        delete sockets[socket.id];
    });
});

server.listen(8000, () => {
    console.log('server lifted')
});
