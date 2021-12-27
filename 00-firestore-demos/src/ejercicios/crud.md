## Objeto
const usuario = {
    nombre: 'Majo',
    activo: true,
    fechaNaci: 0,
    salario: 1000
}


## Referencia a base de datos
const usuariosRef = db.collection('usuario');

## Insertar datos en firebase

db.collection('usuario') //coleccion donde se desea añadir los datos
    .add( usuario )     //y el elemento que se quiere añadir
    .then( docRef => {
        console.log( docRef.delete() )
    })
    .catch( e => console.log('error', e))

## Actualizacion de datos en firebase

usuariosRef
    .doc('BWb1OZYA7ykKeEUPFTGn')
    .update({
        activo: false
    })

## Sobre escritura del objeto ya insertado
## borra la informacion del objeto e inserta nueva

usuariosRef
    .doc('BWb1OZYA7ykKeEUPFTGn')
    .set({
        activo: false
    })

## Eliminar usuarios

usuariosRef
    .doc('BWb1OZYA7ykKeEUPFTGn')
    .delete()
    .then( () => console.log('Borrado'))
    .catch( e => console.log('error', e));

## select * from 'usuario'
## Unicamente se dispara una vez que se realiza un cambio
## en alguno de los datos o tambien cuando se ejecuta por 
## primera vez.
## Se puede hacer asi 

usuariosRef.onSnapshot( retornarDocumentos );

## o asi 
usuariosRef
    .get().then( snap => retornarDocumentos(snap));

## Select * from usuarios where activo = true

usuariosRef.where('activo', '==', true).get().then( retornarDocumentos );

usuariosRef.where('salario', '>', 1800)
        .get().then( retornarDocumentos );

usuariosRef.where('salario', '>', 1800)
        .where('salario', '<', 2300)
        .get().then( retornarDocumentos );

usuariosRef.where('salario', '>', 2000)
        .where('activo', '==', true)
        .get().then( retornarDocumentos );