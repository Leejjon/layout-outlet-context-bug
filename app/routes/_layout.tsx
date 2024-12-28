import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { useNewCustomOutletContext } from "~/contexts/CustomOutletContext";

import "../layout.css";

export default function Layout() {
    const [message, setMessage] = useState<string | undefined>(undefined);

    const messageContext = useNewCustomOutletContext(setMessage, message);

    return (
        <div className="App">
            <div className="header">Some menu bar</div>
            <div className="page"><Outlet context={messageContext} /></div>
            {message && <div className="footer">Footer that shows error message if there is one: {message}</div>}
        </div>
    );
}