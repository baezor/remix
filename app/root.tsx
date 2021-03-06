import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useMatches
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/style.css";

export function links() {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Medium.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Matter-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    { rel: "stylesheet", href: styles },
  ];
}
export const meta: MetaFunction = () => {
  return { title: "Angel Romero Baez" };
};

export default function App() {
  const matches = useMatches();
  const includeScripts = matches.some(
    (match) => match.handle?.hydrate
  );
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="light">
        <Outlet />
        {/* include the scripts, or not! */}
        {includeScripts ? <Scripts /> : null}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
