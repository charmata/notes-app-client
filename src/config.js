const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-8phiikzuwnnd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://aknjk297y9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_upz0k2ziN",
    APP_CLIENT_ID: "1hurli1egc2dj66134n2o1tqvp",
    IDENTITY_POOL_ID: "us-east-1:dcc57410-ce64-44f8-8431-2d898c58ad5d"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ciox068bo7ag"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://lxsdppc6w2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_lle5x2RPx",
    APP_CLIENT_ID: "76bq61r0cp7hj22u7e9s86osa4",
    IDENTITY_POOL_ID: "us-east-1:fd2fa771-2974-41b8-a59e-c35f7ae64384"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
