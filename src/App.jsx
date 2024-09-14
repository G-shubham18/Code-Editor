import Home from './Component/home';
import DataProvider from './context/DataProvider';

function App() {
  
  

  return(
    <>
    <DataProvider>
      <Home/>
    </DataProvider>


    </>

  )
}

export default App
