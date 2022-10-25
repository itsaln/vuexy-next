import { FC } from 'react'

const ComponentSpinner: FC = () => {
  return (
    <div className='fallback-spinner'>
      <div className='loading'>
        <div className='effect-1 effects' />
        <div className='effect-2 effects' />
        <div className='effect-3 effects' />
      </div>
    </div>
  )
}

export default ComponentSpinner
