import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Estudando para hackear a NASA</h1>
      <p>
     pipipopopo
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
        blablabla
        </p>
        <p> Quantidade de chifre:  {count}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Clica aqui para ver algo irrelevante acontecer </p>
        <ClickCount/>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>
         ximbalaieeeeeeeeeee
        </p>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Toma danada 
        </Button>
      </div>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
