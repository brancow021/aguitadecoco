import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AdminPage } from '../pages/Admin.page';
import { HomePage } from '../pages/Home.page';

export const RouterPage = () => {
  return (
      <>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/admin" component={AdminPage} />

              <Redirect to={'/'}/>
          </Switch>
      </>
  );
}
