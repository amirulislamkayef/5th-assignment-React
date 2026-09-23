import banner_img from '../assets/banner-stack.png'



const Banner = () => {
    return (
        <div className='flex justify-center my-25 max-w-7xl mx-auto'>
            <div>
                <h1 className='font-bold text-6xl mb-6'>Build Your Ideal <br /><span className='bg-linear-to-r from-[#f3642b] to-[#b043d4] bg-clip-text text-transparent'>Development Stack</span> </h1>
                <p className='mb-12 text-gray-500'>Explore frontend, backend, database, and tooling options, <br />
                    compare them side by side, and put together the stack that fits your <br /> next project.</p>
                    <div>
                        <button  className='bg-linear-to-br from-orange-600 to-purple-400 rounded-lg px-10 py-2 text-white'>Explore Technologies</button>
                        <button className='border rounded-lg ml-4 px-10 py-2'>Learn More</button>
                    </div>
            </div>
            <div>
                <img src={banner_img} alt="" className='-mt-20 ml-40'/>
            </div>
        </div>
    );
};

export default Banner;
