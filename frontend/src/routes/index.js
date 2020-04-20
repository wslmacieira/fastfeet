import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import DeliveryForm from '~/pages/Delivery/DeliveryForm'
import Deliveryman from '~/pages/Deliveryman';
import DeliverymanForm from '~/pages/Deliveryman/DeliverymanForm';
import Recipient from '~/pages/Recipient';
import RecipientForm from '~/pages/Recipient/RecipientForm';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Delivery} isPrivate />
      <Route path="/deliveries/new" exact component={DeliveryForm} isPrivate />
      <Route path="/deliveries/edit/:id" exact component={DeliveryForm} isPrivate />

      <Route path="/deliverymen" exact component={Deliveryman} isPrivate />
      <Route path="/deliverymen/new" exact component={DeliverymanForm} isPrivate />
      <Route path="/deliverymen/edit/:id" exact component={DeliverymanForm} isPrivate />

      <Route path="/recipients" exact component={Recipient} isPrivate />
      <Route path="/recipients/new" exact component={RecipientForm} isPrivate />
      <Route path="/recipients/edit/:id" exact component={RecipientForm} isPrivate />

      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
