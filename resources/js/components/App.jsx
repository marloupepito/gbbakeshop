import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routes/Routes';
import { RouterProvider} from "react-router-dom";

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <div>
            <App/>
        </div>
    )

    // Index.render(
    //     <React.StrictMode>
    //         <App/>
    //     </React.StrictMode>
    // )
}
