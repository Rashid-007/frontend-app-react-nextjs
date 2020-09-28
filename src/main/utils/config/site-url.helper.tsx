function getSiteUrl() {
    const protocol = process.env.WEBSITE_HOST_HTTPS === `true` ? `https` : `http`;
    const host = process.env.WEBSITE_HOST;
    const port =
      process.env.WEBSITE_HOST_HTTPS === `true` && Number(process.env.WEBSITE_HOST_PORT) !== 443
        ? `:${Number(process.env.WEBSITE_HOST_PORT)}`
        : process.env.WEBSITE_HOST_HTTPS !== `true` && Number(process.env.WEBSITE_HOST_PORT) !== 80
        ? `:${Number(process.env.WEBSITE_HOST_PORT)}`
        : ``;
  
    const siteUrl = `${protocol}://${host}${port}`;
  
    return siteUrl;
  }
  
  export { getSiteUrl };
  