import * as React from "react";

import { useEffect, useState } from "react";
import {Link as LinkRouter} from "react-router-dom"
/* import { useParams } from "react-router-dom";  */
import {connect} from 'react-redux';
import citiesActions from '../../Redux/actions/citiesActions';


function Cities(props) {

 /*  const [ciudades, setCiudades] = useState([]); 
  const [todasLasCiudades, setTodasLasCiudades] = useState([]);  */
  const [busqueda, setBusqueda] = useState("");   
  
  /* const {cities: todasLasCiudades } = props */

/*    const peticionGet = async () => {
    await axios
      .get("http://localhost:4000/api/alljpcities")
     .then((response) => {
        setCiudades(response.data.response.ciudades);
        setTodasLasCiudades(response.data.response.ciudades);
    
      }) 
      .catch((error) => {
        console.log(error);
      });
 };
 */
 useEffect(() => {
  props.fetchearCities()
}, []);
/* console.log(props.cities) */
  const searching = (search) => {
    setBusqueda(search.target.value);
    props.filterCity(props.cities, search.target.value);

   /*  console.log(search.target.value) */

  };

  


/* console.log(props) */

/* useEffect(() => {
  if (busqueda === "") {
    setCiudades (props.cities)
  }else{
    setCiudades(props.filterCities)
  }
}, [busqueda]); */

  return (
    <>
     
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 vh">
        
      
     
      <div className="title h1 text-center textCarr">Cities from Japan to discover!</div>
      <div className="d-flex flex-column align-items-center justify-content-center">
          <h4 className="me-2 mb-3">Look for your next destination!</h4>
          <input
            className="inputsearch"
            placeholder="type your destination"
            value={busqueda}
            onChange={searching}
          />
        </div>
        <section className="conteinercard">
        {props.filterCities?.length !== 0 && props.filterCities!= null ? (
          props.filterCities?.map((ciudad) => (
        <div className="container-fluid py-3 cont " key={ciudad._id}>
            <div className="d-flex justify-content-between flex-wrap">
                <div className="card float ">
                    <div className="row d-flex flex-wrap carta">
                        <div className="col-sm-5">
                            <img className="imgcard img-fluid mt-3 mb-3" src={process.env.PUBLIC_URL+ `/imagenes/${ciudad.image}`} alt="img ciudad" />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-block">
                                <h4 className="titulocard text-center mt-2">{ciudad.name} </h4>
                                <p className="text-just me-3">{ciudad.description}</p>
                                <LinkRouter to={`/details/${ciudad._id}`} className='link'>
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




const mapStateToProps = (state) => {

     return{
         cities: state.Data.cities,
         filterCities: state.Data.filterCities,

         
     }
     }
const mapDispatchToProps = {
  fetchearCities: citiesActions.fetchearCities,
  filterCity : citiesActions.filterCity
}     

export default connect(mapStateToProps,mapDispatchToProps)(Cities)