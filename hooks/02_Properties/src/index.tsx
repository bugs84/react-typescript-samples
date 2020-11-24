import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';
import { MyComp } from './mycomp';

ReactDOM.render(
  <HelloComponent userName="John3" />,
  document.getElementById('root')
);


ReactDOM.render(
  <MyComp param="myparam" />,
  document.getElementById('mycomp')
);