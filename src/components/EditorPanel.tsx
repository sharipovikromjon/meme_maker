"use client";

import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useMemeStore } from "@/store/memeStore";
import UploadImage from "@/components/UploadImage";

const Panel = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 350px;
`;

const EditorPanel = () => {
  const { topText, bottomText, setTopText, setBottomText, setImage } =
    useMemeStore();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Panel>
      <UploadImage handleUpload={handleUpload} />
      <TextField
        label="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        fullWidth
      />
      <TextField
        label="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        fullWidth
      />
    </Panel>
  );
};

export default EditorPanel;
