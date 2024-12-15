"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import UXForm from "@/components/form/UXForm";
import { FieldValues } from "react-hook-form";
import UXInput from "@/components/form/UXInput";
import UXImage from "@/components/form/UXImage";

interface VendorProfile {
  name: string;
  image: string;
  description: string;
  email: string;
  contactNumber: string;
  address: string;
}

export default function VendorProfilePage() {
  const [profile, setProfile] = useState<VendorProfile>({
    name: "",
    image: "",
    description: "",
    email: "",
    contactNumber: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const mockProfile: VendorProfile = {
      name: "Awesome Shop",
      image: "/placeholder.svg",
      description: "We sell the best products in town!",
      email: "contact@awesomeshop.com",
      contactNumber: "(123) 456-7890",
      address: "123 Main St, Anytown, USA",
    };
    setProfile(mockProfile);
  }, []);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vendor Profile</h1>
      {isEditing ? (
        <UXForm onSubmit={onSubmit} defaultValues={profile}>
          <div>
            <UXInput
              type="text"
              name="name"
              label="Name"
              placeholder="john doe"
            />
          </div>
          <div>
            <UXImage name="image" label="Logo" />
          </div>
          <div>
            <UXInput
              type="text"
              name="description"
              label="Description"
              placeholder=""
            />
          </div>
          <div>
            <UXInput
              type="email"
              name="email"
              label="Email"
              placeholder="john@doe"
            />
          </div>
          <div>
            <UXInput
              type="number"
              name="contactNumber"
              label="Phone"
              placeholder="01xxxxxxx"
            />
          </div>
          <div>
            <UXInput
              type="text"
              name="address"
              label="Addreess"
              placeholder="2/A"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </UXForm>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Shop Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and contact information for your shop.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Shop name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {profile.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Logo</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {profile.description}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {profile.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {profile.contactNumber}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {profile.address}
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
