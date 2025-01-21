"use client";
import { Link } from "../../components/Link";
import { TitleSection } from "../../components/Title/title";
import { ArrowBigLeftDash } from "lucide-react";
import { motion } from "framer-motion";
export const PageIntroduction = () => {
  return (
    <section className="w-full h-[560px] lg:h-[700px] flex flex-col items-center justify-center bg-hero-image bg-no-repeat bg-cover bg-right-bottom">
      <TitleSection
        subtitle="projetos"
        title="Projetos"
        className="text-center [&>h3]:text-4xl [&>h3]:font-semibold [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:bg-gradient-to-r from-purple-400 to-purple-950"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center my-6 text-sm sm:text-base max-w-[640px]">
          Aqui você encontrará uma seleção dos meus projetos, desenvolvidos.
          Navegue e explore todas as tecnologias usadas. Cada projeto reflete
          minha experiência em design, programação e resolução de problemas.
          Explore para ver como aplico minhas habilidades para criar soluções
          práticas e criativas. Fique à vontade para navegar pelos detalhes e
          conferir os desafios que enfrentei em cada um.
        </p>
        <Link
          href="/"
          className="flex items-center transition-colors hover:text-purple-600"
        >
          <ArrowBigLeftDash />
          voltar para home
        </Link>
      </motion.div>
    </section>
  );
};
