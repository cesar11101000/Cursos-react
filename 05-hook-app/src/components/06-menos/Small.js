import React, {memo} from 'react'


//El memo sirve para memorizar los elementos 
//y solo que se permita su cambio si son diferentes

export const Small = memo(({value}) => {

    console.log('Me volvi a imprimir')
    return (
        <small>{ value }</small>
    )
}
)
