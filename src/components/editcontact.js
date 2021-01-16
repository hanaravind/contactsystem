import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editContact } from '../reducer/actions'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const styles = {
    width: '95%',
    margin: '0 10px'
}
function Editcontact(props) {
    const { location: { state} } = props
    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setData] = useState({id: state.id, name: state.name, number: state.number})
    const formData = (e) => {
      console.log(data)
      if (data.name.trim() !== '') {
       dispatch(editContact(data))
       history.push('/')
       e.preventDefault()
       setData(data)
      } else {
        toast.error('Contact cannot be empty')
      }
      e.preventDefault()
    }
    return (
        <div>
          <ToastContainer />
          <h2>Edit Contact</h2>
            <form onSubmit={formData}>
              <div >
                <TextField style={styles} label="Contact name" defaultValue={state.name} onChange={(e) => setData({...data, name: e.target.value})}/>
              </div>
              <div >
                <TextField style={styles} label="Contact number" defaultValue={state.number} onChange={(e) => setData({...data, number: e.target.value})}/>
              </div>
              <div style={{'textAlign': 'center', 'marginTop': '20px'}} >
            <Button type="submit" variant="contained" color="primary" onClick={formData}>
                Edit contact
            </Button>  
            </div>   
            </form>
        </div>
    )
}

export default Editcontact
