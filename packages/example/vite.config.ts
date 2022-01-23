import {defineConfig} from "vite"
import Solid          from "solid-start"
import MDX            from "@mdx-js/rollup"

export default defineConfig({
	plugins: [
		{
			...MDX({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx"
			}),
			enforce: "pre"
		},
		Solid({
			extensions: [".mdx"]
		})
	]
});
