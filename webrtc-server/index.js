var roomid = connection.channel;

var SIGNALING_SERVER = "wss://localhost.com:9449/";
var websocket = new WebSocket(SIGNALING_SERVER);

websocket.onmessage = function (event) {
  var data = JSON.parse(event.data);

  if (data.isChannelPresent == false) {
    connection.open();
  } else {
    connection.join(roomid);
  }
};

websocket.onopen = function () {
  websocket.send(
    JSON.stringify({
      checkPresence: true,
      channel: roomid,
    })
  );
};
