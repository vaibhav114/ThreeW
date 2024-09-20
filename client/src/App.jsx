import './App.css'
import LeaderBoardPage from './page/LeaderBoardPage'
import axios from 'axios'


axios.defaults.baseURL ="https://threew-gto7.onrender.com"
function App() {

  return (
    <>
      <div>
       <LeaderBoardPage />
      </div>
    </>
  )
}

export default App
