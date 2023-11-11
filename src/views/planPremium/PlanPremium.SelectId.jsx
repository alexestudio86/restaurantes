import { useParams } from "react-router-dom";
import {PlanPremium01HomeView} from './plan01/PlanPremium01.HomeView';


export function PlanPremiumSelectId () {


    //const quack = [];
    const {id} = useParams();


    switch (id) {
        case 'plan-01':
            return (
                <>
                    <PlanPremium01HomeView />
                </>
            )
        case "plan-02":
            return (
                <>
                    Soy un plan premium
                </>
            )
        default:
            return (
                <>
                    plan no encontrado
                </>
            )
    }

}