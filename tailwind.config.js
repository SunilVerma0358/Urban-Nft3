/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'LibreFranklin': ['Libre Franklin', 'sans-serif'],
                'Inter': ['Inter', 'sans-serif']
            },
            backgroundImage: {
                'yellowGradiant': ['linear-gradient(152deg, #FFC881 -19.27%, #DA8517 109.91%)'],
                'yellowGradiant2': ['linear-gradient(90deg, rgba(238, 169, 80, 0.27) 2.77%, rgba(238, 169, 80, 0.00) 109.06%)'],
                'buttonYellow': ['linear-gradient(152deg, #FFC881 -19.27%, #DA8517 109.91%)'],
                'HoverButton': ['linear-gradient(152deg, #DA8517 19.27%, #FFC881 109.91%)'],

            },
            boxShadow: {
                'cardShadow': [
                    ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                ],
                'buttonBottom': [' 6px 4px 25px 0px rgba(229, 156, 62, 0.34)'],
                'sidebarShadow': ['1px 4px 34px 0px rgba(255, 255, 255, 0.25)']

            }
        },
    },
    plugins: [],
}