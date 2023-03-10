import logo from './logo.svg';
import './App.css';
import ComponenteNavBar from './components/ComponenteNavBar';
import ComponenteFooter from './components/ComponenteFooter';
import ComponenteBody from './components/ComponenteBody';

function App() {
    
  return (
    <div>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>La Vascongada</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <ComponenteNavBar></ComponenteNavBar>
      <ComponenteBody></ComponenteBody>
      <ComponenteFooter></ComponenteFooter>
    </div>
  );
}


export default App;
