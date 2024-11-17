import React , {useState} from 'react'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import AdjustIcon from '@mui/icons-material/Adjust';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const Slider = ({Images}) => {
  const [imageIndex , setImageIndex] = useState(0)
  const imgStyle = {
    translate: `${-100 * imageIndex}%`,
    transition : 'translate 300ms ease-in-out',
  }
  
  return (
    <div className='imageSlider w-full h-full relative'>
      <div  className='w-full h-full flex overflow-hidden'>
        {Images.map(url => (
            <img className='image w-full h-full object-cover block grow-0 shrink-0 '  key={url} src = {url} style={imgStyle}  />
          ))}
      </div>
      <button  className='left absolute px-4 top-0 left-0 bottom-0 cursor-default text-white '> 
       <ArrowBackIosIcon fontSize='large' onClick={() => setImageIndex(index => index === 0 ? Images.length - 1 : index - 1)} className="material-symbols-outlined hover:opacity-50 cursor-pointer"/>
      </button>
      <button  className='right absolute px-4 top-0 bottom-0 right-0 cursor-default  text-white'>
        <ArrowForwardIosIcon  fontSize='large' onClick={() => setImageIndex(index => index === Images.length - 1 ?  0 : index + 1)} className="material-symbols-outlined text-5xl hover:opacity-50 cursor-pointer"/>
      </button>
      <div className='imgSlider-selected absolute flex gap-2 bottom-6 left-1/2 -translate-x-1/2 stroke-white fill-black'>
        {Images.map(( _, index) => (
          <button onClick={() => setImageIndex(index)}>
                  {index === imageIndex ? <Brightness1Icon className='text-white opacity-80 text-xs'/> : <CircleOutlinedIcon className='text-white text-xs'/>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider