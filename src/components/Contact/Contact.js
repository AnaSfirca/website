import React from 'react';
import { useLocation } from 'react-router-dom';
// import telefon from '../../media/buton-telefon.png'
import wapp from '../../media/buton-telegram.png'
import locatie from '../../media/buton-locatie.png'
import mail from '../../media/buton-email.png'

function Contact() 
{
    let current_url = useLocation().pathname;
    return <div className={"relative bottom-0 flex flex-col "+ (current_url === "/psihozone" ? "bg-psihozone-blue":"bg-ana-light-purple")}> 
    <div className="font-DancingScriptRegular text-3xl text-white text-center mt-3 mb-4 drop-shadow-lg">Contact</div>
    <ul className="space-y-2 mb-5">
        <li className="flex flex-row text-center pl-[10%] md:pl-[44%]">
            <img className="w-5 mr-2 object-contain drop-shadow-lg" src={wapp} alt="wapp"/>
            <div className="font-Quicksand_Regular text-gray-700">0771611430</div>
        </li>
        <li className="flex flex-row items-center pl-[10%] md:pl-[44%]">
            <img className="w-4 mr-2 drop-shadow-lg" src={locatie} alt="locatie"/>
            <div className="font-Quicksand_Regular text-gray-700">Corneliu Coposu 5, București</div>
        </li>
        <li className="flex flex-row items-center pl-[10%] md:pl-[44%] mb-2">
            <img className="w-5 mr-2 drop-shadow-lg" src={mail} alt="mail"/>
            <div className="font-Quicksand_Regular text-gray-700">anamariasfirca.psiholog@gmail.com</div>
        </li>
    </ul>
    </div>;
}

export default Contact;