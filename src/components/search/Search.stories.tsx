// src/components/Search.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Search from "./index";

const meta: Meta<typeof Search> = {
  title: "Componentes/Search",
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "Pesquise aqui",
    comboBox: ["Todos", "Cuidados básicos", "Tutoriais", "Nutrição", "Sinais de alerta"],
  },
};
