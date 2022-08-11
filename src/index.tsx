import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

let container = document.getElementById('app');
let root = createRoot(container);
root.render(<App />);