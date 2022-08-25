import { useState } from 'react'
import styles from './App.module.css'
import feitoCom from './assets/feitocom.png'
import { GridItem } from './components/GridItem'
import { levels, calculateImc, Level } from './helpers/imc'

const App = () =>{

  const [heightField,setHeighField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () =>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField,weightField))
    } else{
      alert("Digite todos os campos")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={feitoCom} alt="logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule o seu IMC</h1>
          <p> IMC é a sigla para Indice de Massa Corporal</p>

          <input
          type="number"
          placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
          value={heightField > 0 ? heightField : ''} 
          onChange={e => setHeighField(parseFloat(e.target.value))}
          />

          <input
          type="number"
          placeholder="Digite seu peso. Ex.: 75.3 (em kg)"
          value={weightField > 0 ? weightField : ''} 
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && 
          <div className={styles.grid}>
            {levels.map((item,key)=> (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {
          toShow &&
           <div className={styles.rightSideBig}>
            <div className={styles.rightArrow}></div>
            
            <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default App

