import './App.css'
import Card from './components/Card/card'
import data from './data/data.json'

function App() {

  return (
    <>
      <div className='wrapper'>
        <h1>Books ({data.length})</h1>
         <div className='Cards'>
         {
            data.map((book, index) => {
              return(
                <Card key={index} book={book} />
              )
            })
          }
         </div>
      </div>
    </>
  )
}

export default App
