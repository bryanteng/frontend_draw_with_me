function openConnection() {
  // return new WebSocket("ws://localhost:3000/cable")
  // return new WebSocket("ws://10.39.104.225:3000/cable")
  return new WebSocket(`ws://http://127.0.0.1:8080/`)
  //url is from live-server frontend
}
