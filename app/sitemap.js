export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://putastrujillo.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.putastrujillo.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://putastrujillo.com/crear-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://www.putastrujillo.com/crear-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://putastrujillo.com/activar-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.putastrujillo.com/activar-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://putastrujillo.com/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://www.putastrujillo.com/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://putastrujillo.com/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://www.putastrujillo.com/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      }
    ]
  }