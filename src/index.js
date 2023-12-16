import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './Message';
import SimpleQuotation from './SimpleQuotation';
import Quotation from './Quotation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Message titre="Notifications" date="{strTime}" content="Composant afficher avec succès"/>
    <Message content="Information sans titre"/>
    <SimpleQuotation />
    <Quotation />
  </>
);


