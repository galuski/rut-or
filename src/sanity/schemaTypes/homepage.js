export const homepage = {
  name: 'homepage',
  title: 'עריכת דף הבית - הרמוניה של הלב',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'כותרת ראשית (h1)',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'כותרת משנה (h2)',
      type: 'string',
    },
    {
      name: 'thirdTitle',
      title: 'כותרת שלישית (h3)',
      type: 'string',
    },
    {
      name: 'aboutText',
      title: 'טקסט אודות / פתיח',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'תמונת אווירה ראשית',
      type: 'image',
      options: { 
        hotspot: true 
      }
    },
    {
      name: 'sessionLocation',
      title: 'מיקום הסשן הקרוב',
      type: 'string',
    },
    {
      name: 'sessionDate',
      title: 'תאריך הסשן',
      type: 'string',
    },
    {
      name: 'sessionTime',
      title: 'שעת הסשן (למשל: 17:00)',
      type: 'string',
    },
    {
      name: 'sessionPrice',
      title: 'המלצה לתשלום (במספרים)',
      type: 'string',
    },
    {
      name: 'sessionPaymentLink',
      title: 'קישור להרשמה ותשלום',
      type: 'url',
    }
  ]
}