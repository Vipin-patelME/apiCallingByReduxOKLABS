
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOldData, getPost } from './redux/action/actions';

function App() {

  const dispatch = useDispatch()

  const userData = useSelector(state => state)
  const {apiReducer} = userData
  console.log(apiReducer)

  const getDataFromApi = ()=>{
    dispatch(getPost())
  }
  const getPreviousData = ()=>{
    dispatch(getOldData())
  }


  return (
    <div className="App">
      <header className="App-header">
      <button onClick={getPreviousData} type='button' style={{width:"100px", backgroundColor:"goldenrod",height:"40px", borderRadius:"8px", borderStyle:"none", marginTop:"20px"}}>Previous Posts</button>
        <ul>
          {
            apiReducer?.map((eachData, index) => 
              <li key={index}>
                <h4> <span style={{marginRight:"20px", color:"red"}}>{parseInt(`${index}`) + 1}</span>{eachData.title}</h4>
                <p>{eachData.body}</p>
              </li>
              )
          }
        </ul>
        <button onClick={getDataFromApi} type='button' style={{width:"100px", backgroundColor:"goldenrod",height:"40px", borderRadius:"8px", borderStyle:"none"}}>Get Posts</button>
        <button onClick={getPreviousData} type='button' style={{width:"100px", backgroundColor:"goldenrod",height:"40px", borderRadius:"8px", borderStyle:"none", marginTop:"20px"}}>Previous Posts</button>
      </header>
    </div>
  );
}

export default App;
