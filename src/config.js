const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload5",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://oisuacopt3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Zoq3CYAQR",
    APP_CLIENT_ID: "5nagmdcn9rhaigpkps08jmr3p5",
    IDENTITY_POOL_ID: "us-east-1:e5ff9f28-9db6-4ba9-bc75-93e9ce5c4963",
  },
};

export default config;
