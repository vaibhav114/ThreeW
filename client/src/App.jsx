import './App.css'
import LeaderBoardPage from './page/LeaderBoardPage'
import axios from 'axios'


axios.defaults.baseURL ="http://localhost:5000"
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
