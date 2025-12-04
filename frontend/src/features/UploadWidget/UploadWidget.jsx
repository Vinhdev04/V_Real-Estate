import { useEffect, useRef, useState } from "react";

const UploadWidget = ({ uwConfig, setAvatar }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        // Create upload widget
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (error) {
              console.error("❌ Upload error:", error);
              setIsLoading(false);
              return;
            }

            if (result && result.event === "success") {
              console.log("✅ Upload successful:", result.info);
              setAvatar(result.info.secure_url);
              setIsLoading(false);
            }

            if (result && result.event === "close") {
              setIsLoading(false);
            }
          }
        );

        // Add click event to open widget
        const handleUploadClick = (e) => {
          e.preventDefault(); // Ngăn submit form
          if (uploadWidgetRef.current) {
            setIsLoading(true);
            uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener("click", handleUploadClick);

        // Cleanup
        return () => {
          buttonElement.removeEventListener("click", handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setAvatar]);

  return (
    <button
      ref={uploadButtonRef}
      type="button"
      className="cloudinary-button"
      disabled={isLoading}
    >
      {isLoading ? "Đang tải..." : "Upload"}
    </button>
  );
};

export default UploadWidget;
