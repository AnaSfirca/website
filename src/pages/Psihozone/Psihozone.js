import linie from '../../media/linie-chenar-jum.png';
import atelier_psihozone from './media/atelier_psihozone.jpeg';
import creative from './media/creative-area-logo.png';
import Contact from '../../components/Contact/Contact';
import punctulete from './media/tematica-final.png'
import punctulete2 from './media/punctulete2.png'


function PsihozonePage() 
{
    return <div className="bg-[url('/src/pages/Psihozone/media/fundalpsihozone.jpg')] bg-no-repeat">
        <div className="p-8">
            <div className="flex flex-col md:flex-row md:space-x-32 items-center justify-center mb-8 md:mb-6">
                <div className=''>
                    <div className="text-3xl text-ana-blue font-sourceserifvariableroman">
                        Ateliere de dezvoltare personală
                    </div>  
                    <div className="text-2xl text-ana-blue font-sourceserifvariableroman">
                        Pentru copii și adolescenți
                    </div> 
                    <img src={linie} alt="linie" className="mb-4 md:mb-0 md:mt-4"/>
                </div>
                <div>
                    <img src={atelier_psihozone} alt="atelier psihozone" className="w-64 md:w-80 md:my-0 md:mt-0 mt-4 rounded-md"/>
                </div>
            </div>

            <div className="font-EBGaramond text-xl mb-4 md:mx-80 text-gray-800">
                Proiectul PsihoZone a luat naștere din dorința de a le oferi copiilor și adolescenților
                posibilitatea să se întâlnească într-un spațiu sigur și prietenos, în care să poată învăța unii de la
                ceilalți, să ia contact cu informații noi și de interes pentru ei și să aibă parte de experiențe
                benefice de învățare, de autocunoaștere și de explorare a propriilor resurse interioare.
            </div>
            
            <div className="font-EBGaramond text-xl mb-12 md:mb-10 md:mx-80 text-gray-800">
                Sunt de părere că cea mai bună investiție este în viitor, astfel vreau să contribui la formarea
                generațiilor următoare prin programe și ateliere de psihoeducație și dezvoltare personală, ce
                au rolul de a facilita învățarea despre sine și despre mediul înconjurător, într-o manieră
                plăcută și interactivă, abordând teme precum: creativitatea, gândirea critică, emoțiile,
                motivația și alte subiecte de interes pentru tine.
            </div>

            <div className="flex flex-col md:items-center justify-center mb-6">
                <div className="text-3xl text-ana-blue font-sourceserifvariableroman">Ateliere</div>
                <img src={linie} alt="linie" className="w-16"/>
            </div>

            <div className="md:mx-80 md:flex md:items-center my-3 mb-14 md:mb-16">
                <img src={creative} alt="creative area logo" className="mx-auto m-3 md:m-0 w-32 mb-10 md:mb-0"/>
                <div className="md:mx-12 p-4 text-lg bg-amber-200 text-zinc-800 rounded-lg text-justify shadow-lg md:shadow-2xl">
                    Creativitatea este o trăsătură umană fără de care nu am fi putut evolua ca specie. Deși de
                    multe ori o asociem cu artiști, scriitori sau inventatori, de fapt, în fiecare dintre noi există un
                    potențial creativ înnăscut, gata să fie descoperit și explorat.
                </div>
            </div>

            <div className="font-EBGaramond text-xl mb-4 md:mb-10 md:mx-80 text-gray-800">
                Creativitatea poate fi folosită atât în salturi mari, cât și în salturi mici, de la invenții,
                descoperiri și produse inovatoare, la rezolvarea unor probleme cotidiene, dinamizarea
                relațiilor cu ceilalți și până la creșterea stării de bine și aducerea noului într-o activitate pe
                care o desfășurăm.
            </div>

            <div className="font-EBGaramond text-xl mb-10 md:mx-80 text-gray-800">
                Haideți să descoperim împreună cum ne putem dezvolta latura creativă, prin diverse jocuri și
                activități interactive, pe care le putem aplica ulterior și în viața de zi cu zi!
            </div>
            
            <div className="flex flex-col md:items-center justify-center mb-6">
                <div className="text-3xl text-ana-blue font-sourceserifvariableroman">Structură atelier</div>
            <img src={linie} alt="linie" className="w-16 mb-6"/>
            </div>
            
            <div className="text-xl flex flex-col md:flex-row md:space-x-52 md:mx-72 my-6 space-y-4 md:space-y-0 justify-center mb-12">
                <div className="mx-16 md:mx-0 py-2 px-0 md:px-8 border-solid border-2 rounded-lg border-gray-200 shadow-lg md:shadow-3xl space-y-1">
                    <div className="font-semibold text-ana-blue text-center">Grupa A</div>
                    <div className="font-sourceserifvariableroman text-gray-800 text-center">7 - 10 ani</div>
                </div>
                
                <div className="mx-16 md:mx-0 py-2 px-8 border-solid border-2 rounded-lg border-gray-200 shadow-lg md:shadow-3xl space-y-1">
                    <div className="font-semibold text-ana-blue text-center">Grupa B</div>
                    <div className="font-sourceserifvariableroman text-gray-800 text-center">11 - 13 ani</div>
                </div>
                
                <div className="mx-16 md:mx-0 py-2 px-8 border-solid border-2 rounded-lg border-gray-200 shadow-lg md:shadow-3xl space-y-1">
                    <div className="font-semibold text-ana-blue text-center">Grupa C</div>
                    <div className="font-sourceserifvariableroman text-gray-800 text-center">14 - 16 ani</div>
                </div>
            </div>
            
            <div className="font-EBGaramond text-xl mb-4 md:mb-3 md:mx-80 text-gray-800">Număr participanți: 6 - 8 persoane/grupă</div>
            <div className="font-EBGaramond text-xl mb-4 md:mb-3 md:mx-80 text-gray-800">Frecvență: o întâlnire durează 90 de minute, o dată pe săptămână</div>
            <div className="font-EBGaramond text-xl mb-4 md:mb-3 md:mx-80 text-gray-800">Durată: 6 ședințe</div>
            <div className="font-EBGaramond text-xl mb-4 md:mb-3 md:mx-80 text-gray-800">Înscrieri la: anamariasfirca.psiholog@gmail.com sau tel. +40771611430</div>

            <div className="flex flex-col md:items-center justify-center mt-10 mb-4">
                <div className="text-3xl text-ana-blue font-sourceserifvariableroman">Tematici</div>
            <img src={linie} alt="linie" className="w-16"/>
            </div>
        </div>

        <img src={punctulete} alt="punctulete" className="mx-auto md:hidden mb-14 px-2"/>
        <img src={punctulete2} alt="punctulete" className="mx-auto hidden md:flex md:w-2/5 mb-14"/>


    <Contact/>

    </div>;
}

export default PsihozonePage;