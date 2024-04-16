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
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'More Links',
					items: [
						// Add more links by copying and pasting! Make sure not to forget the comma...
						{ label: 'Github', link: 'https://github.com/PHSWireClippers5902'},
						{ label: 'Our Website', link: 'https://wireclippers.org'},
						{ label: 'Instagram', link: 'https://instagram.com/phs_wire_clippers'},
					]
				},
			],
		}),
	],
});
