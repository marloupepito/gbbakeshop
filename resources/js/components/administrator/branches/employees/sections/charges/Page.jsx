import React, { useState, useEffect } from "react";
import Menus from "./components/Menus";
 import Tables from "./components/Table";
 import BreadCrumbs from "./components/Breadcrumbs";
function Page() {
    return (
        <div className="row">
             <div className="col-md-12">
                <div className=" m-4">
              <BreadCrumbs />
                </div>
             </div>
            <div className="col-md-2">
                <Menus />
            </div>
            <div className="col-md-10">
                 <Tables />
            </div>
        </div>
    );
}

export default Page;
