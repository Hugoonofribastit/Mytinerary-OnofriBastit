import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link as LinkRouter} from "react-router-dom"


export default function Cities() {
  const [ciudades, setCiudades] = useState([]); //impresion dinámica
  const [todasLasCiudades, setTodasLasCiudades] = useState([]); //cambios de lo dinámico a través del search
  const [busqueda, setBusqueda] = useState(""); //cambios en el search

  const peticionGet = async () => {
    await axios
      .get("http://localhost:4000/api/alljpcities")
      .then((response) => {
        setCiudades(response.data.response.ciudades);
        setTodasLasCiudades(response.data.response.ciudades);
        console.log(response.data.response.ciudades)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searching = (search) => {
    setBusqueda(search.target.value);
    filtrarBusqueda(search.target.value);
  };

  const filtrarBusqueda = (terminoBusqueda) => {
    let resultadoBusqueda = todasLasCiudades.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .startsWith(terminoBusqueda.toLowerCase().trim())
      ) {
        return elemento;
      }
    });
    setCiudades(resultadoBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
     
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 vh">
        
      
     
      <div className="title h1 text-center textCarr">Cities from Japan to discover!</div>
      <div className="inputsearch d-flex align-items-center">
          <p className="me-5" >Look for your next destination!</p>
          <input
            className="inputsearch"
            placeholder="type your destination"
            value={busqueda}
            onChange={searching}
          />
        </div>
        <section className="conteinercard">
        {ciudades.length !== 0 ? (
          ciudades.map((ciudad) => (
            <div className="container-fluid py-3 cont ">
            <div className="d-flex justify-content-between flex-wrap">
                <div className="card float ">
                    <div className="row d-flex flex-wrap carta">
                        <div className="col-sm-5">
                            <img className="imgcard img-fluid mt-3 mb-3" src={process.env.PUBLIC_URL+ `/imagenes/${ciudad.image}`} />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-block">
                                <h3 className="titulocard text-center mt-2">{ciudad.name} </h3>
                                <p className="text-just me-3">{ciudad.description}</p>
                                <LinkRouter to="/detalles" className='link'>
                                <div className="text-center"><button className="btn btn-card btn-primary mb-3 text-center">More Details</button></div>
                                </LinkRouter>
                               
                            </div>
                        </div>          
                    </div>
                </div>    
            </div>
        </div>
          ))
        ) : (
          <h2 className="title h2 text-center textCarr">We do not currently have the destination you were looking for.</h2>
        )}
      </section>
      </div>
    </>
  );
}




