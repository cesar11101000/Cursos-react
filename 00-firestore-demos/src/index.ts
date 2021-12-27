import db from './firebase/config';
import { retornarDocumentos } from './helpers/mostrar-documentos'


const usuarioRef = db.collection('usuario');

const btnNext = document.createElement('button');
btnNext.innerHTML = "Next Page";
document.body.append( btnNext );

let firstDocument : any = null;
let lastDocument: any = null;

btnNext.addEventListener('click', () => {
    
const query = usuarioRef.orderBy('nombre').startAfter(lastDocument);

query.limit(2).get().then( snap => {
    firstDocument = snap.docs[ 0 ] || null;
    lastDocument = snap.docs[ snap.docs.length - 1] || null;
    retornarDocumentos(snap);
})

})


btnNext.click();
//btn previous

const btnPrev= document.createElement('button');
btnPrev.innerHTML = "Previous Page";
document.body.append( btnPrev );

btnNext.addEventListener('click', () => {
    
const query = usuarioRef.orderBy('nombre').endBefore(firstDocument);

query.limit(2).get().then( snap => {
    firstDocument = snap.docs[ 0 ] || null;
    lastDocument = snap.docs[ snap.docs.length - 1] || null;
    retornarDocumentos(snap);
})

})

btnPrev.click();
usuarioRef.limit(1)
.get().then( retornarDocumentos )