//Importaciones
import React, { useState } from 'react';
import './home.css';
import Header from '../components/header';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Gestion from '../components/gestion';
import Inicio from '../components/inicio';

function Home() {
//Hooks que muestra el estado 
  const [activeTab, setActiveTab] = useState(''); //actualmente la ventana activa está vacía
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para gestionar el inicio de sesión (false)
  
  
  //Función Inicio de sesión
  const handleLogin = () => { //Cuando se haga log in 
    setIsLoggedIn(true); // Simula el inicio de sesión
  };

  //Función cierre de sesión 
  const handleLogout = () => { //Cuando se haga log out
    setIsLoggedIn(false); // Simula el cierre de sesión
  };

  return (
    <div className="Home">
      {/* Componente Header */}
       <Header/>
      {/* Tabs */}
      <Tabs
        activeKey={activeTab} //pestaña activa (ninguna)
        onSelect={(tab) => setActiveTab(tab)} //controlador de eventos cuando se selecciona una tab
        id="uncontrolled-tab-example"
        className="mb-3 tabs"
      >
        {/* Cita taller */}
        <Tab eventKey="citaTaller" title="Cita Taller">
          {isLoggedIn ? <Gestion /> : <><p>Por favor, inicie sesión para ver esta sección.</p><button>Inicia sesión</button></>}
        </Tab>

        {/* Herramientas */}
        <Tab eventKey="herramientas" title="Herramientas">
          Tab content for Herramientas
        </Tab>

        {/* Equipamiento y mantenimiento */}
        <Tab eventKey="equipamientoMantenimiento" title="Equipamiento y mantenimiento">
          Tab content for Equipamiento y mantenimiento
        </Tab>
      </Tabs>

      {/* Content Home */}
      <div className="containter">
        {/* Si activeTab no concide con ninguno de esos identificadores se muestra el componente Inicio */}
        {(activeTab !== 'citaTaller' && activeTab !== 'herramientas' && activeTab !== 'equipamientoMantenimiento') && <Inicio />} 
      </div>
    </div>
  );
}

export default Home;
