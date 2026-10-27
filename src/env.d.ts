/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly WORDPRESS_API_URL?: string;
  readonly CONTACT_EMAIL?: string;
  readonly WHATSAPP_CI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
