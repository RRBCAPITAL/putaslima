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
      }
    ]
  }