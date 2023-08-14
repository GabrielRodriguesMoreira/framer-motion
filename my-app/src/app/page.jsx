'use client'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from "framer-motion"
export default function Home() {
  return (
    <main className="bg-pink-600 w-full p-24" >
      <div className="">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-teal-50 text-8xl'>O COISA RUIM VOLTOU
        </motion.h1>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', damping: 15 }}
          whileHover={{
        background: 'linear-gradient(45deg, #ff9900, #0000ff, #9900ff, #ff9900, #0000ff, #9900ff)',
        backgroundSize: '200%',
        animation: 'rainbow-bg 3s linear infinite',
      }}
          style={{ boxShadow: '-4px 4px 0px 0px #021711' }}
          className='flex bg-rose-800 p-1 align-middle justify-center w-30 space-x-3 text-3xl rounded-md'>
          TRY IT <BsArrowUpRight />
        </motion.button>
      </div>
      <div>

      </div>
    </main >
  )
}
