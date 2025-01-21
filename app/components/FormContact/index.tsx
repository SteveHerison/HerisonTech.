"use client";

import { useForm } from "react-hook-form";
import { TitleSection } from "../Title/title";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "../../lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Form = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center px-6 py-16 md:py-32 bg-zinc-100 text-zinc-500 "
    >
      <div className="w-full max-w-[420px] mx-auto">
        <TitleSection
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato!"
          className="items-center text-center"
        />
        <motion.form
          className="flex flex-col w-full gap-4 mt-12"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 transition-all outline-none rounded-xl focus:ring-2 ring-purple-950"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 transition-all outline-none rounded-xl focus:ring-2 ring-purple-950"
            {...register("email")}
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 transition-all outline-none resize-none min-h-32 max-h-52 rounded-xl focus:ring-2 ring-purple-950"
            maxLength={500}
            {...register("message")}
          />
          <Button className="transition-all shadow-xl font-primary bg-purple-950 shadow-purple-950/80 hover:shadow-zinc-800 hover:bg-black text-zinc-300">
            Enviar
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
