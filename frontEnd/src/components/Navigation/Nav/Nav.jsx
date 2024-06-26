
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../../../utils/anim';
import Body from '../Body/Body';
import Image from '../Image/Image';
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
} from "react-icons/fa";

const links = [
  {
    title: "Home",
    href: "/",
    src: "../assets/optimized/furniture-optimized.jpeg"
  },
  {
    title: "Services",
    href: "/services",
    src: "../assets/architects.jpeg"
  },
  {
    title: "Products",
    href: "/products",
    src: "../assets/architects.jpeg"
  },
  {
    title: "About",
    href: "/aboutus",
    src: "../assets/architects.jpeg"
  },
  {
    title: "Contact ",
    href: "/contactus",
    src: "../assets/architects.jpeg"
  }
]

export default function Nav() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
      <div className="flex gap-4 mt-5 md:translate-x-[40%]">
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaInstagram className='text-2xl md:text-3xl' />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaFacebook className='text-2xl md:text-3xl' />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaWhatsapp className='text-2xl md:text-3xl' />
				</button>
				<button className="p-3 bg-white rounded-md transition duration-300 hover:scale-110">
					<FaLinkedin className='text-2xl md:text-3xl' />
				</button>
			</div>
    </motion.div>
  )
}