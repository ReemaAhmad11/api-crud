import {Routes , Route} from 'react-router-dom';
import Create from './componant/Create';


function Route() {
  return (
    <div>
     <Routes>      
      <Route path ='Create' element={<Create/>}> </Route>
      {/* <Route path ='Gitimge' element={<Gitimage/>}> </Route> */}
    </Routes> 
    </div>
  )
}

export default Route