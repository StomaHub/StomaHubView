// src/components/Avaliation.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Avaliation from "./index";


const meta: Meta<typeof Avaliation> = {
  title: "Componentes/Avaliation",
  component: Avaliation,
      decorators: [
    (Story) => (
      <div style={{ width: "450px", margin: "2rem auto"}}>
        <Story />
      </div>
    ),]
  
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
