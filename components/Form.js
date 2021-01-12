import React, { useEffect, useState } from "react";
import Link from 'next/link'
import useSWR from 'swr'





const Form = () => {

    const [name, setName] = useState('')
    const [sent, setSent] = useState(false)


    return (
      <div className="w-100 p-2">
          <label name="name" className="w-100 mx-2">Instagram jméno
            <input name="name" type="text" onChange={event => setName(event.target.value)} className="mx-2 w-100 block rounded text-lg"></input>
          </label>
            <button onClick={() => setSent(true)} className="bg-black text-white p-2 text-lg block rounded mx-2 hover:bg-opacity-90 hover:shadow-md">Přihlásit se</button>

      </div>
      

    )
  }


  
  export default Form