import { navElements } from "./planBasic01.NavElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTotalItemsContext } from '../../../context/plans/CarBasicProvider';
import './planBasic01.navbar.css';


export function PlanBasic01Navbar ( {setSidebarLeftShow, sidebarRightShow, setSidebarRightShow} ) {

    // TotalItems
    const totalItems = useTotalItemsContext();


    return (
        <nav id="navbar" className="ae86-sticky-top" style={ {zIndex: 1} }>
            <div className="w3-row p-0 container">
                <div className="w3-bar w3-blue-gray">
                    {/*Mobile*/}
                    <div className="w3-hide-medium">
                        <button className={`w3-button w3-xlarge w3-left w3-hide-large ${!sidebarRightShow && 'w3-teal'}`} disabled={sidebarRightShow} onClick={ () => {
                            window.scrollTo(0,0);
                            switch (window.location.hash) {
                                case '#root':
                                    setTimeout( () => {
                                        if( !document.body.style.overflow ){
                                            setSidebarLeftShow(true);
                                            document.body.style.setProperty('overflow', 'hidden')
                                        }
                                    }, 100)
                                    break;

                                case '#promotions':
                                    setTimeout( () => {
                                        if( !document.body.style.overflow ){
                                            setSidebarLeftShow(true);
                                            document.body.style.setProperty('overflow', 'hidden')
                                        }
                                    }, 200)
                                    break;

                                case '#products':
                                    setTimeout( () => {
                                        if( !document.body.style.overflow ){
                                            setSidebarLeftShow(true);
                                            document.body.style.setProperty('overflow', 'hidden')
                                        }
                                    }, 300)
                                    break;

                                    case '#location':
                                        setTimeout( () => {
                                            if( !document.body.style.overflow ){
                                                setSidebarLeftShow(true);
                                                document.body.style.setProperty('overflow', 'hidden')
                                            }
                                        }, 400)
                                        break;

                                default:
                                    if( !document.body.style.overflow ){
                                        setSidebarLeftShow(true);
                                        document.body.style.setProperty('overflow', 'hidden')
                                    }
                                    break;
                            }
                        } } >
                            <FontAwesomeIcon icon="fa-solid fa-burger" />
                        </button>
                        <button className={`w3-button w3-xlarge w3-right w3-hide-large ${sidebarRightShow ? 'w3-light-gray' : 'w3-teal'}`} onClick={ () => {
                            //Remove hash
                            window.history.replaceState("", document.title, window.location.pathname);
                            //Go to root
                            document.getElementById('root').scrollIntoView();
                            setSidebarRightShow(!sidebarRightShow);
                            if( sidebarRightShow ){
                                document.body.style.removeProperty('overflow')
                            }else{
                                document.body.style.setProperty('overflow', 'hidden')
                            }
                        } }>
                            { sidebarRightShow
                            ? <FontAwesomeIcon className="w3-animate-left" icon={`fa-solid ${sidebarRightShow ? 'fa-circle-arrow-right' : 'fa-cart-shopping'}`} />
                            : <span className="w3-animate-right w3-badge w3-white w3-medium w3-text-teal">{ totalItems }</span>
                            }
                        </button>
                    </div>
                    <div className="w3-hide-small">
                        <div className="w3-bar-item">
                            <a className="w3-button w3-wide text-uppercase" href="#home">Home</a>
                        </div>
                        <div className="w3-right p-2">
                            { navElements.map( (navElement, index) => (
                                index > 0 && <a key={index} href={navElement.path} className="w3-bar-item w3-button">{navElement.title}</a>
                            ) ) }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}