/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HeartFilled,
  FolderAddFilled,
  DeleteFilled,
  EditFilled,
  ContactsFilled,
  // eslint-disable-next-line no-unused-vars
  UploadOutlined,
} from "@ant-design/icons";
import "./Galerie.css";
import { Upload, Button, message } from "antd";
import { useAuth } from "../context/useAuth";

function Gallery() {
  const [images, setImages] = useState([]);
  const { user } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const getImages = async () => {
      try {
        const resOeuvres = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/oeuvres`
        );
        if (resOeuvres.status === 200) {
          setImages(
            resOeuvres.data.map((oeuvre) => ({
              id: oeuvre.id,
              url: oeuvre.image,
              type: oeuvre.type,
              titre: oeuvre.titre,
              res: oeuvre.res,
            }))
          );
        }
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error);
      }
    };
    getImages();
  }, []);

  const handleLike = (imageId) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(imageId, user.id);
  };

  const handleDelete = (imageId) => {
    const delImages = async () => {
      try {
        const token = "YOUR_ACCESS_TOKEN"; // You need to provide your access token here
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": import.meta.env.VITE_BACKEND_URL,
            Authorization: `Bearer ${token}`,
          },
        };

        const resOeuvres = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/oeuvres/${imageId}`,
          config
        );

        if (resOeuvres.status === 204) {
          // Congratulations, delete was successful!
        }
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };

    delImages();
  };

  const handleRightClick = (event) => {
    event.preventDefault();
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading")
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
    },
  };

  return (
    <div className="bg-primary_blue min-h-screen flex flex-col mb-20">
      <div className="flex justify-center items-center py-8">
        <h1 className="text-4xl font-bold text-white">
          <span className="placeholder-title">Galerie</span>
        </h1>
      </div>
      <div className="bg-primary_blue flex justify-center">
        <div className="grid grid-cols-3 gap-12 mr-20">
          {/* eslint-disable */}
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-gray-600 h-64 w-[500px] opacity-100 transition-opacity ease-in-out duration-300 relative"
              onContextMenu={handleRightClick}
            >
              <img
                src={image.url}
                alt="Aquarelle"
                className="object-cover h-full w-full opacity-100 hover:opacity-30"
                onContextMenu={handleRightClick}
              />
              <div className="texthover opacity-0 hover:opacity-90 backdrop-filter backdrop-blur-md transition-opacity ease-in-out duration-300 absolute inset-0 flex items-center justify-center">
                <div className="text grey-600 italic">
                  <p>{image.type}</p>
                  <div className="text grey-600 font-bold">
                    <p>{image.res}</p>
                    <p>{image.ref}</p>
                  </div>
                </div>
              </div>
              <div className="button-container">
                {user.email ? (
                  <button
                    type="button"
                    onClick={() => handleLike(image.id)}
                    className={`like-button ${likes[image.id] ? "liked" : ""}`}
                  >
                    <HeartFilled />
                  </button>
                ) : null}
                {user.admin ? (
                  <>
                    <Upload {...props}>
                      <Button
                        type="button"
                        onClick={() => FolderAddFilled(image.id)}
                        className={`folder-button ${
                          likes[image.id] ? "liked" : ""
                        }`}
                        icon={<FolderAddFilled />}
                      >
                        Ajouter une oeuvre
                      </Button>
                    </Upload>
                    <button
                      type="button"
                      onClick={() => handleDelete(image.id)}
                      className={`delete-button ${
                        likes[image.id] ? "liked" : ""
                      }`}
                    >
                      <DeleteFilled />
                    </button>
                    <button
                      type="button"
                      // eslint-disable-next-line no-undef
                      onClick={() => handleEdit(image.id)}
                      className={`edit-button ${
                        likes[image.id] ? "liked" : ""
                      }`}
                    >
                      <EditFilled />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed -buttons top-4 right-4">
        <button type="button" className="contact-button">
          <ContactsFilled />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
