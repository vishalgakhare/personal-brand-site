import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repository.endsWith(".github.io");

export default defineConfig({
  site: "https://vishalgakhare.github.io",
  base: repository && !isUserSite ? `/${repository}` : "/",
  output: "static"
});
