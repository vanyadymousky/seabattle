const Rxjs = require('rxjs');
const debug = require('debug')('seabattle:socket');

function createUsersConnectedObservable() {

}

/**
 * New client connected to socket server
 *
 * @param {{}} socket - socket instance
 */
function onConnection(socket) {
  console.log('User connected: ', socket.handshake.session.username);
  socket.on('connected', function (messageFromClient) {
    debug(`socket connected. socket id: ${this.id}, message from client: ${messageFromClient || 'empty message'}`);
    // For each client separate disconnect to store complete information about socket
  });
  socket.on('disconnect', onDisconnect.bind(socket));
}

/**
 * Client disconnected from socket server
 *
 * @param {string} reason - disconnect reason
 */
function onDisconnect(reason) {
  debug(`socket disconnected. reason: ${reason}, username: ${this.handshake.session.username}`);
}

module.exports = {
  /**
   * Create socket server wrapping express
   *
   * @param {{}} server Express server
   * @param {string} namespace Socket namespace
   * @return {*}
   */
  create: (server, namespace) => {
    let io = require('socket.io')(server, { origins: '*:*' });

    if (namespace) {
      debug(`Setting up io with namespace ${namespace}`);
      io = io.of(namespace);
    }

    // const onConnect$ = Observable.create(observer => {
    //   io.on('connection', (socket) => {
    //     onConnection(socket);
    //   });
    // });

    // ;
    const connected$ = Rxjs.Observable.create(observer => {
      io.on('connection', socket => {
        observer.next(socket);
      });
    });
    connected$.subscribe(onConnection);
    io.connected$ = connected$;
    return io;
  }
};
