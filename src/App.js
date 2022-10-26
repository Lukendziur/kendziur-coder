import CustomNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <>
    <CustomNavbar/>
    <ItemListContainer greeting={'Collections'}/>    
    </>
  );
}

export default App;
