export default function BasicCK() {
  return (
    <form className='flex flex-col mx-auto mt-12 bg-gray-200 p-8'>
      <h1 className="text-2xl font-bold text-center">Sign up!</h1>
      <p className="text-xl text-center">Get notified as soon as the site is live!</p>
	    <label htmlFor='name' className='mt-8 mb-2 italic'>Name</label>
	    <input className='mb-2 border-b-2' id='name' name='name' type='text' autoComplete='name' required />
      <label htmlFor='email' className='mb-2 italic'>Email</label>
	    <input className='mb-4 border-b-2' id='email' name='email' type='email' autoComplete='email' required />
	    <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>Submit</button>
	  </form>
  )
}