/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // 'container' : 'auto 1fr auto',
      },
      maxWidth: {
        'container': '1178px',
        '': '',
      },
      margin: {
        'container': '0 auto',
        'table': '56px',
      },
      gridTemplateColumns: {
        'table': '',

      },
      padding: {
        'container': '56px',
      },
      borderColor: {
        'worker': '#14B8A6',
        'progress': '#000',
      },
      borderRadius: {
        '9': '9px',
        '200': '200px',
        '7': '7px',
      },
      fontSize: {
        'worker': '20px',
        'dropdown': '17px',
      },
      textColor: {
        'title': '#14B8A6',
        'search': '#D9D9D9',
        'columnHead': '#5C5C5C',
      },
      width: {
        '290': '290px',
        '425': '425px',
        '1178': '1178px',
        '257': '257px',
        '456': '456px',
        '': '',
      },
      height: {
        '59': '59px',
        '68': '68px',
        '552': '552px',
        '152': '152px',
        '121': '121px',
      },
      spacing : {
        '42': '42px',
        
      }

    },
  },
  plugins: [],
}
