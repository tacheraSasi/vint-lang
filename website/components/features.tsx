'use client'

import { motion } from 'motion/react'



export default function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
        Why Choose VintLang?
      </h2>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-taupe-100 text-taupe-900 dark:bg-taupe-900 dark:text-taupe-100">
                {<feature.icon className="w-1/3 h-1/3" />}
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

