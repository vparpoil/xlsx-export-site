// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "vparpoil";
const projectName = "xlsx-export-site";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'JSON to XLSX',
    tagline: 'By Developpers for Application Builders',
    customFields:{
        subTagline: 'Generate real Excel files with templating for your apps',
    },
    url: `https://www.jsontoxlsx.com`,
    baseUrl: `/`,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: organizationName, // Usually your GitHub org/user name.
    projectName: projectName, // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'JSON to XLSX',
                logo: {
                    alt: 'Json to xlsx Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'overview',
                        position: 'left',
                        label: 'Documentation',
                    },
                    //{to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://api.jsontoxlsx.com',
                        label: 'Sign in',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Overview',
                                to: '/docs/overview',
                            },
                        ],
                    },
                    /*{
                      title: 'Community',
                      items: [
                        {
                          label: 'Stack Overflow',
                          href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                          label: 'Discord',
                          href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                          label: 'Twitter',
                          href: 'https://twitter.com/docusaurus',
                        },
                      ],
                    },*/
                    {
                        title: 'More',
                        items: [
                            /*{
                              label: 'Blog',
                              to: '/blog',
                            },*/
                            {
                                label: 'GitHub',
                                href: 'https://github.com/vparpoil/xlsx-export-site',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} ALLOHOUSTON SAS. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                disableSwitch: true
            }
        }),
};

module.exports = config;
