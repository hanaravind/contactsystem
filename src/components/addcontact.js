import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../reducer/actions'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    width: '95%',
    margin: '0 10px'
}
function Addcontact() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setData] = useState({id: Date.now(), name: '', number: ''})
    const formData = (e) => {
      if (data.name.trim() !== '') {
       dispatch(addContact(data))
       history.push('/')
      } else {
        toast.error('Contact cannot be empty')
      }
      e.preventDefault()
    }
    return (
        <div>
          <ToastContainer />
          <h2>Add Contact</h2>
            <form onSubmit={formData}>
              <div >
                <TextField style={styles} label="Contact name" onChange={(e) => setData({...data, name: e.target.value})}/>
              </div>
              <div >
                <TextField style={styles} label="Contact number" onChange={(e) => setData({...data, number: e.target.value})}/>
              </div>
              <div style={{'textAlign': 'center', 'marginTop': '20px'}} >
            <Button type="submit" variant="contained" color="primary">
                Add contact
            </Button>  
            </div>   
            </form>
        </div>
    )
}

export default Addcontact
