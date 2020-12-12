import React from 'react'


import CampoTextoResponsavel from '../../../componentes/Core/CampoTextoResponsavel';


const AdministradorCampoResponsavel = ({value, onChangeValue}) => {
    return (

        <CampoTextoResponsavel 
        value={value}
        onChangeValue={onChangeValue}
        />
       
        
    )
}

export default AdministradorCampoResponsavel