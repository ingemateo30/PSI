This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Administración del sitio (/admin)

Los planes, precios, sedes (dirección, WhatsApp, horario) y los textos de la página de inicio se editan desde
`/admin`, sin tocar código. Los valores originales están en `src/lib/defaultContent.js`; lo que guarda el
administrador es un documento JSON que manda sobre esos valores.

**Dónde se guarda** (misma lógica que `sistema-hyh`, con detección automática):

- **En Vercel** (existen `KV_REST_API_URL` y `KV_REST_API_TOKEN`, o `UPSTASH_REDIS_REST_URL` / `_TOKEN`): en
  Vercel KV / Upstash Redis, clave `psi:site-content` (la versión anterior queda en `psi:site-content:backup`).
  Vercel tiene el disco de solo lectura, por eso ahí no se puede guardar en archivos.
- **En local o en un servidor con disco**: en `data/site-content.json` (`CONTENT_DATA_DIR` cambia la carpeta; la
  versión anterior queda en `site-content.backup.json`). `data/` está en `.gitignore`.

### Puesta en marcha en Vercel

1. En el proyecto → **Storage** → conecta una base **KV / Upstash Redis** (puede ser la misma de otro proyecto:
   las claves llevan el prefijo `psi:`). Agrega sola `KV_REST_API_URL` y `KV_REST_API_TOKEN`.
2. **Settings → Environment Variables**: agrega `ADMIN_PASSWORD` (obligatoria; usa una larga y única).
   Opcionales: `ADMIN_USER` (por defecto `admin`) y `ADMIN_SESSION_SECRET`.
3. **Redeploy**. Entra a `/admin`. Mientras no se guarde nada, el sitio muestra los valores originales.

Si se intenta guardar sin almacén conectado, el panel avisa qué falta. Si el almacén falla al *leer*, el sitio sigue
funcionando con los valores originales.

Variables (ver `.env.example`):

| Variable | Descripción |
| --- | --- |
| `ADMIN_PASSWORD` | **Obligatoria.** Contraseña del administrador. Sin ella `/admin` queda deshabilitado. |
| `ADMIN_USER` | Usuario (por defecto `admin`). |
| `ADMIN_SESSION_SECRET` | Clave para firmar la sesión (por defecto se deriva de la contraseña). |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Almacén Vercel KV / Upstash (las agrega Vercel al conectarlo). |
| `CONTENT_DATA_DIR` | Solo sin KV: carpeta del archivo JSON (por defecto `./data`). |

### Sedes y códigos QR

Cada sede tiene su página (`/sedes/<sede>`) y su propio QR/flyer descargable (`/descubre/<sede>`); el índice de todos
está en `/descubre`. Al agregar una sede en el panel, sus páginas y su QR existen automáticamente. El enlace de una
sede no cambia aunque se edite su nombre, para no invalidar QR ya impresos.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
