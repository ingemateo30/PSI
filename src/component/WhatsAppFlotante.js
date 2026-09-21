"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useSedesVisibles } from "@/component/ContentProvider";

// Botón flotante de WhatsApp. Sin `scope` usa la primera sede del sitio principal;
// con `scope` (id de sede o de grupo) usa la primera sede de ese alcance.
export default function WhatsAppFlotante({ scope, accountName }) {
  const [sede] = useSedesVisibles(scope);

  return (
    <FloatingWhatsApp
      phoneNumber={`+${sede.whatsapp}`}
      accountName={accountName || "PSI"}
      avatar="/logo.png"
      darkMode={true}
      statusMessage="Normalmente responde en 1 hora"
      chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
      placeholder="Escribe un mensaje"
      notification={true}
      chatboxHeight={340}
    />
  );
}
