'use client';

import { motion } from 'framer-motion';
import { Heart, Star, BookOpen, User, Mail, Instagram, Twitter, Facebook, ExternalLink, Coffee, Cigarette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="min-h-screen bg-concrete">
      {/* Floating smoke particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="drifting-particle absolute top-20 left-10 w-3 h-3 bg-gray-400 rounded-full opacity-20"></div>
        <div className="drifting-particle absolute top-40 right-20 w-2 h-2 bg-gray-500 rounded-full opacity-30"></div>
        <div className="drifting-particle absolute top-60 left-1/4 w-4 h-4 bg-gray-300 rounded-full opacity-15"></div>
        <div className="drifting-particle absolute bottom-40 right-1/3 w-3 h-3 bg-gray-600 rounded-full opacity-25"></div>
        <div className="drifting-particle absolute bottom-20 left-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-35"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center urban-gradient texture-overlay overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-lg blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                <img
                  src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Catálogo de milagros tristes - Portada del libro"
                  className="relative w-80 h-auto rounded-lg shadow-urban hover-lift filter sepia-[0.3] contrast-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center lg:text-left space-y-8"
            >
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
                >
                  Catálogo de
                  <span className="block text-amber-warm typewriter">milagros tristes</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-xl text-gray-300 font-medium tracking-wide"
                >
                  Cuentos urbanos y melancólicos
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg text-gray-200 leading-relaxed max-w-2xl font-light"
              >
                Una colección cruda y honesta de relatos que exploran la belleza 
                en la desolación urbana, el amor perdido en bares de medianoche 
                y los pequeños milagros que emergen de la tristeza cotidiana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-amber-warm hover:bg-amber-600 text-charcoal px-8 py-4 rounded-none shadow-whiskey hover-lift transition-all duration-300 font-semibold tracking-wide"
                  asChild
                >
                  <a href="https://amazon.es/dp/example" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Amazon España
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-warm text-amber-warm hover:bg-amber-warm hover:text-charcoal px-8 py-4 rounded-none hover-lift transition-all duration-300 font-semibold tracking-wide bg-transparent"
                  asChild
                >
                  <a href="https://amazon.com/dp/example" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Amazon US
                  </a>
                </Button>
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="flex text-amber-warm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300 ml-2 font-light">
                  "Honesto y desgarrador" - 500+ lectores
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-amber-warm rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-amber-warm rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Synopsis Section */}
      <section id="synopsis" className="py-24 bg-ash">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-8">
                En estas páginas vive la ciudad
              </h2>
              <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed font-light">
                Cada cuento es un fragmento de asfalto, una conversación de bar, 
                un momento de soledad urbana donde lo extraordinario se esconde 
                en lo mundano.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white/90 backdrop-blur border-0 shadow-urban hover-lift rounded-none">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <Coffee className="w-8 h-8 text-amber-warm mr-4" />
                      <h3 className="text-2xl font-serif font-semibold text-charcoal">
                        Extracto: "3 AM en el Diner"
                      </h3>
                    </div>
                    <blockquote className="text-steel leading-relaxed font-light border-l-4 border-amber-warm pl-6 text-lg">
                      "El café estaba frío hace una hora, pero seguía ahí, 
                      como yo, como la camarera que había visto demasiadas 
                      noches como esta. En la mesa de al lado, un tipo 
                      escribía cartas que nunca enviaría. Todos éramos 
                      fantasmas esperando el amanecer..."
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-white/90 backdrop-blur border-0 shadow-urban hover-lift rounded-none">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <Cigarette className="w-8 h-8 text-steel mr-4" />
                      <h3 className="text-2xl font-serif font-semibold text-charcoal">
                        Extracto: "Humo y Recuerdos"
                      </h3>
                    </div>
                    <blockquote className="text-steel leading-relaxed font-light border-l-4 border-steel pl-6 text-lg">
                      "Cada cigarrillo era una pequeña muerte, cada calada 
                      un segundo menos de vida, pero en ese momento, 
                      parado bajo la lluvia, fumando y recordándote, 
                      sentí que por fin estaba vivo. Los milagros a veces 
                      vienen disfrazados de autodestrucción..."
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Testimonials */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              <Card className="bg-charcoal text-white border-0 shadow-urban hover-lift rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-warm fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 font-light text-lg leading-relaxed">
                    "Crudo, honesto y hermoso. Como Bukowski pero con más corazón. 
                    Cada página duele de la manera correcta."
                  </p>
                  <p className="font-semibold text-amber-warm">— Roberto M.</p>
                </CardContent>
              </Card>

              <Card className="bg-smoke text-white border-0 shadow-urban hover-lift rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-warm fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 font-light text-lg leading-relaxed">
                    "Literatura urbana en su máxima expresión. Cada cuento 
                    es un puñetazo al estómago que te deja queriendo más."
                  </p>
                  <p className="font-semibold text-amber-warm">— Diego L.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur border-0 shadow-urban hover-lift rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-warm fill-current" />
                    ))}
                  </div>
                  <p className="text-steel mb-6 font-light text-lg leading-relaxed">
                    "Poesía disfrazada de prosa. El autor captura la soledad 
                    urbana como nadie. Imprescindible."
                  </p>
                  <p className="font-semibold text-charcoal">— Carmen R.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-24 concrete-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex items-center mb-8">
                    <User className="w-8 h-8 text-amber-warm mr-4" />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal">
                      El Autor
                    </h2>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-semibold text-steel mb-6">
                    Escritor Urbano
                  </h3>
                  
                  <div className="space-y-6 text-steel leading-relaxed font-light text-lg">
                    <p>
                      Un observador de la vida urbana que encuentra poesía en los 
                      rincones más oscuros de la ciudad. Sus historias nacen de 
                      conversaciones de bar, de noches de insomnio y de la certeza 
                      de que la belleza más auténtica se esconde en los lugares 
                      donde nadie la busca.
                    </p>
                    
                    <p>
                      Influenciado por los grandes maestros del realismo sucio y 
                      la literatura beat, ha desarrollado un estilo propio que 
                      combina la crudeza de la vida cotidiana con una sensibilidad 
                      poética que transforma lo mundano en extraordinario.
                    </p>
                    
                    <p>
                      "Catálogo de milagros tristes" es su primera colección 
                      publicada, el resultado de años vagando por las calles, 
                      escuchando historias y entendiendo que cada persona 
                      lleva consigo su propio milagro triste.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-amber-warm text-amber-warm hover:bg-amber-warm hover:text-charcoal rounded-none font-semibold tracking-wide"
                      asChild
                    >
                      <a href="mailto:autor@ejemplo.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Contacto
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-none blur-3xl opacity-20"></div>
                  <img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Autor de Catálogo de milagros tristes"
                    className="relative w-80 h-80 object-cover rounded-none shadow-2xl hover-lift filter grayscale contrast-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-amber-warm">
                  Catálogo de milagros tristes
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Una colección cruda y honesta de relatos urbanos que exploran 
                  la belleza en la desolación y los pequeños milagros de la tristeza.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/autor_escritor"
                    className="text-gray-400 hover:text-amber-warm transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/autor_escritor"
                    className="text-gray-400 hover:text-amber-warm transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/autor.escritor"
                    className="text-gray-400 hover:text-amber-warm transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-200">
                  Conseguir el libro
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://amazon.es/dp/example"
                    className="block text-gray-300 hover:text-amber-warm transition-colors font-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon España
                  </a>
                  <a
                    href="https://amazon.com/dp/example"
                    className="block text-gray-300 hover:text-amber-warm transition-colors font-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon US
                  </a>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-amber-warm transition-colors font-light"
                  >
                    Versión digital
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-200">
                  Contacto
                </h4>
                <div className="space-y-3 text-gray-300 font-light">
                  <p>
                    <Mail className="w-4 h-4 inline mr-2" />
                    autor@ejemplo.com
                  </p>
                  <p>Editorial Independiente</p>
                  <p>© 2024 Todos los derechos reservados</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="border-t border-gray-700 pt-8 text-center text-gray-400 font-light"
            >
              <p>
                "Los milagros más hermosos son siempre los más tristes" 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}