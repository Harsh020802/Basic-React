import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilty(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibilty(true)}>My Button</Button>
    </div>
  );
}

export default App;
