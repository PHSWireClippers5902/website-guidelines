import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Website Documentation',
			social: {
				github: 'https://github.com/PHSWireClippers5902',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'WordPress', link: '/guides/wordpress/' },
						{ label: 'Colors', link: '/guides/colors/' },
						{ label: 'Writing', link: '/guides/writing/' },
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
