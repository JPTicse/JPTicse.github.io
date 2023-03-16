import { motion } from 'framer-motion'
import { Component } from 'react'


const SectionWrapper = (component, idName) => {
function HOC() {
  return (
    <motion.section>
      <Component/>
    </motion.section>
  )
}
}

export default SectionWrapper