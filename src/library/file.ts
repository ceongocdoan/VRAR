import axios from "axios";

export async function uploadFile(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("files", file);

  try {
    const response = await axios.post(
      `${process.env.GATSBY_API_URL}/api/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`,
        },
      }
    );

    const url = response.data[0]?.url && `${process.env.GATSBY_API_URL}${response.data[0]?.url}`
    return url || null;
  } catch (error) {
    console.error("Error uploading CV:", error);
    return null;
  }
}