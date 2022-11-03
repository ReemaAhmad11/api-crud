import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Read() {
  const [state, setState] = useState([]);

  let url = "https://6362424d66f75177ea2a99c0.mockapi.io/toDo"

  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data)


    })
  }, [])

  const ontDelete = (id) => {
    console.log(id);
    axios.delete(`https://6362424d66f75177ea2a99c0.mockapi.io/toDo/${id}`).then(res => {
      console.log(res);
      setState(state.filter(del => {
        return del.id != id;
      }))
    })
  }



  return (
    <div>



      {state.map(data => {
        return (
          <div >
            <p> FrstName: {data.fName}</p>
            <p> LastName: {data.lName}</p>
            <button onClick={() => { ontDelete(data.id) }}> Delete </button>
            {/* {items.passowrd}
            {items.fname} */}

          </div>
        )
      }
      )
      }
    </div>



  )
}

export default Read