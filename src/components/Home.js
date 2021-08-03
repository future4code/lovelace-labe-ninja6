import React from 'react'
import logoNinjas from "../img/logo-peq.jpg"
import logoNinjasGrande from "../img/logo-grande.png"
import Button from '@material-ui/core/Button';
import {HomeStyles} from './Home.styles.js';

export default class Home extends React.Component{
    render(){
        return <HomeStyles.ContainerHome>
            <HomeStyles.Header>
        
                <HomeStyles.LogoPeq src={logoNinjas} alt="Logo da LabeNinjas"/>
                <h2>LabeNinjas</h2>
           
            </HomeStyles.Header>

            <HomeStyles.ContainerLogoGrande>
            <HomeStyles.LogoGrande src={logoNinjasGrande} alt="Logo da LabeNinjas Grande"/>
            </HomeStyles.ContainerLogoGrande>
            
            
            <HomeStyles.ContainerBotoes>
            <Button variant="contained" color="primary">
                Quero ser um Ninja
            </Button>
            <Button variant="contained" color="primary">
                Contratar um Ninja
            </Button>
            
            
            </HomeStyles.ContainerBotoes>
            
        </HomeStyles.ContainerHome>
    }
}