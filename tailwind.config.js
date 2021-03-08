const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("@tailwindcss/typography")],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
    options: {
      safelist: [
        "bg-green-200",
        "bg-pink-200",
        "bg-blue-200",
        "bg-red-200",
        "bg-yellow-200",
        "bg-indigo-200",
        "bg-purple-200",
      ],
    },
  },
};
