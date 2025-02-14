import skate from '../assets/skate.jpeg'
import atardecer from '../assets/atardecer.jpeg'
import mall from '../assets/mall.jpeg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: atardecer, title: '14 de Abril, 2024', description: "En medio de la nada, Nos llevaste con tu familia a unas piscinas que no conocíamos, en medio de la nada, pero con un bonito atardecer."},
    { Image: skate, title: '09 de Junio, 2024', description: "Parque de Skate, fuimos a caernos bueno, tú, yo no sé patinar, ah y jugamos futbol y basquetball, también nos mojamos ese día."},   
    { Image: mall, title: '01 de Septiembre, 2024', description: "Oakland Mall, me llegaste a visitar, fuimos a comer, a pasear y a divertirnos en el Air Square, ese día venimos muy cansados."},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Nuestros viajes y los que faltan...
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

export default Message