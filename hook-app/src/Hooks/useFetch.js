import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true)
  
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {

        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        if ( isMounted.current ) {
            setState({
                data: null,
                loading: true,
                error: null
            })    
        }
        
        fetch( url )
            .then( resp => resp.json())
            .then( data => {

                setState({
                    loading:false,
                    error: null,
                    data
                })

            })

    }, [url])

    return state

}


