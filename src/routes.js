import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contactlist from './components/contactlist'
import Addcontact from './components/addcontact'
import Editcontact from './components/editcontact'

function Routes() {
    return (
        <>
          <Router>
              <Switch>
                  <Route exact path="/" component={Contactlist}/>
                  <Route exact path="/add" component={Addcontact}/>
                  <Route exact path="/edit/:id" component={Editcontact}/>
              </Switch>
          </Router> 
        </>
    )
}

export default Routes
