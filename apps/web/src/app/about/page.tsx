"use client";

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <div className="hero bg-base-200 h-auto pb-24 pt-12">
      <div className="hero-content ">
        <div className="max-w-md">
          <h1 className="pb-4 text-7xl font-bold">🧑‍💻</h1>
          <h1 className="pb-4 text-5xl font-bold">Инфа</h1>
          <p className="py-2">
            Это - неофициальное приложение. Оно создано для удобства
            пользователей и не связано напрямую с сообществом и/или структурами
            обслуживания.
          </p>
          <p className="py-2">
            Код приложения распространяется бесплатно и без ограничений.
            Исходный код доступен{" "}
            <a
              className="font-medium text-primary"
              href="https://emojipedia.org/technologist"
            >
              тут
            </a>
            .
          </p>
          <p className="py-2">
            Спасибо{" "}
            <a className="font-medium text-primary" href="https://vercel.com">
              Vercel
            </a>{" "}
            за хостинг и технологии, которые они предоставляют.{" "}
            <a className="font-medium text-primary" href="https://supabase.com">
              Supabase
            </a>{" "}
            - за базу данных.
          </p>
          <p className="py-6 font-medium italic">
            <Typewriter
              options={{
                strings: [
                  "Возвращайся!",
                  "Keep coming back!",
                  "Вяртайся!",
                  "Wróć!",
                  "Ritorno!",
                  "Komm zurück!",
                  "Revenir!",
                  "戻ってくる",
                  "عود",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
