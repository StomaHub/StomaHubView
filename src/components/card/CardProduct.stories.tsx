import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "320px", margin: "2rem auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    img: "/bolsa.webp",
    imgDescription: "Bolsa coletora premium",
    title: "Bolsa coletora convexa premium",
    place: "OstomyMed",
    description: "Bolsa de alta qualidade com sistema anti-vazamento e conforto superior.",
    price: "R$ 45,00",
    buttonTitle: "Comprar",
  },
};
