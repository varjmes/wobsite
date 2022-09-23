export const GTM_ID = process.env.GA_CODE
export const pageview = url => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
