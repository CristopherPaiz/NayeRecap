import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { fireworks,mocha } from '../assets';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Christmas tree */}
        <div className="z-10 mb-8">
          <img
            src={mocha}
            alt="Animated Christmas Tree"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Greeting text */}
        <div className='w-[90%] max-w-[400px]'>
          <p className="z-10 text-white text-center text-xl font-semibold px-4 drop-shadow-lg">
            Te amo mucho cielo, gracias por ser parte de mi vida. 🥰 <br />
            No puedo esperar a pasar el resto de mi vida contigo. 💍 <br />
            <br />
            <span className="text-sm">*** Con amor, tu novio y tu San Valentín para toda la vida, porque no es necesario preguntarlo, porque así será siempre. ***</span>
          </p>

        {/* Button */}
          <div className="flex justify-center w-full mt-12 z-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft /> Página anterior
            </button>
          </div>   
        </div>
      </div>
    </div>

  )
}

export default Closing