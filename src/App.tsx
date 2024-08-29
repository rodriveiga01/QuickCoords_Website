import './App.css'
import { Cover } from './Components/Cover'
import { FeatureGroup } from './Components/FeatureGroup'
import { FeatureInDepth } from './Components/FeatureInDepth'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Questions } from './Components/Questions'
import { Unique } from './Components/Unique'
import { UseCases } from './Components/UseCases'

function App() {
  return (
    <>
    <div className='bg-[#142c2c]'>
      <Header/>
      <Cover/>
      <div className='h-16'></div>
      <FeatureGroup/>
      <div className='h-32'></div>
      <FeatureInDepth/>
      <div className='h-32'></div>
      <UseCases/>
      <div className='h-32'></div>
      <Questions/>
      <div className='h-32'></div>
      <Unique />
      <div className='h-32'></div>
      <Footer />
    </div>
    </>
  )
}

export default App
