import fiesta from "../assets/fiesta.jpeg";
import anionuevo from "../assets/anionuevo.jpeg";
import casa from "../assets/casa.jpeg";
import locuras from "../assets/locuras.jpeg";
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: fiesta, title: '18 de Enero, 2024', description: "Guau, que formales se ven ambos, ese día de fiesta, bueno solo de fiesta en fiesta nos la pasamos"},   
    { Image: anionuevo, title: '01 de enero, 2024', description: "Año nuevo juntos, y los que nos faltan aún, unos 50, 100, 1000 años, seguramente hasta la eternidad."},
    { Image: casa, title: '26 de diciembre, 2023', description: "Ya más tranquilos en la casa, viendo películas, pero siempre juntos, te amo."},
    { Image: locuras, title: '24 de Marzo, 2024', description: "Bueno aquí ni que decir, lo importante es que las locuras nunca hacen faltan, ni las risas, espero que sigamos siendo locos o incluso peor, pero siempre juntos."},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Nuestras fotos
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Página anterior
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture
