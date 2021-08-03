import React from 'react'
import Styled from 'styled-components'
import { Input, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const StyledContainerContratar = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 9fr;

`
const StyledContainerControles = Styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const StyledContainerBusca = Styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    background: gray;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
    margin: 10px;
    min-width: 120px;
    
`
const StyledInputBuscar = Styled(Input)`
    min-width: 10px;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px;
    background: white;
`
const StyledFormControl = Styled(FormControl)`
    width: 50%;
    min-width: 100px;
    margin-top: 20px;
    background: white;
    padding: 5px;
`
const StyledInput = Styled(Input)`
    width: 50%;
    min-width: 100px;
    margin-top: 20px;
    padding-left: 10px;
    background: white;
`

const StyledContainerCards = Styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    background: gray;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    margin: 10px 10px 0 10px;
`
const StyledCardServico = Styled.div`
    width: 32%;
    min-width: 300px;
    height: 200px;
    margin: 4px;
    background: green;
`



export default class Contratar extends React.Component {
    render() {

        return (
            <StyledContainerContratar>

                <StyledContainerControles>
                    <button>Voltar</button>
                </StyledContainerControles>

                <StyledContainerBusca>
                    <StyledInputBuscar
                        placeholder='Buscar'
                    />


                    <StyledFormControl variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Ordenar</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        // value={age}
                        // onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </StyledFormControl>


                    <StyledInput
                        placeholder='Valor mínimo'
                    />
                    <StyledInput
                        placeholder='Valor mínimo'
                    />

                </StyledContainerBusca>

                <StyledContainerCards>
                    <StyledCardServico />
                    <StyledCardServico />
                    <StyledCardServico />
                    <StyledCardServico />
                    <StyledCardServico />
                    <StyledCardServico />
                    <StyledCardServico />
                </StyledContainerCards>


            </StyledContainerContratar>
        );
    }
}