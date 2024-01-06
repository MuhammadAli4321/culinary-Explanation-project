import React, { useState } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

const App= () => {
  const [imageUrl, setImageUrl] = useState(null);

  const openUploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dxi6esnys',
        uploadPreset: 'dinnerdash',
        cropping: true,
        croppingAspectRatio: 1,
        croppingShowBackButton: true,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const uploadedImageUrl = result.info.secure_url;
          setImageUrl(uploadedImageUrl);
          console.log('Upload success. Image URL:', uploadedImageUrl);
        } else if (error) {
          console.error('Upload error:', error.message);
        }
      }
    );
  };

  return (
    <div>
      <button onClick={openUploadWidget}>Upload Image</button>

      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <CloudinaryContext cloudName="your_cloudinary_cloud_name">
            <Image publicId={imageUrl} width="300" crop="scale">
              <Transformation width="300" crop="scale" />
            </Image>
          </CloudinaryContext>
        </div>
      )}
    </div>
  );
};

export default App;
