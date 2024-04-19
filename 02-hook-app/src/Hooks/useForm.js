import { useState } from "react"



export const useForm = (intialSatate = {}) => {
  
    const [values, setValues] = useState(intialSatate)

    const handleInputChange = ({ target }) => {
       
        setValues({
          ...values,
          [ target.name ]: target.value
        })
      }

      return [values, handleInputChange]
    
}
