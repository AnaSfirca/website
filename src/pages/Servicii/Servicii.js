import ServiciiElement from "../../components/ServiciiElement/ServiciiElement";
import { ServiciiData } from './ServiciiData';
import Contact from '../../components/Contact/Contact';

function ServiciiPage() 
{
    return <div> 
        <div className="bg-[url('/src/pages/Servicii/media/fundal-servicii.png')] bg-no-repeat">
            <ServiciiElement items={ServiciiData}/>    
            <div>&nbsp;</div>    
        </div>
        <Contact/>
    </div>;
}

export default ServiciiPage;