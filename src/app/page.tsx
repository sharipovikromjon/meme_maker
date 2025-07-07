"use client";

import EditorPanel from "@/components/EditorPanel";
import ExportButton from "@/components/ExportButton";
import MemeCanvas from "@/components/MemeCanvas";
import styled from "@emotion/styled";

const Container = styled("main")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Container>
      <EditorPanel />
      <div>
        <MemeCanvas />
        <ExportButton />
      </div>
    </Container>
  );
}
