export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://photokinnes.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.photokinnes.com/',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      }
    ]
  }