import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Filtercontact from './filtercontact'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../reducer/actions'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: '100%',
    },

    btn: {
        background: '#cccc',
        color: 'white'
    },
    btnContainer : {
        textAlign: 'center'
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

function Contactlist(props) {
    const dispatch = useDispatch()
    const contactList = useSelector(state => state)
    const classes = useStyles();
    const history = useHistory()
    const[contactListDefault, setContactList] = useState(contactList.data)

    const Contact = (arg, obj) => {
        console.log(obj)
        history.push(`/${arg}`, obj)
        props.history.push({
            state: obj
        })
    }

    const deleteConct = (id) => {
      const deleteList = contactListDefault.filter(item =>  item.id !== id)
      setContactList(deleteList)
      dispatch(deleteContact(id))
    }

    const filterList = (name) => {
        if(name.trim() === '' || name === undefined) {
            return setContactList(contactList.data)
        } else {
          // eslint-disable-next-line array-callback-return
          const filter = contactList.data.filter(data => {
            if (data.name.toLowerCase().includes(name.toLowerCase()) || data.number.toLowerCase().includes(name.toLowerCase())) {
              return data
            }
          })
          setContactList(filter)
        }
    }
    return (
        <>
        <Filtercontact filterChange={filterList}/>
        <div className={classes.root}>
        <div className={classes.demo}>
          {
         contactListDefault.map(data => { return <List key={data.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={data.name}
                  secondary={data.number}
                />
                <IconButton edge="end" aria-label="edit" onClick={() => Contact(`edit/${data.id}`, data)}>
                <EditIcon />
                </IconButton>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteConct(data.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
          </List>
          })
        }
          <div className={classes.btnContainer} >
          <Button variant="contained" color="primary" onClick={() => Contact('add')}>
                Add Contact
            </Button>  
            </div>   
        </div>
  </div>
  </>
    )
}

export default Contactlist
