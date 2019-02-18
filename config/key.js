module.exports = {
  fnUri: "https://dpl-uc3.azurewebsites.net/api/uc3-file-fn",
  blobAccountName: "wrdm2chetanpackage",
  blobAccountKey:
    "RzsWh+wBvoFHs0NDs7Vbonjx9WAh/aQXvCZPOd0HSPhTfDksGcDMaiaX97LWRbRr0Dr9wtTsoHN0b92H+6LOYQ==",
  connectionStr:
    "DefaultEndpointsProtocol=https;AccountName=wrdm2chetanpackage;AccountKey=RzsWh+wBvoFHs0NDs7Vbonjx9WAh/aQXvCZPOd0HSPhTfDksGcDMaiaX97LWRbRr0Dr9wtTsoHN0b92H+6LOYQ==;EndpointSuffix=core.windows.net",
  containerName:'firmware',
  port: process.env.PORT || 3008
};