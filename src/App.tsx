import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaShoppingCart, FaInfoCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import WhatsApp icon

const benefits = [
  { text: "Site responsivo e sistema de agendamento", available: true },
  { text: "Portabilidade para celular", available: true },
  { text: "Design a escolha", available: true },
  { text: "Landing page", available: false },
  { text: "Suporte", available: false },
  { text: "Usuário cliente/ login e cadastro", available: false },
  { text: "Dashboard de visualização", available: false },
  { text: "Envio de email de confirmação", available: false },
];

const benefits2 = [
  { text: "Site responsivo e sistema de agendamento", available: true },
  { text: "Portabilidade para celular", available: true },
  { text: "Design a escolha", available: true },
  { text: "Landing page", available: true },
  { text: "Envio de email de confirmação", available: true },
  { text: "Suporte", available: false },
  { text: "Usuário cliente/ login e cadastro", available: false },
  { text: "Dashboard de visualização", available: false },
  
];

const benefits3 = [
  { text: "Site responsivo e sistema de agendamento", available: true },
  { text: "Portabilidade para celular", available: true },
  { text: "Design a escolha", available: true },
  { text: "Landing page", available: true },
  { text: "Suporte", available: true },
  { text: "Usuário cliente/ login e cadastro", available: true },
  { text: "Dashboard de visualização", available: true },
  { text: "Envio de email de confirmação", available: true },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    "./pexels-thgusstavo-1813272.jpg",
    "./pexels-shvetsa-3845981.jpg", // Replace with your second image path
    "./pexels-alex-green-5699431.jpg", // Replace with your third image path
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of the fade-out effect
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Header */}
      <header className="bg-teal-950 text-white p-4 flex sm:justify-around justify-between items-center font-roboto">
        <div className="flex items-center gap-3">
          <img className="w-12" src="./schedule (1).png" alt="Logo" />
          <p className="sm:text-xl text-md">Agendamento Fácil</p>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Serviços
          </a>
          <a href="#about" className="hover:text-gray-400">
            Sobre
          </a>
        </nav>
        <div className="md:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            ☰
          </motion.div>
        </div>
      </header>
      {menuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="bg-teal-950 text-white p-4 md:hidden"
        >
          <a href="#home" className="block py-2 hover:text-gray-400">
            Serviços
          </a>
          <a href="#about" className="block py-2 hover:text-gray-400">
            Sobre
          </a>
        </motion.nav>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-screen font-roboto"
        style={{ backgroundImage: "url(/pexels-pixabay-263201.jpg)" }}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(12px)",
          }}
        ></div>

        <div className="absolute inset-0 flex sm:flex-row flex-col gap-16 justify-center items-center text-white sm:mb-16 mb-44">
          <img
            className={`sm:w-1/3 w-full drop-shadow-xl transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            src={images[currentImageIndex]}
            alt=""
          />

          <div className="flex flex-col gap-8 max-w-2xl text-center sm:text-start">
            <h1 className="text-5xl font-bold drop-shadow-xl">Agendamento simples e fácil!</h1>

            <p className="text-xl">
              Adquira os serviços de agendamento online e facilite a vida dos seus clientes. Nossos serviços são personalizados para atender as necessidades do seu negócio, com um preço acessível e portabilidade para dispositivos mobile.
           
            </p>

            <div className="mt-4 flex gap-2 justify-center sm:justify-start space-x-4">
              <button className="bg-teal-300 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                Saber Mais
                <FaInfoCircle />
              </button>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil" className="bg-teal-500 hover:bg-teal-700 flex items-center gap-2 text-white font-bold py-2 px-4 rounded">
                Contratar
                <FaShoppingCart />
              </a>


            </div>
          </div>
        </div>
      </motion.section>

   
        <motion.section
          className="flex flex-col md:flex-row p-8 mt-8 mb-32"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2">
            <motion.img
          src="./pexels-thgusstavo-1813272.jpg"
          alt="Description"
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          transition={{ delay: 0.5 }}
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-5 justify-center p-4">
            <h2 className="text-3xl font-bold">
          Fornecimento de Sistema de Agendamento Fácil
            </h2>
            <p className="mt-4">
          Personalizamos o sistema de agendamento de acordo com as necessidades do seu negócio. Oferecemos uma solução completa e fácil de usar, que permite aos seus clientes agendar serviços de forma rápida e conveniente. Com nosso sistema, você terá controle total sobre os horários disponíveis, poderá gerenciar reservas e enviar lembretes automáticos. Simplifique o agendamento e melhore a experiência do seu cliente com nosso sistema de agendamento fácil.
            </p>
            <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil"
          className="mt-4 flex justify-center gap-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
          <FaWhatsapp className="text-2xl" />
          Saiba Mais
            </a>
          </div>
        </motion.section>

        {/* Placeholder Sections */}

        <h2 className="text-4xl text-center">
          Serviços
        </h2>

        <div className="w-2/3 m-auto border-[1px] mt-4">

        </div>
      <motion.section
        className="p-8 mt-5 max-w-8xl mx-auto font-roboto"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-6 flex-col md:flex-row justify-around text-center">
          <motion.div
            className="bg-white p-4 border-2 flex flex-col gap-14 items-center rounded-xl shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-roboto">Mais Rápido</h3>
            <img className="w-full rounded-xl drop-shadow-xl" src="./Capturar.PNG" alt="" />
            <h3 className="text-6xl font-bold">
              R$75,00 <strong className="text-xl font-normal">/mês</strong>
            </h3>
            <div className="mb-4">
      <h2 className="text-2xl font-bold">Benefícios:</h2>
      <ul className="mt-4 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            {benefit.available ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil"
        className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Contratar</span>
      </a>
    </div>
          </motion.div>
          <div>
            <p className="text-teal-500">Mais Comprado</p>
             <motion.div
            className="bg-white border-2 border-teal-500 p-4 flex flex-col items-center gap-16 rounded-xl shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold">Intermediário</h3>
            <img className="w-full rounded-xl drop-shadow-xl" src="./capturar2.PNG" alt="" />
            <h3 className="text-6xl font-bold">
              R$100,00 <strong className="text-xl font-normal">/mês</strong>
            </h3>
            <div className="mb-8">
      <h2 className="text-2xl font-bold">Benefícios:</h2>
      <ul className="mt-4 space-y-2">
        {benefits2.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            {benefit.available ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil"
        className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Contratar</span>
      </a>
    </div>
          </motion.div>
          </div>
         
          <motion.div
            className="bg-white p-4 px-12 flex border-2 flex-col gap-16 items-center rounded-xl shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold">Profissional</h3>
            <img className="w-full rounded-xl drop-shadow-xl" src="./capturar3.PNG" alt="" />
            <h3 className="text-6xl font-bold">
              R$200,00 <strong className="text-xl font-normal">/mês</strong>
            </h3>
            <div className="mb-4">
      <h2 className="text-2xl font-bold">Benefícios:</h2>
      <ul className="mt-4 space-y-2">
        {benefits3.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            {benefit.available ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil"
        className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Contratar</span>
      </a>
    </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-teal-950 text-white p-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-4 mb-4 flex justify-center space-x-4">
           <img className="w-10" src="./schedule (1).png" alt="Logo" />
          <p className="sm:text-xl text-md">Agendamento Fácil</p>
         
        </div>
        <a href="mailto:agendamentofacilapp@gmail.com.br">agendamentofacilapp@gmail.com.br - </a>
        <a href="#contact">(11) 97768-3766</a>
        <p className="mt-4">Todos os direitos reservados a Agendamento Fácil ©</p>
      </motion.footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=5511977683766&text=Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+dispon%C3%ADveis+de+Agendamento+F%C3%A1cil"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full flex items-center space-x-2 hover:bg-green-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden md:inline">Como posso te ajudar?</span>
      </a>
    </>
  );
}

export default App;