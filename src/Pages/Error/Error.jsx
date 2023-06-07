import { Link, useRouteError } from "react-router-dom";
import errorGif from '../../assets/404-error-lottie-animation.gif'


const Error = () => {
    const { error, status } = useRouteError() || {};
  return (
    <section className='flex flex-col items-center justify-center h-screen '>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='w-40'>

        </div>
        <div className='max-w-md text-center'>
           <img src={errorGif} alt="" className="w-60" />
            <span className='text-3xl text-red-500 font-bold'>Error: {status || 404}</span> 
          
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
           className="mt-8 px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded animate-pulse hover:bg-purple-600"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Error;