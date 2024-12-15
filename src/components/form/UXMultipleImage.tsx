"use client";
import { envConfig } from "@/config/evgConfig";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IImageInput {
  name: string;
  label?: string;
  required?: boolean;
  multiple?: boolean;
}

const UXMultiImageInput = ({
  name,
  label,
  required = true,
  multiple = true,
}: IImageInput) => {
  const { setValue, getValues } = useFormContext();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  useEffect(() => {
    const defaultValues = getValues(name);
    if (defaultValues && Array.isArray(defaultValues)) {
      setUploadedUrls(defaultValues);
    }
  }, [name, getValues]);

  const handleUpload = async (files: FileList | null) => {
    if (!files) return;
    setUploading(true);

    const urls: string[] = [];
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", envConfig.cloudinary_preset!);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${envConfig.cloudinary_cloud}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          urls.push(data.secure_url);
        }
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }

    setUploadedUrls(urls);
    setValue(name, urls);
    setUploading(false);
  };

  return (
    <div className="flex flex-col black py-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type="file"
        id={name}
        accept="image/*"
        multiple={multiple}
        className="rounded-lg text-black bg-gray-300 mt-2 p-2 focus:outline-none"
        required={required}
        disabled={uploading}
        onChange={(e) => handleUpload(e.target.files)}
      />
      {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
      <div className="mt-4">
        {uploadedUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Uploaded ${index + 1}`}
            className="w-20 h-20 object-cover rounded-lg mr-2 inline-block"
            width={20}
            height={20}
          />
        ))}
      </div>
    </div>
  );
};

export default UXMultiImageInput;
