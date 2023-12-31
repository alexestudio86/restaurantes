import { Outlet } from "react-router-dom";
import { CarBasicProvider } from "../../context/plans/CarBasicProvider";
import { PlansCompactNavbar } from "../../components/plans/Plans.CompactNavbar";


export function PlansLayout () {
    return (
        <>
            <div>
                <PlansCompactNavbar />
            </div>
            <CarBasicProvider>
                <Outlet />
            </CarBasicProvider>
        </>
    )
}