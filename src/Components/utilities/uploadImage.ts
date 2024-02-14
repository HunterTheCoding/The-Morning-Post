import axios, { AxiosResponse } from "axios";

interface UploadImageData {
  success: boolean;
  data: {
    url: string;
    // Add any other properties if needed
  };
  error?: {
    message: string;
    // Add any other properties if needed
  };
}

const uploadImage = async (image: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("image", image);

  try {
    const { data }: AxiosResponse<UploadImageData> = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    );

    if (data.success) {
      return data.data.url;
    }

    console.error("Image upload failed:", data.error?.message);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default uploadImage;
