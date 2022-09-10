import { Greeter } from '@root/shared';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><h2>Hello from React!{Greeter('Desktop')}</h2></div>);