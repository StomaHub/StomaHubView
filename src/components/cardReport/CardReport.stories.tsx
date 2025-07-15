// src/components/CardReport.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import CardReport from "./index";

const meta: Meta<typeof CardReport> = {
  title: "Componentes/CardReport",
  component: CardReport,
  args: {
    title: "Possível irritação na pele",
    description:
      "Foi observada uma leve vermelhidão ao redor do estoma. Pode ser um sinal de irritação.",
    type: "moderado",
  },
  decorators: [
    (Story) => (
        <div style={{maxWidth: "600px", margin: "2rem auto"}}>
            <Story/>
        </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof CardReport>;

export const Default: Story = {};

export const Grave: Story = {
  args: {
    type: "grave",
  },
};

export const Moderado: Story = {
  args: {
    type: "moderado",
  },
};
