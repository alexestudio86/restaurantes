import { useState } from "react";
import { PlanBasic01SidebarLeft } from "../../../components/planBasic/plan01/PlanBasic01.SidebarLeft";
import { PlanBasic01Navbar } from '../../../components/planBasic/plan01/PlanBasic01.Navbar';
import { PlanBasic01Header } from "../../../components/planBasic/plan01/PlanBasic01.Header";
import { PlanBasic01Promos } from "../../../components/planBasic/plan01/PlanBasic01.Promos";
import { PlanBasic01Products } from "../../../components/planBasic/plan01/PlanBasic01.Products";
import { PlanBasic01Location } from '../../../components/planBasic/plan01/PlanBasic01.Location';
import { PlanBasic01Footer } from '../../../components/planBasic/plan01/PlanBasic01.Footer';


export function PlanBasic01HomeView () {

    const [sidebarLeftShow, setSidebarLeftShow] = useState(false);

    return (
        <>
        <PlanBasic01SidebarLeft sidebarLeftShow={sidebarLeftShow} setSidebarLeftShow={setSidebarLeftShow} />
        <div>
            <PlanBasic01Navbar setSidebarLeftShow={setSidebarLeftShow} />
            <PlanBasic01Header />
            <PlanBasic01Promos />
            <PlanBasic01Products />
            <PlanBasic01Location />
            <PlanBasic01Footer />
        </div>
        </>
    )
}