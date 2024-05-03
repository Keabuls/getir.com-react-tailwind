/* eslint-disable no-lone-blocks */
import Menu from "components/ui/Menu.js"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';


export default function Footer(){

const menus = [
  {
    title:"Getir'i Keşfet",
    items: [

        {
          title:"Hakkımızda"
        },
        {
          title:"Karıyer"
        },
        {
          title:"Teknoloji Kariyerleri"
        },
        {
          title:"İletişim"
        },
        {
          title:"Sosyal Sorumluluk Projeleri"
        },
        {
          title:"Basın Bültenleri"
        },


      ]

  },
  {
    title:"Yardıma mı ihtiyacın var?",
    items: [

        {
          title:"Sıkça Sorulan Sorular"
        },
        {
          title:"Kişisel Verilerin Korunması"
        },
        {
          title:"Gizlilik Politikası"
        },
        {
          title:"Kullanım Koşulları"
        },
        {
          title:"Çerez Politikası"
        },
        {
          title:"İşlem Rehberi"
        },


      ]

  },
  {
    title:"İş Ortağımız Ol",
    items: [

        {
          title:"Bayimiz Olun"
        },
        {
          title:"Deponu Kirala"
        },
        {
          title:"GetirYemek Restoranı Ol"
        },
        {
          title:"GetirÇarşı İşletmesi Ol"
        },
        {
          title:"Zincir Restoranlar"
        },

      ]

  },


]




{ return ( 
      <div className="bg-white mt-10"> 
        <div className=" container mx-auto px-4 md:px-0 ">
            <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">

              <section>
                <nav className=" grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1"> 
                  <h6 className=" text-lg text-primary-brand-color mb-4">Getir'i indir!</h6>
                  <a>
                    <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                  </a>
                  <a>
                   <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                  </a>
                  <a>
                    <img className="transition-all transform hover:scale-105" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                  </a>
                </nav>
              </section>
              {menus.map((menu,index)=><Menu key = {index} {...menu} />

              )}

            </div>
            <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6 ">
                <div className="text-xs text-gray-700 flex gap-x-8">
                  &copy; 2024 Getir
                  <a href="#" className="text-primary-brand-color hover:underline"> | Bilgi Toplumu Hizmetleri</a>
                </div>
                <nav className="-mt-4 flex gap-x-2 items-center">
                <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700">
                  <FiGlobe size={18} />
                  Türkçe (TR)
                </a>
              </nav>

            </div>


        </div>
      </div> 
    ) 
  }
} 