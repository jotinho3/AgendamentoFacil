import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaShoppingCart,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa"; // Import WhatsApp icon

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
          <img className="w-[20rem]" src="./logomain.png" alt="Logo" />
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
            className={`sm:w-1/3 w-full drop-shadow-xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={images[currentImageIndex]}
            alt=""
          />

          <div className="flex flex-col gap-8 max-w-2xl text-center sm:text-start">
            <h1 className="text-5xl font-bold drop-shadow-xl">
              Agendamento simples e fácil!
            </h1>

            <p className="text-xl">
              Adquira os serviços de agendamento online e facilite a vida dos
              seus clientes. Nossos serviços são personalizados para atender as
              necessidades do seu negócio, com um preço acessível e
              portabilidade para dispositivos mobile.
            </p>

            <div className="mt-4 flex gap-2 justify-center sm:justify-start space-x-4">
              <button className="bg-teal-300 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                Saber Mais
                <FaInfoCircle />
              </button>
              <a
                href="#form"
                className="bg-teal-500 hover:bg-teal-700 flex items-center gap-2 text-white font-bold py-2 px-4 rounded"
              >
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
            Personalizamos o sistema de agendamento de acordo com as
            necessidades do seu negócio. Oferecemos uma solução completa e fácil
            de usar, que permite aos seus clientes agendar serviços de forma
            rápida e conveniente. Com nosso sistema, você terá controle total
            sobre os horários disponíveis, poderá gerenciar reservas e enviar
            lembretes automáticos. Simplifique o agendamento e melhore a
            experiência do seu cliente com nosso sistema de agendamento fácil.
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

      <h2 className="text-4xl text-center">Serviços</h2>

      <div className="w-2/3 m-auto border-[1px] mt-4"></div>
      <motion.section
        className="p-8 mt-5 max-w-8xl mx-auto font-roboto"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-6 flex-col md:flex-row justify-around text-center">
          <motion.div
            className="bg-white border-2 flex flex-col gap-16 p-4 items-center rounded-xl shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-roboto">Mais Rápido</h3>
            <img
              className="w-full rounded-xl drop-shadow-xl"
              src="./Capturar.PNG"
              alt=""
            />
            <h3 className="text-6xl font-bold">
              R$75,00 <strong className="text-xl font-normal">/mês</strong>
            </h3>
            <div className="mb-2">
              <h2 className="text-2xl font-bold">Benefícios:</h2>
              <ul className="mt-4 space-y-2 text-start">
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
                href="#form"
                className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
    
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
              <img
                className="w-full rounded-xl drop-shadow-xl"
                src="./capturar2.PNG"
                alt=""
              />
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
                  href="#form"
                  className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
       
                  rel="noopener noreferrer"
                >
                  <span>Contratar</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white p-4 sm:px-32 px-2 flex border-2 flex-col gap-16 items-center rounded-xl shadow-lg mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold">Profissional</h3>
            <img
              className="w-full rounded-xl drop-shadow-xl"
              src="./capturar3.PNG"
              alt=""
            />
            <h3 className="text-6xl font-bold">
              R$200,00 <strong className="text-xl font-normal">/mês</strong>
            </h3>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Benefícios:</h2>
              <ul className="mt-4 space-y-2 text-start">
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
                href="#form"
                className="mt-8 bg-teal-500 hover:bg-teal-700 w-fit flex items-center justify-center text-white m-auto font-bold py-2 px-4 rounded-full"
             
                rel="noopener noreferrer"
              >
                <span>Contratar</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <h2 className="text-6xl text-center mb-12 mt-24">Avaliações</h2>

      <section className="flex gap-20 sm:mx-24 mx-12 sm:flex-row flex-col">
        <article>
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivataVfBdmPhPOp3W5IM6b6E4Pm07RQZAgQ&s"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Jese Leos{" "}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 dark:text-gray-400"
                >
                  Joined on August 2014
                </time>
              </p>
            </div>
          </div>
          <div className="flex  items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
              Thinking to buy another one!
            </h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          
          </footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Cliente: Dra. Mariana C.

"Sou psicóloga e trabalho em um consultório com colegas médicos e psiquiatras. O sistema de agendamento foi uma verdadeira mão na roda para a nossa equipe. Agora, meus pacientes podem marcar consultas e sessões com facilidade diretamente pelo site, escolhendo o horário e o profissional desejado. O sistema também nos permite separar os horários de consultas médicas das sessões de psicoterapia, evitando confusões na agenda. Gosto muito da possibilidade de enviar lembretes por e-mail e SMS, o que reduziu significativamente o número de faltas. Outra funcionalidade que aprecio bastante é o controle de histórico dos pacientes, que facilita o acompanhamento de tratamentos contínuos. A única sugestão seria melhorar a interface mobile para pacientes, pois alguns têm dificuldade de navegação."
            problems.
          </p>
        
         
          <aside>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              19 pessoas acharam interessante.
            </p>
            <div className="flex items-center mt-3">
             
             
            </div>
          </aside>
        </article>

        <article>
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdAlLbduYzb4-HAA7hr4cwXa0JDQjsNN4aw&s"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Jese Leos{" "}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 dark:text-gray-400"
                >
                  Joined on August 2014
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
           
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
              Thinking to buy another one!
            </h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
           
          </footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Cliente: Bruno A.

"Como dono de uma barbearia em uma cidade pequena, eu estava buscando uma forma de digitalizar o processo de agendamento e atender meus clientes com mais rapidez e eficiência. Esse sistema de agendamentos foi a solução perfeita. Agora, meus clientes podem marcar seus horários online, sem necessidade de ligações ou WhatsApp. O recurso de gerenciamento de fila ao vivo é incrível, pois meus clientes podem ver quando haverá um horário disponível sem sair de casa. O que mais gosto é que posso vincular as preferências de cortes de cabelo dos clientes ao perfil deles, agilizando o atendimento. Só gostaria que houvesse integração com meu sistema de pagamentos para automatizar mais ainda o processo."
          </p>
        
          <aside>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              3 pessoas acharam isso interessante.
            </p>
            <div className="flex items-center mt-3">
            
            </div>
          </aside>
        </article>

        <article>
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Wrh16WBp5PN6dIPzcllnoesnk24hw8azw&s"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Jese Leos{" "}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 dark:text-gray-400"
                >
                  Joined on August 2014
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
              Thinking to buy another one!
            </h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          </footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Cliente: Larissa S.

"Eu trabalho como cabeleireira e maquiadora em um salão de beleza e precisava de uma plataforma eficiente para gerenciar meus horários. O sistema de agendamentos que estou usando facilitou muito o meu dia a dia. Agora, meus clientes conseguem agendar diretamente pelo aplicativo e escolher os horários disponíveis sem precisar me ligar ou mandar mensagens. A funcionalidade de lembrete automático de agendamentos é fantástica, reduz muito os cancelamentos de última hora. Além disso, posso gerenciar tudo, desde cortes de cabelo até pacotes de maquiagem, personalizando os serviços oferecidos. Só gostaria de uma funcionalidade extra para sugerir promoções automaticamente em horários ociosos."
          </p>
     
         
          <aside>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              2 pessoas acharam isso interessante.
            </p>
            <div className="flex items-center mt-3">
             
           
            </div>
          </aside>
        </article>
      </section>



      <form action="" className="sm:mx-48 mx-6 my-24" id="form">
  <div className="relative mb-6">
    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
      Nome
      <svg
        width="7"
        height="7"
        className="ml-1"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
          fill="#EF4444"
        />
      </svg>
    </label>
    <input
      type="text"
      id="default-search"
      className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
      placeholder="Digite aqui seu nome"
      required
    />
  </div>
  <div className="relative mb-6">
    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
      Email
      <svg
        width="7"
        height="7"
        className="ml-1"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
          fill="#EF4444"
        />
      </svg>
    </label>
    <input
      type="text"
      id="default-search"
      className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
      placeholder="name@pagedone.com"
      required
    />
  </div>
  <div className="relative mb-6">
    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
      Mensagem
      <svg
        width="7"
        height="7"
        className="ml-1"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
          fill="#EF4444"
        />
      </svg>
    </label>
    <div className="flex">
      <div className="relative w-full">
        <textarea
          className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
          placeholder="Escreva especificações e detalhes..."
        ></textarea>
      </div>
    </div>
  </div>

  {/* Flex section for radio buttons */}
  <div className="flex space-x-4 mb-6">
    <label className="relative block w-1/3 cursor-pointer">
      <input
        type="radio"
        name="card"
        className="hidden peer"
        value="option1"
      />
      <div className="p-4 h-32 bg-white border border-gray-300 peer-checked:border-blue-500 rounded-lg shadow-sm flex flex-col justify-center items-center transition-all duration-300">
        <p className="sm:text-lg text-md font-medium text-center">Mais Rápido</p>
        <p className="text-sm text-gray-500">R$75,00 /mês</p>
      </div>
    </label>

    <label className="relative block w-1/3 cursor-pointer">
      <input
        type="radio"
        name="card"
        className="hidden peer"
        value="option2"
      />
      <div className="p-4 h-32 bg-white border border-gray-300 peer-checked:border-blue-500 rounded-lg shadow-sm flex flex-col justify-center items-center transition-all duration-300">
        <p className="sm:text-lg text-md font-medium">Intermediário</p>
        <p className="text-sm text-gray-500">R$100,00 /mês</p>
      </div>
    </label>

    <label className="relative block w-1/3 cursor-pointer">
      <input
        type="radio"
        name="card"
        className="hidden peer"
        value="option3"
      />
      <div className="p-4 h-32 bg-white border border-gray-300 peer-checked:border-blue-500 rounded-lg shadow-sm flex flex-col justify-center items-center transition-all duration-300">
        <p className="text-lg font-medium">Profissional</p>
        <p className="text-sm text-gray-500">R$200,00 /mês</p>
      </div>
    </label>
  </div>

  <button className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">
    Adquirir Serviço
  </button>
</form>


      

      {/* Footer */}
      <motion.footer
        className="bg-teal-950 text-white p-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-4 mb-4 flex justify-center space-x-4">
          <img className="w-52" src="./logomain.png" alt="Logo" />
        </div>
        <a href="mailto:agendamentofacilapp@gmail.com.br">
          agendamentofacilapp@gmail.com.br -{" "}
        </a>
        <a href="#contact">(11) 97768-3766</a>
        <p className="mt-4">
          Todos os direitos reservados a Agendamento Fácil ©
        </p>
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
