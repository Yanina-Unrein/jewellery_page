import { readdir } from "fs/promises";
import { resolve } from "path";

export const prerender = false; // ⚡ Habilita SSR

export async function GET({ params }) {
  const category = params.category;
  const imageDir = resolve("public", category); 

  try {
    const files = await readdir(imageDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file)) 
      .map(file => `/${category}/${file}`); 

    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Carpeta no encontrada" }), { status: 404 });
  }
}
