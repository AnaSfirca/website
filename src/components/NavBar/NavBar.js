import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import './noBlueHighlight.css'

import nume from './media/Ana-Maria-Sfirca2.png';
import titlu from './media/Psihoterapeut-integrativ2.png';
import psihozone from './media/psihozone.png';

import logo_ana from './media/AS.png';
import logo_psihozone from './media/PZ.png';

import meniu_mobil_mov from './media/meniu_mobil_mov.png';
import meniu_mobil_albastru from './media/meniu_mobil_albastru.png';

import facebook_mov from './media/facebook_mov.png';
import facebook_albastru from './media/facebook_albastru.png';
import facebook_gri from './media/facebook_gri.png';

import instagram_mov from './media/instagram_mov.png';
import instagram_albastru from './media/instagram_albastru.png';
import instagram_gri from './media/instagram_gri.png';

import whatsapp_mov from './media/whatsapp_mov.png';
import whatsapp_albastru from './media/whatsapp_albastru.png';
import whatsapp_gri from './media/whatsapp_gri.png';

import mail_mov from './media/mail_mov.png';
import mail_albastru from './media/mail_albastru.png';
import mail_gri from './media/mail_gri.png';

export default function NavBar() 
{
  // variable used to color the current page's name in pink:
  let current_url = useLocation().pathname;

  // objects used in the Menu button for mobile
  const [state, setState] = useState(true);
  const toggle=()=> {
    setState(!state);
  }

  return (
      
<nav className="bg-slate-100">
      <ul className="md:flex md:flex-row p-3 items-center justify-center md:space-x-24">
        <li className="flex justify-center ml-10 md:w-64 md:min-w-64">
          <a href="#/" className="flex flex-row items-center space-x-2 noBlueHighlight">
            <img src={(current_url === "/psihozone" ? logo_psihozone: logo_ana)} className="h-14" alt="Main Logo"/>
            <div className="flex flex-col space-y-2">
              <img src={(current_url === "/psihozone" ? psihozone: nume)} className="w-4/5 md:w-2/3" alt="Name"/>
              {(current_url === "/psihozone" ? <></>:<img src={titlu} className="w-4/6 md:w-3/5 md:ml-2" alt="Title"/>)}
            </div>
          </a>
          {/* button for mobile only menu */}
          <button className="flex items-center justify-center pr-6 md:hidden md:cursor-not-allowed noBlueHighlight" onClick={toggle}>
            <img src={(current_url === "/psihozone" ? meniu_mobil_albastru : meniu_mobil_mov)} className="w-10" alt="Menu Icon"/>
          </button>
        </li>
        <li className={"md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 md:pr-16 md:mx-14 mb-6 md:mb-0 mt-4 noBlueHighlight " + (state ? "hidden":"")}>
          <a href="#/" className={"p-1 md:p-0 flex justify-center text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/" ? 'text-ana-purple border md:border-0':'')}>
              ACASĂ </a>
          <a href="#/despre_mine" className={"p-1 md:p-0 flex justify-center decoration-wavy text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/despre_mine" ? 'text-ana-purple border md:border-0':'')}>
            DESPRE MINE </a>
          <a href="#/servicii" className={"p-1 md:p-0 flex justify-center decoration-wavy text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/servicii" ? 'text-ana-purple border md:border-0':'')}>
            SERVICII </a>
          <a href="#/psihozone" className={"p-1 md:p-0 flex justify-center decoration-wavy text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-blue active:text-blue-700 " + (current_url === "/psihozone" ? 'text-ana-blue border md:border-0':'')}>
            PSIHOZONE </a>
          <a href="#/blog" className={"p-1 md:p-0 flex justify-center decoration-wavy text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/blog" ? 'text-ana-purple border md:border-0':'')}>
            BLOG </a>            
          <a href="#/contact" className={"p-1 md:p-0 flex justify-center decoration-wavy text-sm font-medium font-Quicksand_Regular text-gray-600 hover:text-ana-purple active:text-violet-700 " + (current_url === "/contact" ? 'text-ana-purple border md:border-0':'')}>
            CONTACT </a>
        </li>
        <li className={"md:flex flex-row items-center justify-center space-x-8 md:space-x-4 mb-3 md:mb-0 " + (state ? "hidden":"flex")}>
          <a href="https://www.facebook.com/anamariasfirca.psiholog/" className="" target="_blank" rel="noopener noreferrer">
            <img src={(current_url === "/psihozone" ? facebook_albastru : facebook_mov)} onMouseOver={e => (e.currentTarget.src = facebook_gri)} 
            onMouseOut={e => (current_url === "/psihozone" ? e.currentTarget.src = facebook_albastru : e.currentTarget.src = facebook_mov)} className="w-3/4" alt="Facebook logo"/>
          </a>
          <a href="https://www.instagram.com/anasfirca_psihozone/" className="" target="_blank" rel="noopener noreferrer">
            <img src={(current_url === "/psihozone" ? instagram_albastru : instagram_mov)} onMouseOver={e => (e.currentTarget.src = instagram_gri)} 
            onMouseOut={e => (current_url === "/psihozone" ? e.currentTarget.src = instagram_albastru : e.currentTarget.src = instagram_mov)} className="w-3/4" alt="Instagram logo"/>
          </a>
          <a href="https://wa.me/+40771611430/?text=Buna%21%20As%20dori%20mai%20multe%20detalii%20despre%20programele%20de%20psihoterapie" target="_blank" rel="noopener noreferrer" className="">
            <img src={(current_url === "/psihozone" ? whatsapp_albastru : whatsapp_mov)} onMouseOver={e => (e.currentTarget.src = whatsapp_gri)} 
            onMouseOut={e => (current_url === "/psihozone" ? e.currentTarget.src = whatsapp_albastru : e.currentTarget.src = whatsapp_mov)} className="w-3/4" alt="Whatsapp logo"/>
          </a>
          <a href="mailto:anamariasfirca.psiholog@gmail.com" className="" target="_blank" rel="noopener noreferrer">
            <img src={(current_url === "/psihozone" ? mail_albastru : mail_mov)} onMouseOver={e => (e.currentTarget.src = mail_gri)} 
            onMouseOut={e => (current_url === "/psihozone" ? e.currentTarget.src = mail_albastru : e.currentTarget.src = mail_mov)} className="w-3/4" alt="Whatsapp logo"/>
          </a>
        </li>
      </ul>
</nav>

    );
}