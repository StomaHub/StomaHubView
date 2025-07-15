// src/components/Avaliation.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Avaliation from "./index";


const meta: Meta<typeof Avaliation> = {
  title: "Componentes/Avaliation",
  component: Avaliation,
};

export default meta;

type Story = StoryObj<typeof Avaliation>;

export const Default: Story = {
  args: {
    stars: 4,
    comment: "Excelente conteúdo, me ajudou bastante!",
    userName: "João Silva",
    age: 29,
  },
};
