
## Order by....
usuarioRef
    .orderBy('nombre')
    .orderBy('salario')
    .get().then( retornarDocumentos );