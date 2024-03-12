import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  presets: [
    presetUno({ dark: 'media' }),
    presetTypography(),
    presetIcons({ scale: 1.3 }),
  ],
  extendTheme: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (theme: Record<string, any>) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      theme.fontFamily.sans = `"SN Pro",${theme.fontFamily.sans}`
    },
  ],
  preflights: [
    {
      getCSS() {
        return `
        @media (prefers-color-scheme: dark) {
          html {
            color-scheme: dark;
          }
        }
        
        @media screen and (min-width: 1150px) {
          html {
            background-size: 30px 30px;
            background-image: radial-gradient(
              circle,
              #d4d4d4 1px,
              rgba(0, 0, 0, 0) 1px
            );
          }
        
          @media (prefers-color-scheme: dark) {
            html {
              background-size: 30px 30px;
              background-image: radial-gradient(
                circle,
                #262626 1px,
                rgba(0, 0, 0, 0) 1px
              );
            }
          }
        }
        
        @media (prefers-color-scheme: dark) {
          .shiki,
          .shiki span {
            color: var(--shiki-dark) !important;
            background-color: var(--shiki-dark-bg) !important;
            /* Optional, if you also want font styles */
            font-style: var(--shiki-dark-font-style) !important;
            font-weight: var(--shiki-dark-font-weight) !important;
            text-decoration: var(--shiki-dark-text-decoration) !important;
          }
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Bold.otf");
          font-weight: 700;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-BoldItalic.otf");
          font-weight: 700;
          font-style: italic;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Semibold.otf");
          font-weight: 600;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-SemiboldItalic.otf");
          font-weight: 600;
          font-style: italic;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Medium.otf");
          font-weight: 500;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-MediumItalic.otf");
          font-weight: 500;
          font-style: italic;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Regular.otf");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-RegularItalic.otf");
          font-weight: 400;
          font-style: italic;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Light.otf");
          font-weight: 300;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-LightItalic.otf");
          font-weight: 300;
          font-style: italic;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-Thin.otf");
          font-weight: 100;
          font-style: normal;
        }
        
        @font-face {
          font-family: "SN Pro";
          src: url("/fonts/SNPro-ThinItalic.otf");
          font-weight: 100;
          font-style: italic;
        }        
      `
      },
    },
  ],
})
