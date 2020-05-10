import React,{useState} from 'react'
import firebase from '../firebase'

const conteoFirebase = (sala, nombre) =>{
    return firebase.database().ref(`${sala}`).once('value').then((snapshot) =>{
        console.log(Object.keys(snapshot.val()).length);
    })
}
const Login = () =>{
    const [nombre, setNombre] = useState("");
    const [sala, setSala] = useState("");
    let p="";
    return(
    <div>
        <form>
            Digita el código de la sala:
            <input type="text" value= {sala} onChange={(e) => {setSala(e.target.value)}} required/><br />
            ¿Cual es tu nombre?:
            <input type="text" value= {nombre} onChange={(e) => {setNombre(e.target.value)}}/>
            <input type="submit" value="Aceptar" onSubmit={(e)=>{e.preventDefault(); firebase.database().ref(`${sala}/${nombre}`).set({valor: "prueba"}); conteoFirebase(sala);localStorage.setItem('usuario',nombre); }} /><br />
        </form>
        <button onClick={(e)=> {e.preventDefault(); p=localStorage.getItem('usuario'); alert(`Tu nombre es ${p}`)}}>Nombre</button>

    </div>
    )
}


export default Login;