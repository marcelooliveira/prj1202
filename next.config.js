const sanityProjectId = process.env.SANITY_PROJECT_ID;
const sanityApiToken = process.env.SANITY_API_TOKEN;
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudinaryUploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

module.exports = {
  distDir: "dist",
  target: "serverless",
  publicRuntimeConfig: {
    cloudinaryCloudName: cloudinaryCloudName,
    cloudinaryUploadPreset: cloudinaryUploadPreset,
    sanityProjectId: sanityProjectId,
    sanityApiToken: sanityApiToken
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}