const net = require("net");

let counter = 0;
// object to store all the sockets
const clients = {};
// This callback fn is called whenever new client connects
const serverConnectionListener = (client) => {
  client.id = counter++;
  console.log("Client connected: ", client.id);
  client.write("Welcome client: " + client.id);
  clients[client.id] = client;

  client.on("data", (data) => {
    // get all clients
    Object.values(clients).forEach((storedClient) => {
      storedClient.write(`${storedClient.id}:`);
      storedClient.write(data);
    });
  });

  client.on("end", function () {
    delete clients[client.id]
    console.log("Client disconnected:", client.id);
  });
};

const server = net.createServer();

server.on("error", (err) => {
  throw err;
});
// we can pass the serverConnectionListener in net.createServer(serverConnectionListener)
// and it will listen also
server.on("connection", serverConnectionListener);

// adds port to the service to enable it from creating a socket (client) when it receives new connection
server.listen(8000, () => {
  console.log("Server started on port 8000");
});

// since this is a tcp connection, we can connect using `telnet localhost 8000` command
