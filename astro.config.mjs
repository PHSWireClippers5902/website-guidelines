import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Documentation',
    logo: {
      src: './src/assets/emblem.png',},
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/PHSWireClippers5902' }
    ],
    customCss: [
      // Relative path to your custom CSS file
      './src/tailwind.css',
    ],
    sidebar: [
      {
        label: 'Swerve',
        autogenerate: {
          directory: 'swerve'
        }
      }, 
      {
        label: 'Coding',
        autogenerate: {
          directory: 'coding'
        }
      }, 
      {
      label: 'Website',
      autogenerate: {
        directory: 'website'
      }
    }, {
      label: 'Communications',
      autogenerate: {
        directory: 'communications'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'More Links',
      items: [
      // Add more links by copying and pasting! Make sure not to forget the comma...
      {
        label: 'Github',
        link: 'https://github.com/PHSWireClippers5902'
      }, {
        label: 'Our Website',
        link: 'https://wireclippers.org'
      }, {
        label: 'Instagram',
        link: 'https://instagram.com/phs_wire_clippers'
      }]
    }]
  }),]
});