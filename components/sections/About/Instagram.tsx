"use client";

import { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";

import { container, subtitle } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";

export const Instagram = () => {
  const feedRef = useRef<HTMLDivElement>(null);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

    if (!userId || !accessToken) {
      // eslint-disable-next-line no-console
      console.error("INSTAGRAM_USER_ID or ACCESS_TOKEN is required on .env");

      return;
    }

    if (feedRef.current) {
      feedRef.current.innerHTML = "";
    }

    const feed = new Instafeed({
      accessToken,
      target: feedRef.current!,
      template: `
       <a href="{{link}}" target="_blank" class="block">
         <img src="{{image}}" alt="{{caption}}" class="w-full h-auto shadow-md"/>
       </a>
     `,
      limit: 4,
    });

    feed.run();
  }, []);

  return (
    <section>
      <div className={container()}>
        <p
          className={subtitle({
            className: "text-center text-default-700 mb-6",
          })}
        >
          {strings.about.instagram.title}
        </p>
        <div ref={feedRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3" />
      </div>
    </section>
  );
};
