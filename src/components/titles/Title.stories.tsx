// src/components/Title.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "Componentes/Title",
  component: Title,
  decorators: [
    (Story) => (
      <div style={{margin: "2rem auto"}}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: "Bem-vindo à plataforma",
    description: "Aqui você acompanha suas entradas diárias e evolução com conforto e praticidade.",
  },
};

export const ApenasTitulo: Story = {
  args: {
    title: "Título sem descrição",
  },
};
