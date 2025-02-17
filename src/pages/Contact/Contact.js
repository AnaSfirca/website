import poza_ana from './media/poza-ana.png'
// import buton_email from '../../media/buton-email.png'
// import buton_telefon from '../../media/buton-telefon.png'
import buton_whatsapp from '../../media/buton-telegram.png'
import buton_instagram from '../../media/buton-instagram.png'
import buton_facebook from '../../media/buton-facebook.png'
import buton_locatie from '../../media/buton-locatie.png'
import { AddressMap } from './AddressMap'
import calendar from './media/calendar-1.png'

function ContactPage() 
{
    return <div className="bg-gradient-to-r from-ana-light-purple to-ana-light-blue flex justify-center flex-col"> 
        <div className="flex md:flex-row flex-col justify-center md:space-x-12 pt-11 md:pt-12 pb-12 px-12">
            <ul className="space-y-4 mb-10 md:mb-0">
                <li className="flex justify-left text-5xl mb-14 font-DancingScriptRegular text-gray-600">
                    Contact
                </li> 
                <li className="flex flex-row space-x-4 text-xl">
                    {/* <img src={buton_telefon} alt="telefon" className="object-contain"/> */}
                    <img src={buton_whatsapp} alt="whatsapp" className="object-contain drop-shadow-lg"/>
                    <div className="text-gray-800 font-Quicksand_Regular">0771611430</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl">
                    <img src={buton_instagram} alt="instagram" className="object-contain drop-shadow-lg"/>
                    <div className="text-gray-800 font-Quicksand_Regular">anasfirca_psihozone</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl">
                    <img src={buton_facebook} alt="facebook" className="object-contain drop-shadow-lg"/>
                    <div className="text-gray-800 font-Quicksand_Regular">Psiholog Ana-Maria Sfircă</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl">
                    <img src={buton_locatie} alt="adresa" className="object-contain drop-shadow-lg ml-1"/>
                    <div className="text-gray-800 font-Quicksand_Regular">Corneliu Coposu 5, București</div>
                </li>
                <li className="flex flex-row space-x-4 text-xl">
                    <img src={calendar} alt="orar" className="object-contain drop-shadow-lg ml-1"/>
                    <div className="text-gray-800 font-Quicksand_Regular">Program: L - V, 10:00 - 20:00 </div>
                </li>
            </ul>
            <img src={poza_ana} alt="Ana" className="w-auto md:w-80 object-contain"/>
        </div>
        <div className="bg-slate-100 flex justify-center py-6">
            <AddressMap/>
        </div>
    </div>;
}
export default ContactPage;