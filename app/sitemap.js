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
        url: 'https://putastrujillo.com/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://putastrujillo.com/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.5,
      }
    ]
  }