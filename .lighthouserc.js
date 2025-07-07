module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:5500/',
        'http://127.0.0.1:5500/about.html',
        'http://127.0.0.1:5500/404.html',
      ],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
