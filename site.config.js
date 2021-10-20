module.exports = {
  // Basic site information (required)
  name: 'Machine_Learning.with_JC',
  domain: 'Machine_Learning.with_JC',
  url: 'https://twan.dev',
  description: 'Personal blog about life, music, code and more.',
  //fathomCode: 'TBSAIDMS',

  // SEO specific (optional)
  //defaultSocialImage:
    //'https://res.cloudinary.com/twankruiswijk/image/upload/v1624446915/twan-dev-social_zzbzzv.jpg',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jongchan-kim/',
      icon: 'SiLinkedin',
    },
   
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
  ],
};
