export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://papayahub.pe',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://papayahub.pe/videos',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://papayahub.pe/cositas',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://papayahub.pe/inicio',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://www.instagram.com/papayahub_pe',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }