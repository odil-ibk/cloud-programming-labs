function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "System starting";
    case "stop":
      return "System stopping";
    case "status":
      return "System status OK";
    default:
      return "Unknown command";
  }
}
