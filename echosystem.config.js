module.exports = {
    apps: [
      {
        name: "online-test-platform",               
        script: "src/App.js",          
        instances: 1,                  
        autorestart: true,          
        max_memory_restart: "1G",      
        env: {
          NODE_ENV: "development",    
        },
        env_production: {
          NODE_ENV: "production",     
        },
      },
    ],
  };