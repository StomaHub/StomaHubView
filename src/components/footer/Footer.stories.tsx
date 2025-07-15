// src/components/Footer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  title: "Componentes/Footer",
  component: Footer,
    decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
