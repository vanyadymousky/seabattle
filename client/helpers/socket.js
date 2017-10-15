import io from 'socket.io-client'


const socket = io('ws://localhost:3000/')

socket.on('news', (data) => {
  console.log(data)
})

socket.emit('my other event', { hi: 'there' })
