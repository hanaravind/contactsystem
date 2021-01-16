import React from 'react'
import TextField from '@material-ui/core/TextField';

const styles = {
    width: '95%',
    margin: '0 10px'
}

function Filtercontact(props) {
    const queryChange= (e) => {
        props.filterChange(e.target.value)
    }
    return (
        <div>
            <TextField style={styles} onChange={(e) => queryChange(e)} id="standard-search" label="Search Contact" autoComplete="off"/>
        </div>
    )
}

export default Filtercontact
