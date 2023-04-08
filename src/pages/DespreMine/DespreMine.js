import Contact from '../../components/Contact/Contact';
import ana from '../../media/ana.png'
import { text1, text2, text3, text4, text5 } from './DespreMineData';
import linie from '../../media/linie-chenar-jum.png';

function DespreMinePage() 
{
    return <div className="bg-[url('/src/pages/DespreMine/Media/fundal-despre-mine.jpg')] bg-no-repeat bg-cover">
        <div className="p-14 md:px-80">
        <div className="flex md:flex-row-reverse flex-col">
            <img src={ana} alt="profil" className="md:h-64 md:ml-6 mb-6 mt-8"></img>
            <div>
                <div className="text-3xl md:text-4xl text-ana-purple font-DancingScriptRegular drop-shadow-sm">
                    Să ne cunoaștem!
                </div>
                <img src={linie} alt="linie" className="pb-4"/>
                <div className="ml-4 text-base text-gray-800">
                    {text1}
                </div>
                <div>&nbsp;</div>
                <div className="ml-4 text-base text-gray-800">
                    {text2}
                </div>
            </div>
        </div> 

            <div className="text-3xl md:text-4xl text-ana-purple font-DancingScriptRegular mt-10 drop-shadow-sm">
                Viziunea mea
            </div>
            <img src={linie} alt="linie" className="pb-4"/>
            <div className="ml-4 mr-8 text-base text-gray-800">
                {text3}
            </div>

            <div className="text-3xl md:text-4xl text-ana-purple font-DancingScriptRegular mt-12 md:mt-16 drop-shadow-sm">
                Misiunea mea
            </div>
            <img src={linie} alt="linie" className="pb-4"/>
            <div className="ml-4 mr-8 text-base pb-6 text-gray-800">
                {text4}
            </div>

            <div className="ml-4 mr-8 text-base pb-12 text-gray-800">
                {text5}
            </div>
        </div>
            <Contact/>
    </div>;
}   

export default DespreMinePage;