import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Funcionalidades",
    href: "#funcionalidades",
  },
  {
    title: "Precios",
    href: "#precios",
  },
  {
    title: "Preguntas",
    href: "#faq",
  },
  {
    title: "Testimonios",
    href: "#testimonios",
  },
  {
    title: "Privacidad",
    href: "#privacidad",
  },
];

const Footer = () => {
  return (
    <footer className="border-t mt-40 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Comparaelprecio</span>
            </div>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Mantente al día</h6>
            <p className="text-sm text-muted-foreground mt-2">
              Recibe las mejores ofertas y novedades
            </p>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Tu email" />
              <Button>Suscribirse</Button>
            </form>
          </div>
        </div>
        
        {/* Mensaje de afiliados */}
        <div className="px-6 xl:px-0 pb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 text-center">
              💡 <strong>Transparencia:</strong> Recibimos una pequeña comisión como afiliados cuando compras a través de nuestros enlaces, sin coste adicional para ti. Esto nos ayuda a mantener el servicio gratuito.
            </p>
          </div>
        </div>
        
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-gray-600 text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Comparaelprecio
            </Link>
            . Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-5 text-gray-600">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;