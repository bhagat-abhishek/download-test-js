const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the file
const fileUrl = 'https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC74d1e6670b3a7682845dc75cc1bab147/4a459ddaed0f2b49ef4641515d241d13';

// Path where the file will be saved
const filePath = path.join(__dirname, 'file.ogg');

// Function to download the file
https.get(fileUrl, (response) => {
    if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Download completed successfully.');
        });
    } else {
        console.log(`Failed to download file. Status Code: ${response.statusCode}`);
    }
}).on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
