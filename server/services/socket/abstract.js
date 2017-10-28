const Rxjs = require('rxjs');
const debug = require('debug')('seabattle:socket');

/**
 * New client connected to socket server
 *
 * @param {{}} socket - socket instance
 */
function onConnection(socket) {
  console.log('User connected: ', socket.handshake.session.username);
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

    const connected$ = Rxjs.Observable.create(observer => {
      io.on('connection', socket => {
        observer.next(socket);
      });
    });
    connected$.subscribe(onConnection);
    io.connected$ = connected$;
    return io;
  },
};
