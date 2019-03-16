export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-p4msbpsskxkp"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://t5degvrk54.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_jqNiV0fGH",
    APP_CLIENT_ID: "6akgqilqttk7e7ufcm1jr17h2v",
    IDENTITY_POOL_ID: "us-east-2:8e38b278-00b6-45e4-9ae5-51219ab44ba4"
  }
};