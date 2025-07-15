// src/components/LibaryPost.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import LibaryPost from "./index";

const meta: Meta<typeof LibaryPost> = {
  title: "Componentes/LibaryPost",
  component: LibaryPost,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "450px", margin: "2rem auto" }}>
        <Story />
      </div>
    ),]
};

export default meta;

type Story = StoryObj<typeof LibaryPost>;

export const Default: Story = {
  args: {
    title: "Guia de Estudo React",
    resume: "Aprenda os principais fundamentos do React com exemplos práticos.",
    author: "Cauã Pires",
    date: "15 de julho de 2025",
    iconPath: "/icons/book.svg",
  },
};
