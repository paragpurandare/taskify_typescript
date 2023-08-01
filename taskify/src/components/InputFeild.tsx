import React from 'react'

const InputFeild: React.FC = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input_box'/>
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
