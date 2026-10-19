"use strict";

const CACHE_NAME = "bereg-app-shell-v15";
const APP_SHELL = [
  "./",
  "./index.html",
  "./CSS/style.css",
  "./JS/app.js",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async path => {
      try {
        const response = await fetch(new Request(path, { cache: "reload" }));
        if (response.ok) await cache.put(path, response);
      } catch (error) {
        console.warn("БЕРЕГ: не удалось сохранить файл для офлайн-режима", path, error);
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("bereg-app-shell-") && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname.toLowerCase();
  const shouldPreferNetwork = request.mode === "navigate" ||
    path.endsWith(".html") || path.endsWith(".js") || path.endsWith(".css") ||
    path.endsWith("/sw.js");

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    if (shouldPreferNetwork) {
      try {
        const response = await fetch(request, { cache: "no-cache" });
        if (response.ok) {
          const cleanUrl = new URL(request.url);
          cleanUrl.search = "";
          await cache.put(cleanUrl.href, response.clone());
          if (request.mode === "navigate" || path.endsWith(".html")) {
            await cache.put("./index.html", response.clone());
          } else if (path.endsWith(".js") && path.endsWith("/app.js")) {
            await cache.put("./JS/app.js", response.clone());
          } else if (path.endsWith(".css")) {
            await cache.put("./CSS/style.css", response.clone());
          }
        }
        return response;
      } catch (error) {
        const cached = await cache.match(request, { ignoreSearch: true });
        if (cached) return cached;
        if (request.mode === "navigate") {
          const fallback = await cache.match("./index.html");
          if (fallback) return fallback;
        }
        return new Response("", { status: 503, statusText: "Offline asset unavailable" });
      }
    }

    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      return new Response("", { status: 503, statusText: "Offline asset unavailable" });
    }
  })());
});
